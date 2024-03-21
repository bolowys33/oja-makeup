import { getFirestore } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import cors from "cors";

import {
    collection,
    where,
    limit,
    getDocs,
    updateDoc,
    doc,
} from "firebase/firestore";
import Stripe from "stripe";

const db = getFirestore();
const STRIPE_SECRET_KEY = functions.config().stripe.secret_key;
const STRIPE_WEBHOOK_SECRET = functions.config().stripe.webhook_key;

const stripe = new Stripe(STRIPE_SECRET_KEY);

const endpointSecret = STRIPE_WEBHOOK_SECRET;

// Enable CORS using the cors middleware
const corsHandler = cors({ origin: true });

export const handleStripeWebhook = functions.https.onRequest(
    async (req, res) => {
        corsHandler(req, res, async () => {
            const sign = req.headers["stripe-signature"];

            let event;

            try {
                event = stripe.webhooks.constructEvent(
                    req.rawBody,
                    sign,
                    endpointSecret
                );
            } catch (err) {
                console.error(err.message);
                return res.status(400).send(`Webhook Error: ${err.message}`);
            }

            switch (event.type) {
                case "checkout.session.completed":
                    const sessionId = event.data.object.id;
                    const orderId = await updateOrderStatus(
                        sessionId,
                        "success"
                    );
                    console.log(`Order ${orderId} status updated to success.`);
                    // store.dispatch(clearAll());
                    break;
                case "checkout.session.async_payment_failed":
                    const failedSessionId = event.data.object.id;
                    const failedOrderId = await updateOrderStatus(
                        failedSessionId,
                        "failed"
                    );
                    console.log(
                        `Order ${failedOrderId} status updated to failed.`
                    );
                    break;
                default:
                    console.log(`Unhandled event type ${event.type}`);
            }

            res.status(200).end();
        });
    }
);

async function updateOrderStatus(sessionId, status) {
    const querySnapshot = await getDocs(
        collection(db, "orders"),
        where("sessionId", "==", sessionId),
        limit(1)
    );

    if (querySnapshot.empty) {
        console.error(`No order found with sessionId ${sessionId}`);
        return null;
    }

    const orderDoc = querySnapshot.docs[0];
    await updateDoc(doc(db, "orders", orderDoc.id), { status });
    return orderDoc.id;
}

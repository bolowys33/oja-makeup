import { getFirestore } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import cors from "cors";
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
                    functions.logger.debug(
                        `Order ${orderId} status updated to success.`
                    );
                    break;
                case "checkout.session.async_payment_failed":
                    const failedSessionId = event.data.object.id;
                    const failedOrderId = await updateOrderStatus(
                        failedSessionId,
                        "failed"
                    );

                    functions.logger.debug(
                        `Order ${failedOrderId} status updated to failed.`
                    );
                    break;
                case "checkout.session.expired":
                    const failedSession = event.data.object.id;
                    const failedOrder = await updateOrderStatus(
                        failedSession,
                        "failed"
                    );
                    functions.logger.debug(
                        `Order ${failedOrder} status updated to failed.`
                    );
                    break;
                default:
                    functions.logger.debug(
                        `Unhandled event type ${event.type}`
                    );
            }
            functions.logger.debug(`Updated successfully`);
            res.status(200).json({success: true, message: `Updated successfully`});
        });
    }
);

async function updateOrderStatus(sessionId, status) {
    try {
        const querySnapshot = await db
            .collection("orders")
            .where("sessionId", "==", sessionId)
            .limit(1)
            .get();
        if (querySnapshot.empty) {
            console.error(`No order found with sessionId ${sessionId}`);
            return null;
        }

        const orderDoc = querySnapshot.docs[0];
        const orderRef = db.doc(`orders/${orderDoc.id}`);
        await orderRef.update({ status });
        return orderDoc.id;
    } catch (error) {
        console.error("Error updating order status:", error);
        return null;
    }
}

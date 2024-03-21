import * as functions from "firebase-functions";
import cors from "cors";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import Stripe from "stripe";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";



// Initialize Firebase Admin SDK (automatic initialization)
// No need to call admin.initializeApp() manually
initializeApp();
const db = getFirestore();

const corsHandler = cors({ origin: true });

const createCheckoutSession = functions.https.onRequest(async (req, res) => {
    corsHandler(req, res, async () => {
        if (req.method !== "POST") {
            res.status(405).send("Method Not Allowed");
            return;
        }
        const STRIPE_SECRET_KEY = functions.config().stripe.secret_key;
        const idToken = req.headers.authorization;
        
        functions.logger.debug('Value of STRIPE_SECRET_KEY:', STRIPE_SECRET_KEY);
        functions.logger.debug('Value of idToken:', idToken);
        

        try {

            const { items, userId, totalAmount } = req.body;

            console.log(STRIPE_SECRET_KEY);

            // Create line items from the cart items
            const lineItems = items.map((item) => ({
                price_data: {
                    currency: "NGN",
                    product_data: {
                        name: item.name,
                        images: [item.image],
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            }));

            // Create a Stripe checkout session
            const stripeClient = new Stripe(STRIPE_SECRET_KEY);
            functions.logger.debug("got here 1st")
            // const session = await stripeClient.checkout.sessions.create({
            //     line_items: lineItems,
            //     mode: "payment",
            //     success_url: `${req.protocol}://${req.get("host")}/orders/success`,
            //     cancel_url: `${req.protocol}://${req.get("host")}/orders/failed`,
            //     shipping_address_collection: {
            //         allowed_countries: ["NG"],
            //     },
            // });

            // functions.logger.debug("got here")

            // // Store the order details in Firestore
            // const orderRef = await addDoc(collection(db, "orders", userId), {
            //     userId,
            //     items,
            //     status: "pending",
            //     totalAmount,
            //     createdAt: serverTimestamp(),
            //     sessionId: session.id,
            // });
            // functions.logger.debug("got here 222")
            // res.status(200).json({ id: session.id, orderId: orderRef.id });

            res.status(200).json({success: true})
        } catch (error) {
            console.error("Error creating checkout session:", error);
            res.status(500).send("Error creating checkout session");
        }
    });
});

export { createCheckoutSession };

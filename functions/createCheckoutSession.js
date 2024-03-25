import * as functions from "firebase-functions";
import cors from "cors";
import Stripe from "stripe";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";

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

        try {
            const { items, userId, totalAmount } = req.body;

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

            const session = await stripeClient.checkout.sessions.create({
                line_items: lineItems,
                mode: "payment",
                success_url: "https://oja-makeup.vercel.app/success",
                cancel_url: "https://oja-makeup.vercel.app/failed",
                shipping_address_collection: {
                    allowed_countries: ["NG"],
                },
                expires_at: Math.floor(Date.now() / 1000) + (30 * 60)
            });

            // Store the order details in Firestore
            const orderCollectionRef = db.collection("orders");
            const order = await orderCollectionRef.add({
                userId,
                items,
                status: "pending",
                totalAmount,
                createdAt: new Date(Date.now()).toISOString().split('T')[0],
                sessionId: session.id,
                orderRef: Date.now()
            });

            res.status(200).json({
                success: true,
                data: { id: session.id, orderId: order.id },
                message: "Session created",
            });
        } catch (error) {
            functions.logger.error("Error creating checkout session:", error);
            res.status(500).json({
                success: false,
                message: "Error creating checkout session",
            });
        }
    });
});

export { createCheckoutSession };

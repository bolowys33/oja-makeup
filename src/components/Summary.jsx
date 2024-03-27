import { useSelector } from "react-redux";
import app from "../firebase/auth.mjs";
import { loadStripe } from "@stripe/stripe-js";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const Summary = () => {
    const navigate = useNavigate();

    const [openDialog, setOpenDialog] = useState(false);
    const [isloading, setIsLoading] = useState(false);

    const { items, total } = useSelector((state) => state.cart);
    const totalUnit = items.reduce((acc, item) => acc + item.quantity, 0);

    const auth = getAuth(app);

    let userId;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                userId = user.uid;
            }
        });

        return () => unsubscribe();
    });

    // Initialize Stripe
    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

    const handleCheckout = async () => {
        if (total < 1000) {
            toast.error(`Minimum amount to checkout is #1000`);
        }

        if (!userId) {
            setOpenDialog(true);
            return;
        }
        setIsLoading(true);
        try {
            // Make an HTTP POST request to the Cloud Function endpoint using Axios
            const response = await axios.post(
                "https://us-central1-oja-dev.cloudfunctions.net/createCheckoutSession",
                {
                    items,
                    userId,
                    totalAmount: total,
                }
            );

            const data = response.data.data;

            // Redirect the user to the Stripe checkout page
            const stripe = await stripePromise;
            const result = await stripe.redirectToCheckout({
                sessionId: data.id,
            });

            if (result.error) {
                toast.error("Error redirecting to checkout");
            }
        } catch (error) {
            console.error("Error handling checkout:", error);
            toast.error("Error handling checkout");
        }
    };

    const handleGuestCheckout = async () => {
        setIsLoading(true);
        try {
            // Make an HTTP POST request to the Cloud Function endpoint using Axios
            const response = await axios.post(
                "https://us-central1-oja-dev.cloudfunctions.net/createCheckoutSession",
                {
                    items,
                    totalAmount: total,
                }
            );

            const data = response.data.data;

            // Redirect the user to the Stripe checkout page
            const stripe = await stripePromise;
            const result = await stripe.redirectToCheckout({
                sessionId: data.id,
            });

            if (result.error) {
                toast.error("Error redirecting to checkout");
            }

            setOpenDialog(false);
        } catch (error) {
            console.error("Error handling checkout:", error);
            toast.error("Error handling checkout");
            setOpenDialog(false);
        }
    };

    const handleCancel = () => {
        setOpenDialog(false);
    };

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md pt-6 pb-8 px-4 space-y-4 mb-4">
            <h3 className="text-2xl font-bold">Summary</h3>
            <p className="flex justify-between font-bold">
                <span>No. of items</span> <span>{items.length}</span>
            </p>
            <p className="flex justify-between font-bold">
                <span>No. of unit</span> <span>{totalUnit}</span>
            </p>
            <p className="flex justify-between font-bold">
                <span>Total</span> <span>&#8358; {total}</span>
            </p>
            <button
                onClick={handleCheckout}
                className="rounded-full text-sm font-bold font-krona uppercase bg-yellow py-3 px-10 justify-self-center shadow-lg hover:bg-dark-yellow">
                {isloading ? `Loading...` : `Checkout (${items.length})`}
            </button>
            {total < 1000 && (
                <p className="text-red-600 text-center font-bold">
                    Minimum amount to checkout: &#8358; 1000
                </p>
            )}
            <Dialog
                open={openDialog}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to checkout as guest?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleGuestCheckout} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Summary;

import { useState } from "react";
import app from "../firebase/auth.mjs";
import { getFirestore, getDoc, doc } from "@firebase/firestore";

const db = getFirestore(app);

function useSingleOrder() {
    const [order, setOrder] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getOrder = async (orderId) => {
        setIsLoading(true);

        const orderRef = doc(db, "orders", orderId);
        try {
            const orderSnapshot = await getDoc(orderRef);

            setOrder({
                id: orderSnapshot.id,
                ...orderSnapshot.data(),
            });
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching orders:", error);
            setIsLoading(false);
        }
    };
    return { order, getOrder, isLoading };
}

export default useSingleOrder;

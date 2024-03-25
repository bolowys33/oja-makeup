import { useState } from "react";
import app from "../firebase/auth.mjs";
import {
    getFirestore,
    getDocs,
    query,
    collection,
    where,
    orderBy,
} from "@firebase/firestore";


const db = getFirestore(app);

function useOrders() {
    const [orders, setOrders] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    
    const getOrders = async (userId, order) => {
        setIsLoading(true);
        
        const ordersRef = collection(db, "orders");
        const ordersQuery = query(
            ordersRef,
            where("userId", "==", userId),
            orderBy('orderRef', order)
        );
        
        try {
            const querySnapshot = await getDocs(ordersQuery);
            const ordersData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setOrders(ordersData);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching orders:", error);
            setIsLoading(false);
        }
    };
    return { orders, getOrders, isLoading };
}

export default useOrders;

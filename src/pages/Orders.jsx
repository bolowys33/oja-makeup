import { Container } from "@mui/material";
import OrderItem from "../components/OrderItem";
import useOrders from "../hooks/useOrders";
import { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import app from "../firebase/auth.mjs";
import { ScaleLoader } from "react-spinners";
import EmptyOrder from "../components/EmptyOrder";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const auth = getAuth(app);

const Orders = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const [orderBy, setOrderBy] = useState("desc");

    const { orders, isLoading, getOrders } = useOrders();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    await getOrders(user.uid, orderBy);
                } catch (error) {
                    console.error("Error fetching orders:", error);
                }
            }
        });
        return () => unsubscribe();
    }, [orderBy]);

    const handleLatest = async () => {
        setOrderBy("desc");
    };

    const handleEarliest = async () => {
        setOrderBy("asc");
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-[500px]">
                <ScaleLoader
                    color="rgb(255,201,75)"
                    margin={7}
                    radius={6}
                    width={10}
                    height={100}
                />
            </div>
        );
    }

    return (
        <div className="">
            {orders?.length === 0 ? (
                <div className="bg-light-grey ">
                    <EmptyOrder />
                </div>
            ) : (
                <div className="mt-16 md:mt-14 py-6">
                    <Container
                        maxWidth="lg"
                        className=" bg-light-grey shadow-xl rounded-md py-8 min-h-screen">
                        <h3 className="text-2xl font-bold text-center text-dark-yellow mb-4">
                            My Orders
                        </h3>
                        <div className="flex flex-col">
                            <div className="self-end mb-4">
                                <span className="mr-2 font-bold">Sort by:</span>
                                <button
                                    onClick={handleLatest}
                                    className="hover:text-dark-yellow">
                                    Latest
                                    <ArrowDownward />{" "}
                                </button>
                                <button
                                    onClick={handleEarliest}
                                    className="ml-4 hover:text-dark-yellow">
                                    Earliest
                                    <ArrowUpward />{" "}
                                </button>
                            </div>
                            {orders?.map((order) => (
                                <OrderItem order={order} key={order.id} />
                            ))}
                        </div>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default Orders;

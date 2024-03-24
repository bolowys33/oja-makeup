import { useParams } from "react-router-dom";
import useSingleOrder from "../hooks/useSIngleOrder";
import { useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import { Container } from "@mui/material";

const OrderDetails = () => {
    const { id } = useParams();
    const { order, getOrder, isLoading } = useSingleOrder();

    useEffect(() => {
        getOrder(id);
    }, []);

    return (
        <div className="mt-16 md:mt-14 py-6 min-h-screen bg-light-grey">
            {isLoading ? (
                <div className="flex items-center justify-center h-[500px]">
                    <ScaleLoader
                        color="rgb(255,201,75)"
                        margin={7}
                        radius={6}
                        width={10}
                        height={100}
                    />
                </div>
            ) : (
                <div>
                    <Container
                        maxWidth="sm"
                        className="bg-white shadow-xl shadow-light-grey rounded-md py-8">
                        <h3 className="text-2xl font-bold text-center text-dark-yellow mb-4">
                            Order Details
                        </h3>
                        <div>
                            <div className="bg-yellow p-1 rounded-md">
                                <p className="font-bold">Order Information</p>
                            </div>
                            <div className="text-sm font-semibold m-2 flex justify-between">
                                <div>
                                    <p>Order Id</p>
                                    <p className="font-normal">{order?.id}</p>
                                </div>
                                <div>
                                    <p>Order Date</p>
                                    <p className="font-normal">
                                        {order?.createdAt}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-yellow p-1 rounded-md">
                                <p className="font-bold">Products Ordered</p>
                            </div>
                            <div className="text-sm">
                                {order?.items.map((item) => (
                                    <div className="m-2 border-b-2 py-2" key={item.id}>
                                        <div className="flex justify-between">
                                            <p className="font-semibold w-1/3">{item.name}</p>
                                            <p className="font-normal">&#8358; {item.price}</p>
                                            <p className="font-normal">{item.quantity} {item.quantity == 1 ? 'unit' : 'units' }</p>
                                        </div>
                                        <img src={item.image} alt="" width={100} className="mx-auto my-2" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="bg-yellow p-1 rounded-md">
                                <p className="font-bold">Payment Information</p>
                            </div>
                            <div className="text-sm font-semibold m-2 flex justify-between">
                                <div>
                                    <p>Payment Status</p>
                                    <p className="font-normal">
                                        {order?.status}
                                    </p>
                                </div>
                                <div>
                                    <p>Total Amount</p>
                                    <p className="font-normal text-end">
                                       &#8358; {order?.totalAmount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;

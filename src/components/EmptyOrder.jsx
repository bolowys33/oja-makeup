import { useNavigate } from "react-router-dom";
import order from '../assets/emptyorder.png'

const EmptyOrder = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products`);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="inset-0 flex items-center justify-center bg-slate-100">
                <div
                    className="bg-white p-6 rounded-lg text-center shadow-lg">
                    <img
                        src={order}
                        alt="Empty Order"
                        style={{
                            display: "block",
                            margin: "0 auto",
                            width: "80px",
                        }}
                    />
                    <h1 className="text-lg font-semibold font-krona ">
                        Your have no order
                    </h1>
                    <p className="text-gray-400 text-sm ">
                        Checkout your cart to place order.
                    </p>
                    <button
                        onClick={handleClick}
                        className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-400 mt-4 uppercase">
                        Start Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmptyOrder;

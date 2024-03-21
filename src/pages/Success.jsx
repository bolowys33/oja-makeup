import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import success from '../assets/success.gif';

const Success = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10); 

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(timer);
            navigate('/orders'); 
        }

        return () => clearInterval(timer);
    }, [countdown, navigate]);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="inset-0 flex items-center justify-center bg-slate-100">
                <div
                    className="bg-white p-6 rounded-lg text-center shadow-lg">
                    <img
                        src={success}
                        alt="Success"
                        style={{
                            display: "block",
                            margin: "0 auto",
                            width: "80px",
                        }}
                    />
                    <h1 className="text-lg font-semibold font-krona my-4 ">
                        Your order is successful.
                    </h1>
                    <p className="text-gray-400 text-lg">
                        You will be redirected to your orders page in {countdown} seconds.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Success;

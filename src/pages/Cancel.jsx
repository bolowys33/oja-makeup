import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cancel from '../assets/cancel.png';

const Cancel = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10); // Initial countdown value

    useEffect(() => {
        // Decrease countdown every second
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Redirect user when countdown reaches 0
        if (countdown === 0) {
            clearInterval(timer);
            navigate('/cart'); // Redirect to home page
        }

        // Cleanup timer on component unmount
        return () => clearInterval(timer);
    }, [countdown, navigate]);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="inset-0 flex items-center justify-center bg-slate-100">
                <div
                    className="bg-white p-6 rounded-lg text-center shadow-lg">
                    <img
                        src={cancel}
                        alt="Failed"
                        style={{
                            display: "block",
                            margin: "0 auto",
                            width: "80px",
                        }}
                    />
                    <h1 className="text-lg font-semibold font-krona my-4">
                        Payment Cancelled / Failed
                    </h1>
                    <p className="text-gray-400 text-lg ">
                        You will be redirected to your cart in {countdown} seconds.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cancel;

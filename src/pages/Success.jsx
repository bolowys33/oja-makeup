import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import success from "../assets/success.gif";
import { useDispatch } from "react-redux";
import { clearAll } from "../redux/cartSlice";
import { getAuth } from "firebase/auth";
import app from "../firebase/auth.mjs";

const Success = () => {
    const auth = getAuth(app)

    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);
    const [user, setUser] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearAll());
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
            }
        });

        return () => unsubscribe();
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(timer);
            if(!user){
                navigate('/')
                return
            }
            navigate('/orders')
        }

        return () => clearInterval(timer);
    }, [countdown, navigate]);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="inset-0 flex items-center justify-center bg-slate-100">
                <div className="bg-white p-6 rounded-lg text-center shadow-lg">
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
                        {`You will be redirected to your ${user ? 'orders' : 'home'} page in
                        ${countdown} seconds.`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Success;

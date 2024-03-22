import React, { useState } from "react";
import app from "../firebase/auth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Box, Container } from "@mui/material";
import InputField from "../components/TextField";
import { getErrorMessage } from "../constants/error";
import Notification from "../components/Notification";

const ForgotPassword = () => {
    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleRecoverPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await sendPasswordResetEmail(auth, email);
            setEmailSent(true);
            setIsLoading(false);
        } catch (error) {
            setError(getErrorMessage(error.code));
            setIsLoading(false);
        }
    };

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (emailSent) {
        return (
            <Notification
                title={"Recover your password"}
                action={"password reset"}
            />
        );
    }

    return (
        <div className="mt-16 md:mt-14 py-6 h-screen">
            <Container maxWidth="xs" className="shadow-xl rounded-md pb-5">
                <Box mt={4}>
                    <h3 className="text-2xl font-bold text-center text-dark-yellow">
                        Recover your password
                    </h3>
                    <p className="text-center py-4 text-red-700">{error}</p>
                    <form
                        onSubmit={handleRecoverPassword}
                        className="flex flex-col ">
                        <InputField
                            label={"Email Address"}
                            value={email}
                            type="email"
                            onchange={(e) => setEmail(e.target.value.trim())}
                        />
                        <button
                            className={`self-center p-2 mt-6 w-2/3  text-darkooo bg-yellow  text-lg font-bold from-neutral-900 tracking-wider hover:bg-dark-yellow rounded-full hover:text-white ${
                                isLoading
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                            }`}>
                            {isLoading ? "Loading" : "Submit"}
                        </button>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default ForgotPassword;

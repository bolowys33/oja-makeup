import React, { useState } from "react";
import app from "../firebase/auth.mjs";
import {
    GoogleAuthProvider,
    browserSessionPersistence,
    getAuth,
    setPersistence,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendEmailVerification,
} from "firebase/auth";
import {
    Box,
    Container,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import InputField from "../components/TextField";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import { getErrorMessage } from "../constants/error";
import { toast } from "react-toastify";

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const auth = getAuth(app);
    const firestore = getFirestore(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSignUpWithEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            setError(null);

            await setPersistence(auth, browserSessionPersistence);
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;
            if (user.emailVerified) {
                if (location.state?.from === "/register") {
                    navigate("/");
                } else {
                    navigate(-1);
                }
                toast.success(`Logged in successfully`);
            } else {
                setError("Please verify your email before signing in.");
            }

            setIsLoading(false);
        } catch (error) {
            setPassword("");
            setError(getErrorMessage(error.code));
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        const provider = new GoogleAuthProvider();
        try {
            await setPersistence(auth, browserSessionPersistence);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Save the user's name to Firestore
            await setDoc(doc(firestore, "users", user.uid), {
                firstName: user.displayName.split(" ")[0],
                lastName: user.displayName.split(" ")[1],
                email: user.email,
            });

            if (location.state?.from === "/register") {
                navigate("/");
            } else {
                navigate(-1);
            }
            toast.success(`Logged in successfully`);
        } catch (error) {
            setError(getErrorMessage(error.code));
        }
    };

    const handleResendVerificationEmail = async () => {
        try {
            await sendEmailVerification(auth.currentUser);
            toast.success("Verification email has been sent.");
        } catch (error) {
            setError("An error occurred while sending the verification email.");
        }
    };

    return (
        <div className="mt-16 md:mt-14 py-6 h-screen">
            <Container maxWidth="xs" className="shadow-xl rounded-md pb-5">
                <Box mt={4}>
                    <h3 className="text-2xl font-bold text-center text-dark-yellow">
                        Sign-in your account
                    </h3>
                    <p className="text-center py-4 text-red-700">{error}</p>
                    <form
                        onSubmit={handleSignUpWithEmail}
                        className="flex flex-col ">
                        <InputField
                            label={"Email Address"}
                            value={email}
                            type="email"
                            onchange={(e) => setEmail(e.target.value.trim())}
                        />
                        <FormControl
                            sx={{ width: "100%" }}
                            variant="outlined"
                            required>
                            <InputLabel
                                htmlFor="outlined-adornment-password"
                                className="mt-4">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                className="mt-4"
                                id="outlined-adornment-password"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end">
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value.trim())
                                }
                            />
                        </FormControl>
                        <button
                            className={`self-center p-2 mt-6 w-2/3  text-darkooo bg-yellow  text-lg font-bold from-neutral-900 tracking-wider hover:bg-dark-yellow rounded-full hover:text-white ${
                                isLoading
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                            }`}>
                            {isLoading ? "Loading" : "Sign-in"}
                        </button>
                        <p className="text-center mt-2">
                            <Link
                                to="/forgot-password"
                                className="text-amber-500">
                                Forgot password?
                            </Link>
                        </p>
                        <p className="text-center py-4">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-amber-500">
                                Sign up
                            </Link>
                        </p>
                        {error ===
                            "Please verify your email before signing in." && (
                            <button
                                onClick={handleResendVerificationEmail}
                                className="self-center flex items-center justify-center mb-2 gap-2 text-center font-bold border rounded-md hover:outline outline-2 outline-dark-yellow py-3 w-3/4">
                                Resend Verification Email
                            </button>
                        )}
                        <button
                            onClick={handleGoogleSignIn}
                            className="self-center flex items-center justify-center gap-2 text-center font-bold border rounded-md hover:outline outline-2 outline-dark-yellow py-3 w-3/4">
                            <Google /> Sign in with Google
                        </button>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default SignIn;

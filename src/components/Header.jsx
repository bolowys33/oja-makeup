import { useState } from "react";
import { ArrowDropDown, Favorite, ShoppingCart } from "@mui/icons-material";
import "../css/Header.css";
import BrandLink from "./BrandLink";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { Badge, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react"; // Removed unnecessary imports
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/auth";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { toast } from "react-toastify";

const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#FFC94B",
        color: "black",
        fontWeight: "bold",
    },
}));

const Header = () => {
    const navigate = useNavigate();

    const auth = getAuth(app);
    const firestore = getFirestore(app);

    const [user, setUser] = useState(null);
    const [showSignInBox, setShowSignInBox] = useState(false);

    const handleClick = () => {
        navigate(`/cart`);
    };

    const handleMouseEnter = () => {
        setShowSignInBox(true);
    };

    const handleMouseLeave = () => {
        setShowSignInBox(false);
    };

    const handleLogOut = async () => {
        try {
            await signOut(auth)
            setUser(null)
            toast.success(`User logged out successfully`)
        } catch (error) {
            console.log(error.message);
        }
    };

    const { items } = useSelector((state) => state.cart);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const userDoc = await getDoc(
                        doc(firestore, "users", user.uid)
                    );
                    if (userDoc.exists()) {
                        setUser(userDoc.data());
                    }
                } catch (error) {
                    console.error("Error fetching user document:", error);
                }
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="sticky__2 mb-16 md:mb-20 shadow-md">
            <header className="container mx-auto flex justify-between font-krona py-3 items-center">
                <BrandLink />
                <div className="flex items-center">
                    <NavLinks />
                    <div className="flex text-darkooo cursor-pointer">
                        <div
                            className="text-sm mr-6 lowercase"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            {user ? user.firstName : "my account"}
                            <ArrowDropDown />
                            {showSignInBox && (
                                <div className=" z-[10000] absolute bg-[#333237aa] p-4 items-center rounded">
                                    {user ? (
                                        <div className="flex flex-col">
                                            <Link
                                                className="text-white hover:text-yellow mx-auto"
                                                to="/register">
                                                orders
                                            </Link>
                                            <Link
                                                onClick={handleLogOut}
                                                className="bg-yellow hover:bg-dark-yellow text-darkooo hover-bg-[#FF8D3A] p-2 rounded mt-3"
                                                >
                                                log out
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col">
                                            <Link
                                                className="bg-yellow hover:bg-dark-yellow text-darkooo hover-bg-[#FF8D3A] p-2 rounded"
                                                to="/login">
                                                Sign In
                                            </Link>
                                            <Link
                                                className="text-white hover:text-yellow mx-auto mt-3"
                                                to="/register">
                                                Sign Up
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <StyledBadge
                            onClick={handleClick}
                            badgeContent={items.length}>
                            Cart
                            <ShoppingCart />
                        </StyledBadge>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;

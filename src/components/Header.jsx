import { Favorite, ShoppingCart } from "@mui/icons-material";
import "../css/Header.css";
import BrandLink from "./BrandLink";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { Badge, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/auth";
import { doc, getDoc, getFirestore } from "@firebase/firestore";

const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#FFC94B",
        color: "black",
        fontWeight: "bold",
    },
}));

const Header = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const handleClick = () => {
        navigate(`/cart`);
    };

    const { items } = useSelector((state) => state.cart);
    // const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const auth = getAuth(app);
        const firestore = getFirestore(app);

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

    console.log(user);

    return (
        <div className="sticky__2 mb-16 md:mb-20 shadow-md">
            <header className="container mx-auto flex justify-between font-krona py-3 items-center">
                <BrandLink />
                <div className="flex items-end">
                    <NavLinks />
                    <div className="flex text-darkooo cursor-pointer">
                        {user ? user.firstName : "account"}
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

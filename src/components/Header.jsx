import { Favorite, ShoppingCart } from "@mui/icons-material";
import "../css/Header.css";
import BrandLink from "./BrandLink";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { Badge, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#FFC94B", 
        color: "black",
        fontWeight: 'bold', 
    },
}));


const Header = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate(`/cart`)
    }

    const { items } = useSelector((state) => state.cart);
    // const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="sticky__2 mb-16 md:mb-20 shadow-md">
            <header className="container mx-auto flex justify-between font-krona py-3 items-center">
                <BrandLink />
                <div className="flex items-end">
                    <NavLinks />
                    <div className="flex text-darkooo cursor-pointer">
                        <Favorite className="mr-4" />
                        <StyledBadge onClick={handleClick} badgeContent={items.length}>
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

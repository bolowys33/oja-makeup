import { Favorite, ShoppingBag, ShoppingCart } from "@mui/icons-material";
import "../css/Header.css";
import BrandLink from "./BrandLink";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Header = () => {
    return (
        <div className="container mx-auto">
            <header className="flex justify-between font-krona py-3 items-center">
                <BrandLink />

                <div className="flex items-end">
                    <NavLinks />
                    <div className="flex text-darkooo">
                        <Favorite className="mr-4" />
                        <ShoppingCart />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;

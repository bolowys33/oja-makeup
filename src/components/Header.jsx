import { Favorite, ShoppingCart } from "@mui/icons-material";
import "../css/Header.css";
import BrandLink from "./BrandLink";
import NavLinks from "./NavLinks";
import { useSelector } from 'react-redux';

const Header = () => {
  const { items } = useSelector((state) => state.cart);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container mx-auto">
      <header className="flex justify-between font-krona py-3 items-center">
        <BrandLink />
        <div className="flex items-end">
          <NavLinks />
          <div className="flex text-darkooo">
            <Favorite className="mr-4" />
            <ShoppingCart />
            <span className="ml-2">{totalItems}</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
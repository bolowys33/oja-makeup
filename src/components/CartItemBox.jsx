import { Delete } from "@mui/icons-material";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { clearAll } from "../redux/cartSlice";

const CartItemBox = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearAll());
    };

    return (
        <div className="col-span-12 md:col-span-7 mb-6">
            <CartItem />
            <button
                onClick={handleClick}
                className="p-2 h-12 mt-5 text-white flex items-center font-krona bg-red-700 rounded-md shadow-lg text-xs mx-auto">
                <Delete /> EMPTY CART
            </button>
        </div>
    );
};

export default CartItemBox;

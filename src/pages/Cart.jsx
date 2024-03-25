import { useSelector } from "react-redux";
import CartItemBox from "../components/CartItemBox";
import CartTotal from "../components/CartTotal";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
    const { items } = useSelector((state) => state.cart);

    return (
        <div
            className={`bg-light-grey ${
                items.length === 0 ? "py-0 h-screen" : "py-8 min-h-screen mt-16 md:mt-14"
            }`}>
            {items.length === 0 ? (
                <EmptyCart />
            ) : (
                <div className="container w-full md:w-5/6  mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <CartItemBox />
                        <CartTotal />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

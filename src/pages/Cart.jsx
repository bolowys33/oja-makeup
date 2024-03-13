import { useSelector } from "react-redux";
import CartItemBox from "../components/CartItemBox";
import CartTotal from "../components/CartTotal";

const Cart = () => {
    const { items, total } = useSelector((state) => state.cart);

    return (
        <div className="bg-light-grey mt-16 md:mt-14 py-8 min-h-screen">
            <div className="container w-full md:w-5/6  mx-auto bg-white rounded-lg shadow-md pt-6">
                <h3 className="font-krona text-2xl md:text-3xl text-center">
                    Cart({total})
                </h3>
                <div className="grid grid-cols-12 gap-4">
                    <CartItemBox />
                    <CartTotal />
                </div>
            </div>
        </div>
    );
};

export default Cart;

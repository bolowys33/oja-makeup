import { useSelector } from "react-redux";
import CartButton from "./CartButton";
import { useNavigate } from "react-router-dom";
const CartItem = () => {
    const { items } = useSelector((state) => state.cart);

    const navigate = useNavigate();

    return (
        <>
            {items.map((item) => (
                <div
                    key={item.id}
                    className="border-b p-1 md:p-8 font-krona mb-3 md:mb-0 text-sm md:text-base ">
                    <div className="flex flex-col md:flex-row justify-between mb-6">
                        <div className="md:w-[40%] border-none">
                            <img
                                onClick={() => navigate(`/products/${item.id}`)}
                                className="w-44 h-44 md:w-[90%] md:h-[90%] mx-auto md:mx-0 cursor-pointer mb-2 md:mb-0"
                                src={item?.image}
                                alt={item.name}
                            />
                        </div>
                        <div className="flex justify-between flex-1 p-4 md:p-2">
                            <p>{item.name}</p>
                            <p className="ml-3">&#8358;{item.price}</p>
                        </div>
                    </div>
                    <CartButton item={item} />
                </div>
            ))}
        </>
    );
};

export default CartItem;

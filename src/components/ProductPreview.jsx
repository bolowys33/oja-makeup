import { useDispatch, useSelector } from "react-redux";
import ProductPrice from "./ProductPrice";
import ProductButton from "./ProductButton";
import { calcTotal, itemAdded } from "../redux/cartSlice";
import { AddShoppingCartRounded } from "@mui/icons-material";
import { useState } from "react";

const ProductPreview = ({ product }) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cart);

    const [quantity, setQuantity] = useState(1);

    const price = Math.ceil(parseFloat(product.price)) + 1 * 100;

    const payload = {
        id: product.id,
        name: product.name,
        image: `https:${product.api_featured_image}`,
        price,
        quantity,
    };

    const handleAddToCart = () => {
        dispatch(itemAdded(payload));
        dispatch(calcTotal(state));
    };
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center mb-32">
            <div className="flex justify-center items-center w-3/4 sm:w-2/4 md:w-1/4 lg:w-full lg:mr-10">
                <img
                    className="w-[10rem]"
                    src={`https://${product.api_featured_image}`}
                    alt={product.name}
                />
            </div>
            <div>
                <p className="font-krona text-yellow text-sm">
                    {product.product_type}
                </p>
                <h1 className="text-base font-krona">{product.name}</h1>

                <p>{product.category}</p>

                <div className="flex my-5 justify-between items-center">
                    <ProductPrice price={price} isLarge />
                    <div className="flex justify-between items-center w-[68%] md:w-2/3">
                        <ProductButton
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <button
                            className="inline-block rounded-full text-xs md:text-sm font-bold font-krona bg-yellow hover:bg-dark-yellow py-2 md:py-3 px-2 md:px-6"
                            onClick={handleAddToCart}>
                            <AddShoppingCartRounded /> add to cart
                        </button>
                    </div>
                </div>
                <p>
                    {product.description.replace(
                        /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g
                    )}
                </p>
            </div>
        </div>
    );
};

export default ProductPreview;

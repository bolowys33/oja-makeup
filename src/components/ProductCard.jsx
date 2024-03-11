import { Link, useNavigate } from "react-router-dom";
import ProductPrice from "./ProductPrice";
import { AddShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { itemAdded } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(`/products/${product.id}`);
    };

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(itemAdded(product));
    };

    return (
        <div
            title={product.name}
            className="flex flex-col justify-between align-middle rounded-md mb-6 mr-6 px-6 py-6 transform hover:scale-105 hover:shadow-xl transition delay-75 duration-300 ease-in-out">
            <div
                onClick={handleClick}
                className="flex flex-col justify-center flex-1 mb-6 cursor-pointer">
                <img
                    width="120"
                    src={`https://${product.api_featured_image}`}
                    alt={product.name}
                    className="mx-auto"
                />
            </div>
            <div className="w-[11.2rem]">
                <p
                    onClick={handleClick}
                    className="text-yellow font-krona text-xs truncate cursor-pointer">
                    {product.name}
                </p>
                <p>{product.brand}</p>
                <div className="flex items-center justify-between">
                    <ProductPrice price={product.price} />
                    <IconButton onClick={handleAddToCart}>
                        <AddShoppingCart className="text-darkooo" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

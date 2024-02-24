import { Link } from "react-router-dom";
import ProductPrice from "./ProductPrice";

const ProductCard = ({ product }) => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };


    return (
        <Link
            to={`/products/${product.id}`}
            title={product.name}
            onClick={handleClick}
            className="flex flex-col justify-between align-middle rounded-md mb-6 mr-6 px-6 py-6 transform hover:scale-105 hover:shadow-xl transition delay-75 duration-300 ease-in-out">
            <div className="flex flex-col justify-center flex-1 mb-6">
                <img
                    width="120"
                    src={`https://${product.api_featured_image}`}
                    alt={product.name}
                    className="mx-auto"
                />
            </div>
            <div className="w-[11.2rem]">
                <p className="text-yellow font-krona text-xs truncate">{product.name}</p>
                <p>{product.brand}</p>
                <ProductPrice price={product.price} />
            </div>
        </Link>
    );
};

export default ProductCard;

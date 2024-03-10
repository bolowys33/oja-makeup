import { useDispatch } from "react-redux";
import CartButton from "./CartButton";
import ProductPrice from "./ProductPrice";
import { itemAdded } from "../redux/cartSlice";

const ProductPreview = ({product}) => {

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(itemAdded(product));
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
                    <h1 className="text-base font-krona">
                        {product.name}
                    </h1>

                    <p>{product.category}</p>

                    <div className="flex my-5 justify-between items-center">
                        <ProductPrice price={product.price} isLarge />
                        <CartButton />
                        <div>
                            <button className="inline-block rounded-full text-sm font-bold font-krona bg-yellow py-3 px-6"
                            onClick={handleAddToCart}>
                                add to cart
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
}
 
export default ProductPreview;
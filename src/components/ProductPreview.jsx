import { useDispatch, useSelector } from "react-redux";
import ProductPrice from "./ProductPrice";
import { calcTotal, itemAdded } from "../redux/cartSlice";
import { AddShoppingCartRounded } from "@mui/icons-material";

const ProductPreview = ({product}) => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.cart);
    
    const price = Math.ceil(parseFloat(product.price))

    const payload = {
        id: product.id,
        name: product.name,
        image: `https://${product.api_featured_image}`,
        price,
    };

    const handleAddToCart = () => {
        dispatch(itemAdded(payload));
        dispatch(calcTotal(state))
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
                        <ProductPrice price={price} isLarge />
                        <div>
                            <button className="inline-block rounded-full text-sm font-bold font-krona bg-yellow py-3 px-6"
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
}
 
export default ProductPreview;
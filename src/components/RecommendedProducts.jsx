import { ScaleLoader } from "react-spinners";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

const RecommendedProducts = ({products, pending}) => {
    return (
        <div className="mt-32">
            <SectionTitle name={'For you'} />
            <div className="flex flex-wrap justify-center">
                {pending ? (
                    <div className="flex items-center justify-center h-[300px]">
                        <ScaleLoader
                            color="rgb(255,201,75)"
                            margin={7}
                            radius={6}
                            width={10}
                        />
                </div>
                ) : (
                    products
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                )}
            </div>
        </div> 
        
     );
}
 
export default RecommendedProducts;
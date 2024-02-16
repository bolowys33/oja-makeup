import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

const RecommendedProducts = ({products}) => {
    return (
        <div className="mt-32">
            <SectionTitle name={'For you'} />
            <div className="flex flex-wrap justify-center">
                {products.length === 0 ? (
                    <p>Loading recommended products</p>
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
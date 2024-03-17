
import ProductCard from "./ProductCard";
import { useFilterState } from "../states/filterContext";

const MainContent = () => {
    const [{ products }] = useFilterState();

    return (
        <div>
            {products.length === 0 ? (
                <div className="flex items-center justify-center h-[300px]">
                <div className="text-center mt-8">
                    <h4 className="font-krona">Sorry, no products</h4>
                    <p>Please try changing your filters</p>
                </div>
                </div>
            ) : (
                <div className="flex flex-wrap justify-center mx-auto">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MainContent;

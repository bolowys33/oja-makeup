import { ScaleLoader } from "react-spinners";
import ProductCard from "./ProductCard";
import { useFilterState } from "../states/filterContext";

const MainContent = () => {
    const [{ products }] = useFilterState();

    return (
        <div>
            {products.length === 0 ? (
                <div className="flex items-center justify-center h-[300px]">
                    <ScaleLoader
                        color="rgb(255,201,75)"
                        margin={7}
                        radius={6}
                        width={10}
                        height={100}
                    />
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

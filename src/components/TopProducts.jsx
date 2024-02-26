import { ScaleLoader } from "react-spinners";
import useGetTopProducts from "../hooks/useGetTopProducts";
import ProductCard from "./ProductCard";
import SecondBanner from "./SecondBanner";
import SectionLink from "./SectionLink";
import SectionTitle from "./SectionTitle";
const TopProducts = () => {
    const { topProducts, isLoading } = useGetTopProducts();

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <SectionTitle name={"Top products"} />
                    <SectionLink
                        path="/products"
                        name="see more"
                        isMain
                        className="hidden md:block"
                    />
                </div>
                {isLoading ? (
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
                    <div className="flex flex-wrap justify-center w-[90%] mx-auto">
                        {topProducts.slice(0, 8).map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                )}
            </div>
            <SecondBanner />
        </div>
    );
};

export default TopProducts;

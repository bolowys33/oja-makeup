
import useGetTopProducts from "../hooks/useGetTopProducts";
import ProductCard from "./ProductCard";
import SecondBanner from "./SecondBanner";
import SectionLink from "./SectionLink";
import SectionTitle from "./SectionTitle";
const TopProducts = () => {
    const topProducts = useGetTopProducts()

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <SectionTitle name={"Top products"} />
                    <SectionLink path="/about" name="see more" isMain className="hidden md:block" />
                </div>
                <div className="flex flex-wrap justify-center w-[90%] mx-auto">
                    {topProducts.slice(0 , 8).map(product => (
                       <ProductCard product={product} key={product.id}/>
                    ))}
                </div>
            </div>
            <SecondBanner />
        </div>
    );
};

export default TopProducts;

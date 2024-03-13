import HeaderBanner from "../components/HeaderBanner";
import ProductContent from "../components/ProductContent";

import FilterProvider, { useFilterState } from "../states/filterContext";

const Products = () => {
    const value = useFilterState();
    console.log({ value });

    return (
        <div className="mt-16 md:mt-20">
            <HeaderBanner />
            <FilterProvider>
                <ProductContent />
            </FilterProvider>
        </div>
    );
};

export default Products;

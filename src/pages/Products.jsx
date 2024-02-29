import HeaderBanner from "../components/HeaderBanner";
import ProductContent from "../components/ProductContent";

import FilterProvider, { useFilterState } from "../states/filterContext";

const Products = () => {
    const value = useFilterState();
    console.log({ value });

    return (
        <>
            <HeaderBanner />
            <FilterProvider>
                <ProductContent />
            </FilterProvider>
        </>
    );
};

export default Products;

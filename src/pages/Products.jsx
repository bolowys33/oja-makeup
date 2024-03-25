import HeaderBanner from "../components/HeaderBanner";
import ProductContent from "../components/ProductContent";

import FilterProvider from "../states/filterContext";

const Products = () => {
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

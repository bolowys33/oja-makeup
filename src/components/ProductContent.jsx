import useGetProducts from "../hooks/useGetProducts";

import MainContent from "./MainContent";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const ProductContent = () => {
    const { products, setFilter, isLoading } = useGetProducts();

    return ( 
        <div className="product">
                    <div className="sidebar">
                        <SideBar setFilter={setFilter} />
                    </div>
                    <div className="top">
                        <TopBar setFilter={setFilter} />
                    </div>
                    <div className="main-content">
                        <MainContent
                            products={products}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
     );
}
 
export default ProductContent;
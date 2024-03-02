import useGetProducts from "../hooks/useGetProducts";

import MainContent from "./MainContent";
import SideBar from "./SideBar";

const ProductContent = () => {

    const {setFilter} = useGetProducts()

    return ( 
        <div className="product">
                    <div className="sidebar">
                        <SideBar setFilter={setFilter} />
                    </div>
                    <div className="main">
                        <MainContent />
                    </div>
                </div>
     );
}
 
export default ProductContent;
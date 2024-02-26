import MainContent from "../components/MainContent";
import HeaderBanner from "../components/HeaderBanner";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import useGetProducts from "../hooks/useGetProducts";

const Products = () => {

    const {products, setFilter, isLoading} = useGetProducts()

    return (
        <>
            <HeaderBanner />
            <div className="product">
                <div className="sidebar">
                    <SideBar setFilter={setFilter} />
                </div>
                <div className="top">
                    <TopBar setFilter={setFilter}/>
                </div>
                <div className="main-content">
                    <MainContent products={products} isLoading={isLoading}/>
                </div>
            </div>
        </>
    );
};

export default Products;

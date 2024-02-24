import MainContent from "../components/MainContent";
import HeaderBanner from "../components/HeaderBanner";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const Products = () => {
    return (
        <>
            <HeaderBanner />
            <div className="product">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="top">
                    <TopBar />
                </div>
                <div className="main-content">
                    <MainContent />
                </div>
            </div>
        </>
    );
};

export default Products;

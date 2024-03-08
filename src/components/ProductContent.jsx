import { ScaleLoader } from "react-spinners";
import useGetProducts from "../hooks/useGetProducts";

import MainContent from "./MainContent";
import SideBar from "./SideBar";

const ProductContent = () => {
    const { isLoading } = useGetProducts();

    return (
        <div className="product">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="main">
                {isLoading ? (
                    <div className="flex items-center justify-center h-[500px]">
                        <ScaleLoader
                            color="rgb(255,201,75)"
                            margin={7}
                            radius={6}
                            width={10}
                            height={100}
                        />
                    </div>
                ) : (
                    <MainContent />
                )}
            </div>
        </div>
    );
};

export default ProductContent;

import Categories from "./Categories";
import PriceRange from "./PriceRange";

const SideBar = () => {
    return (<>
        <div className="pl-6">
            <PriceRange />
            <div className="bg-gray-200 px-6 py-2 mb-4 text-sm">
                <Categories />
            </div>
        </div>
        </>
    );
};

export default SideBar;

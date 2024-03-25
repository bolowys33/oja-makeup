import Categories from "./Categories";
import { BRANDS } from "../constants/brands";
import { setFilter } from "../states/actionCreators";
import Dropdown from "./Dropdown";
import { useFilterState } from "../states/filterContext";
import { CATEGORIES } from "../constants/categories";

const SideBar = () => {
    const [, dispatch] = useFilterState();

    const handleChange = (e) => {
        let { name, value } = e.target;
        
        if (name === "brand" && value === "all") value = null;
        if (name === "productType" && value === "all in brand") value = null;

        dispatch(setFilter(name, value));
    };

    const handleSelect = (value) => {
        if (value === 'all in brand') value = null

        dispatch(setFilter("productType", value));
    };

    const SUBCAT = CATEGORIES.flatMap(cat => cat.subCategories)
    return (
        <>
            <div className="pl-3">
                <div className="flex justify-center md:block">
                <Dropdown values={["all", ...BRANDS]} onChange={handleChange} name={'brand'} label={'brand'} />
                <Dropdown values={[...SUBCAT]} onChange={handleChange} name={'productType'} label={'type'} hidden />
                </div>
                <div className="bg-gray-200 px-6 py-2 mb-4 text-sm hidden md:block">
                    <Categories onSelect={handleSelect} />
                </div>
            </div>
        </>
    );
};

export default SideBar;

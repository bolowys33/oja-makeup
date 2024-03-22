import Categories from "./Categories";
import { BRANDS } from "../constants/brands";
import { setFilter } from "../states/actionCreators";
import Dropdown from "./Dropdown";
import { useFilterState } from "../states/filterContext";

const SideBar = () => {
    const [, dispatch] = useFilterState();

    const handleChange = (e) => {
        let { name, value } = e.target;
        
        if (name === "brand" && value === "all") value = null;

        dispatch(setFilter(name, value));
    };

    const handleSelect = (value) => {
        if (value === 'all in brand') value = null

        dispatch(setFilter("productType", value));
    };

    return (
        <>
            <div className="pl-6">
                <Dropdown values={["all", ...BRANDS]} onChange={handleChange} />
                <div className="bg-gray-200 px-6 py-2 mb-4 text-sm">
                    <Categories onSelect={handleSelect} />
                </div>
            </div>
        </>
    );
};

export default SideBar;

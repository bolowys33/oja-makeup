import Categories from "./Categories";
import PriceRange from "./PriceRange";

import { BRANDS } from "../constants/brands";

import Dropdown from "./Dropdown";

const SideBar = ({ setFilter }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter(name, value);
    };

    return (
        <>
            <div className="pl-6">
                <PriceRange />
                <Dropdown
                    type="brand"
                    values={["all", ...BRANDS]}
                    onChange={handleChange}
                />
                <div className="bg-gray-200 px-6 py-2 mb-4 text-sm">
                    <Categories setFilter={setFilter} />
                </div>
            </div>
        </>
    );
};

export default SideBar;

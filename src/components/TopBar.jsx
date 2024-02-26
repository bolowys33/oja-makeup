import { BRANDS } from "../constants/brands";
import { SORTS } from "../constants/sorts";
import Dropdown from "./Dropdown";

const TopBar = ({ setFilter }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter(name, value);
    };

    return (
        <div className="flex space-x-4">
            <Dropdown
                type="brand"
                values={["all", ...BRANDS]}
                onChange={handleChange}
            />
            <Dropdown type="sorts" values={SORTS} onChange={handleChange} />
        </div>
    );
};

export default TopBar;

import { BRANDS } from "../constants/brands";
import { SORTS } from "../constants/sorts";
import Dropdown from "./Dropdown";

const TopBar = () => {
    return ( 
        <div className="flex space-x-4">
            <Dropdown type='brands' values={BRANDS}  />
            <Dropdown type='sorts' values={SORTS}  />
        </div>
     );
}
 
export default TopBar;
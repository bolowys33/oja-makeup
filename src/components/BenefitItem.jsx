import { DeliveryDining, Inventory, InventoryOutlined, PaymentsOutlined } from "@mui/icons-material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const BenefitItem = ({ item }) => {
    return (
        <div className="flex flex-1">
            <div className="relative mr-6">
                <div className="absolute bg-yellow h-10 w-10 rounded-full -z-10"></div>
                {item.title === 'Delivery' && (<DeliveryDining className="ml-4" style={{fontSize: 40 }} />)}
                {item.title === 'Products' && (<InventoryOutlined className="ml-4" style={{fontSize: 40 }} />)}
                {item.title === 'Payments' && (<PaymentsOutlined className="ml-4" style={{fontSize: 40 }} />)}
                
            </div>
            <div>
                <h5 className="font-krona text-sm">{item.title}</h5>
                <p className="text-sm">{item.text}</p>
            </div>
        </div>
    );
};

export default BenefitItem;

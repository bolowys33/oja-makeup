import { Link } from "react-router-dom";
import timeAgo from "../constants/timeAgo";


const OrderItem = ({order}) => {

    return (
       <div className="bg-white py-4 px-3 rounded-md font-semibold font-krona text-xs mb-6">
        <div className="flex justify-between items-center">
            <p>Order No: {order.orderRef}</p>
            <Link to={`/orders/${order.id}`}
            className="bg-yellow hover:bg-dark-yellow p-2 rounded-xl text-xs">Show details</Link>
        </div>
        <div className="flex justify-end border-y p-2 my-2">
            <div className={`rounded-full h-5 w-5 ${order.status == 'success' ? "bg-lime-600" : order.status == "pending" ? "bg-amber-500" : "bg-red-600"}`}></div>
        </div>
        <div className="flex justify-between">
            <p>Placed {timeAgo(order.orderRef)}</p>
            <p>Total: &#8358; {order.totalAmount}</p>
        </div>
       </div>
    );
};

export default OrderItem;

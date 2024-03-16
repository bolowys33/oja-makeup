import PaymentMethod from "./PaymentMethod";
import Summary from "./Summary";

const CartTotal = () => {
    return (
        <div className="col-span-12 md:col-span-4">
            <Summary />
            <PaymentMethod />
        </div>
    );
};

export default CartTotal;

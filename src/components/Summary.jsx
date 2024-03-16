import { useSelector } from "react-redux";

const Summary = () => {
    const { items, total } = useSelector((state) => state.cart);
    const totalUnit = items.reduce((acc, item) => acc + item.quantity, 0);

    

    return (
            <div className="flex flex-col bg-white rounded-lg shadow-md pt-6 pb-8 px-4 space-y-4 mb-4">
                <h3 className="text-2xl font-bold">Summary</h3>
                <p className="flex justify-between font-bold">
                    <span>No. of items</span> <span>{items.length}</span>
                </p>
                <p className="flex justify-between font-bold">
                    <span>No. of unit</span> <span>{totalUnit}</span>
                </p>
                <p className="flex justify-between font-bold">
                    <span>Total</span> <span>&#8358; {total}</span>
                </p>
                <button
             className="rounded-full text-sm font-bold font-krona uppercase bg-yellow py-3 px-10 justify-self-center shadow-lg hover:bg-dark-yellow">
                    Checkout ({items.length})
                </button>
            </div>
    );
};

export default Summary;

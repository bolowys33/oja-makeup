const ProductButton = ({ quantity, setQuantity }) => {
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(quantity - 1);
    };

    return (
        <div>
            <div className="font-krona"></div>
            <button
                onClick={handleDecrease}
                disabled={quantity === 1}
                className={`h-8 w-8 p-1 font-extrabold ${
                    quantity === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-yellow text-darkooo"
                } text-center uppercase rounded-md shadow-lg hover:bg-dark-yellow`}>
                -
            </button>
            <span className="mx-2 md:mx-3 font-krona">{quantity}</span>
            <button
                onClick={handleIncrease}
                className="h-8 w-8 p-1 font-extrabold bg-yellow text-darkooo text-center uppercase rounded-md shadow-lg hover:bg-dark-yellow">
                +
            </button>
        </div>
    );
};

export default ProductButton;

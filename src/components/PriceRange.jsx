const PriceRange = ({onChange}) => {
    return (
        <div className="bg-gray-200 py-4 px-6 mb-4">
            <h4 className="font-krona text-sm mb-2">select price</h4>
            <div className="flex justify-between">
                <div className="text-center">
                    <input
                        name="minPrice"
                        id="min"
                        type="text"
                        className="w-20 p-2 text-center  text-sm focus:ring-2 focus:ring-yellow focus:ring-inset caret-yellow outline-none"
                        placeholder="min"
                        onChange={onChange}
                    />
                    <label className="text-xs" htmlFor="min">
                        min
                    </label>
                </div>
                <hr className="border border-yellow w-full mt-4" />
                <div className="text-center">
                    <input
                        name="maxPrice"
                        id="max"
                        type="text"
                        className="w-20 p-2 text-center  text-sm focus:ring-2 focus:ring-yellow focus:ring-inset caret-yellow outline-none"
                        placeholder="max"
                        onChange={onChange}
                    />
                    <label className="text-xs" htmlFor="max">
                        max
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PriceRange;

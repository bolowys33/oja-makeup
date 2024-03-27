import { useState } from "react";
import useProductQuery from "../hooks/useProductQuery";

const ProductQuery = () => {
    const { isLoading, products, getQueriedProducts } = useProductQuery();

    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 12;

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentProducts = products.slice(startIndex, endIndex);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="mt-16 md:mt-20">
            {isLoading ? (
                <div className="flex items-center justify-center h-[500px]">
                    <ScaleLoader
                        color="rgb(255,201,75)"
                        margin={7}
                        radius={6}
                        width={10}
                        height={100}
                    />
                </div>
            ) : (
                <div>
                    <h3 className="text-2xl font-bold text-center text-dark-yellow">
                        Products
                    </h3>
                    <div className="flex flex-wrap justify-center mx-auto md:h-[580px] overflow-scroll overflow-x-hidden">
                        {currentProducts.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                    <div className="flex justify-center items-center font-krona my-4">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`py-2 px-4 font-extrabold ${
                                currentPage === 1
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-yellow text-darkooo"
                            } text-center rounded-md shadow-lg hover:bg-dark-yellow`}>
                            Prev
                        </button>
                        <span className="mx-3">{currentPage}</span>
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`py-2 px-4 font-extrabold ${
                                currentPage === totalPages
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-yellow text-darkooo"
                            } text-center rounded-md shadow-lg hover:bg-dark-yellow`}>
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductQuery;

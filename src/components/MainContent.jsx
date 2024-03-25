import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useFilterState } from "../states/filterContext";

const MainContent = () => {
    const [{ products }] = useFilterState();
    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 8;

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
        <div>
            {products.length === 0 ? (
                <div className="flex items-center justify-center h-[300px]">
                    <div className="text-center mt-8">
                        <h4 className="font-krona">Sorry, no products</h4>
                        <p>Please try changing your filters</p>
                    </div>
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

export default MainContent;

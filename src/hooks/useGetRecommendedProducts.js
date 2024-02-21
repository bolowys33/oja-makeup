import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";
function useGetRecommendedProducts() {
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    const getRecommendedProducts = (product) => {
        const key = product.product_type ? "product_type" : "brand";
        const value = product.product_type
            ? product.product_type
            : product.brand;

        axios
            .get(`${BASE_URL}.json`, {
                params: {
                    [key]: value,
                },
            })
            .then((res) => {
                let startIndex
                if (res.data.length !== 0) {
                    startIndex = Math.floor(
                        Math.random() * (res.data.length - 4 + 1)
                    );
                }
                const slicedData = res.data.slice(startIndex, startIndex + 4);
                setRecommendedProducts(slicedData);
                console.log(recommendedProducts);
            });
    };

    return { recommendedProducts, getRecommendedProducts };
}

export default useGetRecommendedProducts;

import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

function useProductQuery() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState(null);

    const getQueriedProducts = (queryValue) => {
        const params = {
            product_type: queryValue,
        };

        setIsLoading(true);
        axios
            .get(`${BASE_URL}.json`, {
                params,
            })
            .then((res) => {
                setProducts(res.data);
                setIsLoading(false);
            });
    };

    return { isLoading, products, getQueriedProducts };
}

export default useProductQuery;

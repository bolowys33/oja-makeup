import axios from "axios";
import { useEffect, useState } from "react";
import { PRODUCT_TAGS } from "../constants/tags";

const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

const getRandomTag = () => {
    const randomNum = Math.floor(Math.random() * PRODUCT_TAGS.length);

    return PRODUCT_TAGS[randomNum];
};

function useGetTopProducts() {
    const [topProducts, setTopProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getTopProducts = () => {
        setIsLoading(true);
        axios
            .get(`${BASE_URL}.json`, {
                params: {
                    product_tags: getRandomTag(),
                },
            })
            .then((res) => {
                setTopProducts(res.data);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getTopProducts();
    }, []);

    return { topProducts, isLoading };
}

export default useGetTopProducts;

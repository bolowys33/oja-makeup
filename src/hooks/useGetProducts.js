import axios from "axios";
import { useEffect, useState } from "react";


const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";


function useGetProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = (params) => {
        

        setIsLoading(true);
        axios
            .get(`${BASE_URL}.json`, {
                params
            })
            .then((res) => {
                setProducts(res.data);
                setIsLoading(false);
            });
    };

    const setFilter = (type, value) => {
        const params = {
            [type]: value
        }
        getProducts(params);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return { products, setFilter, isLoading };
}

export default useGetProducts;

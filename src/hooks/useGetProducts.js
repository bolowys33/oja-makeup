import axios from "axios";
import { useEffect, useState } from "react";
import { useFilterState } from "../states/filterContext";
import { setProducts } from "../states/actionCreators";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

function useGetProducts() {
    const [isLoading, setIsLoading] = useState(false);
    const [state, dispatch] = useFilterState();

    const getProducts = (params) => {
        setIsLoading(true);
        dispatch(setProducts([]));
        axios
            .get(`${BASE_URL}.json`, {
                params,
            })
            .then((res) => {
                dispatch(setProducts(res.data));
                setIsLoading(false);
            });
    };

    const setFilter = (type, value) => {
        const params = {
            [type]: value,
        };
        getProducts(params);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return { setFilter, isLoading };
}

export default useGetProducts;

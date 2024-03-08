import axios from "axios";
import { useEffect, useState } from "react";
import { useFilterState } from "../states/filterContext";
import { setProducts } from "../states/actionCreators";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

function useGetProducts() {
    const [isLoading, setIsLoading] = useState(false);
    const [state, dispatch] = useFilterState();

    const params = {
        product_type: state.filters.productType,
        brand: state.filters.brand,
        price_greater_than: state.filters.minPrice,
        price_less_than: state.filters.maxPrice,
    };

    const getProducts = () => {
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

    useEffect(() => {
        console.log("Effect triggered", state.filters);
        getProducts();
    }, [state.filters]);

    return {isLoading} ;
}

export default useGetProducts;

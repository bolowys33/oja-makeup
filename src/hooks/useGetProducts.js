import axios from "axios";
import { useEffect, useState } from "react";
import { useFilterState } from "../states/filterContext";
import { setProducts} from "../states/actionCreators";

const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

function useGetProducts() {
    const [isLoading, setIsLoading] = useState(false);
    const [state, dispatch] = useFilterState();

    const params =  {
        product_type: state.filters.productType,
        brand: state.filters.brand,
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
        localStorage.setItem("filterParams", JSON.stringify(params));
        getProducts();
        // eslint-disable-next-line 
    }, [state.filters]);

    return { isLoading };
}

export default useGetProducts;

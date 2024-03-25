import axios from "axios";
import { useState } from "react";


const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products'
function useGetSingleProduct() {
    const [singleProduct, setSingleProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    const getSingleProduct = (id) => {
        setIsLoading(true)
        axios
        .get(`${BASE_URL}/${id}.json`)
            .then(res => {
                setSingleProduct(res.data)
                setIsLoading(false)
            })
    }

    return { singleProduct, getSingleProduct, isLoading }
}

export default useGetSingleProduct
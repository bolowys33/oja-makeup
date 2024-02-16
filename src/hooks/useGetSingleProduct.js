import axios from "axios";
import { useState } from "react";


const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products'
function useGetSingleProduct() {
    const [singleProduct, setSingleProduct] = useState(null)
    
    const getSingleProduct = (id) => {
        axios
        .get(`${BASE_URL}/${id}.json`)
            .then(res => {
                setSingleProduct(res.data)
            })
    }

    

    return { singleProduct, getSingleProduct }
}

export default useGetSingleProduct
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";
const PRODUCT_TAGS = [
    "Canadian",
    "CertClean",
    "Chemical Free",
    "Dairy Free",
    "EWG Verified",
    "EcoCert",
    "Fair Trade",
    "Gluten Free",
    "Hypoallergenic",
    "Natural",
    "No Talc",
    "Non-GMO",
    "organic",
    "Peanut Free Product",
    "Sugar Free",
    "USDA Organic",
    "Vegan",
    "alcohol free",
    "cruelty free",
    "oil free",
    "purpicks",
    "silicone free",
    "water free",
];

const getRandomTag = () => {
    const randomNum = Math.floor(Math.random() * PRODUCT_TAGS.length)

    return PRODUCT_TAGS[randomNum]
}

function useGetTopProducts() {
    const [topProducts, setTopProducts] = useState([]);

    const getTopProducts = () => {
        console.log('me');
        axios
            .get(`${BASE_URL}.json`, {
                params: {
                    product_tags: getRandomTag(),
                },
            })
            .then((res) => setTopProducts(res.data));
    };

    useEffect(() => {
        getTopProducts();
        console.log('useEffect triggered');
    }, []);

    return topProducts;
}

export default useGetTopProducts;

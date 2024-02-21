import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { useEffect } from "react";
import ProductTitle from "../components/ProductTitle";
import useGetRecommendedProducts from "../hooks/useGetRecommendedProducts";
import RecommendedProducts from "../components/RecommendedProducts";
import Benefit from "../components/Benefit";
import ProductPreview from "../components/ProductPreview";

const ProductDesc = () => {
    const { id } = useParams();

    const { singleProduct, getSingleProduct } = useGetSingleProduct();
    const { recommendedProducts, getRecommendedProducts } = useGetRecommendedProducts();

    useEffect(() => {
        getSingleProduct(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        if (singleProduct) {
            getRecommendedProducts(singleProduct);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [singleProduct]);


    if (!singleProduct) {
        return <p className="h-screen">Loading.....</p>;
    }

    return (
        <div className="mt-20 container mx-auto min-h-screen p-10">
            <ProductTitle
                name={singleProduct.name}
                type={singleProduct.product_type}
            />

            <ProductPreview product={singleProduct} />
            <Benefit />
            <RecommendedProducts products={recommendedProducts} />
        </div>
    );
};

export default ProductDesc;

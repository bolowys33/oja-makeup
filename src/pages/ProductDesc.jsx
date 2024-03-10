import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { useEffect } from "react";
import ProductTitle from "../components/ProductTitle";
import useGetRecommendedProducts from "../hooks/useGetRecommendedProducts";
import RecommendedProducts from "../components/RecommendedProducts";
import Benefit from "../components/Benefit";
import ProductPreview from "../components/ProductPreview";
import { ScaleLoader } from "react-spinners";

const ProductDesc = () => {
    const { id } = useParams();

    const { singleProduct, getSingleProduct, isLoading } =
        useGetSingleProduct();
    const { recommendedProducts, getRecommendedProducts, isPending } =
        useGetRecommendedProducts();

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
        return (
            <div className="flex items-center justify-center h-screen">
                <ScaleLoader
                    color="rgb(255,201,75)"
                    margin={7}
                    radius={6}
                    width={15}
                />
            </div>
        );
    }

    return (
        <div className="container mx-auto mb-10">
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <ScaleLoader
                        color="rgb(255,201,75)"
                        margin={7}
                        radius={6}
                        width={10}
                        height={100}
                    />
                </div>
            ) : (
                <div className="mt-16">
                    <ProductTitle
                        name={singleProduct.name}
                        type={singleProduct.product_type}
                    />

                    <ProductPreview product={singleProduct} />
                    <Benefit />
                    <RecommendedProducts
                        products={recommendedProducts}
                        pending={isPending}
                    />
                </div>
            )}
        </div>
    );
};

export default ProductDesc;

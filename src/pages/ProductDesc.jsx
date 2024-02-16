import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductPrice from "../components/ProductPrice";
import ProductTitle from "../components/ProductTitle";
import useGetRecommendedProducts from "../hooks/useGetRecommendedProducts";
import RecommendedProducts from "../components/RecommendedProducts";
import Benefit from "../components/Benefit";

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

            <div className="flex mb-32">
                <div className="flex justify-center items-center w-screen">
                    <img
                        className="w-[10rem]"
                        src={`https://${singleProduct.api_featured_image}`}
                        alt={singleProduct.name}
                    />
                </div>
                <div>
                    <p className="font-krona text-yellow text-sm">
                        {singleProduct.product_type}
                    </p>
                    <h1 className="text-base font-krona">
                        {singleProduct.name}
                    </h1>

                    <p>{singleProduct.category}</p>

                    <div className="flex my-5 justify-between">
                        <ProductPrice price={singleProduct.price} isLarge />
                        <div></div>
                        <div>
                            <button className="inline-block rounded-full text-sm font-bold font-krona bg-yellow py-3 px-6">
                                add to cart
                            </button>
                        </div>
                    </div>
                    <p>
                        {singleProduct.description.replace(
                            /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g
                        )}
                    </p>
                </div>
            </div>
            <Benefit />
            <RecommendedProducts products={recommendedProducts} />
        </div>
    );
};

export default ProductDesc;

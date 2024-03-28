const ProductPrice = ({price, isLarge}) => {
    return ( 
        <div className="relative w-[25%] md:w-[100%]">
        <div className="absolute bg-light-grey h-10 w-10 rounded-full -z-10"></div>
        <p className={`font-krona ${isLarge ? 'text-lg md:text-2xl ' : 'text-md'} pt-2 ml-4`}>
            {price} &#8358;
        </p>
    </div>
     );
}
 
export default ProductPrice;
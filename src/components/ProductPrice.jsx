const ProductPrice = ({price, isLarge}) => {
    return ( 
        <div className="relative">
        <div className="absolute bg-light-grey h-10 w-10 rounded-full -z-10"></div>
        <p className={`font-krona text-${isLarge ? '2xl' : 'md'} pt-2 ml-4`}>
            {price} &euro;
        </p>
    </div>
     );
}
 
export default ProductPrice;
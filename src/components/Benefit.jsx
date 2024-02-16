import BenefitItem from "./BenefitItem";

const items = [
    {
        title: "Delivery",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sunt alias molestias. At sunt alias molestias." 
    },
    {
        title: "Products",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sunt alias molestias." 
    },
    {
        title: "Payments",
        text: "Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sunt alias molestias. amet consectetur adipisicing elit. At sunt alias molestias." 
    },
]

const Benefit = () => {
    return ( 
        <div className="flex container mx-auto mb-10">
            {items.map(item => (
                <BenefitItem key={item.title} item={item} />
            ))}
        </div>
     );
}
 
export default Benefit;
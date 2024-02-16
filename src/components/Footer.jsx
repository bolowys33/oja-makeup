import { Link } from "react-router-dom";
import BrandLink from "./BrandLink";

const Footer = () => {

    const links = [
        'men',
        'women',
        'skincare',
        'make-up',
        'contact us'
    ]
    
    return (
        <>
        <footer className="text-light bg-darkooo flex justify-between items-center p-5">
            <BrandLink classes={'text-yellow'}/>
            <div className="link">
                {links.map(link => (
                    <Link key={link} to="/" className="ml-4">{link}</Link>
                ))}
            </div>
        </footer>
        </>
     );
}
 
export default Footer;
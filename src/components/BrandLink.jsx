import { Link } from "react-router-dom";

const BrandLink = ({ classes }) => {
    return (
        <Link to="/" className={`text-2xl font-krona ${classes}`}>
            Oja
        </Link>
    );
};

export default BrandLink;

import { Link } from "react-router-dom";

const BrandLink = ({ classes, scroll }) => {
    const handleClick = () => {
        if (scroll) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <Link
            to="/"
            className={`text-2xl font-krona ${classes}`}
            onClick={handleClick}
        >
            Oja
        </Link>
    );
};

export default BrandLink;

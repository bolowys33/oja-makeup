import { Link } from "react-router-dom";

const SectionLink = ({ path, name, isMain, className }) => {
    return (
        <Link
            className={`inline-block rounded-full text-sm font-bold font-krona ${
                isMain ? "bg-yellow py-3 px-10" : "bg-darkooo text-white py-2 px-4 text-xs"
            } ${className}`}
            to={path}>
            {name}
        </Link>
    );
};

export default SectionLink;

import { NavLink } from "react-router-dom";

const links = [
    {
        path: `/home`,
        name: "Home",
    },
    {
        path: `/products`,
        name: "Products",
    },
    {
        path: `/about`,
        name: "About",
    },
];

const NavLinks = () => {

    return (
        <>
            {links.map((link, index) => (
                <NavLink to={link.path} key={index} className="text-sm mr-8">
                    {link.name}
                </NavLink>
            ))}
        </>
    );
};

export default NavLinks;

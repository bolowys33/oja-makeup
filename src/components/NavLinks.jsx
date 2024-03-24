import { NavLink } from "react-router-dom";
import { links } from "../constants/links";

const NavLinks = () => {
    const activeStyle = {
        color: "#DEB350",
    };

    return (
        <>
            {links.map((link, index) => (
                <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    to={link.path}
                    key={index}
                    className="lowercase text-sm mr-8
                    hidden md:block">
                    {link.name}
                </NavLink>
            ))}
        </>
    );
};

export default NavLinks;

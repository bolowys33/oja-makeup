import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../constants/links";

const Hamburger = ({ isOpen, onClose }) => {
    const activeStyle = {
        color: "yellow",
    };

    return (
        <div
            onClick={onClose}
            className={`fixed inset-y-0 left-0 bg-gray-900 bg-opacity-50 z-50 w-full transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
            <div className="absolute top-0 left-0 p-4">
                <button className="text-white" onClick={onClose}>
                    Close
                </button>
            </div>
            <div className="flex flex-col items-center bg-darkooo pt-20 w-64 h-full">
                {links.map((link, index) => (
                    <NavLink
                        to={link.path}
                        className="text-white text-md mb-6"
                        onClick={onClose}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Hamburger;

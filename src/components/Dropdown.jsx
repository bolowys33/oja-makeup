import React from "react";

const Dropdown = ({ values, onChange, name, hidden, label}) => {
    return (
        <div className={`flex flex-col p-2 md ${hidden ? "md:hidden" : ""}`}>
            <label
                htmlFor={name}
                className={`font-bold mb-2 font-krona text-sm`}>
                {label}
            </label>
            <select
                name={name}
                id={name}
                className="focus:ring-2 focus:ring-yellow outline-none border-b-2 rounded-md border-yellow"
                onChange={onChange}>
                {values.map((value, index) => (
                    <option key={`${index}-${value}`}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;

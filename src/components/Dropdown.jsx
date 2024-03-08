import React from 'react';

const Dropdown = ({ values, onChange }) => {
    return (
        <div className="flex flex-col p-2">
            <label htmlFor='brand' className="font-bold mb-2 font-krona text-sm">
                brand
            </label>
            <select
                name='brand'
                id='brand'
                className="focus:ring-2 focus:ring-yellow outline-none border-b-2 rounded-md border-yellow"
                onChange={onChange}
            >
                {values.map((value, index) => (
                    <option key={`${index}-${value}`}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
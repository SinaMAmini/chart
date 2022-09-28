import React from 'react';
import './Dropdown.scss';

function Dropdown({label, setValue, options}) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <label className="dropdown-input">
            {label}:
            <select className="select" onChange={(e) => handleChange(e)}>
                {options.map((option) => (
                    <option className="option" key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default Dropdown;

import React, {useEffect} from 'react';
import './Range.scss';

function Range({label, setValue, value}) {
    const setThumbColor = (newColor) => {
        document.documentElement.style.setProperty('--thumb-color', newColor);
    };
    useEffect(() => {
        setThumbColor(210);
    }, []);

    return (
        <label className="range-input-label">
            {label}
            <br />
            <input
                type="range"
                min="0"
                max="360"
                value={value}
                onChange={(e) => {
                    setValue(+e.target.value);
                    setThumbColor(+e.target.value);
                }}
            />
        </label>
    );
}

export default Range;

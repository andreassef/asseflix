import React from 'react';

function FormField({label, type, name, value, onChange,}) {
    return (
        <div>
            <label>
                {label}
                <input type={type} value={value} onChange={onChange} name={name}></input>
            </label>
        </div>
    )
}

export default FormField;
import React from "react";


function FormInput({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    helperText,
    maxLength
}) {

    return (
        <div>

            <label className="
                block
                text-[13px]
                font-medium
                text-textPrimary
                mb-1.5
            ">
                {label}
            </label>


            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                className="
                    w-full
                    h-[34px]
                    border
                    border-borderLight
                    rounded
                    px-2
                    text-[12px]
                    text-textPrimary
                    outline-none
                    focus:border-primary
                "
            />


            {helperText && (
                <p className="
                    text-[9px]
                    text-textSecondary
                    mt-1
                ">
                    {helperText}
                </p>
            )}

        </div>
    );
}


export default FormInput;
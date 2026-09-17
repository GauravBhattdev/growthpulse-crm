import React from "react";

import {
    ChevronDown
} from "lucide-react";


function FormSelect({
    label,
    value,
    onChange,
    placeholder,
    options = [],
    width = "w-full",
    helperText
}) {

    return (
        <div>

            <label className="
                block
                text-[13px]
                font-medium
                text-theme-text
                mb-1.5
            ">
                {label}
            </label>


            <div className={`relative ${width}`}>

                <select
                    value={value}
                    onChange={onChange}
                    className="
                        appearance-none
                        w-full
                        h-[34px]
                        border
                        border-theme-border-light
                        rounded
                        px-2
                        pr-8
                        text-[12px]
                        text-theme-text
                        bg-theme-surface
                        outline-none
                        focus:border-primary
                    "
                >

                    <option value="">
                        {placeholder}
                    </option>


                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}

                </select>


                <ChevronDown
                    size={17}
                    className="
                        absolute
                        right-2
                        top-1/2
                        -translate-y-1/2
                        pointer-events-none
                        text-theme-text-secondary
                    "
                />

            </div>


            {helperText && (
                <p className="
                    text-[9px]
                    text-theme-text-secondary
                    mt-1
                ">
                    {helperText}
                </p>
            )}

        </div>
    );
}


export default FormSelect;
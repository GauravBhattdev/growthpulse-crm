import React, { useState } from "react";


function BottomRightCheckbox() {

    const [checked, setChecked] = useState(false);


    return (

        <div className="
            fixed
            right-4
            bottom-4
            z-[100]
            bg-white
            rounded-lg
            shadow-lg
            border
            border-gray-200
            px-3
            py-2
        ">

            <label className="
                flex
                items-center
                gap-2
                cursor-pointer
                text-sm
                text-gray-700
            ">

                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) =>
                        setChecked(e.target.checked)
                    }
                    className="
                        w-4
                        h-4
                        accent-[#8B3DF5]
                        cursor-pointer
                    "
                />

                <span>
                    Checkbox
                </span>

            </label>

        </div>

    );
}


export default BottomRightCheckbox;
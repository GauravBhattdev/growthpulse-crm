import React from "react";

function Loader({ text = "Loading..." }) {

    return (

        <div className="
            flex
            flex-col
            items-center
            justify-center
            py-10
        ">

            <div className="
                w-10
                h-10
                border-4
                border-gray-200
                border-t-[#8b3df5]
                rounded-full
                animate-spin
            " />

            <p className="
                mt-3
                text-sm
                text-gray-600
            ">
                {text}
            </p>

        </div>

    );

}

export default Loader;
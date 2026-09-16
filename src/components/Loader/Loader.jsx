import React from "react";

function Loader({ text = "Loading..." }) {

    return (

        <div
            className="
                w-full
                min-h-screen

                bg-theme-page

                flex
                flex-col
                items-center
                justify-center

                py-10

                transition-colors
                duration-300
            "
        >

            <div
                className="
                    w-10
                    h-10

                    border-4
                    border-theme-border-light
                    border-t-primary

                    rounded-full

                    animate-spin
                "
            />

            <p
                className="
                    mt-3

                    text-sm

                    text-theme-text-secondary
                "
            >
                {text}
            </p>

        </div>

    );

}

export default Loader;
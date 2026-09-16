import React from "react";

function DashboardBox({ title, children }) {
    return (
        <div
            className="
                bg-theme-surface
                border
                border-theme-border-light
                rounded-[8px]

                min-h-[250px]
                lg:min-h-[190px]

                w-full
                min-w-0

                p-3
                sm:p-[18px]

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-[3px]
                hover:shadow-md
            "
        >

            {/* Box Title */}

            <h2
                className="
                    m-0

                    text-[14px]
                    sm:text-[15px]

                    font-semibold
                    text-theme-text

                    truncate
                "
            >
                {title}
            </h2>


            {/* Box Content */}

            <div
                className="
                    mt-4
                    sm:mt-5

                    min-w-0
                    w-full
                "
            >
                {children}
            </div>

        </div>
    );
}

export default DashboardBox;
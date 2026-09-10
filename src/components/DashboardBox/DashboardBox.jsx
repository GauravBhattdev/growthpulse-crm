import React from "react";

function DashboardBox({ title, children }) {
    return (
        <div
            className="
                bg-[#292438]
                border
                border-[#514b62]
                rounded-[8px]

                min-h-[250px]

                w-full
                min-w-0

                p-3
                sm:p-[18px]

                shadow-[0_1px_4px_rgba(0,0,0,0.20)]

                transition-all
                duration-300

                hover:-translate-y-[3px]
                hover:shadow-[0_6px_16px_rgba(0,0,0,0.30)]
            "
        >

            {/* Box Title */}

            <h2
                className="
                    m-0

                    text-[14px]
                    sm:text-[15px]

                    font-semibold
                    text-white

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
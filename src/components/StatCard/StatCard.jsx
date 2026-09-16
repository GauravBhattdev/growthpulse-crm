import React from "react";

function StatCard({ icon, title, value, percentage }) {
    return (

        <div
            className="
                bg-theme-surface
                border
                border-theme-border-light
                rounded-[7px]

                min-h-[102px]
                h-auto

                flex
                items-center

                p-3
                sm:p-[14px]

                shadow-sm

                w-full
                min-w-0

                transition-all
                duration-300

                hover:scale-[1.04]
            "
        >

            {/* Icon */}

            <div
                className="
                    w-9
                    h-9

                    sm:w-10
                    sm:h-10

                    rounded-full

                    bg-primary

                    text-white

                    flex
                    items-center
                    justify-center

                    shrink-0

                    mr-3
                    sm:mr-[14px]
                "
            >
                {icon}
            </div>


            {/* Information */}

            <div className="min-w-0 flex-1">

                {/* Title */}

                <p
                    className="
                        m-0
                        mb-[3px]

                        text-[12px]
                        sm:text-[13px]

                        text-theme-text-secondary

                        truncate
                    "
                >
                    {title}
                </p>


                {/* Value */}

                <h2
                    className="
                        m-0

                        text-[18px]
                        sm:text-[20px]

                        text-theme-text
                        font-semibold

                        truncate
                    "
                >
                    {value}
                </h2>


                {/* Percentage */}

                <p
                    className="
                        m-0
                        mt-[6px]
                        sm:mt-[7px]

                        text-[10px]
                        sm:text-[11px]

                        text-[#57C96A]

                        whitespace-nowrap
                    "
                >
                    ↑ {percentage} vs last week
                </p>

            </div>

        </div>

    );
}

export default StatCard;
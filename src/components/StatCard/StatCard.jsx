import React from "react";

function StatCard({ icon, title, value, percentage }) {
    return (

        <div
            className="
                bg-theme-surface
                border
                border-theme-border-light
                rounded-[8px]

                min-h-[80px]

                flex
                items-center

                px-3
                py-2

                shadow-sm

                w-full
                min-w-0

                transition-all
                duration-300

                hover:scale-[1.02]
            "
        >

            {/* Icon */}

            <div
                className="
                    w-9
                    h-9

                    rounded-full

                    bg-primary

                    text-white

                    flex
                    items-center
                    justify-center

                    shrink-0

                    mr-3
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
                        mb-[1px]

                        text-[11px]

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

                        mt-[2px]

                        text-[10px]

                        text-green-500

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
import React from "react";

function StatCard({ icon, title, value, percentage }) {
    return (

        <div
            className="
                bg-[#292438]
                border
                border-[#514b62]
                rounded-[7px]
                h-[102px]
                flex
                items-center
                p-[14px]
                shadow-[0_1px_4px_rgba(0,0,0,0.25)]
                w-full
                min-w-0
                transition-transform
                duration-300
                hover:scale-[1.04]
            "
        >

            {/* Icon */}

            <div
                className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#8B3DFF]
                    text-white
                    flex
                    items-center
                    justify-center
                    shrink-0
                    mr-[14px]
                "
            >
                {icon}
            </div>


            {/* Information */}

            <div className="min-w-0">


                {/* Title */}

                <p className="m-0 mb-[3px] text-[13px] text-[#E5E1EA]">
                    {title}
                </p>


                {/* Value */}

                <h2 className="m-0 text-[20px] text-white font-semibold">
                    {value}
                </h2>


                {/* Percentage */}

                <p className="m-0 mt-[7px] text-[11px] text-[#57C96A]">
                    ↑ {percentage} vs last week
                </p>

            </div>

        </div>

    );
}

export default StatCard;
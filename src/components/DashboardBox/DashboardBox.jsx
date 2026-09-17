import React from "react";

import { Link } from "react-router-dom";


function DashboardBox({ title, children, action, actionTo }) {
    return (
        <div
            className="
                bg-theme-surface
                border
                border-theme-border-light
                rounded-[8px]

                min-h-[200px]
                lg:min-h-[180px]

                w-full
                min-w-0

                p-3
                sm:p-4

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-[3px]
                hover:shadow-md
            "
        >

            {/* Box Header (Title + optional action) */}

            <div className="flex items-center justify-between gap-2">

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


                {action && actionTo && (

                    <Link
                        to={actionTo}
                        className="
                            text-[12px]
                            font-medium

                            text-primary

                            hover:underline

                            whitespace-nowrap

                            shrink-0
                        "
                    >
                        {action}
                    </Link>

                )}

            </div>


            {/* Box Content */}

            <div
                className="
                    mt-3
                    sm:mt-4

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
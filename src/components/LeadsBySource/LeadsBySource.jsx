import React from "react";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from "recharts";


const data = [
    { name: "Website",   value: 35, color: "#8B3DFF" },
    { name: "LinkedIn",  value: 25, color: "#2196F3" },
    { name: "Referral",  value: 20, color: "#2DBB55" },
    { name: "Cold Call", value: 10, color: "#FF9800" },
    { name: "Other",     value: 10, color: "#E91E63" }
];


function LeadsBySource() {

    return (

        <div className="w-full min-w-0">

            {/* Donut Chart */}

            <div className="w-full min-w-0 h-[180px]">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            outerRadius={80}
                            paddingAngle={2}
                        >

                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}

                        </Pie>


                        {/* Center Number */}

                        <text
                            x="50%"
                            y="47%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="currentColor"
                            fontSize="22"
                            fontWeight="bold"
                            className="text-theme-text"
                        >
                            1248
                        </text>


                        {/* Center Label */}

                        <text
                            x="50%"
                            y="58%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="currentColor"
                            fontSize="11"
                            className="text-theme-text-secondary"
                        >
                            Total Leads
                        </text>

                    </PieChart>

                </ResponsiveContainer>

            </div>


            {/* Legend */}

            <div className="flex flex-col gap-[10px] mt-[5px] w-full">

                {data.map((item) => (

                    <div
                        className="flex items-center text-[12px] min-w-0"
                        key={item.name}
                    >

                        {/* Color Dot */}

                        <span
                            className="w-2 h-2 rounded-full mr-[7px] shrink-0"
                            style={{ backgroundColor: item.color }}
                        />


                        {/* Source Name */}

                        <span className="text-theme-text">
                            {item.name}
                        </span>


                        {/* Percentage */}

                        <span className="ml-[5px] font-semibold text-theme-text">
                            {item.value}%
                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default LeadsBySource;
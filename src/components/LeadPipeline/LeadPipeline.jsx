import React from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LabelList
} from "recharts";


const data = [
    {
        stage: "New",
        leads: 320,
        color: "#8B3DFF"
    },
    {
        stage: "Contacted",
        leads: 280,
        color: "#0099FF"
    },
    {
        stage: "Qualified",
        leads: 384,
        color: "#2DBB55"
    },
    {
        stage: "Proposal",
        leads: 264,
        color: "#FF7043"
    },
    {
        stage: "Closed",
        leads: 200,
        color: "#276B35"
    }
];


function LeadPipeline() {

    return (

        <div className="w-full min-w-0">

            <div className="
                w-full
                min-w-0
                h-[235px]
                sm:h-[235px]
            ">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{
                            top: 5,
                            right: 20,
                            left: 10,
                            bottom: 5
                        }}
                    >

                        {/* X Axis */}

                        <XAxis
                            type="number"
                            hide
                        />


                        {/* Stage Names */}

                        <YAxis
                            type="category"
                            dataKey="stage"
                            width={75}
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#FFFFFF",
                                fontSize: 11
                            }}
                        />


                        {/* Tooltip */}

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#292438",
                                border: "1px solid #514b62",
                                borderRadius: "6px",
                                color: "#FFFFFF"
                            }}
                        />


                        {/* Bars */}

                        <Bar
                            dataKey="leads"
                            barSize={22}
                            radius={[0, 5, 5, 0]}
                        >

                            {/* Numbers */}

                            <LabelList
                                dataKey="leads"
                                position="right"
                                fill="#FFFFFF"
                                fontSize={11}
                                fontWeight={600}
                            />


                            {/* Different Color For Each Stage */}

                            {data.map((entry) => (

                                <Cell
                                    key={entry.stage}
                                    fill={entry.color}
                                />

                            ))}

                        </Bar>

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );
}


export default LeadPipeline;
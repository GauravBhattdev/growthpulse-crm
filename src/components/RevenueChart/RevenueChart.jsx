import React from "react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


const data = [
    { month: "Jan", revenue: 180000 },
    { month: "Feb", revenue: 260000 },
    { month: "Mar", revenue: 320000 },
    { month: "Apr", revenue: 410000 },
    { month: "May", revenue: 520000 },
    { month: "Jun", revenue: 460000 },
    { month: "Jul", revenue: 580000 }
];


function RevenueChart() {

    return (

        <div className="
            w-full
            min-w-0
            h-[235px]
        ">

            <ResponsiveContainer
                width="100%"
                height="100%"
            >

                <LineChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 15,
                        left: 0,
                        bottom: 5
                    }}
                >

                    {/* Grid */}

                    <CartesianGrid
                        stroke="#514b62"
                        strokeDasharray="3 3"
                    />


                    {/* Months */}

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: "#A9A3B5",
                            fontSize: 11
                        }}
                    />


                    {/* Revenue */}

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: "#A9A3B5",
                            fontSize: 10
                        }}
                        tickFormatter={(value) =>
                            `${value / 100000}L`
                        }
                    />


                    {/* Tooltip */}

                    <Tooltip
                        formatter={(value) =>
                            `₹${(value / 100000).toFixed(2)}L`
                        }
                        contentStyle={{
                            backgroundColor: "#292438",
                            border: "1px solid #514b62",
                            borderRadius: "6px",
                            color: "#FFFFFF"
                        }}
                    />


                    {/* Revenue Line */}

                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#8B3DFF"
                        strokeWidth={3}
                        dot={{
                            r: 4,
                            fill: "#8B3DFF"
                        }}
                        activeDot={{
                            r: 6
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );
}


export default RevenueChart;
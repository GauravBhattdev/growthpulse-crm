import React, { useState } from "react";
import { createPortal } from "react-dom";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import CustomDateRange from "../CustomDateRange/CustomDateRange";


const chartData = {

    D1: [
        { day: "00", revenue: 20 },
        { day: "04", revenue: 35 },
        { day: "08", revenue: 45 },
        { day: "12", revenue: 60 },
        { day: "16", revenue: 75 },
        { day: "20", revenue: 65 },
        { day: "24", revenue: 80 }
    ],

    D7: [
        { day: "Mon", revenue: 20 },
        { day: "Tue", revenue: 40 },
        { day: "Wed", revenue: 60 },
        { day: "Thu", revenue: 70 },
        { day: "Fri", revenue: 100 },
        { day: "Sat", revenue: 60 },
        { day: "Sun", revenue: 60 }
    ],

    D30: [
        { day: "1", revenue: 25 },
        { day: "5", revenue: 40 },
        { day: "10", revenue: 55 },
        { day: "15", revenue: 45 },
        { day: "20", revenue: 75 },
        { day: "25", revenue: 65 },
        { day: "30", revenue: 90 }
    ]

};


function RevenueChart() {

    const [selectedRange, setSelectedRange] = useState("D7");

    const [showCustomModal, setShowCustomModal] = useState(false);

    const [customDates, setCustomDates] = useState({
        startDate: "",
        endDate: ""
    });


    const data =
        selectedRange === "CUSTOM"
            ? chartData.D7
            : chartData[selectedRange];


    const handleCustomApply = (startDate, endDate) => {

        setCustomDates({
            startDate: startDate,
            endDate: endDate
        });

        setSelectedRange("CUSTOM");

        setShowCustomModal(false);

        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);

    };


    return (

        <>

            <div className="w-full min-w-0">

                {/* DATA RANGE */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        mb-3
                    "
                >

                    <span
                        className="
                            text-[11px]
                            text-[#D1CDD8]
                            whitespace-nowrap
                        "
                    >
                        Data Range
                    </span>


                    <div className="flex items-center gap-1">

                        {/* D1 */}

                        <button
                            type="button"
                            onClick={() => {
                                setSelectedRange("D1");
                                setShowCustomModal(false);
                            }}
                            className={`
                                h-[17px]
                                min-w-[35px]
                                px-2
                                rounded-[2px]
                                text-[8px]
                                font-medium
                                transition
                                cursor-pointer
                                ${
                                    selectedRange === "D1"
                                        ? "bg-[#8B3DFF] text-white"
                                        : "bg-white text-[#333]"
                                }
                            `}
                        >
                            D1
                        </button>


                        {/* D7 */}

                        <button
                            type="button"
                            onClick={() => {
                                setSelectedRange("D7");
                                setShowCustomModal(false);
                            }}
                            className={`
                                h-[17px]
                                min-w-[35px]
                                px-2
                                rounded-[2px]
                                text-[8px]
                                font-medium
                                transition
                                cursor-pointer
                                ${
                                    selectedRange === "D7"
                                        ? "bg-[#8B3DFF] text-white"
                                        : "bg-white text-[#333]"
                                }
                            `}
                        >
                            D7
                        </button>


                        {/* D30 */}

                        <button
                            type="button"
                            onClick={() => {
                                setSelectedRange("D30");
                                setShowCustomModal(false);
                            }}
                            className={`
                                h-[17px]
                                min-w-[35px]
                                px-2
                                rounded-[2px]
                                text-[8px]
                                font-medium
                                transition
                                cursor-pointer
                                ${
                                    selectedRange === "D30"
                                        ? "bg-[#8B3DFF] text-white"
                                        : "bg-white text-[#333]"
                                }
                            `}
                        >
                            D30
                        </button>


                        {/* Custom */}

                        <button
                            type="button"
                            onClick={() => setShowCustomModal(true)}
                            className={`
                                h-[17px]
                                min-w-[38px]
                                px-2
                                rounded-[2px]
                                text-[8px]
                                font-medium
                                transition
                                cursor-pointer
                                ${
                                    selectedRange === "CUSTOM"
                                        ? "bg-[#8B3DFF] text-white"
                                        : "bg-white text-[#333]"
                                }
                            `}
                        >
                            Custom
                        </button>

                    </div>

                </div>


                {/* CUSTOM DATE TEXT */}

                {selectedRange === "CUSTOM" &&
                    customDates.startDate &&
                    customDates.endDate && (

                        <p className="
                            text-[9px]
                            text-[#A9A3B5]
                            mb-2
                        ">
                            {customDates.startDate} to {customDates.endDate}
                        </p>

                    )}


                {/* REVENUE CHART */}

                <div
                    className="
                        w-full
                        min-w-0
                        h-[170px]
                    "
                >

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <AreaChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 8,
                                left: 0,
                                bottom: 5
                            }}
                        >

                            <CartesianGrid
                                stroke="#514b62"
                                strokeDasharray="3 3"
                                vertical={true}
                                horizontal={true}
                            />


                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: "#A9A3B5",
                                    fontSize: 8
                                }}
                            />


                            <YAxis
                                domain={[0, 100]}
                                ticks={[
                                    0,
                                    20,
                                    40,
                                    60,
                                    80,
                                    100
                                ]}
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: "#A9A3B5",
                                    fontSize: 8
                                }}
                            />


                            <Tooltip
                                formatter={(value) => [
                                    value,
                                    "Revenue"
                                ]}
                                contentStyle={{
                                    backgroundColor: "#292438",
                                    border: "1px solid #514b62",
                                    borderRadius: "6px",
                                    color: "#FFFFFF",
                                    fontSize: "10px"
                                }}
                            />


                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#8B3DFF"
                                strokeWidth={2}
                                fill="#8B3DFF"
                                fillOpacity={0.25}
                                dot={{
                                    r: 3,
                                    fill: "#8B3DFF",
                                    stroke: "#8B3DFF"
                                }}
                                activeDot={{
                                    r: 5
                                }}
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                </div>

            </div>


            {/* CUSTOM DATE POPUP */}

            {showCustomModal &&
    createPortal(
        <CustomDateRange
            onClose={() => setShowCustomModal(false)}
            onApply={handleCustomApply}
        />,
        document.body
    )
}

        </>

    );

}


export default RevenueChart;
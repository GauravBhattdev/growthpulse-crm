import React, { useState } from "react";

import {
    X,
    Calendar
} from "lucide-react";


function CustomDateRange({ onClose, onApply }) {

    const [startDate, setStartDate] = useState("");

    const [endDate, setEndDate] = useState("");


    /* ==============================
       RESET
    =============================== */

    const handleReset = () => {

        setStartDate("");

        setEndDate("");

    };


    /* ==============================
       QUICK SELECT
    =============================== */

    const handleQuickSelect = (type) => {

        const today = new Date();

        let start = new Date(today);

        let end = new Date(today);


        if (type === "today") {

            start = new Date(today);

            end = new Date(today);

        }


        if (type === "yesterday") {

            start.setDate(
                today.getDate() - 1
            );

            end = new Date(start);

        }


        if (type === "last7") {

            start.setDate(
                today.getDate() - 6
            );

            end = new Date(today);

        }


        if (type === "last30") {

            start.setDate(
                today.getDate() - 29
            );

            end = new Date(today);

        }


        if (type === "thisMonth") {

            start = new Date(
                today.getFullYear(),
                today.getMonth(),
                1
            );

            end = new Date(today);

        }


        if (type === "lastMonth") {

            start = new Date(
                today.getFullYear(),
                today.getMonth() - 1,
                1
            );

            end = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        }


        if (type === "thisQuarter") {

            const quarterStart =
                Math.floor(
                    today.getMonth() / 3
                ) * 3;


            start = new Date(
                today.getFullYear(),
                quarterStart,
                1
            );

            end = new Date(today);

        }


        if (type === "lastQuarter") {

            const currentQuarter =
                Math.floor(
                    today.getMonth() / 3
                );


            let year =
                today.getFullYear();


            let month =
                (currentQuarter - 1) * 3;


            if (month < 0) {

                month = 9;

                year--;

            }


            start = new Date(
                year,
                month,
                1
            );

            end = new Date(
                year,
                month + 3,
                0
            );

        }


        const formatDate = (date) => {

            const year =
                date.getFullYear();

            const month =
                String(
                    date.getMonth() + 1
                ).padStart(2, "0");

            const day =
                String(
                    date.getDate()
                ).padStart(2, "0");


            return `${year}-${month}-${day}`;

        };


        setStartDate(
            formatDate(start)
        );

        setEndDate(
            formatDate(end)
        );

    };


    /* ==============================
       APPLY
    =============================== */

    const handleApply = () => {

        if (!startDate || !endDate) {

            alert("Please select start date and end date.");

            return;

        }


        if (new Date(startDate) > new Date(endDate)) {

            alert("Start date cannot be after end date.");

            return;

        }


        if (onApply) {

            onApply(
                startDate,
                endDate
            );

        }

    };


    return (

        <div
            className="
                fixed
                inset-0
                z-[999]
                bg-black/50
            "
        >

            <div
                className="
                    absolute
                    top-3
                    right-0
                    w-full
                    max-w-[720px]
                    bg-[#171126]
                    border
                    border-[#3d315d]
                    shadow-2xl
                    text-white
                    p-8
                "
            >

                {/* HEADER */}

                <div
                    className="
                        flex
                        items-start
                        justify-between
                    "
                >

                    <div>

                        <h2
                            className="
                                text-[28px]
                                font-semibold
                            "
                        >
                            Custom Date Range
                        </h2>


                        <p
                            className="
                                mt-2
                                text-[16px]
                                text-[#D1CDD8]
                            "
                        >
                            Select a custom date range to
                            view revenue data.
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            text-gray-300
                            hover:text-white
                            cursor-pointer
                        "
                    >

                        <X size={24} />

                    </button>

                </div>


                {/* DATE INPUTS */}

                <div
                    className="
                        grid
                        grid-cols-2
                        gap-6
                        mt-6
                    "
                >

                    {/* START DATE */}

                    <div>

                        <label
                            className="
                                block
                                text-[17px]
                                mb-2
                            "
                        >
                            Start Date
                        </label>


                        <div className="relative">

                            <Calendar
                                size={22}
                                className="
                                    absolute
                                    right-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-white
                                    pointer-events-none
                                "
                            />


                            <input
                                id="datepicker-range-start"
                                name="start"
                                type="date"
                                value={startDate}
                                onChange={(e) =>
                                    setStartDate(
                                        e.target.value
                                    )
                                }
                                className="
                                    block
                                    w-full
                                    h-[55px]
                                    px-4
                                    pr-12
                                    bg-[#292438]
                                    border
                                    border-[#8b8498]
                                    text-white
                                    text-[16px]
                                    rounded-md
                                    outline-none
                                    focus:border-[#8B3DFF]
                                "
                            />

                        </div>

                    </div>


                    {/* END DATE */}

                    <div>

                        <label
                            className="
                                block
                                text-[17px]
                                mb-2
                            "
                        >
                            End Date
                        </label>


                        <div className="relative">

                            <Calendar
                                size={22}
                                className="
                                    absolute
                                    right-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-white
                                    pointer-events-none
                                "
                            />


                            <input
                                id="datepicker-range-end"
                                name="end"
                                type="date"
                                value={endDate}
                                onChange={(e) =>
                                    setEndDate(
                                        e.target.value
                                    )
                                }
                                className="
                                    block
                                    w-full
                                    h-[55px]
                                    px-4
                                    pr-12
                                    bg-[#292438]
                                    border
                                    border-[#8b8498]
                                    text-white
                                    text-[16px]
                                    rounded-md
                                    outline-none
                                    focus:border-[#8B3DFF]
                                "
                            />

                        </div>

                    </div>

                </div>


                {/* QUICK SELECT */}

                <div className="mt-7">

                    <h3
                        className="
                            text-[18px]
                            mb-4
                        "
                    >
                        Quick Select
                    </h3>


                    <div
                        className="
                            grid
                            grid-cols-4
                            gap-4
                        "
                    >

                        <button
                            type="button"
                            onClick={() =>
                                handleQuickSelect("today")
                            }
                            className="
                                h-[52px]
                                border
                                border-[#8b8498]
                                rounded-md
                                text-[16px]
                                hover:bg-[#292438]
                                hover:border-[#8B3DFF]
                            "
                        >
                            Today
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                handleQuickSelect("yesterday")
                            }
                            className="
                                h-[52px]
                                border
                                border-[#8b8498]
                                rounded-md
                                text-[16px]
                                hover:bg-[#292438]
                                hover:border-[#8B3DFF]
                            "
                        >
                            Yesterday
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                handleQuickSelect("last7")
                            }
                            className="
                                h-[52px]
                                border
                                border-[#8b8498]
                                rounded-md
                                text-[16px]
                                hover:bg-[#292438]
                                hover:border-[#8B3DFF]
                            "
                        >
                            Last 7 Days
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                handleQuickSelect("last30")
                            }
                            className="
                                h-[52px]
                                border
                                border-[#8b8498]
                                rounded-md
                                text-[16px]
                                hover:bg-[#292438]
                                hover:border-[#8B3DFF]
                            "
                        >
                            Last 30 Days
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                handleQuickSelect("thisMonth")
                            }
                            className="
                                h-[52px]
                                border
                                border-[#8b8498]
                                rounded-md
                                text-[16px]
                                hover:bg-[#292438]
                                hover:border-[#8B3DFF]
                            "
                        >
                            This Month
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                handleQuickSelect("lastMonth")
                            }
                            className="
                                h-[52px]
                                border
                                border-[#8b8498]
                                rounded-md
                                text-[16px]
                                hover:bg-[#292438]
                                hover:border-[#8B3DFF]
                            "
                        >
                            Last Month
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                handleQuickSelect("thisQuarter")
                            }
                            className="
                                h-[52px]
                                border
                                border-[#8b8498]
                                rounded-md
                                text-[16px]
                                hover:bg-[#292438]
                                hover:border-[#8B3DFF]
                            "
                        >
                            This Quarter
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                handleQuickSelect("lastQuarter")
                            }
                            className="
                                h-[52px]
                                border
                                border-[#8b8498]
                                rounded-md
                                text-[16px]
                                hover:bg-[#292438]
                                hover:border-[#8B3DFF]
                            "
                        >
                            Last Quarter
                        </button>

                    </div>

                </div>


                {/* BUTTONS */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mt-7
                    "
                >

                    <button
                        type="button"
                        onClick={handleReset}
                        className="
                            h-[48px]
                            px-7
                            border
                            border-[#8b8498]
                            rounded-md
                            text-[16px]
                            hover:bg-[#292438]
                        "
                    >
                        Reset
                    </button>


                    <div
                        className="
                            flex
                            items-center
                            gap-4
                        "
                    >

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                h-[48px]
                                px-7
                                border
                                border-[#8b8498]
                                rounded-md
                                text-[16px]
                                hover:bg-[#292438]
                            "
                        >
                            Cancel
                        </button>


                        <button
                            type="button"
                            onClick={handleApply}
                            className="
                                h-[48px]
                                px-9
                                bg-[#8B3DFF]
                                hover:bg-[#742be0]
                                rounded-md
                                text-[16px]
                                font-medium
                            "
                        >
                            Apply
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default CustomDateRange;
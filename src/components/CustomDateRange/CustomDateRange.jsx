import React, { useEffect, useState } from "react";

import { X } from "lucide-react";


function CustomDateRange({ onClose, onApply }) {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Animation states
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);


    // Open animation
    useEffect(() => {

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 20);

        return () => clearTimeout(timer);

    }, []);


    // Close animation
    const handleClose = () => {

        setIsClosing(true);

        setTimeout(() => {
            onClose();
        }, 300);

    };


    // Reset both dates
    const handleReset = () => {
        setStartDate("");
        setEndDate("");
    };


    // Quick date selection
    const handleQuickSelect = (type) => {

        const today = new Date();

        let start = new Date(today);
        let end = new Date(today);


        if (type === "today") {
            start = new Date(today);
            end = new Date(today);
        }


        if (type === "yesterday") {
            start.setDate(today.getDate() - 1);
            end = new Date(start);
        }


        if (type === "last7") {
            start.setDate(today.getDate() - 6);
            end = new Date(today);
        }


        if (type === "last30") {
            start.setDate(today.getDate() - 29);
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
                Math.floor(today.getMonth() / 3) * 3;

            start = new Date(
                today.getFullYear(),
                quarterStart,
                1
            );

            end = new Date(today);
        }


        if (type === "lastQuarter") {

            const currentQuarter =
                Math.floor(today.getMonth() / 3);

            let year = today.getFullYear();

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


        // Convert Date object to YYYY-MM-DD
        const formatDate = (date) => {

            const year = date.getFullYear();

            const month = String(
                date.getMonth() + 1
            ).padStart(2, "0");

            const day = String(
                date.getDate()
            ).padStart(2, "0");


            return `${year}-${month}-${day}`;
        };


        setStartDate(formatDate(start));
        setEndDate(formatDate(end));
    };


    // Apply selected date range
    const handleApply = () => {

        if (!startDate || !endDate) {

            alert(
                "Please select start date and end date."
            );

            return;
        }


        if (
            new Date(startDate) >
            new Date(endDate)
        ) {

            alert(
                "Start date cannot be after end date."
            );

            return;
        }


        if (onApply) {
            onApply(startDate, endDate);
        }
    };


    return (

        <div
            className="
                fixed
                inset-0
                z-[9999]
                bg-black/50
                overflow-hidden
                pointer-events-auto
            "
        >

            {/* Date Range Panel */}

            <div
                className={`
                    absolute
                    top-3
                    right-3

                    w-[520px]
                    max-w-[calc(100%-24px)]

                    max-h-[calc(100vh-24px)]
                    overflow-y-auto

                    bg-[#171126]
                    border
                    border-[#3d315d]
                    shadow-2xl

                    text-white

                    p-5

                    transform
                    transition-all
                    duration-300
                    ease-out

                    ${
                        isClosing
                            ? "translate-y-full opacity-0"
                            : isVisible
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-full opacity-0"
                    }
                `}
            >

                {/* Header */}

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        mb-4
                    "
                >

                    <div>

                        <h2
                            className="
                                text-xl
                                font-semibold
                            "
                        >
                            Custom Date Range
                        </h2>

                        <p
                            className="
                                text-xs
                                text-gray-400
                                mt-1
                            "
                        >
                            Select a date range or choose
                            a quick option.
                        </p>

                    </div>


                    {/* Close Button */}

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            p-1
                            text-gray-400
                            hover:text-white
                            transition
                            cursor-pointer
                        "
                    >
                        <X size={20} />
                    </button>

                </div>


                {/* Date Inputs */}

                <div
                    className="
                        grid
                        grid-cols-2
                        gap-3
                        mb-4
                    "
                >

                    {/* Start Date */}

                    <div>

                        <label
                            className="
                                block
                                text-xs
                                text-gray-300
                                mb-1.5
                            "
                        >
                            Start Date
                        </label>


                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) =>
                                setStartDate(e.target.value)
                            }
                            className="
                                w-full
                                h-10
                                px-3
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-white
                                text-sm
                                outline-none
                                focus:border-[#8B3DF5]
                            "
                        />

                    </div>


                    {/* End Date */}

                    <div>

                        <label
                            className="
                                block
                                text-xs
                                text-gray-300
                                mb-1.5
                            "
                        >
                            End Date
                        </label>


                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) =>
                                setEndDate(e.target.value)
                            }
                            className="
                                w-full
                                h-10
                                px-3
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-white
                                text-sm
                                outline-none
                                focus:border-[#8B3DF5]
                            "
                        />

                    </div>

                </div>


                {/* Quick Select */}

                <div className="mb-4">

                    <h3
                        className="
                            text-sm
                            font-medium
                            mb-2
                        "
                    >
                        Quick Select
                    </h3>


                    <div
                        className="
                            grid
                            grid-cols-4
                            gap-2
                        "
                    >

                        <button
                            type="button"
                            onClick={() =>
                                handleQuickSelect("today")
                            }
                            className="
                                h-9
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-xs
                                hover:bg-[#2b2145]
                                transition
                                cursor-pointer
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
                                h-9
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-xs
                                hover:bg-[#2b2145]
                                transition
                                cursor-pointer
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
                                h-9
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-xs
                                hover:bg-[#2b2145]
                                transition
                                cursor-pointer
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
                                h-9
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-xs
                                hover:bg-[#2b2145]
                                transition
                                cursor-pointer
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
                                h-9
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-xs
                                hover:bg-[#2b2145]
                                transition
                                cursor-pointer
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
                                h-9
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-xs
                                hover:bg-[#2b2145]
                                transition
                                cursor-pointer
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
                                h-9
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-xs
                                hover:bg-[#2b2145]
                                transition
                                cursor-pointer
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
                                h-9
                                rounded-md
                                bg-[#211936]
                                border
                                border-[#3d315d]
                                text-xs
                                hover:bg-[#2b2145]
                                transition
                                cursor-pointer
                            "
                        >
                            Last Quarter
                        </button>

                    </div>

                </div>


                {/* Bottom Buttons */}

                <div
                    className="
                        flex
                        justify-end
                        gap-2
                        pt-3
                        border-t
                        border-[#3d315d]
                    "
                >

                    {/* Reset */}

                    <button
                        type="button"
                        onClick={handleReset}
                        className="
                            h-9
                            px-4
                            rounded-md
                            border
                            border-[#3d315d]
                            text-xs
                            text-gray-300
                            hover:bg-[#211936]
                            transition
                            cursor-pointer
                        "
                    >
                        Reset
                    </button>


                    {/* Cancel */}

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            h-9
                            px-4
                            rounded-md
                            border
                            border-[#3d315d]
                            text-xs
                            text-gray-300
                            hover:bg-[#211936]
                            transition
                            cursor-pointer
                        "
                    >
                        Cancel
                    </button>


                    {/* Apply */}

                    <button
                        type="button"
                        onClick={handleApply}
                        className="
                            h-9
                            px-5
                            rounded-md
                            bg-[#8B3DF5]
                            text-xs
                            font-medium
                            hover:bg-[#7630D8]
                            transition
                            cursor-pointer
                        "
                    >
                        Apply
                    </button>

                </div>

            </div>

        </div>
    );
}


export default CustomDateRange;


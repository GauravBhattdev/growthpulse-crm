import React, { useEffect, useState } from "react";

import {
    X,
    Wallet,
    ArrowDownToLine,
    ArrowUpFromLine,
    RotateCcw,
    Info
} from "lucide-react";


function CreditsPopup({ onClose }) {

    const currentCredits = 234;

    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);


    // OPEN ANIMATION
    useEffect(() => {

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 20);

        return () => clearTimeout(timer);

    }, []);


    // CLOSE ANIMATION
    const handleClose = () => {

        setIsClosing(true);

        setTimeout(() => {
            onClose();
        }, 300);

    };


    return (

        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                justify-end
                items-start
            "
        >

            {/* POPUP */}

            <div
                className={`
                    absolute
                    top-10
                    right-0

                    w-full
                    sm:w-[420px]

                    h-[calc(100vh-2.5rem)]

                    bg-[#171126]
                    border-l
                    border-[#3d315d]
                    shadow-2xl
                    text-white

                    overflow-y-auto
                    overflow-x-hidden

                    transition-all
                    duration-300
                    ease-out

                    ${
                        isClosing
                            ? "translate-x-full opacity-0"
                            : isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-full opacity-0"
                    }
                `}
            >

                {/* HEADER */}

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-3

                        px-4
                        sm:px-5

                        py-3
                        sm:py-4

                        border-b
                        border-[#3d315d]
                    "
                >

                    <div className="min-w-0">

                        <h2 className="text-base font-semibold">
                            Current Credits
                        </h2>

                        <p
                            className="
                                text-[10px]
                                sm:text-[11px]
                                text-gray-400
                                mt-1
                                leading-relaxed
                            "
                        >
                            Overview of your credit balance and usage.
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            text-gray-300
                            hover:text-white
                            transition
                            cursor-pointer
                            p-1
                            shrink-0
                        "
                    >
                        <X size={20} />
                    </button>

                </div>


                {/* CURRENT CREDITS */}

                <div className="px-4 sm:px-5 pt-4">

                    <div
                        className="
                            border
                            border-[#6c637d]
                            rounded-md
                            bg-[#262236]
                            p-3
                            sm:p-4
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                sm:gap-4
                                flex-wrap
                            "
                        >

                            <div
                                className="
                                    w-10
                                    h-10
                                    sm:w-11
                                    sm:h-11
                                    rounded-full
                                    bg-purple-600
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                "
                            >

                                <Wallet
                                    size={20}
                                    className="sm:hidden"
                                />

                                <Wallet
                                    size={21}
                                    className="hidden sm:block"
                                />

                            </div>


                            <div className="flex-1 min-w-[120px]">

                                <p className="text-xs">
                                    Current Credits
                                </p>

                                <p className="text-xl font-bold mt-1">
                                    {currentCredits.toLocaleString()}
                                </p>

                                <p className="text-[9px] text-gray-400 mt-1">
                                    Last updated: Today
                                </p>

                            </div>


                            <div
                                className="
                                    border-l
                                    border-[#5b536d]
                                    pl-3
                                    text-right
                                    shrink-0
                                    ml-auto
                                "
                            >

                                <p
                                    className="
                                        text-[10px]
                                        sm:text-xs
                                        text-gray-400
                                        whitespace-nowrap
                                    "
                                >
                                    1 Credit = ₹ 1
                                </p>

                                <p
                                    className="
                                        text-[7px]
                                        sm:text-[8px]
                                        text-gray-500
                                        mt-1
                                        whitespace-nowrap
                                    "
                                >
                                    ( All prices include GST )
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* CREDIT BREAKDOWN */}

                <div className="px-4 sm:px-5 pt-5">

                    <h3 className="text-xs font-medium mb-3">
                        Credit Breakdown
                    </h3>


                    <div
                        className="
                            grid
                            grid-cols-1
                            min-[360px]:grid-cols-3
                            gap-2
                        "
                    >

                        {/* TOTAL PURCHASED */}

                        <div
                            className="
                                border
                                border-[#6c637d]
                                rounded-md
                                bg-[#211d31]
                                p-2.5
                            "
                        >

                            <div
                                className="
                                    w-8
                                    h-8
                                    rounded-full
                                    bg-green-600/30
                                    flex
                                    items-center
                                    justify-center
                                    mb-2
                                "
                            >

                                <ArrowDownToLine
                                    size={15}
                                    className="text-green-400"
                                />

                            </div>

                            <p className="text-[9px] text-gray-300">
                                Total Purchased
                            </p>

                            <p className="text-xs font-semibold mt-1">
                                500
                            </p>

                            <p className="text-[8px] text-gray-400 mt-1">
                                Credits
                            </p>

                            <p className="text-base mt-1">
                                ₹ 500
                            </p>

                        </div>


                        {/* TOTAL USED */}

                        <div
                            className="
                                border
                                border-[#6c637d]
                                rounded-md
                                bg-[#211d31]
                                p-2.5
                            "
                        >

                            <div
                                className="
                                    w-8
                                    h-8
                                    rounded-full
                                    bg-blue-600/30
                                    flex
                                    items-center
                                    justify-center
                                    mb-2
                                "
                            >

                                <ArrowUpFromLine
                                    size={15}
                                    className="text-blue-400"
                                />

                            </div>

                            <p className="text-[9px] text-gray-300">
                                Total Used
                            </p>

                            <p className="text-xs font-semibold mt-1">
                                266
                            </p>

                            <p className="text-[8px] text-gray-400 mt-1">
                                Credits
                            </p>

                            <p className="text-base mt-1">
                                ₹ 266
                            </p>

                        </div>


                        {/* TOTAL REMAINING */}

                        <div
                            className="
                                border
                                border-[#6c637d]
                                rounded-md
                                bg-[#211d31]
                                p-2.5
                            "
                        >

                            <div
                                className="
                                    w-8
                                    h-8
                                    rounded-full
                                    bg-orange-600/30
                                    flex
                                    items-center
                                    justify-center
                                    mb-2
                                "
                            >

                                <RotateCcw
                                    size={15}
                                    className="text-orange-400"
                                />

                            </div>

                            <p className="text-[9px] text-gray-300">
                                Total Remaining
                            </p>

                            <p className="text-xs font-semibold mt-1">
                                {currentCredits.toLocaleString()}
                            </p>

                            <p className="text-[8px] text-gray-400 mt-1">
                                Credits
                            </p>

                            <p className="text-base mt-1">
                                ₹ {currentCredits.toLocaleString()}
                            </p>

                        </div>

                    </div>

                </div>


                {/* INFORMATION */}

                <div className="px-4 sm:px-5 pt-4">

                    <div
                        className="
                            flex
                            items-start
                            gap-2

                            text-gray-400
                            text-[9px]
                            sm:text-[10px]

                            pb-4

                            border-b
                            border-[#3d315d]

                            leading-relaxed
                        "
                    >

                        <Info
                            size={15}
                            className="shrink-0 mt-[1px]"
                        />

                        <span>
                            Credits never expire and can be used across all features.
                        </span>

                    </div>

                </div>


                {/* RECENT TRANSACTIONS */}

                <div className="px-4 sm:px-5 pt-4">

                    <h3 className="text-xs font-medium mb-2">
                        Recent Transactions
                    </h3>


                    {/* TRANSACTION 1 */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            py-3
                            border-b
                            border-[#3d315d]
                        "
                    >

                        <div
                            className="
                                w-8
                                h-8
                                rounded-full
                                bg-green-600/30
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >

                            <ArrowDownToLine
                                size={15}
                                className="text-green-400"
                            />

                        </div>


                        <div className="flex-1 min-w-0">

                            <p className="text-xs truncate">
                                Credits Added - Package
                            </p>

                            <p className="text-[9px] text-gray-400 mt-1">
                                Today
                            </p>

                        </div>


                        <div className="text-right shrink-0">

                            <p className="text-[10px] text-green-400 whitespace-nowrap">
                                +250 Credits
                            </p>

                            <p className="text-[9px] text-gray-500 mt-1 whitespace-nowrap">
                                Balance: {currentCredits}
                            </p>

                        </div>

                    </div>


                    {/* TRANSACTION 2 */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            py-3
                            border-b
                            border-[#3d315d]
                        "
                    >

                        <div
                            className="
                                w-8
                                h-8
                                rounded-full
                                bg-orange-600/30
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >

                            <RotateCcw
                                size={15}
                                className="text-orange-400"
                            />

                        </div>


                        <div className="flex-1 min-w-0">

                            <p className="text-xs truncate">
                                Lead Export
                            </p>

                            <p className="text-[9px] text-gray-400 mt-1">
                                Today
                            </p>

                        </div>


                        <div className="text-right shrink-0">

                            <p className="text-[10px] text-orange-400 whitespace-nowrap">
                                -10 Credits
                            </p>

                            <p className="text-[9px] text-gray-500 mt-1 whitespace-nowrap">
                                Balance: {currentCredits}
                            </p>

                        </div>

                    </div>


                    {/* TRANSACTION 3 */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            py-3
                            border-b
                            border-[#3d315d]
                        "
                    >

                        <div
                            className="
                                w-8
                                h-8
                                rounded-full
                                bg-orange-600/30
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >

                            <RotateCcw
                                size={15}
                                className="text-orange-400"
                            />

                        </div>


                        <div className="flex-1 min-w-0">

                            <p className="text-xs truncate">
                                Bulk Email
                            </p>

                            <p className="text-[9px] text-gray-400 mt-1">
                                Yesterday
                            </p>

                        </div>


                        <div className="text-right shrink-0">

                            <p className="text-[10px] text-orange-400 whitespace-nowrap">
                                -25 Credits
                            </p>

                            <p className="text-[9px] text-gray-500 mt-1 whitespace-nowrap">
                                Balance: {currentCredits}
                            </p>

                        </div>

                    </div>


                    {/* TRANSACTION 4 */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            py-3
                        "
                    >

                        <div
                            className="
                                w-8
                                h-8
                                rounded-full
                                bg-green-600/30
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >

                            <ArrowDownToLine
                                size={15}
                                className="text-green-400"
                            />

                        </div>


                        <div className="flex-1 min-w-0">

                            <p className="text-xs truncate">
                                Credits Added - Package
                            </p>

                            <p className="text-[9px] text-gray-400 mt-1">
                                2 days ago
                            </p>

                        </div>


                        <div className="text-right shrink-0">

                            <p className="text-[10px] text-green-400 whitespace-nowrap">
                                +250 Credits
                            </p>

                            <p className="text-[9px] text-gray-500 mt-1 whitespace-nowrap">
                                Balance: {currentCredits}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default CreditsPopup;


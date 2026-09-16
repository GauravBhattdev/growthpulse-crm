
import React from "react";

import {
    PhoneCall,
    PhoneOutgoing,
    PhoneIncoming,
    Clock,
    Search,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Plus
} from "lucide-react";


const calls = [
    {
        id: 1,
        name: "Rahul Sharma",
        company: "TechCorp",
        type: "Outgoing",
        duration: "08:42",
        date: "28 May 2026",
        time: "10:30 AM",
        status: "Completed"
    },
    {
        id: 2,
        name: "Ankit Verma",
        company: "Nova Ltd",
        type: "Incoming",
        duration: "05:18",
        date: "28 May 2026",
        time: "11:15 AM",
        status: "Completed"
    },
    {
        id: 3,
        name: "Priya Singh",
        company: "DesignHub",
        type: "Outgoing",
        duration: "12:36",
        date: "27 May 2026",
        time: "02:20 PM",
        status: "Completed"
    },
    {
        id: 4,
        name: "Karan Joshi",
        company: "BuildX",
        type: "Incoming",
        duration: "03:45",
        date: "27 May 2026",
        time: "03:10 PM",
        status: "Missed"
    },
    {
        id: 5,
        name: "Neha Mehta",
        company: "BrightSoft",
        type: "Outgoing",
        duration: "09:21",
        date: "26 May 2026",
        time: "04:30 PM",
        status: "Completed"
    }
];


function Calling() {

    return (

        <div
            className="
                w-full
                min-h-screen

                bg-theme-page
                text-theme-text

                pl-6
                sm:pl-8
                lg:pl-10

                pr-4
                sm:pr-6
                lg:pr-8

                pt-6
                sm:pt-8
                lg:pt-10

                transition-colors
                duration-300
            "
        >

            {/* ================= PAGE HEADER ================= */}

            <div
                className="
                    flex
                    flex-col
                    sm:flex-row

                    items-start
                    sm:items-center

                    justify-between

                    gap-4
                "
            >

                <div>

                    <h1
                        className="
                            text-[27px]
                            font-semibold
                            text-theme-text
                        "
                    >
                        Calling
                    </h1>

                    <p
                        className="
                            mt-1
                            text-[13px]
                            text-theme-text-secondary
                        "
                    >
                        Manage calls and track your communication history.
                    </p>

                </div>


                {/* ================= NEW CALL ================= */}

                <button
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2

                        w-full
                        sm:w-auto

                        bg-[#4b397b]
                        text-white

                        px-5
                        py-3

                        rounded-md

                        text-sm
                        font-medium

                        hover:bg-[#3f315f]

                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:shadow-md
                    "
                >

                    <Plus size={17} />

                    New Call

                </button>

            </div>


            {/* ================= SUMMARY CARDS ================= */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4

                    gap-5

                    mt-5
                "
            >

                {/* ================= TOTAL CALLS ================= */}

                <div
                    className="
                        bg-theme-surface

                        border
                        border-theme-border-light

                        rounded-lg

                        h-[105px]

                        flex
                        items-center

                        px-5

                        shadow-sm

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-12
                            h-12

                            rounded-full

                            bg-purple-100
                            dark:bg-purple-500/10

                            text-purple-600

                            flex
                            items-center
                            justify-center

                            mr-4
                        "
                    >

                        <PhoneCall size={23} />

                    </div>


                    <div>

                        <p
                            className="
                                text-xs
                                text-theme-text-secondary
                            "
                        >
                            Total Calls
                        </p>

                        <h2
                            className="
                                text-2xl
                                font-semibold
                                text-theme-text
                            "
                        >
                            1,248
                        </h2>

                        <p
                            className="
                                text-[11px]
                                text-theme-text-muted
                            "
                        >
                            This Month
                        </p>

                    </div>

                </div>


                {/* ================= OUTGOING ================= */}

                <div
                    className="
                        bg-theme-surface

                        border
                        border-theme-border-light

                        rounded-lg

                        h-[105px]

                        flex
                        items-center

                        px-5

                        shadow-sm

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-12
                            h-12

                            rounded-full

                            bg-blue-100
                            dark:bg-blue-500/10

                            text-blue-500

                            flex
                            items-center
                            justify-center

                            mr-4
                        "
                    >

                        <PhoneOutgoing size={23} />

                    </div>


                    <div>

                        <p
                            className="
                                text-xs
                                text-theme-text-secondary
                            "
                        >
                            Outgoing
                        </p>

                        <h2
                            className="
                                text-2xl
                                font-semibold
                                text-theme-text
                            "
                        >
                            742
                        </h2>

                        <p
                            className="
                                text-[11px]
                                text-blue-500
                            "
                        >
                            59% of calls
                        </p>

                    </div>

                </div>


                {/* ================= INCOMING ================= */}

                <div
                    className="
                        bg-theme-surface

                        border
                        border-theme-border-light

                        rounded-lg

                        h-[105px]

                        flex
                        items-center

                        px-5

                        shadow-sm

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-12
                            h-12

                            rounded-full

                            bg-green-100
                            dark:bg-green-500/10

                            text-green-500

                            flex
                            items-center
                            justify-center

                            mr-4
                        "
                    >

                        <PhoneIncoming size={23} />

                    </div>


                    <div>

                        <p
                            className="
                                text-xs
                                text-theme-text-secondary
                            "
                        >
                            Incoming
                        </p>

                        <h2
                            className="
                                text-2xl
                                font-semibold
                                text-theme-text
                            "
                        >
                            506
                        </h2>

                        <p
                            className="
                                text-[11px]
                                text-green-500
                            "
                        >
                            41% of calls
                        </p>

                    </div>

                </div>


                {/* ================= DURATION ================= */}

                <div
                    className="
                        bg-theme-surface

                        border
                        border-theme-border-light

                        rounded-lg

                        h-[105px]

                        flex
                        items-center

                        px-5

                        shadow-sm

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-12
                            h-12

                            rounded-full

                            bg-orange-100
                            dark:bg-orange-500/10

                            text-orange-500

                            flex
                            items-center
                            justify-center

                            mr-4
                        "
                    >

                        <Clock size={23} />

                    </div>


                    <div>

                        <p
                            className="
                                text-xs
                                text-theme-text-secondary
                            "
                        >
                            Talk Time
                        </p>

                        <h2
                            className="
                                text-2xl
                                font-semibold
                                text-theme-text
                            "
                        >
                            86h
                        </h2>

                        <p
                            className="
                                text-[11px]
                                text-orange-500
                            "
                        >
                            +12% this month
                        </p>

                    </div>

                </div>

            </div>


            {/* ================= CALL HISTORY ================= */}

            <div
                className="
                    mt-5

                    bg-theme-surface

                    border
                    border-theme-border-light

                    rounded-lg

                    shadow-sm

                    overflow-hidden

                    transition-colors
                    duration-300
                "
            >

                {/* ================= SEARCH BAR ================= */}

                <div
                    className="
                        min-h-[55px]

                        flex
                        flex-col
                        sm:flex-row

                        items-stretch
                        sm:items-center

                        justify-between

                        gap-3

                        px-3
                        py-2

                        border-b
                        border-theme-border-light
                    "
                >

                    <div
                        className="
                            flex
                            items-center

                            border
                            border-theme-border-light

                            rounded-md

                            h-[33px]

                            w-full
                            sm:w-[200px]

                            px-2

                            bg-theme-surface
                        "
                    >

                        <Search
                            size={15}
                            className="
                                text-theme-text-muted
                            "
                        />

                        <input
                            type="text"
                            placeholder="Search calls..."
                            className="
                                ml-2

                                w-full

                                outline-none

                                bg-transparent

                                text-xs
                                text-theme-text

                                placeholder:text-theme-text-muted
                            "
                        />

                    </div>


                    <button
                        className="
                            border
                            border-theme-border-light

                            bg-theme-surface

                            px-4
                            py-2

                            rounded-md

                            text-xs
                            text-theme-text-secondary

                            hover:bg-theme-surface-secondary
                            hover:text-theme-text

                            transition

                            w-full
                            sm:w-auto
                        "
                    >
                        All Calls
                    </button>

                </div>


                {/* ================= TABLE ================= */}

                <div className="overflow-x-auto">

                    <table
                        className="
                            w-full
                            min-w-[850px]
                            border-collapse
                        "
                    >

                        <thead>

                            <tr
                                className="
                                    bg-purple-100
                                    dark:bg-purple-500/10
                                "
                            >

                                <th
                                    className="
                                        text-left
                                        px-6
                                        py-3

                                        text-xs
                                        font-medium

                                        text-theme-text-secondary
                                    "
                                >
                                    Contact
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3

                                        text-xs
                                        font-medium

                                        text-theme-text-secondary
                                    "
                                >
                                    Company
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3

                                        text-xs
                                        font-medium

                                        text-theme-text-secondary
                                    "
                                >
                                    Type
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3

                                        text-xs
                                        font-medium

                                        text-theme-text-secondary
                                    "
                                >
                                    Duration
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3

                                        text-xs
                                        font-medium

                                        text-theme-text-secondary
                                    "
                                >
                                    Date
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3

                                        text-xs
                                        font-medium

                                        text-theme-text-secondary
                                    "
                                >
                                    Status
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3

                                        text-xs
                                        font-medium

                                        text-theme-text-secondary
                                    "
                                >
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {calls.map((call) => (

                                <tr
                                    key={call.id}
                                    className="
                                        border-b
                                        border-theme-border-light

                                        hover:bg-theme-surface-secondary

                                        transition-colors
                                        duration-200
                                    "
                                >

                                    {/* CONTACT */}

                                    <td
                                        className="
                                            px-6
                                            py-4

                                            text-xs
                                            font-medium

                                            text-theme-text
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            <div
                                                className="
                                                    w-8
                                                    h-8

                                                    rounded-full

                                                    bg-purple-100
                                                    dark:bg-purple-500/10

                                                    text-purple-600

                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >
                                                {call.name.charAt(0)}
                                            </div>

                                            {call.name}

                                        </div>

                                    </td>


                                    {/* COMPANY */}

                                    <td
                                        className="
                                            px-4
                                            py-4

                                            text-xs
                                            text-theme-text-secondary
                                        "
                                    >
                                        {call.company}
                                    </td>


                                    {/* TYPE */}

                                    <td
                                        className="
                                            px-4
                                            py-4

                                            text-xs
                                            text-theme-text-secondary
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                            "
                                        >

                                            {call.type === "Outgoing"
                                                ? (
                                                    <PhoneOutgoing
                                                        size={14}
                                                        className="text-blue-500"
                                                    />
                                                )
                                                : (
                                                    <PhoneIncoming
                                                        size={14}
                                                        className="text-green-500"
                                                    />
                                                )
                                            }

                                            {call.type}

                                        </div>

                                    </td>


                                    {/* DURATION */}

                                    <td
                                        className="
                                            px-4
                                            py-4

                                            text-xs
                                            text-theme-text-secondary
                                        "
                                    >
                                        {call.duration}
                                    </td>


                                    {/* DATE */}

                                    <td
                                        className="
                                            px-4
                                            py-4

                                            text-xs
                                            text-theme-text-secondary
                                        "
                                    >

                                        {call.date}

                                        <br />

                                        <span
                                            className="
                                                text-[10px]
                                                text-theme-text-muted
                                            "
                                        >
                                            {call.time}
                                        </span>

                                    </td>


                                    {/* STATUS */}

                                    <td className="px-4 py-4">

                                        <span
                                            className={`
                                                px-2
                                                py-1

                                                rounded

                                                text-[10px]

                                                ${
                                                    call.status === "Completed"
                                                        ? "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400"
                                                        : "bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400"
                                                }
                                            `}
                                        >
                                            {call.status}
                                        </span>

                                    </td>


                                    {/* ACTION */}

                                    <td className="px-4 py-4">

                                        <MoreVertical
                                            size={17}
                                            className="
                                                cursor-pointer

                                                text-theme-text-secondary

                                                hover:text-theme-text

                                                transition
                                            "
                                        />

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* ================= PAGINATION ================= */}

                <div
                    className="
                        min-h-[55px]

                        flex
                        flex-col
                        sm:flex-row

                        items-center

                        justify-between

                        gap-3

                        px-5
                        sm:px-8

                        py-3
                    "
                >

                    <p
                        className="
                            text-xs
                            text-theme-text-muted
                        "
                    >
                        Showing 1 to 5 of 37 results
                    </p>


                    <div
                        className="
                            flex
                            items-center
                            gap-5
                        "
                    >

                        <button
                            className="
                                text-theme-text-secondary

                                hover:text-purple-500

                                transition
                            "
                        >
                            <ChevronLeft size={16} />
                        </button>


                        <button
                            className="
                                w-7
                                h-7

                                bg-purple-600
                                text-white

                                rounded

                                flex
                                items-center
                                justify-center

                                text-xs
                            "
                        >
                            1
                        </button>


                        <button
                            className="
                                text-xs
                                text-theme-text-secondary

                                hover:text-theme-text
                            "
                        >
                            2
                        </button>


                        <button
                            className="
                                text-xs
                                text-theme-text-secondary

                                hover:text-theme-text
                            "
                        >
                            3
                        </button>


                        <span
                            className="
                                text-xs
                                text-theme-text-muted
                            "
                        >
                            ...
                        </span>


                        <button
                            className="
                                text-theme-text-secondary

                                hover:text-purple-500

                                transition
                            "
                        >
                            <ChevronRight size={16} />
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default Calling;

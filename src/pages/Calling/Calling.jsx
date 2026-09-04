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

        <div className="w-full min-h-screen bg-white pl-6 sm:pl-8 lg:pl-10 pt-6 sm:pt-8 lg:pt-10">

            {/* ================= PAGE HEADER ================= */}

            <div className="flex items-start justify-between">

                <div>

                    <h1 className="text-[27px] font-semibold text-[#111]">
                        Calling
                    </h1>

                    <p className="mt-1 text-[13px] text-[#444]">
                        Manage calls and track your communication history.
                    </p>

                </div>


                <button
                    className="
                        flex items-center gap-2
                        bg-[#4b397b]
                        text-white
                        px-5 py-3
                        rounded-md
                        text-sm
                        font-medium
                        hover:bg-[#3f315f]
                        transition
                    "
                >

                    <Plus size={17} />

                    New Call

                </button>

            </div>


            {/* ================= SUMMARY CARDS ================= */}

            <div className="grid grid-cols-4 gap-5 mt-5">


                {/* Total Calls */}

                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        h-[105px]
                        flex items-center
                        px-5
                        shadow-sm
                    "
                >

                    <div
                        className="
                            w-12 h-12
                            rounded-full
                            bg-purple-100
                            text-purple-600
                            flex items-center
                            justify-center
                            mr-4
                        "
                    >

                        <PhoneCall size={23} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-600">
                            Total Calls
                        </p>

                        <h2 className="text-2xl font-semibold">
                            1,248
                        </h2>

                        <p className="text-[11px] text-gray-500">
                            This Month
                        </p>

                    </div>

                </div>


                {/* Outgoing */}

                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        h-[105px]
                        flex items-center
                        px-5
                        shadow-sm
                    "
                >

                    <div
                        className="
                            w-12 h-12
                            rounded-full
                            bg-blue-100
                            text-blue-500
                            flex items-center
                            justify-center
                            mr-4
                        "
                    >

                        <PhoneOutgoing size={23} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-600">
                            Outgoing
                        </p>

                        <h2 className="text-2xl font-semibold">
                            742
                        </h2>

                        <p className="text-[11px] text-blue-500">
                            59% of calls
                        </p>

                    </div>

                </div>


                {/* Incoming */}

                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        h-[105px]
                        flex items-center
                        px-5
                        shadow-sm
                    "
                >

                    <div
                        className="
                            w-12 h-12
                            rounded-full
                            bg-green-100
                            text-green-500
                            flex items-center
                            justify-center
                            mr-4
                        "
                    >

                        <PhoneIncoming size={23} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-600">
                            Incoming
                        </p>

                        <h2 className="text-2xl font-semibold">
                            506
                        </h2>

                        <p className="text-[11px] text-green-500">
                            41% of calls
                        </p>

                    </div>

                </div>


                {/* Duration */}

                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        h-[105px]
                        flex items-center
                        px-5
                        shadow-sm
                    "
                >

                    <div
                        className="
                            w-12 h-12
                            rounded-full
                            bg-orange-100
                            text-orange-500
                            flex items-center
                            justify-center
                            mr-4
                        "
                    >

                        <Clock size={23} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-600">
                            Talk Time
                        </p>

                        <h2 className="text-2xl font-semibold">
                            86h
                        </h2>

                        <p className="text-[11px] text-orange-500">
                            +12% this month
                        </p>

                    </div>

                </div>

            </div>


            {/* ================= CALL HISTORY ================= */}

            <div
                className="
                    mt-5
                    bg-white
                    border border-gray-300
                    rounded-lg
                    shadow-sm
                    overflow-hidden
                "
            >

                {/* Search */}

                <div
                    className="
                        h-[55px]
                        flex items-center
                        justify-between
                        px-3
                        border-b border-gray-300
                    "
                >

                    <div
                        className="
                            flex items-center
                            border border-gray-300
                            rounded-md
                            h-[33px]
                            w-[200px]
                            px-2
                        "
                    >

                        <Search
                            size={15}
                            className="text-gray-500"
                        />

                        <input
                            type="text"
                            placeholder="Search calls..."
                            className="
                                ml-2
                                w-full
                                outline-none
                                text-xs
                            "
                        />

                    </div>

                    <button
                        className="
                            border border-gray-300
                            px-4 py-2
                            rounded-md
                            text-xs
                        "
                    >
                        All Calls
                    </button>

                </div>


                {/* Table */}

                <table className="w-full border-collapse">

                    <thead>

                        <tr className="bg-purple-300">

                            <th className="text-left px-6 py-3 text-xs">
                                Contact
                            </th>

                            <th className="text-left px-4 py-3 text-xs">
                                Company
                            </th>

                            <th className="text-left px-4 py-3 text-xs">
                                Type
                            </th>

                            <th className="text-left px-4 py-3 text-xs">
                                Duration
                            </th>

                            <th className="text-left px-4 py-3 text-xs">
                                Date
                            </th>

                            <th className="text-left px-4 py-3 text-xs">
                                Status
                            </th>

                            <th className="text-left px-4 py-3 text-xs">
                                Action
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {calls.map((call) => (

                            <tr
                                key={call.id}
                                className="
                                    border-b border-gray-300
                                    hover:bg-gray-50
                                "
                            >

                                <td className="px-6 py-4 text-xs font-medium">

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                w-8 h-8
                                                rounded-full
                                                bg-purple-100
                                                text-purple-600
                                                flex items-center
                                                justify-center
                                            "
                                        >
                                            {call.name.charAt(0)}
                                        </div>

                                        {call.name}

                                    </div>

                                </td>

                                <td className="px-4 py-4 text-xs">
                                    {call.company}
                                </td>

                                <td className="px-4 py-4 text-xs">

                                    <div className="flex items-center gap-2">

                                        {call.type === "Outgoing"
                                            ? <PhoneOutgoing size={14} />
                                            : <PhoneIncoming size={14} />
                                        }

                                        {call.type}

                                    </div>

                                </td>

                                <td className="px-4 py-4 text-xs">
                                    {call.duration}
                                </td>

                                <td className="px-4 py-4 text-xs">
                                    {call.date}
                                    <br />
                                    <span className="text-[10px] text-gray-500">
                                        {call.time}
                                    </span>
                                </td>

                                <td className="px-4 py-4">

                                    <span
                                        className={`
                                            px-2 py-1
                                            rounded
                                            text-[10px]
                                            ${
                                                call.status === "Completed"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-red-100 text-red-500"
                                            }
                                        `}
                                    >
                                        {call.status}
                                    </span>

                                </td>

                                <td className="px-4 py-4">

                                    <MoreVertical
                                        size={17}
                                        className="cursor-pointer"
                                    />

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>


                {/* Pagination */}

                <div
                    className="
                        h-[55px]
                        flex items-center
                        justify-between
                        px-8
                    "
                >

                    <p className="text-xs text-gray-600">
                        Showing 1 to 5 of 37 results
                    </p>

                    <div className="flex items-center gap-5">

                        <ChevronLeft size={16} />

                        <span
                            className="
                                w-7 h-7
                                bg-purple-600
                                text-white
                                rounded
                                flex items-center
                                justify-center
                                text-xs
                            "
                        >
                            1
                        </span>

                        <span className="text-xs">
                            2
                        </span>

                        <span className="text-xs">
                            3
                        </span>

                        <span className="text-xs">
                            ...
                        </span>

                        <ChevronRight size={16} />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Calling;
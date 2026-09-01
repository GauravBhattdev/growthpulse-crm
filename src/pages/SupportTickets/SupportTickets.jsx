import React from "react";

import { useNavigate } from "react-router-dom";

import {
    Ticket,
    MessageSquare,
    Clock,
    Check,
    X,
    Search,
    ChevronDown,
    Filter,
    Eye,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Upload,
    Plus,
    Phone
} from "lucide-react";


// =====================================================
// TICKETS DATA
// =====================================================

const tickets = [
    {
        id: "#TKT-1024",
        subject: "Unable to login to account",
        customer: "Rahul Sharma",
        department: "Account",
        priority: "High",
        status: "Open",
        date: "24 May 2026",
        time: "10:30 AM"
    },
    {
        id: "#TKT-1023",
        subject: "Payment not processed",
        customer: "Ankit Verma",
        department: "Billing",
        priority: "Medium",
        status: "In Progress",
        date: "24 May 2026",
        time: "09:15 PM"
    },
    {
        id: "#TKT-1022",
        subject: "Feature not working",
        customer: "Priya Singh",
        department: "Technical",
        priority: "High",
        status: "Open",
        date: "23 May 2026",
        time: "04:45 PM"
    },
    {
        id: "#TKT-1021",
        subject: "Request your fund",
        customer: "Karan Joshi",
        department: "Billing",
        priority: "Low",
        status: "Resolved",
        date: "23 May 2026",
        time: "09:20 AM"
    },
    {
        id: "#TKT-1020",
        subject: "How to add team member?",
        customer: "Neha Mehta",
        department: "General",
        priority: "Low",
        status: "Closed",
        date: "22 May 2026",
        time: "11:10 AM"
    },
    {
        id: "#TKT-1019",
        subject: "Facing dashboard error",
        customer: "Saurabh Patel",
        department: "Technical",
        priority: "Medium",
        status: "In Progress",
        date: "22 May 2026",
        time: "10:05 PM"
    },
    {
        id: "#TKT-1018",
        subject: "Need invoice for last payment",
        customer: "Divya Singh",
        department: "Billing",
        priority: "Low",
        status: "Resolved",
        date: "21 May 2026",
        time: "05:30 PM"
    },
    {
        id: "#TKT-1017",
        subject: "Cannot update profile",
        customer: "Mehul Jain",
        department: "Account",
        priority: "Medium",
        status: "Open",
        date: "21 May 2026",
        time: "03:20 PM"
    }
];


// =====================================================
// SUPPORT TICKETS COMPONENT
// =====================================================

function SupportTickets() {

    // =================================================
    // NAVIGATION
    // =================================================

    const navigate = useNavigate();


    // =================================================
    // CALLING PAGE NAVIGATION
    // =================================================

    const handleCalling = () => {

        navigate("/calling");

    };


    return (

        <div className="w-full min-h-screen bg-white">

            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div
                className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                    gap-4
                "
            >

                {/* =================================================
                    PAGE TITLE
                ================================================= */}

                <div>

                    <h1 className="text-[27px] font-semibold text-[#111]">
                        Support Tickets
                    </h1>

                    <p className="mt-1 text-[13px] text-[#444]">
                        Manage your subscription, payments and billing details
                    </p>

                </div>


                {/* =================================================
                    CALLING BUTTON
                ================================================= */}

                <button
                    onClick={handleCalling}
                    className="
                        group

                        flex
                        items-center
                        justify-center
                        gap-2

                        w-full
                        sm:w-auto

                        px-5
                        py-2.5

                        bg-[#4b397b]
                        text-white

                        rounded-md

                        text-sm
                        font-medium

                        shadow-sm

                        transition-all
                        duration-300
                        ease-out

                        hover:bg-[#3f315f]
                        hover:scale-[1.03]
                        hover:-translate-y-0.5
                        hover:shadow-lg

                        active:scale-[0.98]
                    "
                >

                    <Phone
                        size={17}
                        className="
                            transition-all
                            duration-300

                            group-hover:-translate-y-1
                            group-hover:rotate-6
                        "
                    />

                    Calling

                </button>

            </div>


            {/* =================================================
                SUMMARY CARDS
            ================================================= */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-5
                    gap-4
                    mt-5
                "
            >

                {/* TOTAL TICKETS */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4

                        transition-all
                        duration-300
                        ease-out

                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-purple-100
                            text-purple-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <Ticket size={21} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-700">
                            Total Tickets
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            1,248
                        </h2>

                        <p className="text-[10px] text-gray-500">
                            All Time
                        </p>

                    </div>

                </div>


                {/* OPEN */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4

                        transition-all
                        duration-300
                        ease-out

                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-blue-100
                            text-blue-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <MessageSquare size={21} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-700">
                            Open
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            156
                        </h2>

                    </div>

                </div>


                {/* IN PROGRESS */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4

                        transition-all
                        duration-300
                        ease-out

                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-orange-100
                            text-orange-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <Clock size={21} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-700">
                            In Progress
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            72
                        </h2>

                    </div>

                </div>


                {/* RESOLVED */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4

                        transition-all
                        duration-300
                        ease-out

                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-green-100
                            text-green-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <Check size={22} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-700">
                            Resolved
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            980
                        </h2>

                    </div>

                </div>


                {/* CLOSED */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4

                        transition-all
                        duration-300
                        ease-out

                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-red-100
                            text-red-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <X size={22} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-700">
                            Closed
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            50
                        </h2>

                    </div>

                </div>

            </div>


            {/* =================================================
                ACTION BAR
            ================================================= */}

            <div
                className="
                    mt-7
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-3
                "
            >

                {/* SEARCH */}

                <div
                    className="
                        flex
                        items-center
                        border
                        border-gray-300
                        rounded-md
                        h-[32px]
                        w-full
                        sm:w-[145px]
                        px-2
                        bg-white
                    "
                >

                    <Search
                        size={14}
                        className="text-gray-600 shrink-0"
                    />

                    <input
                        type="text"
                        placeholder="Search Invoice"
                        className="
                            ml-2
                            w-full
                            outline-none
                            border-none
                            text-[10px]
                            text-gray-700
                            placeholder:text-gray-500
                        "
                    />

                </div>


                {/* RIGHT SIDE ACTION BUTTONS */}

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        w-full
                        sm:w-auto
                    "
                >

                    {/* IMPORT */}

                    <button
                        className="
                            h-[32px]
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-3
                            border
                            border-gray-300
                            bg-white
                            rounded-md
                            text-[10px]
                            text-gray-700

                            hover:bg-gray-100

                            transition
                            duration-200

                            flex-1
                            sm:flex-none
                        "
                    >

                        <Upload size={13} />

                        Import Invoice

                    </button>


                    {/* CREATE */}

                    <button
                        className="
                            h-[32px]
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-3
                            bg-[#8b3df5]
                            text-white
                            rounded-md
                            text-[10px]
                            font-medium

                            hover:bg-[#7430d6]

                            transition
                            duration-200

                            flex-1
                            sm:flex-none
                        "
                    >

                        <Plus size={14} />

                        Create Invoice

                    </button>

                </div>

            </div>


            {/* =================================================
                TABLE CONTAINER
            ================================================= */}

            <div
                className="
                    mt-2
                    bg-white
                    border border-gray-300
                    rounded-lg
                    shadow-sm
                    overflow-hidden
                "
            >

                {/* FILTER BAR */}

                <div
                    className="
                        min-h-[52px]
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        gap-3
                        px-2
                        py-2
                        border-b
                        border-gray-300
                    "
                >

                    {/* DATE FILTERS */}

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-1
                        "
                    >

                        <button
                            className="
                                h-[30px]
                                px-4
                                border
                                border-gray-300
                                text-[9px]
                                text-gray-700
                                bg-white
                            "
                        >
                            D1
                        </button>

                        <button
                            className="
                                h-[30px]
                                px-4
                                border
                                border-gray-300
                                text-[9px]
                                text-white
                                bg-[#8b3df5]
                            "
                        >
                            D7
                        </button>

                        <button
                            className="
                                h-[30px]
                                px-4
                                border
                                border-gray-300
                                text-[9px]
                                text-gray-700
                                bg-white
                            "
                        >
                            D15
                        </button>

                        <button
                            className="
                                h-[30px]
                                px-4
                                border
                                border-gray-300
                                text-[9px]
                                text-gray-700
                                bg-white
                            "
                        >
                            D30
                        </button>

                        <button
                            className="
                                h-[30px]
                                px-4
                                border
                                border-gray-300
                                text-[9px]
                                text-gray-700
                                bg-white
                            "
                        >
                            Custom
                        </button>

                    </div>


                    {/* FILTERS */}

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                        "
                    >

                        {/* STATUS */}

                        <button
                            className="
                                h-[32px]
                                min-w-[82px]
                                px-3
                                border
                                border-gray-300
                                rounded-md
                                flex
                                items-center
                                justify-between
                                gap-2
                                text-[10px]
                                text-gray-700
                            "
                        >

                            All Status

                            <ChevronDown size={13} />

                        </button>


                        {/* PRIORITY */}

                        <button
                            className="
                                h-[32px]
                                min-w-[80px]
                                px-3
                                border
                                border-gray-300
                                rounded-md
                                flex
                                items-center
                                justify-between
                                gap-2
                                text-[10px]
                                text-gray-700
                            "
                        >

                            All Priority

                            <ChevronDown size={13} />

                        </button>


                        {/* DEPARTMENT */}

                        <button
                            className="
                                h-[32px]
                                min-w-[105px]
                                px-3
                                border
                                border-gray-300
                                rounded-md
                                flex
                                items-center
                                justify-between
                                gap-2
                                text-[10px]
                                text-gray-700
                            "
                        >

                            All Departments

                            <ChevronDown size={13} />

                        </button>


                        {/* FILTER */}

                        <button
                            className="
                                h-[32px]
                                w-[34px]
                                border
                                border-gray-300
                                rounded-md
                                flex
                                items-center
                                justify-center
                                hover:bg-gray-100
                            "
                        >

                            <Filter size={15} />

                        </button>

                    </div>

                </div>


                {/* =================================================
                    TABLE
                ================================================= */}

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[900px] border-collapse">

                        <thead>

                            <tr className="bg-purple-300">

                                <th className="text-left px-7 py-2.5 text-[10px] font-medium text-gray-700">
                                    Ticket ID
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Subject
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Customer
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Department
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Priority
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Status
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Created On
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {tickets.map((ticket) => (

                                <tr
                                    key={ticket.id}
                                    className="
                                        border-b
                                        border-gray-300
                                        hover:bg-gray-50
                                        transition
                                        duration-200
                                    "
                                >

                                    <td className="px-7 py-3 text-[10px] font-medium text-purple-600">
                                        {ticket.id}
                                    </td>

                                    <td className="px-3 py-3 text-[10px] text-gray-700 whitespace-nowrap">
                                        {ticket.subject}
                                    </td>

                                    <td className="px-3 py-3 text-[10px] text-gray-700 whitespace-nowrap">
                                        {ticket.customer}
                                    </td>

                                    <td className="px-3 py-3 text-[10px] text-gray-700">
                                        {ticket.department}
                                    </td>

                                    <td className="px-3 py-3">

                                        <span
                                            className={`
                                                inline-block
                                                px-2
                                                py-1
                                                rounded
                                                text-[8px]
                                                font-medium

                                                ${
                                                    ticket.priority === "High"
                                                        ? "bg-red-100 text-red-500"
                                                        : ticket.priority === "Medium"
                                                        ? "bg-orange-100 text-orange-500"
                                                        : "bg-green-100 text-green-600"
                                                }
                                            `}
                                        >

                                            {ticket.priority}

                                        </span>

                                    </td>

                                    <td className="px-3 py-3">

                                        <span
                                            className={`
                                                inline-block
                                                px-2
                                                py-1
                                                rounded
                                                text-[8px]
                                                font-medium

                                                ${
                                                    ticket.status === "Open"
                                                        ? "bg-blue-100 text-blue-500"
                                                        : ticket.status === "In Progress"
                                                        ? "bg-orange-100 text-orange-500"
                                                        : ticket.status === "Resolved"
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-gray-200 text-gray-600"
                                                }
                                            `}
                                        >

                                            {ticket.status}

                                        </span>

                                    </td>

                                    <td className="px-3 py-2 text-[9px] text-gray-700 whitespace-nowrap">

                                        <div>
                                            {ticket.date}
                                        </div>

                                        <div className="text-[7px] text-gray-500">
                                            {ticket.time}
                                        </div>

                                    </td>

                                    <td className="px-3 py-3">

                                        <div className="flex items-center gap-4">

                                            <Eye
                                                size={14}
                                                className="
                                                    text-gray-600
                                                    cursor-pointer
                                                    hover:text-purple-600
                                                    transition
                                                    duration-200
                                                "
                                            />

                                            <MoreVertical
                                                size={15}
                                                className="
                                                    text-gray-700
                                                    cursor-pointer
                                                    hover:scale-110
                                                    transition
                                                    duration-200
                                                "
                                            />

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* =================================================
                    PAGINATION
                ================================================= */}

                <div
                    className="
                        min-h-[40px]
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-3
                        px-4
                        sm:px-7
                        py-2
                    "
                >

                    <p className="text-[9px] text-gray-600">
                        Showing 1 to 6 of 37 results
                    </p>


                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-3
                            sm:gap-5
                        "
                    >

                        <button className="text-gray-700">
                            <ChevronLeft size={14} />
                        </button>

                        <button
                            className="
                                w-5
                                h-5
                                bg-purple-600
                                text-white
                                rounded
                                text-[9px]
                            "
                        >
                            1
                        </button>

                        <button className="text-[9px] text-gray-700">
                            2
                        </button>

                        <button className="text-[9px] text-gray-700">
                            3
                        </button>

                        <span className="text-[9px] text-gray-500">
                            ...
                        </span>

                        <button className="text-[9px] text-gray-700">
                            250
                        </button>

                        <button className="text-gray-700">
                            <ChevronRight size={14} />
                        </button>

                        <button
                            className="
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-300
                                rounded
                                px-2.5
                                py-1.5
                                text-[9px]
                            "
                        >

                            10 / Page

                            <ChevronDown size={11} />

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default SupportTickets;
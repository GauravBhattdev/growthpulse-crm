import React from "react";

import {
    Users,
    UserRound,
    Phone,
    Target,
    Send,
    CheckCircle,
    Search,
    ChevronDown,
    SlidersHorizontal,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Upload,
    UserPlus
} from "lucide-react";


// =====================================================
// LEAD STATISTICS
// =====================================================

const leadStats = [
    {
        title: "Total Leads",
        value: "1,248",
        icon: Users,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-500"
    },
    {
        title: "New",
        value: "320",
        icon: UserRound,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-400"
    },
    {
        title: "Contacted",
        value: "348",
        icon: Phone,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-400"
    },
    {
        title: "Qualified",
        value: "384",
        icon: Target,
        iconBg: "bg-green-100",
        iconColor: "text-green-500"
    },
    {
        title: "Proposal",
        value: "264",
        icon: Send,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-400"
    },
    {
        title: "Closed",
        value: "200",
        icon: CheckCircle,
        iconBg: "bg-green-100",
        iconColor: "text-green-500"
    }
];


// =====================================================
// LEADS DATA
// =====================================================

const leads = [
    {
        id: 1,
        name: "Rahul Sharma",
        company: "TechCorp",
        source: "Website",
        assigned: "Him Mostins",
        status: "Qualified",
        activity: "2m ago",
        avatar: "RS",
        avatarBg: "bg-green-500"
    },
    {
        id: 2,
        name: "Ankit Verma",
        company: "Nova Ltd",
        source: "LinkedIn",
        assigned: "Virele Netkatorie",
        status: "Contacted",
        activity: "10m ago",
        avatar: "AV",
        avatarBg: "bg-purple-500"
    },
    {
        id: 3,
        name: "Priya Singh",
        company: "DesignHub",
        source: "Referral",
        assigned: "Linte Preddenbling",
        status: "New",
        activity: "20m ago",
        avatar: "PS",
        avatarBg: "bg-orange-500"
    },
    {
        id: 4,
        name: "Karan Joshi",
        company: "BuildX",
        source: "Cold Call",
        assigned: "Him Mostins",
        status: "Proposal",
        activity: "30m ago",
        avatar: "KJ",
        avatarBg: "bg-blue-500"
    },
    {
        id: 5,
        name: "Neha Mehta",
        company: "BrightSoft",
        source: "Website",
        assigned: "Virele Netkatorie",
        status: "Closed",
        activity: "1h ago",
        avatar: "NM",
        avatarBg: "bg-green-600"
    }
];


// =====================================================
// LEADS COMPONENT
// =====================================================

function Leads() {

    return (

        <div className="w-full min-h-screen bg-white">

            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div className="
                flex
                flex-col
                lg:flex-row
                lg:items-start
                lg:justify-between
                gap-4
            ">

                {/* PAGE TITLE */}

                <div>

                    <h1 className="text-[27px] font-semibold text-[#111]">
                        Leads
                    </h1>

                    <p className="mt-1 text-[13px] text-[#444]">
                        Track and Manage all your leads in one place.
                    </p>

                </div>


                {/* =================================================
                    PAGE ACTION BUTTONS
                ================================================= */}

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    lg:gap-4
                    lg:mt-3
                ">

                    {/* IMPORT LEADS */}

                    <button
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            bg-white
                            border
                            border-[#333]
                            text-[#222]
                            px-4
                            py-2.5
                            lg:px-5
                            lg:py-3
                            rounded-md
                            text-xs
                            lg:text-sm
                            font-medium
                            hover:bg-gray-100
                            hover:-translate-y-0.5
                            active:scale-95
                            transition-all
                            duration-200
                        "
                    >

                        <Upload size={18} />

                        Import leads

                    </button>


                    {/* CREATE LEAD */}

                    <button
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            bg-[#4b397b]
                            text-white
                            px-4
                            py-2.5
                            lg:px-5
                            lg:py-3
                            rounded-md
                            text-xs
                            lg:text-sm
                            font-medium
                            hover:bg-[#3f315f]
                            hover:-translate-y-0.5
                            active:scale-95
                            transition-all
                            duration-200
                        "
                    >

                        <span className="text-[20px] leading-none">
                            +
                        </span>

                        Create Lead

                    </button>


                    {/* ASSIGN NEW LEAD */}

                    <button
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            bg-[#4b397b]
                            text-white
                            px-4
                            py-2.5
                            lg:px-5
                            lg:py-3
                            rounded-md
                            text-xs
                            lg:text-sm
                            font-medium
                            hover:bg-[#3f315f]
                            hover:-translate-y-0.5
                            active:scale-95
                            transition-all
                            duration-200
                        "
                    >

                        <UserPlus size={18} />

                        Assign New Lead

                    </button>

                </div>

            </div>


            {/* =================================================
                LEAD STAT CARDS
            ================================================= */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-6
                    gap-4
                    mt-7
                "
            >

                {leadStats.map((stat) => {

                    const Icon = stat.icon;

                    return (

                        <div
                            key={stat.title}
                            className="
                                group
                                bg-white
                                border
                                border-[#d5d5d5]
                                rounded-md
                                min-h-[68px]
                                px-3
                                py-3
                                flex
                                items-center
                                gap-3
                                shadow-sm

                                cursor-pointer

                                transform
                                transition-all
                                duration-300
                                ease-out

                                hover:-translate-y-1
                                hover:scale-[1.03]
                                hover:rotate-[0.5deg]
                                hover:shadow-lg
                                hover:border-purple-300

                                active:scale-[0.98]
                            "
                        >

                            {/* ICON */}

                            <div
                                className={`
                                    w-[34px]
                                    h-[34px]
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    ${stat.iconBg}

                                    transition-all
                                    duration-300

                                    group-hover:scale-110
                                    group-hover:rotate-6
                                `}
                            >

                                <Icon
                                    size={18}
                                    className={`
                                        ${stat.iconColor}

                                        transition-transform
                                        duration-300

                                        group-hover:scale-110
                                    `}
                                />

                            </div>


                            {/* STAT TEXT */}

                            <div>

                                <p className="
                                    text-[10px]
                                    text-gray-600
                                    m-0
                                    transition-colors
                                    duration-200
                                    group-hover:text-gray-800
                                ">
                                    {stat.title}
                                </p>

                                <h2 className="
                                    text-[17px]
                                    font-semibold
                                    text-[#222]
                                    m-0
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105
                                ">
                                    {stat.value}
                                </h2>

                            </div>

                        </div>

                    );

                })}

            </div>


            {/* =================================================
                TABLE CONTAINER
            ================================================= */}

            <div
                className="
                    mt-6
                    bg-white
                    border
                    border-[#d0d0d0]
                    rounded-md
                    shadow-sm
                    overflow-hidden

                    transition-shadow
                    duration-300

                    hover:shadow-md
                "
            >

                {/* =================================================
                    SEARCH + FILTER AREA
                ================================================= */}

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        gap-3
                        p-2
                        border-b
                        border-[#d0d0d0]
                    "
                >

                    {/* SEARCH */}

                    <div
                        className="
                            flex
                            items-center
                            border
                            border-[#bdbdbd]
                            rounded
                            h-[31px]
                            w-full
                            sm:w-[180px]
                            px-2

                            focus-within:border-purple-500
                            focus-within:ring-1
                            focus-within:ring-purple-200

                            transition-all
                            duration-200
                        "
                    >

                        <Search
                            size={15}
                            className="text-gray-500 shrink-0"
                        />

                        <input
                            type="text"
                            placeholder="Search Members..."
                            className="
                                w-full
                                outline-none
                                border-none
                                text-[11px]
                                ml-2
                                text-gray-700
                            "
                        />

                    </div>


                    {/* FILTERS */}

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            lg:gap-4
                            w-full
                            lg:w-auto
                        "
                    >

                        {/* ALL STATUS */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border
                                border-[#bdbdbd]
                                rounded
                                h-[31px]
                                w-[calc(50%-4px)]
                                sm:w-[135px]
                                px-2
                                text-[11px]
                                text-gray-700
                                cursor-pointer

                                hover:bg-gray-50
                                hover:border-purple-300

                                transition-all
                                duration-200
                            "
                        >

                            <span>
                                All Status
                            </span>

                            <ChevronDown size={15} />

                        </div>


                        {/* ALL SOURCES */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border
                                border-[#bdbdbd]
                                rounded
                                h-[31px]
                                w-[calc(50%-4px)]
                                sm:w-[135px]
                                px-2
                                text-[11px]
                                text-gray-700
                                cursor-pointer

                                hover:bg-gray-50
                                hover:border-purple-300

                                transition-all
                                duration-200
                            "
                        >

                            <span>
                                All Sources
                            </span>

                            <ChevronDown size={15} />

                        </div>


                        {/* ALL ASSIGNED */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border
                                border-[#bdbdbd]
                                rounded
                                h-[31px]
                                w-[calc(100%-36px)]
                                sm:w-[150px]
                                px-2
                                text-[11px]
                                text-gray-700
                                cursor-pointer

                                hover:bg-gray-50
                                hover:border-purple-300

                                transition-all
                                duration-200
                            "
                        >

                            <span>
                                All Assigned
                            </span>

                            <ChevronDown size={15} />

                        </div>


                        {/* FILTER BUTTON */}

                        <button
                            className="
                                w-[31px]
                                h-[31px]
                                flex
                                items-center
                                justify-center
                                border
                                border-[#bdbdbd]
                                rounded

                                hover:bg-gray-100
                                hover:border-purple-400
                                hover:rotate-6

                                active:scale-90

                                transition-all
                                duration-200
                            "
                        >

                            <SlidersHorizontal size={17} />

                        </button>

                    </div>

                </div>


                {/* =================================================
                    LEADS TABLE
                ================================================= */}

                <div className="
                    overflow-x-auto
                    scrollbar-thin
                ">

                    <table className="
                        w-full
                        min-w-[850px]
                        border-collapse
                    ">

                        {/* TABLE HEADER */}

                        <thead>

                            <tr className="
                                bg-[#eeeeee]
                                hover:bg-[#e8e8e8]
                                transition-colors
                                duration-200
                            ">

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Lead
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Company
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Source
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Assigned
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Status
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Last Activity
                                </th>

                                <th className="text-center px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        {/* TABLE BODY */}

                        <tbody>

                            {leads.map((lead) => (

                                <tr
                                    key={lead.id}
                                    className="
                                        border-t
                                        border-[#cfcfcf]

                                        hover:bg-gray-50
                                        hover:shadow-sm

                                        transition-all
                                        duration-200
                                    "
                                >

                                    {/* LEAD */}

                                    <td className="px-4 py-3">

                                        <div className="flex items-center gap-3">

                                            <div
                                                className={`
                                                    w-[22px]
                                                    h-[22px]
                                                    rounded-full
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-white
                                                    text-[7px]
                                                    font-semibold

                                                    ${lead.avatarBg}

                                                    transition-all
                                                    duration-300

                                                    hover:scale-125
                                                `}
                                            >

                                                {lead.avatar}

                                            </div>

                                            <span className="
                                                text-[12px]
                                                text-[#333]
                                                whitespace-nowrap
                                            ">
                                                {lead.name}
                                            </span>

                                        </div>

                                    </td>


                                    {/* COMPANY */}

                                    <td className="px-4 py-3 text-[12px] text-[#333]">
                                        {lead.company}
                                    </td>


                                    {/* SOURCE */}

                                    <td className="px-4 py-3 text-[12px] text-[#333]">
                                        {lead.source}
                                    </td>


                                    {/* ASSIGNED */}

                                    <td className="px-4 py-3 text-[12px] text-[#333]">
                                        {lead.assigned}
                                    </td>


                                    {/* STATUS */}

                                    <td className="px-4 py-3">

                                        <span
                                            className={`
                                                inline-block
                                                px-2
                                                py-1
                                                rounded
                                                text-[9px]
                                                font-medium

                                                transition-all
                                                duration-200

                                                hover:scale-105

                                                ${
                                                    lead.status === "Qualified"
                                                        ? "bg-green-100 text-green-600"
                                                        : lead.status === "Contacted"
                                                        ? "bg-blue-100 text-blue-500"
                                                        : lead.status === "New"
                                                        ? "bg-purple-100 text-purple-500"
                                                        : lead.status === "Proposal"
                                                        ? "bg-orange-100 text-orange-500"
                                                        : "bg-green-100 text-green-600"
                                                }
                                            `}
                                        >

                                            {lead.status}

                                        </span>

                                    </td>


                                    {/* LAST ACTIVITY */}

                                    <td className="px-4 py-3 text-[12px] text-[#333]">
                                        {lead.activity}
                                    </td>


                                    {/* ACTION */}

                                    <td className="px-4 py-3 text-center">

                                        <button
                                            className="
                                                text-gray-700

                                                hover:text-purple-600
                                                hover:scale-110
                                                hover:rotate-6

                                                active:scale-90

                                                transition-all
                                                duration-200
                                            "
                                        >

                                            <MoreVertical
                                                size={18}
                                            />

                                        </button>

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
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-3
                        px-5
                        py-3
                        border-t
                        border-[#d0d0d0]
                    "
                >

                    {/* RESULT COUNT */}

                    <p className="text-[11px] text-[#444]">
                        Showing 1 to 7 of 37 results
                    </p>


                    {/* PAGE NUMBERS */}

                    <div className="
                        flex
                        items-center
                        gap-4
                        sm:gap-5
                    ">

                        <button
                            className="
                                hover:text-purple-600
                                hover:scale-110
                                transition-all
                                duration-200
                            "
                        >

                            <ChevronLeft
                                size={17}
                                className="text-gray-700"
                            />

                        </button>


                        <button
                            className="
                                w-6
                                h-6
                                rounded
                                bg-[#8b3df5]
                                text-white
                                text-[11px]

                                hover:scale-110
                                transition-transform
                                duration-200
                            "
                        >
                            1
                        </button>


                        <button
                            className="
                                text-[11px]

                                hover:text-purple-600
                                hover:scale-110

                                transition-all
                                duration-200
                            "
                        >
                            2
                        </button>


                        <button
                            className="
                                text-[11px]

                                hover:text-purple-600
                                hover:scale-110

                                transition-all
                                duration-200
                            "
                        >
                            3
                        </button>


                        <span className="text-[11px]">
                            ...
                        </span>


                        <button
                            className="
                                text-[11px]

                                hover:text-purple-600
                                hover:scale-110

                                transition-all
                                duration-200
                            "
                        >
                            250
                        </button>


                        <button
                            className="
                                hover:text-purple-600
                                hover:scale-110

                                transition-all
                                duration-200
                            "
                        >

                            <ChevronRight
                                size={17}
                                className="text-gray-700"
                            />

                        </button>

                    </div>


                    {/* PAGE SIZE */}

                    <button
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            border
                            border-gray-300
                            rounded
                            px-3
                            py-2
                            text-[11px]

                            hover:bg-gray-100
                            hover:border-purple-300

                            transition-all
                            duration-200
                        "
                    >

                        10 / Page

                        <ChevronDown size={14} />

                    </button>

                </div>

            </div>

        </div>
    );
}


export default Leads;
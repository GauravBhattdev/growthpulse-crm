import React from "react";

import {
    FileText,
    Check,
    Clock,
    AlertCircle,
    Search,
    Filter,
    Eye,
    Download,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Upload
} from "lucide-react";


// =====================================================
// INVOICE DATA
// =====================================================

const invoices = [
    {
        id: "#INV-1024",
        client: "TechCorp",
        issueDate: "12 May 2026",
        dueDate: "12 May 2026",
        amount: "₹45,000",
        status: "Paid"
    },
    {
        id: "#INV-1025",
        client: "Nova Ltd",
        issueDate: "15 May 2026",
        dueDate: "12 May 2026",
        amount: "₹72,000",
        status: "Pending"
    },
    {
        id: "#INV-1026",
        client: "DesignHub",
        issueDate: "18 May 2026",
        dueDate: "02 Jun 2026",
        amount: "₹38,000",
        status: "Overdue"
    },
    {
        id: "#INV-1027",
        client: "BuildX",
        issueDate: "20 May 2026",
        dueDate: "04 Jun 2026",
        amount: "₹55,000",
        status: "Paid"
    },
    {
        id: "#INV-1028",
        client: "BrightSoft",
        issueDate: "22 May 2026",
        dueDate: "06 Jun 2026",
        amount: "₹20,000",
        status: "Pending"
    }
];


// =====================================================
// INVOICE COMPONENT
// =====================================================

function Invoice() {

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
                    items-start
                    sm:items-center
                    justify-between
                    gap-4
                    pt-3
                "
            >

                {/* PAGE TITLE */}

                <div>

                    <h1 className="text-[27px] font-semibold text-[#111]">
                        Invoice
                    </h1>

                    <p className="mt-1 text-[13px] text-[#444]">
                        Manage and track all your invoices
                    </p>

                </div>


                {/* =================================================
                    PAGE ACTION BUTTONS
                ================================================= */}

                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        items-stretch
                        sm:items-center
                        gap-3
                        w-full
                        sm:w-auto
                    "
                >

                    {/* IMPORT INVOICE */}

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
                            px-5
                            py-3
                            rounded-md
                            text-sm
                            font-medium
                            hover:bg-gray-100
                            transition
                            duration-200
                            w-full
                            sm:w-auto
                        "
                    >

                        <Upload size={18} />

                        Import Invoice

                    </button>


                    {/* CREATE INVOICE */}

                    <button
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            bg-[#4b397b]
                            text-white
                            px-5
                            py-3
                            rounded-md
                            text-sm
                            font-medium
                            hover:bg-[#3f315f]
                            transition
                            duration-200
                            w-full
                            sm:w-auto
                        "
                    >

                        <span className="text-[20px] leading-none">
                            +
                        </span>

                        Create Invoice

                    </button>

                </div>

            </div>


            {/* =================================================
                SUMMARY CARDS
            ================================================= */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-5
                    mt-8
                "
            >


                {/* =================================================
                    TOTAL INVOICES
                ================================================= */}

                <div
                    className="
                        bg-white
                        border
                        border-gray-300
                        rounded-lg
                        h-[100px]
                        flex
                        items-center
                        px-4
                        shadow-sm
                        hover:shadow-md
                        transition
                    "
                >

                    <div
                        className="
                            w-12
                            h-12
                            rounded-full
                            bg-purple-100
                            text-purple-500
                            flex
                            items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <FileText size={23} />

                    </div>


                    <div>

                        <p className="text-sm text-gray-700">
                            Total Invoices
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900">
                            56
                        </h2>

                        <p className="text-xs text-gray-600">
                            This Month
                        </p>

                    </div>

                </div>


                {/* =================================================
                    PAID
                ================================================= */}

                <div
                    className="
                        bg-white
                        border
                        border-gray-300
                        rounded-lg
                        h-[100px]
                        flex
                        items-center
                        px-4
                        shadow-sm
                        hover:shadow-md
                        transition
                    "
                >

                    <div
                        className="
                            w-12
                            h-12
                            rounded-full
                            bg-green-100
                            text-green-500
                            flex
                            items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <Check size={24} />

                    </div>


                    <div>

                        <p className="text-sm text-gray-700">
                            Paid
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900">
                            32
                        </h2>

                        <p className="text-xs text-green-500">
                            ₹ 8,45,000
                        </p>

                    </div>

                </div>


                {/* =================================================
                    PENDING
                ================================================= */}

                <div
                    className="
                        bg-white
                        border
                        border-gray-300
                        rounded-lg
                        h-[100px]
                        flex
                        items-center
                        px-4
                        shadow-sm
                        hover:shadow-md
                        transition
                    "
                >

                    <div
                        className="
                            w-12
                            h-12
                            rounded-full
                            bg-orange-100
                            text-orange-500
                            flex
                            items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <Clock size={24} />

                    </div>


                    <div>

                        <p className="text-sm text-gray-700">
                            Pending
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900">
                            18
                        </h2>

                        <p className="text-xs text-orange-500">
                            ₹ 3,20,000
                        </p>

                    </div>

                </div>


                {/* =================================================
                    OVERDUE
                ================================================= */}

                <div
                    className="
                        bg-white
                        border
                        border-gray-300
                        rounded-lg
                        h-[100px]
                        flex
                        items-center
                        px-4
                        shadow-sm
                        hover:shadow-md
                        transition
                    "
                >

                    <div
                        className="
                            w-12
                            h-12
                            rounded-full
                            bg-red-100
                            text-red-500
                            flex
                            items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <AlertCircle size={24} />

                    </div>


                    <div>

                        <p className="text-sm text-gray-700">
                            Overdue
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900">
                            6
                        </h2>

                        <p className="text-xs text-red-500">
                            ₹ 1,15,000
                        </p>

                    </div>

                </div>

            </div>


            {/* =================================================
                TABLE CONTAINER
            ================================================= */}

            <div
                className="
                    mt-8
                    bg-white
                    border
                    border-gray-300
                    rounded-lg
                    shadow-sm
                    overflow-hidden
                "
            >

                {/* =================================================
                    FILTER BAR
                ================================================= */}

                <div
                    className="
                        min-h-[50px]
                        flex
                        flex-col
                        lg:flex-row
                        items-stretch
                        lg:items-center
                        justify-between
                        gap-3
                        p-2
                        border-b
                        border-gray-300
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
                            sm:w-[165px]
                            px-2
                        "
                    >

                        <Search
                            size={15}
                            className="text-gray-500 shrink-0"
                        />

                        <input
                            type="text"
                            placeholder="Search Invoice..."
                            className="
                                ml-2
                                w-full
                                outline-none
                                text-xs
                                text-gray-700
                                min-w-0
                            "
                        />

                    </div>


                    {/* =================================================
                        RIGHT FILTERS
                    ================================================= */}

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            w-full
                            lg:w-auto
                        "
                    >


                        {/* START DATE */}

                        <button
                            className="
                                flex
                                items-center
                                justify-between
                                gap-4
                                border
                                border-gray-300
                                rounded-md
                                h-[32px]
                                px-3
                                text-xs
                                text-gray-700
                                hover:bg-gray-100
                                flex-1
                                sm:flex-none
                                whitespace-nowrap
                            "
                        >

                            May 24, 2026

                            <ChevronDown size={14} />

                        </button>


                        {/* END DATE */}

                        <button
                            className="
                                flex
                                items-center
                                justify-between
                                gap-4
                                border
                                border-gray-300
                                rounded-md
                                h-[32px]
                                px-3
                                text-xs
                                text-gray-700
                                hover:bg-gray-100
                                flex-1
                                sm:flex-none
                                whitespace-nowrap
                            "
                        >

                            May 30, 2026

                            <ChevronDown size={14} />

                        </button>


                        {/* FILTER */}

                        <button
                            className="
                                w-[34px]
                                h-[32px]
                                border
                                border-gray-300
                                rounded-md
                                flex
                                items-center
                                justify-center
                                hover:bg-gray-100
                                shrink-0
                            "
                        >

                            <Filter size={17} />

                        </button>

                    </div>

                </div>


                {/* =================================================
                    INVOICE TABLE
                ================================================= */}

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[850px] border-collapse">


                        {/* TABLE HEADER */}

                        <thead>

                            <tr className="bg-[#eeeeee]">

                                <th
                                    className="
                                        text-left
                                        px-9
                                        py-3
                                        text-xs
                                        font-medium
                                        text-gray-700
                                    "
                                >
                                    Invoice ID
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3
                                        text-xs
                                        font-medium
                                        text-gray-700
                                    "
                                >
                                    Client
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3
                                        text-xs
                                        font-medium
                                        text-gray-700
                                    "
                                >
                                    Issue Date
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3
                                        text-xs
                                        font-medium
                                        text-gray-700
                                    "
                                >
                                    Due Date
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3
                                        text-xs
                                        font-medium
                                        text-gray-700
                                    "
                                >
                                    Amount
                                </th>

                                <th
                                    className="
                                        text-left
                                        px-4
                                        py-3
                                        text-xs
                                        font-medium
                                        text-gray-700
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
                                        text-gray-700
                                    "
                                >
                                    Action
                                </th>

                            </tr>

                        </thead>


                        {/* =================================================
                            TABLE BODY
                        ================================================= */}

                        <tbody>

                            {invoices.map((invoice) => (

                                <tr
                                    key={invoice.id}
                                    className="
                                        border-b
                                        border-gray-300
                                        hover:bg-gray-50
                                        transition
                                    "
                                >

                                    {/* INVOICE ID */}

                                    <td
                                        className="
                                            px-9
                                            py-4
                                            text-xs
                                            font-medium
                                            text-purple-600
                                        "
                                    >
                                        {invoice.id}
                                    </td>


                                    {/* CLIENT */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-xs
                                            text-gray-700
                                        "
                                    >
                                        {invoice.client}
                                    </td>


                                    {/* ISSUE DATE */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-xs
                                            text-gray-700
                                        "
                                    >
                                        {invoice.issueDate}
                                    </td>


                                    {/* DUE DATE */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-xs
                                            text-gray-700
                                        "
                                    >
                                        {invoice.dueDate}
                                    </td>


                                    {/* AMOUNT */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-xs
                                            text-gray-700
                                        "
                                    >
                                        {invoice.amount}
                                    </td>


                                    {/* STATUS */}

                                    <td className="px-4 py-4">

                                        <span
                                            className={`
                                                inline-block
                                                px-2
                                                py-1
                                                rounded
                                                text-[10px]
                                                font-medium

                                                ${
                                                    invoice.status === "Paid"
                                                        ? "bg-green-100 text-green-600"
                                                        : invoice.status === "Pending"
                                                        ? "bg-orange-100 text-orange-500"
                                                        : "bg-red-100 text-red-500"
                                                }
                                            `}
                                        >
                                            {invoice.status}
                                        </span>

                                    </td>


                                    {/* ACTIONS */}

                                    <td className="px-4 py-4">

                                        <div className="flex items-center gap-4">

                                            {/* VIEW */}

                                            <button
                                                className="
                                                    text-gray-600
                                                    hover:text-purple-600
                                                "
                                            >

                                                <Eye size={17} />

                                            </button>


                                            {/* DOWNLOAD */}

                                            <button
                                                className="
                                                    text-gray-600
                                                    hover:text-purple-600
                                                "
                                            >

                                                <Download size={16} />

                                            </button>


                                            {/* MORE */}

                                            <button
                                                className="
                                                    text-gray-700
                                                    hover:text-black
                                                "
                                            >

                                                <MoreVertical size={17} />

                                            </button>

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
                        min-h-[55px]
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        sm:items-center
                        justify-between
                        gap-3
                        px-4
                        sm:px-10
                        py-3
                    "
                >

                    {/* RESULT COUNT */}

                    <p className="text-xs text-gray-600">
                        Showing 1 to 6 of 37 results
                    </p>


                    {/* PAGE CONTROLS */}

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-3
                        "
                    >


                        {/* PREVIOUS */}

                        <button
                            className="text-gray-700 hover:text-purple-600"
                        >

                            <ChevronLeft size={17} />

                        </button>


                        {/* PAGE 1 */}

                        <button
                            className="
                                w-7
                                h-7
                                bg-purple-600
                                text-white
                                rounded
                                text-xs
                            "
                        >
                            1
                        </button>


                        {/* PAGE 2 */}

                        <button
                            className="text-xs text-gray-700"
                        >
                            2
                        </button>


                        {/* PAGE 3 */}

                        <button
                            className="text-xs text-gray-700"
                        >
                            3
                        </button>


                        {/* MORE */}

                        <span className="text-xs text-gray-500">
                            ...
                        </span>


                        {/* PAGE 250 */}

                        <button
                            className="text-xs text-gray-700"
                        >
                            250
                        </button>


                        {/* NEXT */}

                        <button
                            className="text-gray-700 hover:text-purple-600"
                        >

                            <ChevronRight size={17} />

                        </button>


                        {/* PAGE SIZE */}

                        <button
                            className="
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-300
                                rounded
                                px-3
                                py-2
                                text-xs
                                hover:bg-gray-100
                                whitespace-nowrap
                            "
                        >

                            10 / Page

                            <ChevronDown size={13} />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );
}


export default Invoice;
import React, { useState } from "react";

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
    Upload,
    Loader2
} from "lucide-react";

import { useNavigate } from "react-router-dom";


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


function Invoice() {

    const navigate = useNavigate();

    const [importingInvoice, setImportingInvoice] = useState(false);


    // ==============================
    // IMPORT INVOICE
    // ==============================

    const handleImportInvoice = () => {

        setImportingInvoice(true);

        console.log("Importing Invoice...");

        setTimeout(() => {

            setImportingInvoice(false);

            console.log("Invoice imported successfully!");

            alert("Invoice imported successfully!");

        }, 1500);

    };


    return (

        <div className="w-full min-h-screen bg-white pl-6 sm:pl-8 lg:pl-10 pt-6 sm:pt-8 lg:pt-10">


            {/* ================= HEADER SECTION ================= */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                <div>

                    <h1 className="text-[27px] font-semibold text-[#111]">
                        Invoice
                    </h1>

                    <p className="text-[13px] text-[#555] mt-1">
                        Manage and track all your invoices
                    </p>

                </div>


                <div className="flex flex-col sm:flex-row gap-3">


                    {/* ================= IMPORT INVOICE BUTTON ================= */}

                    <button
                        type="button"
                        onClick={handleImportInvoice}
                        disabled={importingInvoice}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            border
                            border-gray-300
                            text-gray-700
                            px-5
                            py-3
                            rounded-md
                            text-sm
                            font-medium
                            hover:bg-gray-100
                            hover:shadow-sm
                            active:scale-95
                            transition-all
                            duration-200
                            w-full
                            sm:w-auto
                            disabled:opacity-60
                            disabled:cursor-not-allowed
                            disabled:active:scale-100
                        "
                    >

                        {importingInvoice ? (
                            <>
                                <Loader2
                                    size={17}
                                    className="animate-spin"
                                />

                                Importing...
                            </>
                        ) : (
                            <>
                                <Upload size={17} />

                                Import Invoice
                            </>
                        )}

                    </button>


                    {/* ================= CREATE INVOICE BUTTON ================= */}

                    <button
                        onClick={() => navigate("/create-invoice")}
                        disabled={importingInvoice}
                        className="
                            group
                            relative
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
                            overflow-hidden
                            shadow-sm
                            hover:bg-[#3f315f]
                            hover:shadow-lg
                            hover:-translate-y-[1px]
                            active:translate-y-0
                            active:scale-[0.97]
                            transition-all
                            duration-200
                            w-full
                            sm:w-auto
                            disabled:opacity-60
                            disabled:cursor-not-allowed
                            disabled:hover:translate-y-0
                        "
                    >

                        {/* Shine Effect */}

                        <span
                            className="
                                absolute
                                inset-0
                                -translate-x-full
                                group-hover:translate-x-full
                                bg-gradient-to-r
                                from-transparent
                                via-white/10
                                to-transparent
                                transition-transform
                                duration-700
                            "
                        />


                        {/* Plus Icon */}

                        <span
                            className="
                                relative
                                z-10
                                flex
                                items-center
                                justify-center
                                w-5
                                h-5
                                rounded-full
                                bg-white/20
                                group-hover:bg-white/30
                                group-hover:rotate-90
                                transition-all
                                duration-300
                            "
                        >

                            <span className="text-[18px] leading-none">
                                +
                            </span>

                        </span>


                        {/* Button Text */}

                        <span className="relative z-10">
                            Create Invoice
                        </span>

                    </button>

                </div>

            </div>


            {/* ================= SUMMARY CARDS ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">


                {/* TOTAL INVOICES */}

                <div className="border border-gray-200 rounded-lg p-5 bg-white">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500">
                                Total Invoices
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                                56
                            </h2>

                        </div>


                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">

                            <FileText
                                size={20}
                                className="text-[#4b397b]"
                            />

                        </div>

                    </div>

                </div>


                {/* PAID */}

                <div className="border border-gray-200 rounded-lg p-5 bg-white">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500">
                                Paid
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                                32
                            </h2>

                            <p className="text-xs text-gray-500 mt-1">
                                ₹8,45,000
                            </p>

                        </div>


                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">

                            <Check
                                size={20}
                                className="text-green-600"
                            />

                        </div>

                    </div>

                </div>


                {/* PENDING */}

                <div className="border border-gray-200 rounded-lg p-5 bg-white">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500">
                                Pending
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                                18
                            </h2>

                            <p className="text-xs text-gray-500 mt-1">
                                ₹3,20,000
                            </p>

                        </div>


                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">

                            <Clock
                                size={20}
                                className="text-yellow-600"
                            />

                        </div>

                    </div>

                </div>


                {/* OVERDUE */}

                <div className="border border-gray-200 rounded-lg p-5 bg-white">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500">
                                Overdue
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                                6
                            </h2>

                            <p className="text-xs text-gray-500 mt-1">
                                ₹1,15,000
                            </p>

                        </div>


                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">

                            <AlertCircle
                                size={20}
                                className="text-red-600"
                            />

                        </div>

                    </div>

                </div>

            </div>


            {/* ================= SEARCH AND FILTERS ================= */}

            <div className="mt-8 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">


                {/* SEARCH */}

                <div className="relative w-full lg:w-[320px]">

                    <Search
                        size={18}
                        className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                        "
                    />

                    <input
                        type="text"
                        placeholder="Search Invoice"
                        className="
                            w-full
                            border
                            border-gray-300
                            rounded-md
                            pl-10
                            pr-3
                            py-2.5
                            text-sm
                            outline-none
                            focus:border-[#4b397b]
                            focus:ring-1
                            focus:ring-[#4b397b]
                        "
                    />

                </div>


                {/* FILTERS */}

                <div className="flex flex-col sm:flex-row gap-3">


                    {/* DATE 1 */}

                    <button
                        disabled={importingInvoice}
                        className="
                            flex
                            items-center
                            justify-between
                            gap-3
                            border
                            border-gray-300
                            rounded-md
                            px-4
                            py-2.5
                            text-sm
                            text-gray-600
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        May 24, 2026

                        <ChevronDown size={16} />

                    </button>


                    {/* DATE 2 */}

                    <button
                        disabled={importingInvoice}
                        className="
                            flex
                            items-center
                            justify-between
                            gap-3
                            border
                            border-gray-300
                            rounded-md
                            px-4
                            py-2.5
                            text-sm
                            text-gray-600
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        May 30, 2026

                        <ChevronDown size={16} />

                    </button>


                    {/* FILTER */}

                    <button
                        disabled={importingInvoice}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            border
                            border-gray-300
                            rounded-md
                            px-4
                            py-2.5
                            text-sm
                            text-gray-600
                            hover:bg-gray-100
                            hover:shadow-sm
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        <Filter size={16} />

                        Filter

                    </button>

                </div>

            </div>


            {/* ================= INVOICE TABLE ================= */}

            <div className="mt-6 border border-gray-200 rounded-lg overflow-x-auto">

                <table className="w-full min-w-[900px]">


                    {/* TABLE HEADER */}

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="text-left px-5 py-4 text-xs font-semibold text-gray-600">
                                Invoice ID
                            </th>

                            <th className="text-left px-5 py-4 text-xs font-semibold text-gray-600">
                                Client
                            </th>

                            <th className="text-left px-5 py-4 text-xs font-semibold text-gray-600">
                                Issue Date
                            </th>

                            <th className="text-left px-5 py-4 text-xs font-semibold text-gray-600">
                                Due Date
                            </th>

                            <th className="text-left px-5 py-4 text-xs font-semibold text-gray-600">
                                Amount
                            </th>

                            <th className="text-left px-5 py-4 text-xs font-semibold text-gray-600">
                                Status
                            </th>

                            <th className="text-left px-5 py-4 text-xs font-semibold text-gray-600">
                                Action
                            </th>

                        </tr>

                    </thead>


                    {/* TABLE BODY */}

                    <tbody>

                        {invoices.map((invoice) => (

                            <tr
                                key={invoice.id}
                                className="
                                    border-t
                                    border-gray-200
                                    hover:bg-gray-50
                                    transition
                                "
                            >

                                <td className="px-5 py-4 text-sm font-medium text-[#4b397b]">
                                    {invoice.id}
                                </td>


                                <td className="px-5 py-4 text-sm text-gray-700">
                                    {invoice.client}
                                </td>


                                <td className="px-5 py-4 text-sm text-gray-600">
                                    {invoice.issueDate}
                                </td>


                                <td className="px-5 py-4 text-sm text-gray-600">
                                    {invoice.dueDate}
                                </td>


                                <td className="px-5 py-4 text-sm font-medium text-gray-800">
                                    {invoice.amount}
                                </td>


                                {/* STATUS */}

                                <td className="px-5 py-4">


                                    {/* PAID */}

                                    {invoice.status === "Paid" && (

                                        <span
                                            className="
                                                inline-flex
                                                items-center
                                                gap-1
                                                px-3
                                                py-1
                                                rounded-full
                                                text-xs
                                                font-medium
                                                bg-green-100
                                                text-green-700
                                            "
                                        >

                                            <Check size={13} />

                                            Paid

                                        </span>

                                    )}


                                    {/* PENDING */}

                                    {invoice.status === "Pending" && (

                                        <span
                                            className="
                                                inline-flex
                                                items-center
                                                gap-1
                                                px-3
                                                py-1
                                                rounded-full
                                                text-xs
                                                font-medium
                                                bg-yellow-100
                                                text-yellow-700
                                            "
                                        >

                                            <Clock size={13} />

                                            Pending

                                        </span>

                                    )}


                                    {/* OVERDUE */}

                                    {invoice.status === "Overdue" && (

                                        <span
                                            className="
                                                inline-flex
                                                items-center
                                                gap-1
                                                px-3
                                                py-1
                                                rounded-full
                                                text-xs
                                                font-medium
                                                bg-red-100
                                                text-red-700
                                            "
                                        >

                                            <AlertCircle size={13} />

                                            Overdue

                                        </span>

                                    )}

                                </td>


                                {/* ACTIONS */}

                                <td className="px-5 py-4">

                                    <div className="flex items-center gap-2">


                                        {/* VIEW */}

                                        <button
                                            disabled={importingInvoice}
                                            className="
                                                p-2
                                                rounded-md
                                                hover:bg-gray-100
                                                text-gray-600
                                                hover:text-[#4b397b]
                                                transition
                                                disabled:opacity-50
                                                disabled:cursor-not-allowed
                                            "
                                        >

                                            <Eye size={17} />

                                        </button>


                                        {/* DOWNLOAD */}

                                        <button
                                            disabled={importingInvoice}
                                            className="
                                                p-2
                                                rounded-md
                                                hover:bg-gray-100
                                                text-gray-600
                                                hover:text-[#4b397b]
                                                transition
                                                disabled:opacity-50
                                                disabled:cursor-not-allowed
                                            "
                                        >

                                            <Download size={17} />

                                        </button>


                                        {/* MORE */}

                                        <button
                                            disabled={importingInvoice}
                                            className="
                                                p-2
                                                rounded-md
                                                hover:bg-gray-100
                                                text-gray-600
                                                hover:text-[#4b397b]
                                                transition
                                                disabled:opacity-50
                                                disabled:cursor-not-allowed
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


            {/* ================= PAGINATION ================= */}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 pb-6">


                <p className="text-sm text-gray-500">
                    Showing 1 to 6 of 37 results
                </p>


                <div className="flex items-center gap-2">


                    {/* PREVIOUS */}

                    <button
                        disabled={importingInvoice}
                        className="
                            p-2
                            border
                            border-gray-300
                            rounded-md
                            text-gray-500
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        <ChevronLeft size={17} />

                    </button>


                    {/* PAGE 1 */}

                    <button
                        disabled={importingInvoice}
                        className="
                            w-8
                            h-8
                            rounded-md
                            bg-[#4b397b]
                            text-white
                            text-sm
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >
                        1
                    </button>


                    {/* PAGE 2 */}

                    <button
                        disabled={importingInvoice}
                        className="
                            w-8
                            h-8
                            rounded-md
                            text-sm
                            text-gray-600
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >
                        2
                    </button>


                    {/* PAGE 3 */}

                    <button
                        disabled={importingInvoice}
                        className="
                            w-8
                            h-8
                            rounded-md
                            text-sm
                            text-gray-600
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >
                        3
                    </button>


                    <span className="px-1 text-gray-500">
                        ...
                    </span>


                    {/* PAGE 250 */}

                    <button
                        disabled={importingInvoice}
                        className="
                            w-8
                            h-8
                            rounded-md
                            text-sm
                            text-gray-600
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >
                        250
                    </button>


                    {/* NEXT */}

                    <button
                        disabled={importingInvoice}
                        className="
                            p-2
                            border
                            border-gray-300
                            rounded-md
                            text-gray-500
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        <ChevronRight size={17} />

                    </button>


                    {/* PAGE SIZE */}

                    <button
                        disabled={importingInvoice}
                        className="
                            flex
                            items-center
                            gap-2
                            border
                            border-gray-300
                            rounded-md
                            px-3
                            py-2
                            text-sm
                            text-gray-600
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        10 / Page

                        <ChevronDown size={15} />

                    </button>

                </div>

            </div>

        </div>

    );

}


export default Invoice;

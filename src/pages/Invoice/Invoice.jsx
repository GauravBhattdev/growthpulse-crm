import React, { useEffect, useState } from "react";

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

import Loader from "../../components/Loader/Loader";


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

    const [loading, setLoading] = useState(true);

    const [importingInvoice, setImportingInvoice] = useState(false);


    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    const handleImportInvoice = () => {

        setImportingInvoice(true);

        console.log("Import Invoice clicked");

        setTimeout(() => {

            setImportingInvoice(false);

            alert("Invoice imported successfully!");

        }, 1500);

    };


    if (loading) {

        return <Loader text="Loading invoices..." />;

    }


    return (

        <div className="
            w-full
            min-h-screen
            bg-white
            pl-6
            sm:pl-8
            lg:pl-10
            pt-6
            sm:pt-8
            lg:pt-10
        ">

            {/* HEADER */}

            <div className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
                mb-6
            ">

                <div>

                    <h1 className="
                        text-2xl
                        sm:text-3xl
                        font-semibold
                        text-gray-900
                    ">
                        Invoice
                    </h1>

                    <p className="
                        mt-1
                        text-sm
                        text-gray-500
                    ">
                        Manage and track all your invoices
                    </p>

                </div>


                <div className="
                    flex
                    items-center
                    gap-3
                ">

                    {/* IMPORT INVOICE */}

                    <button
                        onClick={handleImportInvoice}
                        disabled={importingInvoice}
                        className="
                            relative
                            overflow-hidden
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-4
                            py-2.5
                            rounded-lg
                            border
                            border-gray-300
                            bg-white
                            text-gray-700
                            text-sm
                            font-medium
                            transition-all
                            duration-300
                            hover:bg-gray-50
                            hover:border-gray-400
                            disabled:opacity-60
                            disabled:cursor-not-allowed
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


                    {/* CREATE INVOICE */}

                    <button
                        onClick={() => navigate("/create-invoice")}
                        disabled={importingInvoice}
                        className="
                            group
                            relative
                            overflow-hidden
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-4
                            py-2.5
                            rounded-lg
                            bg-[#8b3df5]
                            text-white
                            text-sm
                            font-medium
                            transition-all
                            duration-300
                            hover:bg-[#7630d8]
                            hover:shadow-lg
                            disabled:opacity-60
                            disabled:cursor-not-allowed
                        "
                    >

                        <span
                            className="
                                absolute
                                inset-0
                                -translate-x-full
                                bg-white/20
                                transition-transform
                                duration-700
                                group-hover:translate-x-full
                            "
                        />

                        <span className="relative flex items-center gap-2">

                            <span
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:rotate-90
                                "
                            >
                                +
                            </span>

                            Create Invoice

                        </span>

                    </button>

                </div>

            </div>


            {/* SUMMARY CARDS */}

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-4
                mb-6
            ">

                {/* TOTAL */}

                <div className="
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    p-5
                    shadow-sm
                ">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500">
                                Total Invoices
                            </p>

                            <h2 className="
                                mt-2
                                text-2xl
                                font-semibold
                                text-gray-900
                            ">
                                56
                            </h2>

                        </div>

                        <div className="
                            w-10
                            h-10
                            rounded-lg
                            bg-purple-100
                            flex
                            items-center
                            justify-center
                        ">

                            <FileText
                                size={20}
                                className="text-[#8b3df5]"
                            />

                        </div>

                    </div>

                </div>


                {/* PAID */}

                <div className="
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    p-5
                    shadow-sm
                ">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500">
                                Paid
                            </p>

                            <h2 className="
                                mt-2
                                text-2xl
                                font-semibold
                                text-gray-900
                            ">
                                32
                            </h2>

                            <p className="
                                mt-1
                                text-xs
                                text-gray-500
                            ">
                                ₹8,45,000
                            </p>

                        </div>

                        <div className="
                            w-10
                            h-10
                            rounded-lg
                            bg-green-100
                            flex
                            items-center
                            justify-center
                        ">

                            <Check
                                size={20}
                                className="text-green-600"
                            />

                        </div>

                    </div>

                </div>


                {/* PENDING */}

                <div className="
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    p-5
                    shadow-sm
                ">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500">
                                Pending
                            </p>

                            <h2 className="
                                mt-2
                                text-2xl
                                font-semibold
                                text-gray-900
                            ">
                                18
                            </h2>

                            <p className="
                                mt-1
                                text-xs
                                text-gray-500
                            ">
                                ₹3,20,000
                            </p>

                        </div>

                        <div className="
                            w-10
                            h-10
                            rounded-lg
                            bg-orange-100
                            flex
                            items-center
                            justify-center
                        ">

                            <Clock
                                size={20}
                                className="text-orange-500"
                            />

                        </div>

                    </div>

                </div>


                {/* OVERDUE */}

                <div className="
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    p-5
                    shadow-sm
                ">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-gray-500">
                                Overdue
                            </p>

                            <h2 className="
                                mt-2
                                text-2xl
                                font-semibold
                                text-gray-900
                            ">
                                6
                            </h2>

                            <p className="
                                mt-1
                                text-xs
                                text-gray-500
                            ">
                                ₹1,15,000
                            </p>

                        </div>

                        <div className="
                            w-10
                            h-10
                            rounded-lg
                            bg-red-100
                            flex
                            items-center
                            justify-center
                        ">

                            <AlertCircle
                                size={20}
                                className="text-red-500"
                            />

                        </div>

                    </div>

                </div>

            </div>


            {/* SEARCH + FILTER */}

            <div className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-4
                mb-5
            ">

                <div className="
                    relative
                    w-full
                    lg:w-[320px]
                ">

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
                            h-10
                            pl-10
                            pr-4
                            rounded-lg
                            border
                            border-gray-300
                            outline-none
                            text-sm
                            focus:border-[#8b3df5]
                            focus:ring-1
                            focus:ring-[#8b3df5]
                        "
                    />

                </div>


                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                ">

                    <button
                        disabled={importingInvoice}
                        className="
                            flex
                            items-center
                            gap-2
                            px-3
                            h-10
                            rounded-lg
                            border
                            border-gray-300
                            text-sm
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >
                        May 24, 2026
                        <ChevronDown size={16} />
                    </button>


                    <button
                        disabled={importingInvoice}
                        className="
                            flex
                            items-center
                            gap-2
                            px-3
                            h-10
                            rounded-lg
                            border
                            border-gray-300
                            text-sm
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >
                        May 30, 2026
                        <ChevronDown size={16} />
                    </button>


                    <button
                        disabled={importingInvoice}
                        className="
                            flex
                            items-center
                            gap-2
                            px-4
                            h-10
                            rounded-lg
                            border
                            border-gray-300
                            text-sm
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >

                        <Filter size={16} />

                        Filter

                    </button>

                </div>

            </div>


            {/* INVOICE TABLE */}

            <div className="
                w-full
                overflow-x-auto
                border
                border-gray-200
                rounded-xl
            ">

                <table className="w-full min-w-[900px]">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-gray-500
                            ">
                                Invoice
                            </th>

                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-gray-500
                            ">
                                Client
                            </th>

                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-gray-500
                            ">
                                Issue Date
                            </th>

                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-gray-500
                            ">
                                Due Date
                            </th>

                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-gray-500
                            ">
                                Amount
                            </th>

                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-gray-500
                            ">
                                Status
                            </th>

                            <th className="
                                px-5
                                py-4
                                text-center
                                text-xs
                                font-semibold
                                text-gray-500
                            ">
                                Action
                            </th>

                        </tr>

                    </thead>


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

                                <td className="
                                    px-5
                                    py-4
                                    text-sm
                                    font-medium
                                    text-gray-900
                                ">
                                    {invoice.id}
                                </td>


                                <td className="
                                    px-5
                                    py-4
                                    text-sm
                                    text-gray-700
                                ">
                                    {invoice.client}
                                </td>


                                <td className="
                                    px-5
                                    py-4
                                    text-sm
                                    text-gray-600
                                ">
                                    {invoice.issueDate}
                                </td>


                                <td className="
                                    px-5
                                    py-4
                                    text-sm
                                    text-gray-600
                                ">
                                    {invoice.dueDate}
                                </td>


                                <td className="
                                    px-5
                                    py-4
                                    text-sm
                                    font-medium
                                    text-gray-900
                                ">
                                    {invoice.amount}
                                </td>


                                <td className="px-5 py-4">

                                    <span
                                        className={`
                                            inline-flex
                                            items-center
                                            px-3
                                            py-1
                                            rounded-full
                                            text-xs
                                            font-medium

                                            ${
                                                invoice.status === "Paid"
                                                    ? "bg-green-100 text-green-700"
                                                    : invoice.status === "Pending"
                                                    ? "bg-orange-100 text-orange-700"
                                                    : "bg-red-100 text-red-700"
                                            }
                                        `}
                                    >
                                        {invoice.status}
                                    </span>

                                </td>


                                <td className="px-5 py-4">

                                    <div className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                    ">

                                        <button
                                            disabled={importingInvoice}
                                            className="
                                                w-8
                                                h-8
                                                rounded-lg
                                                flex
                                                items-center
                                                justify-center
                                                text-gray-500
                                                hover:bg-gray-100
                                                hover:text-[#8b3df5]
                                            "
                                        >

                                            <Eye size={17} />

                                        </button>


                                        <button
                                            disabled={importingInvoice}
                                            className="
                                                w-8
                                                h-8
                                                rounded-lg
                                                flex
                                                items-center
                                                justify-center
                                                text-gray-500
                                                hover:bg-gray-100
                                                hover:text-[#8b3df5]
                                            "
                                        >

                                            <Download size={17} />

                                        </button>


                                        <button
                                            disabled={importingInvoice}
                                            className="
                                                w-8
                                                h-8
                                                rounded-lg
                                                flex
                                                items-center
                                                justify-center
                                                text-gray-500
                                                hover:bg-gray-100
                                                hover:text-[#8b3df5]
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


            {/* PAGINATION */}

            <div className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
                py-5
            ">

                <p className="
                    text-sm
                    text-gray-500
                ">
                    Showing 1 to 6 of 37 results
                </p>


                <div className="
                    flex
                    items-center
                    gap-2
                ">

                    <button
                        disabled={importingInvoice}
                        className="
                            w-8
                            h-8
                            rounded-lg
                            border
                            border-gray-300
                            flex
                            items-center
                            justify-center
                            text-gray-500
                            hover:bg-gray-50
                        "
                    >

                        <ChevronLeft size={16} />

                    </button>


                    <button
                        className="
                            w-8
                            h-8
                            rounded-lg
                            bg-[#8b3df5]
                            text-white
                            text-sm
                        "
                    >
                        1
                    </button>


                    <button
                        disabled={importingInvoice}
                        className="
                            w-8
                            h-8
                            rounded-lg
                            border
                            border-gray-300
                            text-sm
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >
                        2
                    </button>


                    <button
                        disabled={importingInvoice}
                        className="
                            w-8
                            h-8
                            rounded-lg
                            border
                            border-gray-300
                            text-sm
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >
                        3
                    </button>


                    <span className="
                        px-1
                        text-gray-400
                    ">
                        ...
                    </span>


                    <button
                        disabled={importingInvoice}
                        className="
                            w-10
                            h-8
                            rounded-lg
                            border
                            border-gray-300
                            text-sm
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >
                        250
                    </button>


                    <button
                        disabled={importingInvoice}
                        className="
                            w-8
                            h-8
                            rounded-lg
                            border
                            border-gray-300
                            flex
                            items-center
                            justify-center
                            text-gray-500
                            hover:bg-gray-50
                        "
                    >

                        <ChevronRight size={16} />

                    </button>


                    <button
                        disabled={importingInvoice}
                        className="
                            flex
                            items-center
                            gap-1
                            ml-2
                            h-8
                            px-2
                            rounded-lg
                            border
                            border-gray-300
                            text-sm
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >
                        10/Page
                        <ChevronDown size={14} />
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Invoice;
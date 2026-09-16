
import React, { useEffect, useMemo, useState } from "react";

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
    Loader2,
    X
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Loader from "../../components/Loader/Loader";


const initialInvoices = [
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


    // --------------------------------------------------
    // LOADING
    // --------------------------------------------------

    const [loading, setLoading] = useState(true);


    // --------------------------------------------------
    // INVOICES
    // --------------------------------------------------

    const [invoiceList, setInvoiceList] = useState(initialInvoices);


    // --------------------------------------------------
    // IMPORT
    // --------------------------------------------------

    const [importingInvoice, setImportingInvoice] = useState(false);


    // --------------------------------------------------
    // SEARCH
    // --------------------------------------------------

    const [searchTerm, setSearchTerm] = useState("");


    // --------------------------------------------------
    // DATE FILTERS
    // --------------------------------------------------

    const [fromDate, setFromDate] = useState("");

    const [toDate, setToDate] = useState("");


    // --------------------------------------------------
    // FILTER PANEL
    // --------------------------------------------------

    const [showFilter, setShowFilter] = useState(false);


    // --------------------------------------------------
    // STATUS FILTER
    // --------------------------------------------------

    const [statusFilter, setStatusFilter] = useState("All");


    // --------------------------------------------------
    // PAGINATION
    // --------------------------------------------------

    const [currentPage, setCurrentPage] = useState(1);

    const [itemsPerPage, setItemsPerPage] = useState(5);


    // --------------------------------------------------
    // MORE MENU
    // --------------------------------------------------

    const [openMoreMenu, setOpenMoreMenu] = useState(null);


    // --------------------------------------------------
    // SELECTED INVOICE
    // --------------------------------------------------

    const [selectedInvoice, setSelectedInvoice] = useState(null);


    // --------------------------------------------------
    // LOADING EFFECT
    // --------------------------------------------------

    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    // --------------------------------------------------
    // IMPORT INVOICE
    // --------------------------------------------------

    const handleImportInvoice = () => {

        setImportingInvoice(true);

        console.log("Import Invoice clicked");

        setTimeout(() => {

            setImportingInvoice(false);

            alert("Invoice imported successfully!");

        }, 1500);

    };


    // --------------------------------------------------
    // CONVERT DATE
    // Example:
    // 12 May 2026
    // becomes:
    // 2026-05-12
    // --------------------------------------------------

    const convertToDate = (dateString) => {

        if (!dateString) return "";

        const [day, month, year] = dateString.split(" ");

        const months = {
            Jan: "01",
            Feb: "02",
            Mar: "03",
            Apr: "04",
            May: "05",
            Jun: "06",
            Jul: "07",
            Aug: "08",
            Sep: "09",
            Oct: "10",
            Nov: "11",
            Dec: "12"
        };

        return `${year}-${months[month]}-${day.padStart(2, "0")}`;

    };


    // --------------------------------------------------
    // FILTER INVOICES
    // --------------------------------------------------

    const filteredInvoices = useMemo(() => {

        const search = searchTerm.toLowerCase().trim();

        return invoiceList.filter((invoice) => {

            // ------------------------------------------
            // SEARCH
            // ------------------------------------------

            const invoiceIssueDate =
                invoice.issueDate.toLowerCase();

            const invoiceDueDate =
                invoice.dueDate.toLowerCase();

            const matchesSearch =
                !search ||
                invoice.id.toLowerCase().includes(search) ||
                invoice.client.toLowerCase().includes(search) ||
                invoice.amount.toLowerCase().includes(search) ||
                invoice.status.toLowerCase().includes(search) ||
                invoiceIssueDate.includes(search) ||
                invoiceDueDate.includes(search);


            // ------------------------------------------
            // DATE
            // ------------------------------------------

            const invoiceDate =
                convertToDate(invoice.issueDate);


            const matchesFromDate =
                !fromDate ||
                invoiceDate >= fromDate;


            const matchesToDate =
                !toDate ||
                invoiceDate <= toDate;


            // ------------------------------------------
            // STATUS
            // ------------------------------------------

            const matchesStatus =
                statusFilter === "All" ||
                invoice.status === statusFilter;


            // ------------------------------------------
            // FINAL RESULT
            // ------------------------------------------

            return (
                matchesSearch &&
                matchesFromDate &&
                matchesToDate &&
                matchesStatus
            );

        });

    }, [
        invoiceList,
        searchTerm,
        fromDate,
        toDate,
        statusFilter
    ]);


    // --------------------------------------------------
    // PAGINATION CALCULATION
    // --------------------------------------------------

    const totalPages = Math.max(
        1,
        Math.ceil(
            filteredInvoices.length / itemsPerPage
        )
    );


    const startIndex =
        (currentPage - 1) * itemsPerPage;


    const endIndex =
        startIndex + itemsPerPage;


    const currentInvoices =
        filteredInvoices.slice(
            startIndex,
            endIndex
        );


    // --------------------------------------------------
    // RESET PAGE WHEN FILTER CHANGES
    // --------------------------------------------------

    useEffect(() => {

        setCurrentPage(1);

    }, [
        searchTerm,
        fromDate,
        toDate,
        statusFilter,
        itemsPerPage
    ]);


    // --------------------------------------------------
    // KEEP PAGE VALID
    // --------------------------------------------------

    useEffect(() => {

        if (currentPage > totalPages) {

            setCurrentPage(totalPages);

        }

    }, [
        currentPage,
        totalPages
    ]);


    // --------------------------------------------------
    // CLEAR FILTERS
    // --------------------------------------------------

    const handleClearFilters = () => {

        setSearchTerm("");

        setFromDate("");

        setToDate("");

        setStatusFilter("All");

        setCurrentPage(1);

    };


    // --------------------------------------------------
    // DOWNLOAD SINGLE INVOICE
    // --------------------------------------------------

    const handleDownloadInvoice = (invoice) => {

        const csvContent =
            `Invoice,Client,Issue Date,Due Date,Amount,Status\n` +
            `"${invoice.id}","${invoice.client}","${invoice.issueDate}","${invoice.dueDate}","${invoice.amount}","${invoice.status}"`;


        const blob = new Blob(
            [csvContent],
            {
                type: "text/csv;charset=utf-8;"
            }
        );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;


        link.download =
            `${invoice.id.replace("#", "")}.csv`;


        document.body.appendChild(link);


        link.click();


        document.body.removeChild(link);


        URL.revokeObjectURL(url);

    };


    // --------------------------------------------------
    // VIEW INVOICE
    // --------------------------------------------------

    const handleViewInvoice = (invoice) => {

        setSelectedInvoice(invoice);

        setOpenMoreMenu(null);

    };


    // --------------------------------------------------
    // DELETE INVOICE
    // --------------------------------------------------

    const handleDeleteInvoice = (invoice) => {

        const confirmed =
            window.confirm(
                `Are you sure you want to delete ${invoice.id}?`
            );


        if (!confirmed) {

            return;

        }


        setInvoiceList((previousInvoices) =>
            previousInvoices.filter(
                (item) => item.id !== invoice.id
            )
        );


        setOpenMoreMenu(null);


        alert(
            `${invoice.id} deleted successfully!`
        );

    };


    // --------------------------------------------------
    // MORE ACTION
    // --------------------------------------------------

    const handleMoreAction = (
        action,
        invoice
    ) => {

        setOpenMoreMenu(null);


        if (action === "view") {

            handleViewInvoice(invoice);

        }


        if (action === "download") {

            handleDownloadInvoice(invoice);

        }


        if (action === "delete") {

            handleDeleteInvoice(invoice);

        }

    };


    // --------------------------------------------------
    // PAGE CHANGE
    // --------------------------------------------------

    const goToPage = (page) => {

        if (page < 1) return;

        if (page > totalPages) return;

        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    // --------------------------------------------------
    // LOADER
    // --------------------------------------------------

    if (loading) {

        return (

            <div className="
                w-full
                min-h-screen
                bg-theme-page
            ">

                <Loader text="Loading invoices..." />

            </div>

        );

    }


    return (

        <div className="
            w-full
            min-h-screen
            bg-theme-page
            text-theme-text
            pl-6
            sm:pl-8
            lg:pl-10
            pt-6
            sm:pt-8
            lg:pt-10
            pr-4
            sm:pr-6
        ">


            {/* ==================================================
                HEADER
            ================================================== */}

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
                        text-theme-text
                    ">
                        Invoice
                    </h1>


                    <p className="
                        mt-1
                        text-sm
                        text-theme-text-secondary
                    ">
                        Manage and track all your invoices
                    </p>

                </div>


                <div className="
                    flex
                    items-center
                    gap-3
                ">


                    {/* IMPORT */}

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
                            border-theme-border-light
                            bg-theme-surface
                            text-theme-text
                            text-sm
                            font-medium
                            transition-all
                            duration-300
                            hover:bg-theme-surface-secondary
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


                    {/* CREATE */}

                    <button
                        onClick={() =>
                            navigate("/create-invoice")
                        }
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


                        <span className="
                            relative
                            flex
                            items-center
                            gap-2
                        ">

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


            {/* ==================================================
                SUMMARY CARDS
            ================================================== */}

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
                    bg-theme-surface
                    border
                    border-theme-border-light
                    rounded-xl
                    p-5
                    shadow-sm
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                    ">

                        <div>

                            <p className="
                                text-sm
                                text-theme-text-secondary
                            ">
                                Total Invoices
                            </p>


                            <h2 className="
                                mt-2
                                text-2xl
                                font-semibold
                                text-theme-text
                            ">
                                {invoiceList.length}
                            </h2>

                        </div>


                        <div className="
                            w-10
                            h-10
                            rounded-lg
                            bg-purple-100
                            dark:bg-purple-500/10
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
                    bg-theme-surface
                    border
                    border-theme-border-light
                    rounded-xl
                    p-5
                    shadow-sm
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                    ">

                        <div>

                            <p className="
                                text-sm
                                text-theme-text-secondary
                            ">
                                Paid
                            </p>


                            <h2 className="
                                mt-2
                                text-2xl
                                font-semibold
                                text-theme-text
                            ">
                                {
                                    invoiceList.filter(
                                        invoice =>
                                            invoice.status === "Paid"
                                    ).length
                                }
                            </h2>


                            <p className="
                                mt-1
                                text-xs
                                text-theme-text-secondary
                            ">
                                ₹8,45,000
                            </p>

                        </div>


                        <div className="
                            w-10
                            h-10
                            rounded-lg
                            bg-green-100
                            dark:bg-green-500/10
                            flex
                            items-center
                            justify-center
                        ">

                            <Check
                                size={20}
                                className="
                                    text-green-600
                                    dark:text-green-400
                                "
                            />

                        </div>

                    </div>

                </div>


                {/* PENDING */}

                <div className="
                    bg-theme-surface
                    border
                    border-theme-border-light
                    rounded-xl
                    p-5
                    shadow-sm
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                    ">

                        <div>

                            <p className="
                                text-sm
                                text-theme-text-secondary
                            ">
                                Pending
                            </p>


                            <h2 className="
                                mt-2
                                text-2xl
                                font-semibold
                                text-theme-text
                            ">
                                {
                                    invoiceList.filter(
                                        invoice =>
                                            invoice.status === "Pending"
                                    ).length
                                }
                            </h2>


                            <p className="
                                mt-1
                                text-xs
                                text-theme-text-secondary
                            ">
                                ₹3,20,000
                            </p>

                        </div>


                        <div className="
                            w-10
                            h-10
                            rounded-lg
                            bg-orange-100
                            dark:bg-orange-500/10
                            flex
                            items-center
                            justify-center
                        ">

                            <Clock
                                size={20}
                                className="
                                    text-orange-500
                                    dark:text-orange-400
                                "
                            />

                        </div>

                    </div>

                </div>


                {/* OVERDUE */}

                <div className="
                    bg-theme-surface
                    border
                    border-theme-border-light
                    rounded-xl
                    p-5
                    shadow-sm
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                    ">

                        <div>

                            <p className="
                                text-sm
                                text-theme-text-secondary
                            ">
                                Overdue
                            </p>


                            <h2 className="
                                mt-2
                                text-2xl
                                font-semibold
                                text-theme-text
                            ">
                                {
                                    invoiceList.filter(
                                        invoice =>
                                            invoice.status === "Overdue"
                                    ).length
                                }
                            </h2>


                            <p className="
                                mt-1
                                text-xs
                                text-theme-text-secondary
                            ">
                                ₹1,15,000
                            </p>

                        </div>


                        <div className="
                            w-10
                            h-10
                            rounded-lg
                            bg-red-100
                            dark:bg-red-500/10
                            flex
                            items-center
                            justify-center
                        ">

                            <AlertCircle
                                size={20}
                                className="
                                    text-red-500
                                    dark:text-red-400
                                "
                            />

                        </div>

                    </div>

                </div>

            </div>


            {/* ==================================================
                SEARCH + FILTER CONTROLS
            ================================================== */}

            <div className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-4
                mb-5
            ">


                {/* SEARCH */}

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
                            text-theme-text-muted
                        "
                    />


                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                        placeholder="Search Invoice"
                        disabled={importingInvoice}
                        className="
                            w-full
                            h-10
                            pl-10
                            pr-4
                            rounded-lg
                            border
                            border-theme-border-light
                            bg-theme-surface
                            text-theme-text
                            placeholder:text-theme-text-muted
                            outline-none
                            text-sm
                            focus:border-[#8b3df5]
                            focus:ring-1
                            focus:ring-[#8b3df5]
                        "
                    />

                </div>


                {/* FILTER CONTROLS */}

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                ">


                    {/* FROM DATE */}

                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) =>
                            setFromDate(e.target.value)
                        }
                        disabled={importingInvoice}
                        className="
                            h-10
                            px-3
                            rounded-lg
                            border
                            border-theme-border-light
                            bg-theme-surface
                            text-theme-text
                            text-sm
                            outline-none
                            focus:border-[#8b3df5]
                            focus:ring-1
                            focus:ring-[#8b3df5]
                        "
                    />


                    {/* TO DATE */}

                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) =>
                            setToDate(e.target.value)
                        }
                        disabled={importingInvoice}
                        className="
                            h-10
                            px-3
                            rounded-lg
                            border
                            border-theme-border-light
                            bg-theme-surface
                            text-theme-text
                            text-sm
                            outline-none
                            focus:border-[#8b3df5]
                            focus:ring-1
                            focus:ring-[#8b3df5]
                        "
                    />


                    {/* FILTER BUTTON */}

                    <button
                        onClick={() =>
                            setShowFilter(!showFilter)
                        }
                        disabled={importingInvoice}
                        className={`
                            flex
                            items-center
                            gap-2
                            px-4
                            h-10
                            rounded-lg
                            border
                            text-sm
                            transition-all
                            duration-200

                            ${
                                showFilter
                                    ? "border-[#8b3df5] bg-purple-100 text-[#8b3df5] dark:bg-purple-500/10"
                                    : "border-theme-border-light bg-theme-surface text-theme-text-secondary hover:bg-theme-surface-secondary"
                            }
                        `}
                    >

                        <Filter size={16} />

                        Filter


                        <ChevronDown
                            size={15}
                            className={`
                                transition-transform
                                duration-200
                                ${
                                    showFilter
                                        ? "rotate-180"
                                        : ""
                                }
                            `}
                        />

                    </button>


                    {/* CLEAR */}

                    {(searchTerm ||
                        fromDate ||
                        toDate ||
                        statusFilter !== "All") && (

                        <button
                            onClick={handleClearFilters}
                            disabled={importingInvoice}
                            className="
                                h-10
                                px-3
                                rounded-lg
                                text-sm
                                text-[#8b3df5]
                                hover:bg-purple-100
                                dark:hover:bg-purple-500/10
                                transition
                                disabled:opacity-50
                            "
                        >
                            Clear
                        </button>

                    )}

                </div>

            </div>


            {/* ==================================================
                FILTER PANEL
            ================================================== */}

            {showFilter && (

                <div className="
                    mb-5
                    p-4
                    bg-theme-surface
                    border
                    border-theme-border-light
                    rounded-xl
                    shadow-sm
                    animate-[fadeIn_0.2s_ease-out]
                ">

                    <div className="
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-4
                    ">


                        <div>

                            <h3 className="
                                text-sm
                                font-semibold
                                text-theme-text
                            ">
                                Filter Invoices
                            </h3>


                            <p className="
                                mt-1
                                text-xs
                                text-theme-text-secondary
                            ">
                                Filter invoices by payment status
                            </p>

                        </div>


                        <div className="
                            flex
                            flex-wrap
                            gap-2
                        ">

                            {[
                                "All",
                                "Paid",
                                "Pending",
                                "Overdue"
                            ].map((status) => (

                                <button
                                    key={status}
                                    onClick={() => {
                                        setStatusFilter(status);
                                        setCurrentPage(1);
                                    }}
                                    disabled={importingInvoice}
                                    className={`
                                        px-4
                                        py-2
                                        rounded-lg
                                        text-xs
                                        font-medium
                                        border
                                        transition-all
                                        duration-200

                                        ${
                                            statusFilter === status
                                                ? "bg-[#8b3df5] border-[#8b3df5] text-white"
                                                : "bg-theme-surface border-theme-border-light text-theme-text-secondary hover:bg-theme-surface-secondary"
                                        }
                                    `}
                                >
                                    {status}
                                </button>

                            ))}

                        </div>

                    </div>

                </div>

            )}


            {/* ==================================================
                RESULT INFORMATION
            ================================================== */}

            <div className="
                flex
                items-center
                justify-between
                mb-3
            ">

                <p className="
                    text-sm
                    text-theme-text-secondary
                ">

                    {filteredInvoices.length} invoice
                    {filteredInvoices.length !== 1
                        ? "s"
                        : ""} found

                </p>


                {statusFilter !== "All" && (

                    <span className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-purple-100
                        text-[#8b3df5]
                        dark:bg-purple-500/10
                    ">
                        Status: {statusFilter}
                    </span>

                )}

            </div>


            {/* ==================================================
                INVOICE TABLE
            ================================================== */}

            <div className="
                w-full
                overflow-x-auto
                border
                border-theme-border-light
                rounded-xl
                bg-theme-surface
            ">

                <table className="
                    w-full
                    min-w-[900px]
                ">

                    <thead className="
                        bg-purple-100
                        dark:bg-purple-500/10
                    ">

                        <tr>

                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Invoice
                            </th>


                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Client
                            </th>


                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Issue Date
                            </th>


                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Due Date
                            </th>


                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Amount
                            </th>


                            <th className="
                                px-5
                                py-4
                                text-left
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Status
                            </th>


                            <th className="
                                px-5
                                py-4
                                text-center
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Action
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {currentInvoices.length > 0 ? (

                            currentInvoices.map((invoice) => (

                                <tr
                                    key={invoice.id}
                                    className="
                                        border-t
                                        border-theme-border-light
                                        hover:bg-theme-surface-secondary
                                        transition
                                    "
                                >


                                    <td className="
                                        px-5
                                        py-4
                                        text-sm
                                        font-medium
                                        text-theme-text
                                    ">
                                        {invoice.id}
                                    </td>


                                    <td className="
                                        px-5
                                        py-4
                                        text-sm
                                        text-theme-text-secondary
                                    ">
                                        {invoice.client}
                                    </td>


                                    <td className="
                                        px-5
                                        py-4
                                        text-sm
                                        text-theme-text-secondary
                                    ">
                                        {invoice.issueDate}
                                    </td>


                                    <td className="
                                        px-5
                                        py-4
                                        text-sm
                                        text-theme-text-secondary
                                    ">
                                        {invoice.dueDate}
                                    </td>


                                    <td className="
                                        px-5
                                        py-4
                                        text-sm
                                        font-medium
                                        text-theme-text
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
                                                        ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                                                        : invoice.status === "Pending"
                                                        ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
                                                        : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
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


                                            {/* VIEW */}

                                            <button
                                                onClick={() =>
                                                    handleViewInvoice(invoice)
                                                }
                                                disabled={importingInvoice}
                                                title="View Invoice"
                                                className="
                                                    w-8
                                                    h-8
                                                    rounded-lg
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-theme-text-secondary
                                                    hover:bg-purple-100
                                                    hover:text-[#8b3df5]
                                                    dark:hover:bg-purple-500/10
                                                    transition
                                                "
                                            >

                                                <Eye size={17} />

                                            </button>


                                            {/* DOWNLOAD */}

                                            <button
                                                onClick={() =>
                                                    handleDownloadInvoice(invoice)
                                                }
                                                disabled={importingInvoice}
                                                title="Download Invoice"
                                                className="
                                                    w-8
                                                    h-8
                                                    rounded-lg
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-theme-text-secondary
                                                    hover:bg-purple-100
                                                    hover:text-[#8b3df5]
                                                    dark:hover:bg-purple-500/10
                                                    transition
                                                "
                                            >

                                                <Download size={17} />

                                            </button>


                                            {/* MORE */}

                                            <div className="relative">

                                                <button
                                                    onClick={() =>
                                                        setOpenMoreMenu(
                                                            openMoreMenu === invoice.id
                                                                ? null
                                                                : invoice.id
                                                        )
                                                    }
                                                    disabled={importingInvoice}
                                                    title="More Actions"
                                                    className="
                                                        w-8
                                                        h-8
                                                        rounded-lg
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-theme-text-secondary
                                                        hover:bg-theme-surface-secondary
                                                        transition
                                                    "
                                                >

                                                    <MoreVertical size={17} />

                                                </button>


                                                {openMoreMenu === invoice.id && (

                                                    <div className="
                                                        absolute
                                                        right-0
                                                        top-10
                                                        z-30
                                                        w-36
                                                        bg-theme-surface
                                                        border
                                                        border-theme-border-light
                                                        rounded-lg
                                                        shadow-xl
                                                        overflow-hidden
                                                    ">


                                                        <button
                                                            onClick={() =>
                                                                handleMoreAction(
                                                                    "view",
                                                                    invoice
                                                                )
                                                            }
                                                            className="
                                                                w-full
                                                                px-3
                                                                py-2
                                                                text-left
                                                                text-xs
                                                                text-theme-text
                                                                hover:bg-theme-surface-secondary
                                                            "
                                                        >
                                                            View
                                                        </button>


                                                        <button
                                                            onClick={() =>
                                                                handleMoreAction(
                                                                    "download",
                                                                    invoice
                                                                )
                                                            }
                                                            className="
                                                                w-full
                                                                px-3
                                                                py-2
                                                                text-left
                                                                text-xs
                                                                text-theme-text
                                                                hover:bg-theme-surface-secondary
                                                            "
                                                        >
                                                            Download
                                                        </button>


                                                        <button
                                                            onClick={() =>
                                                                handleMoreAction(
                                                                    "delete",
                                                                    invoice
                                                                )
                                                            }
                                                            className="
                                                                w-full
                                                                px-3
                                                                py-2
                                                                text-left
                                                                text-xs
                                                                text-red-500
                                                                hover:bg-red-50
                                                                dark:hover:bg-red-500/10
                                                            "
                                                        >
                                                            Delete
                                                        </button>

                                                    </div>

                                                )}

                                            </div>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="
                                        px-5
                                        py-12
                                        text-center
                                    "
                                >

                                    <div className="
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                    ">

                                        <FileText
                                            size={36}
                                            className="
                                                text-theme-text-muted
                                                mb-3
                                            "
                                        />


                                        <p className="
                                            text-sm
                                            font-medium
                                            text-theme-text
                                        ">
                                            No invoices found
                                        </p>


                                        <p className="
                                            mt-1
                                            text-xs
                                            text-theme-text-secondary
                                        ">
                                            Try changing your search or filters.
                                        </p>

                                    </div>

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>


            {/* ==================================================
                PAGINATION
            ================================================== */}

            <div className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
                py-5
            ">


                {/* RESULT COUNT */}

                <p className="
                    text-sm
                    text-theme-text-secondary
                ">

                    {filteredInvoices.length === 0

                        ? "Showing 0 results"

                        : `Showing ${startIndex + 1} to ${Math.min(
                            endIndex,
                            filteredInvoices.length
                        )} of ${filteredInvoices.length} results`

                    }

                </p>


                <div className="
                    flex
                    items-center
                    gap-2
                    flex-wrap
                ">


                    {/* PREVIOUS */}

                    <button
                        onClick={() =>
                            goToPage(currentPage - 1)
                        }
                        disabled={
                            importingInvoice ||
                            currentPage === 1 ||
                            filteredInvoices.length === 0
                        }
                        className="
                            w-8
                            h-8
                            rounded-lg
                            border
                            border-theme-border-light
                            bg-theme-surface
                            flex
                            items-center
                            justify-center
                            text-theme-text-secondary
                            hover:bg-theme-surface-secondary
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                            transition
                        "
                        title="Previous Page"
                    >

                        <ChevronLeft size={16} />

                    </button>


                    {/* PAGE NUMBERS */}

                    {Array.from(
                        {
                            length: totalPages
                        },
                        (_, index) => index + 1
                    ).map((page) => (

                        <button
                            key={page}
                            onClick={() =>
                                goToPage(page)
                            }
                            disabled={
                                importingInvoice ||
                                filteredInvoices.length === 0
                            }
                            className={`
                                w-8
                                h-8
                                rounded-lg
                                text-sm
                                transition

                                ${
                                    currentPage === page
                                        ? "bg-[#8b3df5] text-white"
                                        : "border border-theme-border-light bg-theme-surface text-theme-text-secondary hover:bg-theme-surface-secondary"
                                }
                            `}
                        >
                            {page}
                        </button>

                    ))}


                    {/* NEXT */}

                    <button
                        onClick={() =>
                            goToPage(currentPage + 1)
                        }
                        disabled={
                            importingInvoice ||
                            currentPage === totalPages ||
                            filteredInvoices.length === 0
                        }
                        className="
                            w-8
                            h-8
                            rounded-lg
                            border
                            border-theme-border-light
                            bg-theme-surface
                            flex
                            items-center
                            justify-center
                            text-theme-text-secondary
                            hover:bg-theme-surface-secondary
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                            transition
                        "
                        title="Next Page"
                    >

                        <ChevronRight size={16} />

                    </button>


                    {/* ITEMS PER PAGE */}

                    <select
                        value={itemsPerPage}
                        onChange={(e) =>
                            setItemsPerPage(
                                Number(e.target.value)
                            )
                        }
                        disabled={importingInvoice}
                        className="
                            ml-2
                            h-8
                            px-2
                            rounded-lg
                            border
                            border-theme-border-light
                            bg-theme-surface
                            text-theme-text-secondary
                            text-sm
                            outline-none
                            focus:border-[#8b3df5]
                        "
                    >

                        <option value="2">
                            2/Page
                        </option>

                        <option value="5">
                            5/Page
                        </option>

                        <option value="10">
                            10/Page
                        </option>

                        <option value="20">
                            20/Page
                        </option>

                    </select>

                </div>

            </div>


            {/* ==================================================
                VIEW INVOICE MODAL
            ================================================== */}

            {selectedInvoice && (

                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/50
                        p-4
                    "
                    onClick={() =>
                        setSelectedInvoice(null)
                    }
                >

                    <div
                        className="
                            w-full
                            max-w-md
                            bg-theme-surface
                            border
                            border-theme-border-light
                            rounded-xl
                            shadow-2xl
                            p-6
                        "
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >


                        {/* MODAL HEADER */}

                        <div className="
                            flex
                            items-center
                            justify-between
                            mb-5
                        ">

                            <div>

                                <h2 className="
                                    text-lg
                                    font-semibold
                                    text-theme-text
                                ">
                                    Invoice Details
                                </h2>


                                <p className="
                                    mt-1
                                    text-xs
                                    text-theme-text-secondary
                                ">
                                    {selectedInvoice.id}
                                </p>

                            </div>


                            <button
                                onClick={() =>
                                    setSelectedInvoice(null)
                                }
                                className="
                                    w-8
                                    h-8
                                    rounded-lg
                                    flex
                                    items-center
                                    justify-center
                                    text-theme-text-secondary
                                    hover:bg-theme-surface-secondary
                                "
                            >

                                <X size={18} />

                            </button>

                        </div>


                        {/* DETAILS */}

                        <div className="space-y-4">


                            {/* CLIENT */}

                            <div className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-theme-border-light
                                pb-3
                            ">

                                <span className="
                                    text-sm
                                    text-theme-text-secondary
                                ">
                                    Client
                                </span>


                                <span className="
                                    text-sm
                                    font-medium
                                    text-theme-text
                                ">
                                    {selectedInvoice.client}
                                </span>

                            </div>


                            {/* ISSUE DATE */}

                            <div className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-theme-border-light
                                pb-3
                            ">

                                <span className="
                                    text-sm
                                    text-theme-text-secondary
                                ">
                                    Issue Date
                                </span>


                                <span className="
                                    text-sm
                                    text-theme-text
                                ">
                                    {selectedInvoice.issueDate}
                                </span>

                            </div>


                            {/* DUE DATE */}

                            <div className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-theme-border-light
                                pb-3
                            ">

                                <span className="
                                    text-sm
                                    text-theme-text-secondary
                                ">
                                    Due Date
                                </span>


                                <span className="
                                    text-sm
                                    text-theme-text
                                ">
                                    {selectedInvoice.dueDate}
                                </span>

                            </div>


                            {/* AMOUNT */}

                            <div className="
                                flex
                                items-center
                                justify-between
                                border-b
                                border-theme-border-light
                                pb-3
                            ">

                                <span className="
                                    text-sm
                                    text-theme-text-secondary
                                ">
                                    Amount
                                </span>


                                <span className="
                                    text-sm
                                    font-semibold
                                    text-theme-text
                                ">
                                    {selectedInvoice.amount}
                                </span>

                            </div>


                            {/* STATUS */}

                            <div className="
                                flex
                                items-center
                                justify-between
                            ">

                                <span className="
                                    text-sm
                                    text-theme-text-secondary
                                ">
                                    Status
                                </span>


                                <span
                                    className={`
                                        px-3
                                        py-1
                                        rounded-full
                                        text-xs
                                        font-medium

                                        ${
                                            selectedInvoice.status === "Paid"
                                                ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                                                : selectedInvoice.status === "Pending"
                                                ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
                                                : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                                        }
                                    `}
                                >
                                    {selectedInvoice.status}
                                </span>

                            </div>

                        </div>


                        {/* MODAL BUTTONS */}

                        <div className="
                            flex
                            justify-end
                            gap-3
                            mt-6
                        ">


                            <button
                                onClick={() =>
                                    handleDownloadInvoice(
                                        selectedInvoice
                                    )
                                }
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    rounded-lg
                                    border
                                    border-theme-border-light
                                    bg-theme-surface
                                    text-theme-text
                                    text-sm
                                    hover:bg-theme-surface-secondary
                                "
                            >

                                <Download size={16} />

                                Download

                            </button>


                            <button
                                onClick={() =>
                                    setSelectedInvoice(null)
                                }
                                className="
                                    px-4
                                    py-2
                                    rounded-lg
                                    bg-[#8b3df5]
                                    text-white
                                    text-sm
                                    hover:bg-[#7630d8]
                                "
                            >
                                Close
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}


export default Invoice;


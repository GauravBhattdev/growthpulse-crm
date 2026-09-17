import React, { useEffect, useMemo, useRef, useState } from "react";

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
    ChevronRight
} from "lucide-react";

import Loader from "../../components/Loader/Loader";


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
    },
    {
        id: "#TKT-1016",
        subject: "App not loading on mobile",
        customer: "Ayesha Khan",
        department: "Technical",
        priority: "High",
        status: "Open",
        date: "20 May 2026",
        time: "10:00 AM"
    },
    {
        id: "#TKT-1015",
        subject: "Refund request pending",
        customer: "Rohit Malhotra",
        department: "Billing",
        priority: "Medium",
        status: "In Progress",
        date: "20 May 2026",
        time: "02:45 PM"
    },
    {
        id: "#TKT-1014",
        subject: "Password reset not working",
        customer: "Sneha Gupta",
        department: "Account",
        priority: "High",
        status: "Open",
        date: "19 May 2026",
        time: "09:30 AM"
    },
    {
        id: "#TKT-1013",
        subject: "Feature request: Dark mode",
        customer: "Nitin Saxena",
        department: "General",
        priority: "Low",
        status: "Resolved",
        date: "19 May 2026",
        time: "11:45 AM"
    }
];


// =====================================================
// FILTER OPTIONS
// =====================================================

const statusOptions = [
    "Open",
    "In Progress",
    "Resolved",
    "Closed"
];

const priorityOptions = [
    "High",
    "Medium",
    "Low"
];


function SupportTickets() {

    // =================================================
    // LOADING
    // =================================================

    const [loading, setLoading] = useState(true);


    // =================================================
    // SEARCH / FILTERS
    // =================================================

    const [searchText, setSearchText] = useState("");
    const [selectedStatuses, setSelectedStatuses] = useState([]);
    const [selectedPriorities, setSelectedPriorities] = useState([]);


    // =================================================
    // DROPDOWN STATE
    // =================================================

    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
    const [showFilterPanel, setShowFilterPanel] = useState(false);


    // =================================================
    // PAGINATION
    // =================================================

    const ticketsPerPage = 5;

    const [currentPage, setCurrentPage] = useState(1);


    // =================================================
    // REFS
    // =================================================

    const statusDropdownRef = useRef(null);
    const priorityDropdownRef = useRef(null);
    const filterPanelRef = useRef(null);


    // =================================================
    // LOADER EFFECT
    // =================================================

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    // =================================================
    // CLOSE DROPDOWNS ON OUTSIDE CLICK
    // =================================================

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                statusDropdownRef.current &&
                !statusDropdownRef.current.contains(event.target)
            ) {
                setShowStatusDropdown(false);
            }

            if (
                priorityDropdownRef.current &&
                !priorityDropdownRef.current.contains(event.target)
            ) {
                setShowPriorityDropdown(false);
            }

            if (
                filterPanelRef.current &&
                !filterPanelRef.current.contains(event.target)
            ) {
                setShowFilterPanel(false);
            }

        };


        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);


    // =================================================
    // STATUS CHANGE
    // =================================================

    const handleStatusChange = (status) => {
        if (selectedStatuses.includes(status)) {
            setSelectedStatuses(selectedStatuses.filter((item) => item !== status));
        } else {
            setSelectedStatuses([...selectedStatuses, status]);
        }
    };


    // =================================================
    // PRIORITY CHANGE
    // =================================================

    const handlePriorityChange = (priority) => {
        if (selectedPriorities.includes(priority)) {
            setSelectedPriorities(selectedPriorities.filter((item) => item !== priority));
        } else {
            setSelectedPriorities([...selectedPriorities, priority]);
        }
    };


    // =================================================
    // FILTERED TICKETS
    // =================================================

    const filteredTickets = useMemo(() => {

        return tickets.filter((ticket) => {

            const searchValue = searchText.toLowerCase().trim();

            const matchesSearch =
                ticket.id.toLowerCase().includes(searchValue) ||
                ticket.subject.toLowerCase().includes(searchValue) ||
                ticket.customer.toLowerCase().includes(searchValue);

            const matchesStatus =
                selectedStatuses.length === 0 ||
                selectedStatuses.includes(ticket.status);

            const matchesPriority =
                selectedPriorities.length === 0 ||
                selectedPriorities.includes(ticket.priority);

            return matchesSearch && matchesStatus && matchesPriority;

        });

    }, [searchText, selectedStatuses, selectedPriorities]);


    // =================================================
    // PAGINATION CALCULATION
    // =================================================

    const totalPages = Math.max(
        1,
        Math.ceil(filteredTickets.length / ticketsPerPage)
    );

    const startIndex = (currentPage - 1) * ticketsPerPage;

    const endIndex = startIndex + ticketsPerPage;

    const currentTickets = filteredTickets.slice(startIndex, endIndex);


    // =================================================
    // PAGE NUMBERS TO DISPLAY
    // (with ellipsis for large ranges)
    // =================================================

    const getPageNumbers = () => {

        const pages = [];

        const maxVisible = 5;

        if (totalPages <= maxVisible) {

            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

            return pages;
        }

        // Always show first 3
        pages.push(1);
        pages.push(2);
        pages.push(3);

        // Ellipsis
        if (currentPage > 4) {
            pages.push("...");
        }

        // Current page context
        if (currentPage > 3 && currentPage < totalPages - 1) {
            pages.push(currentPage);
        }

        // Last page
        if (currentPage < totalPages - 2) {
            pages.push("...");
        }

        pages.push(totalPages);

        return pages;

    };


    // =================================================
    // PAGE HANDLERS
    // =================================================

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePageClick = (page) => {
        if (page === "...") return;
        setCurrentPage(page);
    };


    // =================================================
    // RESET PAGE WHEN FILTERS CHANGE
    // =================================================

    useEffect(() => {
        setCurrentPage(1);
    }, [searchText, selectedStatuses, selectedPriorities]);


    // =================================================
    // RESET FILTERS
    // =================================================

    const handleResetFilters = () => {
        setSearchText("");
        setSelectedStatuses([]);
        setSelectedPriorities([]);
        setShowFilterPanel(false);
        setCurrentPage(1);
    };


    // =================================================
    // LOADER
    // =================================================

    if (loading) {

        return (
            <div className="min-h-screen bg-theme-page flex items-center justify-center">
                <Loader text="Loading support tickets..." />
            </div>
        );

    }


    return (

        <div
            className="
                w-full
                min-h-screen
                bg-theme-page
                text-theme-text
                pl-6 pr-4
                sm:pl-8 sm:pr-6
                lg:pl-10 lg:pr-8
                pt-6 sm:pt-8 lg:pt-10
                transition-colors
                duration-300
            "
        >

            {/* PAGE HEADER */}

            <div>

                <h1 className="text-[27px] font-semibold text-theme-text">
                    Support Tickets
                </h1>

                <p className="mt-1 text-[13px] text-theme-text-secondary">
                    Manage and track all your support tickets
                </p>

            </div>


            {/* SUMMARY CARDS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-5">

                {/* TOTAL */}

                <div className="h-[80px] bg-theme-surface border border-theme-border-light rounded-lg shadow-sm flex items-center px-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">

                    <div className="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center mr-4 shrink-0">
                        <Ticket size={21} />
                    </div>

                    <div>
                        <p className="text-xs text-theme-text-secondary">Total Tickets</p>
                        <h2 className="text-xl font-semibold text-theme-text">1,248</h2>
                        <p className="text-[10px] text-theme-text-muted">All Time</p>
                    </div>

                </div>


                {/* OPEN */}

                <div className="h-[80px] bg-theme-surface border border-theme-border-light rounded-lg shadow-sm flex items-center px-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">

                    <div className="w-11 h-11 rounded-full bg-blue-500/15 text-blue-500 flex items-center justify-center mr-4 shrink-0">
                        <MessageSquare size={21} />
                    </div>

                    <div>
                        <p className="text-xs text-theme-text-secondary">Open</p>
                        <h2 className="text-xl font-semibold text-theme-text">156</h2>
                    </div>

                </div>


                {/* IN PROGRESS */}

                <div className="h-[80px] bg-theme-surface border border-theme-border-light rounded-lg shadow-sm flex items-center px-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">

                    <div className="w-11 h-11 rounded-full bg-orange-500/15 text-orange-500 flex items-center justify-center mr-4 shrink-0">
                        <Clock size={21} />
                    </div>

                    <div>
                        <p className="text-xs text-theme-text-secondary">In Progress</p>
                        <h2 className="text-xl font-semibold text-theme-text">72</h2>
                    </div>

                </div>


                {/* RESOLVED */}

                <div className="h-[80px] bg-theme-surface border border-theme-border-light rounded-lg shadow-sm flex items-center px-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">

                    <div className="w-11 h-11 rounded-full bg-green-500/15 text-green-500 flex items-center justify-center mr-4 shrink-0">
                        <Check size={22} />
                    </div>

                    <div>
                        <p className="text-xs text-theme-text-secondary">Resolved</p>
                        <h2 className="text-xl font-semibold text-theme-text">980</h2>
                    </div>

                </div>


                {/* CLOSED */}

                <div className="h-[80px] bg-theme-surface border border-theme-border-light rounded-lg shadow-sm flex items-center px-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">

                    <div className="w-11 h-11 rounded-full bg-red-500/15 text-red-500 flex items-center justify-center mr-4 shrink-0">
                        <X size={22} />
                    </div>

                    <div>
                        <p className="text-xs text-theme-text-secondary">Closed</p>
                        <h2 className="text-xl font-semibold text-theme-text">50</h2>
                    </div>

                </div>

            </div>


            {/* ACTION BAR */}

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <div className="flex items-center border border-theme-border-light rounded-md h-[32px] w-full sm:w-[220px] px-2 bg-theme-surface transition-colors duration-300">

                    <Search size={14} className="text-theme-text-secondary shrink-0" />

                    <input
                        type="text"
                        placeholder="Search Ticket"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="
                            ml-2
                            w-full
                            outline-none
                            border-none
                            text-[10px]
                            text-theme-text
                            placeholder:text-theme-text-muted
                            bg-transparent
                        "
                    />

                </div>

            </div>


            {/* TABLE CONTAINER */}

            <div className="mt-2 bg-theme-surface border border-theme-border-light rounded-lg shadow-sm overflow-hidden transition-colors duration-300">

                {/* FILTER BAR */}

                <div className="min-h-[52px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 px-2 py-2 border-b border-theme-border-light">

                    <div className="hidden lg:block" />


                    <div className="flex flex-wrap items-center gap-2">

                        {/* STATUS */}

                        <div ref={statusDropdownRef} className="relative">

                            <button
                                type="button"
                                onClick={() => {
                                    setShowStatusDropdown(!showStatusDropdown);
                                    setShowPriorityDropdown(false);
                                    setShowFilterPanel(false);
                                }}
                                className="h-[32px] min-w-[100px] px-3 border border-theme-border-light rounded-md flex items-center justify-between gap-2 text-[10px] text-theme-text-secondary bg-theme-surface hover:bg-theme-surface-secondary hover:text-theme-text transition duration-200 cursor-pointer"
                            >

                                {selectedStatuses.length === 0
                                    ? "All Status"
                                    : `${selectedStatuses.length} Selected`
                                }

                                <ChevronDown size={13} className={`transition-transform duration-200 ${showStatusDropdown ? "rotate-180" : ""}`} />

                            </button>


                            {showStatusDropdown && (

                                <div className="absolute right-0 top-[38px] z-50 w-[170px] bg-theme-surface border border-theme-border-light rounded-md shadow-lg p-2">

                                    <label className="flex items-center gap-2 px-2 py-2 text-[10px] text-theme-text-secondary cursor-pointer hover:bg-theme-surface-secondary rounded">

                                        <input
                                            type="checkbox"
                                            checked={selectedStatuses.length === 0}
                                            onChange={() => setSelectedStatuses([])}
                                            className="accent-primary"
                                        />

                                        All Status

                                    </label>


                                    <div className="border-t border-theme-border my-1" />


                                    {statusOptions.map((status) => (

                                        <label key={status} className="flex items-center gap-2 px-2 py-2 text-[10px] text-theme-text-secondary cursor-pointer hover:bg-theme-surface-secondary rounded">

                                            <input
                                                type="checkbox"
                                                checked={selectedStatuses.includes(status)}
                                                onChange={() => handleStatusChange(status)}
                                                className="accent-primary"
                                            />

                                            {status}

                                        </label>

                                    ))}

                                </div>

                            )}

                        </div>


                        {/* PRIORITY */}

                        <div ref={priorityDropdownRef} className="relative">

                            <button
                                type="button"
                                onClick={() => {
                                    setShowPriorityDropdown(!showPriorityDropdown);
                                    setShowStatusDropdown(false);
                                    setShowFilterPanel(false);
                                }}
                                className="h-[32px] min-w-[95px] px-3 border border-theme-border-light rounded-md flex items-center justify-between gap-2 text-[10px] text-theme-text-secondary bg-theme-surface hover:bg-theme-surface-secondary hover:text-theme-text transition duration-200 cursor-pointer"
                            >

                                {selectedPriorities.length === 0
                                    ? "All Priority"
                                    : `${selectedPriorities.length} Selected`
                                }

                                <ChevronDown size={13} className={`transition-transform duration-200 ${showPriorityDropdown ? "rotate-180" : ""}`} />

                            </button>


                            {showPriorityDropdown && (

                                <div className="absolute right-0 top-[38px] z-50 w-[160px] bg-theme-surface border border-theme-border-light rounded-md shadow-lg p-2">

                                    <label className="flex items-center gap-2 px-2 py-2 text-[10px] text-theme-text-secondary cursor-pointer hover:bg-theme-surface-secondary rounded">

                                        <input
                                            type="checkbox"
                                            checked={selectedPriorities.length === 0}
                                            onChange={() => setSelectedPriorities([])}
                                            className="accent-primary"
                                        />

                                        All Priority

                                    </label>


                                    <div className="border-t border-theme-border my-1" />


                                    {priorityOptions.map((priority) => (

                                        <label key={priority} className="flex items-center gap-2 px-2 py-2 text-[10px] text-theme-text-secondary cursor-pointer hover:bg-theme-surface-secondary rounded">

                                            <input
                                                type="checkbox"
                                                checked={selectedPriorities.includes(priority)}
                                                onChange={() => handlePriorityChange(priority)}
                                                className="accent-primary"
                                            />

                                            {priority}

                                        </label>

                                    ))}

                                </div>

                            )}

                        </div>


                        {/* RESET */}

                        <button
                            type="button"
                            onClick={handleResetFilters}
                            className="h-[32px] px-3 border border-theme-border-light rounded-md text-[10px] text-theme-text-secondary bg-theme-surface hover:bg-theme-surface-secondary hover:text-theme-text transition duration-200 cursor-pointer"
                        >
                            Reset
                        </button>


                        {/* FILTER ICON */}

                        <div ref={filterPanelRef} className="relative">

                            <button
                                type="button"
                                onClick={() => {
                                    setShowFilterPanel(!showFilterPanel);
                                    setShowStatusDropdown(false);
                                    setShowPriorityDropdown(false);
                                }}
                                className={`
                                    h-[32px] w-[34px] border rounded-md
                                    flex items-center justify-center
                                    transition-all duration-200 cursor-pointer

                                    ${
                                        showFilterPanel
                                            ? "bg-primary text-white border-primary"
                                            : "bg-theme-surface text-theme-text-secondary border-theme-border-light hover:bg-theme-surface-secondary hover:text-theme-text"
                                    }
                                `}
                            >

                                <Filter size={15} className={`transition-transform duration-200 ${showFilterPanel ? "rotate-180" : ""}`} />

                            </button>


                            {showFilterPanel && (

                                <div className="absolute right-0 top-[38px] z-50 w-[230px] bg-theme-surface border border-theme-border-light rounded-lg shadow-lg p-3">

                                    <div className="flex items-center justify-between mb-3">

                                        <p className="text-[11px] font-semibold text-theme-text">
                                            Active Filters
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => setShowFilterPanel(false)}
                                            className="text-theme-text-muted hover:text-theme-text transition cursor-pointer"
                                        >
                                            <X size={14} />
                                        </button>

                                    </div>


                                    <div className="mb-3">

                                        <p className="text-[9px] text-theme-text-muted mb-1">Status</p>

                                        <div className="bg-theme-surface-secondary rounded px-2 py-1.5">

                                            <p className="text-[10px] text-theme-text-secondary">
                                                {selectedStatuses.length === 0
                                                    ? "All Status"
                                                    : selectedStatuses.join(", ")
                                                }
                                            </p>

                                        </div>

                                    </div>


                                    <div className="mb-3">

                                        <p className="text-[9px] text-theme-text-muted mb-1">Priority</p>

                                        <div className="bg-theme-surface-secondary rounded px-2 py-1.5">

                                            <p className="text-[10px] text-theme-text-secondary">
                                                {selectedPriorities.length === 0
                                                    ? "All Priority"
                                                    : selectedPriorities.join(", ")
                                                }
                                            </p>

                                        </div>

                                    </div>


                                    <button
                                        type="button"
                                        onClick={handleResetFilters}
                                        className="w-full h-[30px] bg-primary hover:bg-primaryHover text-white text-[9px] font-medium rounded-md transition duration-200 cursor-pointer"
                                    >
                                        Clear All Filters
                                    </button>

                                </div>

                            )}

                        </div>

                    </div>

                </div>


                {/* TABLE */}

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[900px] border-collapse">

                        <thead>

                            <tr className="bg-primary/10">

                                <th className="text-left px-7 py-2.5 text-[10px] font-medium text-theme-text-secondary">Ticket ID</th>
                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-theme-text-secondary">Subject</th>
                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-theme-text-secondary">Customer</th>
                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-theme-text-secondary">Department</th>
                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-theme-text-secondary">Priority</th>
                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-theme-text-secondary">Status</th>
                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-theme-text-secondary">Created On</th>
                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-theme-text-secondary">Action</th>

                            </tr>

                        </thead>


                        <tbody>

                            {currentTickets.length > 0 ? (

                                currentTickets.map((ticket) => (

                                    <tr
                                        key={ticket.id}
                                        className="border-b border-theme-border-light hover:bg-theme-surface-secondary transition duration-200"
                                    >

                                        <td className="px-7 py-3 text-[10px] font-medium text-primary">
                                            {ticket.id}
                                        </td>

                                        <td className="px-3 py-3 text-[10px] text-theme-text-secondary whitespace-nowrap">
                                            {ticket.subject}
                                        </td>

                                        <td className="px-3 py-3 text-[10px] text-theme-text-secondary whitespace-nowrap">
                                            {ticket.customer}
                                        </td>

                                        <td className="px-3 py-3 text-[10px] text-theme-text-secondary">
                                            {ticket.department}
                                        </td>

                                        <td className="px-3 py-3">

                                            <span className={`
                                                inline-block px-2 py-1 rounded text-[8px] font-medium

                                                ${
                                                    ticket.priority === "High"
                                                        ? "bg-red-500/15 text-red-500"
                                                        : ticket.priority === "Medium"
                                                        ? "bg-orange-500/15 text-orange-500"
                                                        : "bg-green-500/15 text-green-500"
                                                }
                                            `}>
                                                {ticket.priority}
                                            </span>

                                        </td>

                                        <td className="px-3 py-3">

                                            <span className={`
                                                inline-block px-2 py-1 rounded text-[8px] font-medium

                                                ${
                                                    ticket.status === "Open"
                                                        ? "bg-blue-500/15 text-blue-500"
                                                        : ticket.status === "In Progress"
                                                        ? "bg-orange-500/15 text-orange-500"
                                                        : ticket.status === "Resolved"
                                                        ? "bg-green-500/15 text-green-500"
                                                        : "bg-theme-surface-secondary text-theme-text-secondary"
                                                }
                                            `}>
                                                {ticket.status}
                                            </span>

                                        </td>

                                        <td className="px-3 py-2 text-[9px] text-theme-text-secondary whitespace-nowrap">

                                            <div>{ticket.date}</div>
                                            <div className="text-[7px] text-theme-text-muted">{ticket.time}</div>

                                        </td>

                                        <td className="px-3 py-3">

                                            <div className="flex items-center gap-4">

                                                <Eye size={14} className="text-theme-text-secondary cursor-pointer hover:text-primary transition duration-200" />

                                                <MoreVertical size={15} className="text-theme-text-secondary cursor-pointer hover:text-theme-text hover:scale-110 transition duration-200" />

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="8" className="text-center py-10 text-[11px] text-theme-text-muted">
                                        No tickets found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>


                {/* PAGINATION */}

                <div className="min-h-[40px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-7 py-2">

                    <p className="text-[9px] text-theme-text-muted">
                        Showing {filteredTickets.length === 0 ? 0 : startIndex + 1} to{" "}
                        {Math.min(endIndex, filteredTickets.length)} of{" "}
                        {filteredTickets.length} results
                    </p>


                    <div className="flex flex-wrap items-center gap-1.5">

                        {/* PREV */}

                        <button
                            type="button"
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className={`
                                w-6 h-6
                                flex items-center justify-center
                                rounded
                                transition duration-200
                                cursor-pointer

                                ${
                                    currentPage === 1
                                        ? "text-theme-text-muted cursor-not-allowed opacity-50"
                                        : "text-theme-text-secondary hover:text-primary"
                                }
                            `}
                            aria-label="Previous page"
                        >
                            <ChevronLeft size={14} />
                        </button>


                        {/* PAGE NUMBERS */}

                        {getPageNumbers().map((page, index) => (

                            <button
                                key={`${page}-${index}`}
                                type="button"
                                onClick={() => handlePageClick(page)}
                                disabled={page === "..."}
                                className={`
                                    min-w-[24px] h-6 px-1.5
                                    rounded
                                    text-[9px]
                                    font-medium
                                    transition duration-200

                                    ${
                                        page === "..."
                                            ? "text-theme-text-muted cursor-default"
                                            : currentPage === page
                                            ? "bg-primary text-white cursor-pointer"
                                            : "text-theme-text-secondary hover:bg-theme-surface-secondary cursor-pointer"
                                    }
                                `}
                            >
                                {page}
                            </button>

                        ))}


                        {/* NEXT */}

                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`
                                w-6 h-6
                                flex items-center justify-center
                                rounded
                                transition duration-200
                                cursor-pointer

                                ${
                                    currentPage === totalPages
                                        ? "text-theme-text-muted cursor-not-allowed opacity-50"
                                        : "text-theme-text-secondary hover:text-primary"
                                }
                            `}
                            aria-label="Next page"
                        >
                            <ChevronRight size={14} />
                        </button>


                        {/* ROWS PER PAGE */}

                        <button
                            type="button"
                            className="flex items-center gap-1.5 border border-theme-border-light rounded px-2 py-1 text-[9px] text-theme-text-secondary bg-theme-surface hover:bg-theme-surface-secondary hover:text-theme-text transition cursor-pointer ml-2"
                        >
                            5 / Page
                            <ChevronDown size={11} />
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default SupportTickets;
import React, { useEffect, useMemo, useState } from "react";

import {
    Search,
    Filter,
    Download,
    Plus,
    UserPlus
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import LeadDetailsPopup from "../../components/LeadDetailsPopup/LeadDetailsPopup";

import {
    leads,
    leadStats,
    statusOptions,
    sourceOptions,
    assignedOptions
} from "../../data/leadsData";


function Leads() {

    const navigate = useNavigate();

    /* =================================================
       LOADING
    ================================================= */

    const [loading, setLoading] = useState(true);


    /* =================================================
       SEARCH / FILTERS
    ================================================= */

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [sourceFilter, setSourceFilter] = useState("All");
    const [assignedFilter, setAssignedFilter] = useState("All");


    /* =================================================
       PAGINATION
    ================================================= */

    const [currentPage, setCurrentPage] = useState(1);
    const leadsPerPage = 7;


    /* =================================================
       SELECTION
    ================================================= */

    const [selectedIds, setSelectedIds] = useState([]);


    /* =================================================
       SELECTED LEAD (for details popup)
    ================================================= */

    const [selectedLead, setSelectedLead] = useState(null);


    /* =================================================
       LOADING EFFECT
    ================================================= */

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    /* =================================================
       FILTER LOGIC
    ================================================= */

    const filteredLeads = useMemo(() => {

        return leads.filter((lead) => {

            const search = searchTerm.toLowerCase().trim();

            const matchesSearch =
                lead.name.toLowerCase().includes(search) ||
                lead.company.toLowerCase().includes(search);

            const matchesStatus =
                statusFilter === "All" ||
                lead.status === statusFilter;

            const matchesSource =
                sourceFilter === "All" ||
                lead.source === sourceFilter;

            const matchesAssigned =
                assignedFilter === "All" ||
                lead.assignedTo === assignedFilter;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesSource &&
                matchesAssigned
            );

        });

    }, [
        searchTerm,
        statusFilter,
        sourceFilter,
        assignedFilter
    ]);


    /* =================================================
       RESET PAGE WHEN FILTER CHANGES
    ================================================= */

    useEffect(() => {
        setCurrentPage(1);
    }, [
        searchTerm,
        statusFilter,
        sourceFilter,
        assignedFilter
    ]);


    /* =================================================
       PAGINATION CALCULATION
    ================================================= */

    const totalPages = Math.max(
        1,
        Math.ceil(filteredLeads.length / leadsPerPage)
    );

    const startIndex = (currentPage - 1) * leadsPerPage;
    const endIndex = startIndex + leadsPerPage;

    const currentLeads = filteredLeads.slice(startIndex, endIndex);


    /* =================================================
       PAGE NUMBERS
    ================================================= */

    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );


    /* =================================================
       PAGINATION HANDLERS
    ================================================= */

    const handlePrevious = () => {
        setCurrentPage((previousPage) =>
            Math.max(previousPage - 1, 1)
        );
    };

    const handleNext = () => {
        setCurrentPage((previousPage) =>
            Math.min(previousPage + 1, totalPages)
        );
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    /* =================================================
       CLEAR FILTERS
    ================================================= */

    const clearFilters = () => {

        setSearchTerm("");
        setStatusFilter("All");
        setSourceFilter("All");
        setAssignedFilter("All");
        setCurrentPage(1);

    };


    /* =================================================
       SELECTION HANDLERS
    ================================================= */

    const currentPageIds = currentLeads.map((lead) => lead.id);

    const allOnPageSelected =
        currentPageIds.length > 0 &&
        currentPageIds.every((id) => selectedIds.includes(id));


    const handleSelectAll = () => {

        if (allOnPageSelected) {

            setSelectedIds((previous) =>
                previous.filter(
                    (id) => !currentPageIds.includes(id)
                )
            );

        } else {

            setSelectedIds((previous) => [
                ...new Set([...previous, ...currentPageIds])
            ]);

        }

    };


    const handleSelectOne = (id) => {

        setSelectedIds((previous) => {

            if (previous.includes(id)) {
                return previous.filter((item) => item !== id);
            }

            return [...previous, id];

        });

    };


    /* =================================================
       EXPORT LEADS
    ================================================= */

    const handleExportLeads = () => {

        if (filteredLeads.length === 0) {
            return;
        }

        const headers = [
            "ID",
            "Lead",
            "Company",
            "Source",
            "Assigned To",
            "Status",
            "Last Activity"
        ];

        const rows = filteredLeads.map((lead) => [
            lead.id,
            lead.name,
            lead.company,
            lead.source,
            lead.assignedTo,
            lead.status,
            lead.lastActivity
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map((row) =>
                row
                    .map((value) =>
                        `"${String(value).replace(/"/g, '""')}"`
                    )
                    .join(",")
            )
        ].join("\n");

        const blob = new Blob(
            [csvContent],
            { type: "text/csv;charset=utf-8;" }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "leads.csv";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    };


    /* =================================================
       LOADING SCREEN
    ================================================= */

    if (loading) {

        return <Loader text="Loading Leads..." />;

    }


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

                pt-6
                sm:pt-8
                lg:pt-10

                pr-4
                sm:pr-6
                lg:pr-10

                transition-colors
                duration-300
            "
        >

            {/* HEADER */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

                <div>

                    <h1 className="text-xl sm:text-2xl font-semibold text-theme-text">
                        Leads
                    </h1>

                    <p className="text-xs sm:text-sm text-theme-text-secondary mt-1">
                        Manage and track all your leads
                    </p>

                </div>


                <div className="flex flex-wrap gap-2">

                    {/* EXPORT LEADS */}

                    <button
                        type="button"
                        onClick={handleExportLeads}
                        className="
                            flex items-center justify-center gap-2
                            border border-theme-border-light
                            bg-theme-surface
                            text-theme-text-secondary
                            px-3 sm:px-4
                            py-2.5
                            rounded-md
                            text-xs lg:text-sm
                            font-medium
                            hover:bg-theme-surface-secondary
                            hover:text-theme-text
                            active:scale-95
                            transition-all duration-200
                            cursor-pointer
                        "
                    >
                        <Download size={16} />
                        <span>Export Leads</span>
                    </button>


                    {/* CREATE LEAD */}

                    <button
                        type="button"
                        onClick={() => navigate("/create-lead")}
                        className="
                            flex items-center justify-center gap-2
                            bg-primary text-white
                            px-3 sm:px-4
                            py-2.5
                            rounded-md
                            text-xs lg:text-sm
                            font-medium
                            hover:bg-primaryHover
                            active:scale-95
                            transition-all duration-200
                            cursor-pointer
                        "
                    >
                        <Plus size={16} />
                        <span>Create Lead</span>
                    </button>


                    {/* ASSIGN NEW LEAD */}

                    <button
                        type="button"
                        className="
                            flex items-center justify-center gap-2
                            bg-blue-500 text-white
                            px-3 sm:px-4
                            py-2.5
                            rounded-md
                            text-xs lg:text-sm
                            font-medium
                            hover:bg-blue-600
                            active:scale-95
                            transition-all duration-200
                            cursor-pointer
                        "
                    >
                        <UserPlus size={16} />
                        <span>Assign New Lead</span>
                    </button>

                </div>

            </div>


            {/* STATS */}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">

                {leadStats.map((stat) => (

                    <div
                        key={stat.title}
                        className="
                            bg-theme-surface
                            border border-theme-border-light
                            rounded-lg
                            p-4
                            shadow-sm
                            transition-colors duration-300
                        "
                    >

                        <p className="text-xs text-theme-text-secondary mb-2">
                            {stat.title}
                        </p>

                        <div className="flex items-center justify-between gap-2">

                            <h2 className="text-lg sm:text-xl font-semibold text-theme-text">
                                {stat.value}
                            </h2>


                            <div className={`px-2 py-1 rounded-md text-xs font-medium ${stat.color}`}>
                                Leads
                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* SEARCH & FILTER */}

            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">

                <div className="relative w-full md:w-64 lg:w-72 shrink-0">

                    <Search
                        size={17}
                        className="
                            absolute left-3 top-1/2 -translate-y-1/2
                            text-theme-text-muted
                        "
                    />


                    <input
                        type="text"
                        placeholder="Search leads..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="
                            w-full
                            border border-theme-border-light
                            rounded-md
                            pl-9 pr-3
                            py-2.5
                            text-sm
                            bg-theme-surface
                            text-theme-text
                            placeholder:text-theme-text-muted
                            outline-none
                            focus:ring-2 focus:ring-primary
                            focus:border-primary
                            transition-colors duration-200
                        "
                    />

                </div>


                <div className="flex flex-wrap items-center justify-end gap-3 md:ml-auto">

                    {/* STATUS */}

                    <div className="relative">

                        <Filter
                            size={15}
                            className="
                                absolute left-3 top-1/2 -translate-y-1/2
                                text-theme-text-muted
                                pointer-events-none
                            "
                        />

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="
                                w-full sm:w-40
                                border border-theme-border-light
                                rounded-md
                                pl-9 pr-8
                                py-2.5
                                text-sm
                                bg-theme-surface
                                text-theme-text
                                outline-none
                                focus:ring-2 focus:ring-primary
                                focus:border-primary
                                transition-colors duration-200
                            "
                        >
                            {statusOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                    </div>


                    {/* SOURCE */}

                    <select
                        value={sourceFilter}
                        onChange={(e) => setSourceFilter(e.target.value)}
                        className="
                            w-full sm:w-40
                            border border-theme-border-light
                            rounded-md
                            px-3 py-2.5
                            text-sm
                            bg-theme-surface
                            text-theme-text
                            outline-none
                            focus:ring-2 focus:ring-primary
                            focus:border-primary
                            transition-colors duration-200
                        "
                    >
                        {sourceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>


                    {/* ASSIGNED */}

                    <select
                        value={assignedFilter}
                        onChange={(e) => setAssignedFilter(e.target.value)}
                        className="
                            w-full sm:w-40
                            border border-theme-border-light
                            rounded-md
                            px-3 py-2.5
                            text-sm
                            bg-theme-surface
                            text-theme-text
                            outline-none
                            focus:ring-2 focus:ring-primary
                            focus:border-primary
                            transition-colors duration-200
                        "
                    >
                        {assignedOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>


                    {/* CLEAR */}

                    <button
                        type="button"
                        onClick={clearFilters}
                        title="Clear all filters"
                        className="
                            flex items-center justify-center
                            w-11 h-11
                            border border-theme-border-light
                            rounded-md
                            bg-theme-surface
                            text-theme-text-secondary
                            hover:bg-theme-surface-secondary
                            hover:text-primary
                            active:scale-95
                            transition-all duration-200
                            shrink-0
                            cursor-pointer
                        "
                    >
                        <Filter size={18} />
                    </button>

                </div>

            </div>


            {/* TABLE */}

            <div
                className="
                    bg-theme-surface
                    border border-theme-border-light
                    rounded-lg
                    shadow-sm
                    overflow-x-auto
                    transition-colors duration-300
                "
            >

                <table className="w-full min-w-[900px] text-left">

                    <thead>

                        <tr className="border-b border-theme-border-light bg-primary/10">

                            <th className="px-4 py-3 w-[40px]">
                                <input
                                    type="checkbox"
                                    checked={allOnPageSelected}
                                    onChange={handleSelectAll}
                                    className="w-4 h-4 accent-primary cursor-pointer"
                                    aria-label="Select all on this page"
                                />
                            </th>


                            <th className="px-4 py-3 text-xs font-semibold text-theme-text-secondary">ID</th>
                            <th className="px-4 py-3 text-xs font-semibold text-theme-text-secondary">Lead</th>
                            <th className="px-4 py-3 text-xs font-semibold text-theme-text-secondary">Company</th>
                            <th className="px-4 py-3 text-xs font-semibold text-theme-text-secondary">Source</th>
                            <th className="px-4 py-3 text-xs font-semibold text-theme-text-secondary">Assigned To</th>
                            <th className="px-4 py-3 text-xs font-semibold text-theme-text-secondary">Status</th>
                            <th className="px-4 py-3 text-xs font-semibold text-theme-text-secondary">Last Activity</th>

                        </tr>

                    </thead>


                    <tbody>

                        {currentLeads.length > 0 ? (

                            currentLeads.map((lead) => (

                                <tr
                                    key={lead.id}
                                    className="
                                        border-b border-theme-border-light
                                        hover:bg-theme-surface-secondary
                                        transition-colors duration-200
                                    "
                                >

                                    <td className="px-4 py-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.includes(lead.id)}
                                            onChange={() => handleSelectOne(lead.id)}
                                            className="w-4 h-4 accent-primary cursor-pointer"
                                            aria-label={`Select ${lead.name}`}
                                        />
                                    </td>


                                    <td className="px-4 py-4 text-sm font-medium text-theme-text-secondary">
                                        {lead.id}
                                    </td>


                                    {/* LEAD NAME — blue + clickable */}

                                    <td className="px-4 py-4">

                                        <div className="flex items-center gap-3">

                                            <div className={`
                                                w-9 h-9 rounded-full
                                                flex items-center justify-center
                                                text-xs font-semibold
                                                shrink-0
                                                ${lead.avatarColor}
                                            `}>
                                                {lead.initials}
                                            </div>


                                            <button
                                                type="button"
                                                onClick={() => setSelectedLead(lead)}
                                                className="
                                                    text-sm
                                                    font-medium
                                                    text-blue-500
                                                    hover:text-blue-600
                                                    hover:underline
                                                    cursor-pointer
                                                    transition-colors
                                                    text-left
                                                "
                                            >
                                                {lead.name}
                                            </button>

                                        </div>

                                    </td>


                                    <td className="px-4 py-4 text-sm text-theme-text-secondary">
                                        {lead.company}
                                    </td>


                                    <td className="px-4 py-4 text-sm text-theme-text-secondary">
                                        {lead.source}
                                    </td>


                                    <td className="px-4 py-4 text-sm text-theme-text-secondary">
                                        {lead.assignedTo}
                                    </td>


                                    <td className="px-4 py-4">

                                        <span className={`
                                            inline-flex
                                            px-2.5 py-1
                                            rounded-full
                                            text-xs font-medium

                                            ${
                                                lead.status === "Qualified"
                                                    ? "bg-green-500/15 text-green-500"
                                                    : lead.status === "Contacted"
                                                    ? "bg-yellow-500/15 text-yellow-600"
                                                    : lead.status === "New"
                                                    ? "bg-blue-500/15 text-blue-500"
                                                    : lead.status === "Proposal"
                                                    ? "bg-orange-500/15 text-orange-500"
                                                    : "bg-emerald-500/15 text-emerald-500"
                                            }
                                        `}>
                                            {lead.status}
                                        </span>

                                    </td>


                                    <td className="px-4 py-4 text-sm text-theme-text-muted">
                                        {lead.lastActivity}
                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="8"
                                    className="text-center py-10 text-sm text-theme-text-secondary"
                                >
                                    No leads found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>


            {/* PAGINATION */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4">

                <p className="text-xs sm:text-sm text-theme-text-secondary">

                    Showing{" "}

                    {filteredLeads.length === 0 ? 0 : startIndex + 1}

                    {" "}to{" "}

                    {Math.min(endIndex, filteredLeads.length)}

                    {" "}of{" "}

                    {filteredLeads.length}

                    {" "}matching leads

                </p>


                <div className="flex items-center gap-2 flex-wrap">

                    <button
                        type="button"
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`
                            px-3 py-2
                            border border-theme-border-light
                            rounded-md
                            text-xs
                            transition
                            cursor-pointer

                            ${
                                currentPage === 1
                                    ? "text-theme-text-muted cursor-not-allowed bg-theme-surface-secondary"
                                    : "text-theme-text-secondary hover:bg-theme-surface-secondary hover:text-theme-text"
                            }
                        `}
                    >
                        Previous
                    </button>


                    {pageNumbers.map((page) => (

                        <button
                            type="button"
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`
                                px-3 py-2
                                rounded-md
                                text-xs
                                transition
                                cursor-pointer

                                ${
                                    currentPage === page
                                        ? "bg-primary text-white"
                                        : "border border-theme-border-light text-theme-text-secondary hover:bg-theme-surface-secondary hover:text-theme-text"
                                }
                            `}
                        >
                            {page}
                        </button>

                    ))}


                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`
                            px-3 py-2
                            border border-theme-border-light
                            rounded-md
                            text-xs
                            transition
                            cursor-pointer

                            ${
                                currentPage === totalPages
                                    ? "text-theme-text-muted cursor-not-allowed bg-theme-surface-secondary"
                                    : "text-theme-text-secondary hover:bg-theme-surface-secondary hover:text-theme-text"
                            }
                        `}
                    >
                        Next
                    </button>

                </div>

            </div>


            {/* LEAD DETAILS POPUP */}

            {selectedLead && (
                <LeadDetailsPopup
                    lead={selectedLead}
                    onClose={() => setSelectedLead(null)}
                />
            )}

        </div>

    );

}


export default Leads;
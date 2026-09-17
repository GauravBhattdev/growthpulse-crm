import React, { useState } from "react";

import { createPortal } from "react-dom";

import { useNavigate } from "react-router-dom";

import {
    X,
    ChevronLeft,
    ChevronRight,
    ExternalLink
} from "lucide-react";

import { leads } from "../../data/leadsData";

import LeadDetailsPopup from "../LeadDetailsPopup/LeadDetailsPopup";


function AllLeadsPopup({ onClose }) {

    const navigate = useNavigate();

    const leadsPerPage = 5;

    const [currentPage, setCurrentPage] = useState(1);

    const [selectedLead, setSelectedLead] = useState(null);

    const totalPages = Math.ceil(leads.length / leadsPerPage);

    const startIndex = (currentPage - 1) * leadsPerPage;

    const endIndex = startIndex + leadsPerPage;

    const currentLeads = leads.slice(startIndex, endIndex);


    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };


    const handleViewAllLeads = () => {
        onClose();
        navigate("/leads");
    };


    const pageNumbers = Array.from(
        { length: totalPages },
        (_, i) => i + 1
    );


    const popupContent = (

        <>

            <div
                className="
                    fixed
                    inset-0
                    z-[120]
                    flex
                    items-center
                    justify-center
                    bg-black/50
                    p-4
                    pointer-events-auto
                "
            >

                <div
                    className="
                        w-full
                        max-w-[820px]
                        max-h-[85vh]
                        flex
                        flex-col
                        bg-theme-surface
                        border
                        border-theme-border-light
                        rounded-xl
                        shadow-2xl
                        overflow-hidden
                        transition-colors
                        duration-300
                    "
                >

                    {/* HEADER */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            gap-3
                            px-5
                            py-4
                            border-b
                            border-theme-border-light
                            shrink-0
                        "
                    >

                        <div>

                            <h2 className="text-base font-semibold text-theme-text">
                                All Leads
                            </h2>

                            <p className="text-[11px] text-theme-text-secondary mt-0.5">
                                {leads.length} leads total
                            </p>

                        </div>


                        <div className="flex items-center gap-2">

                            <button
                                type="button"
                                onClick={handleViewAllLeads}
                                className="
                                    hidden
                                    sm:inline-flex
                                    items-center
                                    gap-1.5
                                    h-[32px]
                                    px-3
                                    rounded-md
                                    bg-primary
                                    text-white
                                    text-[11px]
                                    font-medium
                                    hover:bg-primaryHover
                                    transition-colors
                                    duration-200
                                    cursor-pointer
                                "
                            >
                                View All Leads
                                <ExternalLink size={12} />
                            </button>


                            <button
                                type="button"
                                onClick={onClose}
                                className="
                                    w-8
                                    h-8
                                    rounded-lg
                                    flex
                                    items-center
                                    justify-center
                                    text-theme-text-secondary
                                    hover:bg-theme-surface-secondary
                                    hover:text-theme-text
                                    transition
                                    cursor-pointer
                                "
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>

                        </div>

                    </div>


                    {/* TABLE */}

                    <div className="overflow-x-auto flex-1">

                        <table className="w-full min-w-[600px] text-left">

                            <thead>

                                <tr className="bg-primary/10">

                                    <th className="px-4 py-3 text-[11px] font-semibold text-theme-text-secondary">
                                        Name
                                    </th>

                                    <th className="px-4 py-3 text-[11px] font-semibold text-theme-text-secondary">
                                        Company
                                    </th>

                                    <th className="px-4 py-3 text-[11px] font-semibold text-theme-text-secondary">
                                        Status
                                    </th>

                                    <th className="px-4 py-3 text-[11px] font-semibold text-theme-text-secondary">
                                        Last Activity
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {currentLeads.map((lead) => (

                                    <tr
                                        key={lead.id}
                                        className="
                                            border-b
                                            border-theme-border-light
                                            hover:bg-theme-surface-secondary
                                            transition-colors
                                            duration-200
                                        "
                                    >

                                        <td className="px-4 py-3">

                                            <div className="flex items-center gap-3">

                                                <div
                                                    className={`
                                                        w-8
                                                        h-8
                                                        rounded-full
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-[10px]
                                                        font-semibold
                                                        shrink-0
                                                        ${lead.avatarColor}
                                                    `}
                                                >
                                                    {lead.initials}
                                                </div>


                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedLead(lead)}
                                                    className="
                                                        text-[12px]
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


                                        <td className="px-4 py-3 text-[12px] text-theme-text-secondary">
                                            {lead.company}
                                        </td>


                                        <td className="px-4 py-3">

                                            <span
                                                className={`
                                                    inline-flex
                                                    px-2
                                                    py-1
                                                    rounded-full
                                                    text-[10px]
                                                    font-medium

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
                                                `}
                                            >
                                                {lead.status}
                                            </span>

                                        </td>


                                        <td className="px-4 py-3 text-[12px] text-theme-text-muted">
                                            {lead.lastActivity}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>


                    {/* PAGINATION */}

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
                            border-theme-border-light
                            shrink-0
                        "
                    >

                        <p className="text-[11px] text-theme-text-secondary">

                            Showing {startIndex + 1} to{" "}
                            {Math.min(endIndex, leads.length)} of{" "}
                            {leads.length} leads

                        </p>


                        <div className="flex items-center gap-1.5 flex-wrap">

                            <button
                                type="button"
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className={`
                                    w-7
                                    h-7
                                    flex
                                    items-center
                                    justify-center
                                    rounded-md
                                    transition
                                    cursor-pointer

                                    ${
                                        currentPage === 1
                                            ? "text-theme-text-muted cursor-not-allowed bg-theme-surface-secondary"
                                            : "text-theme-text-secondary hover:bg-theme-surface-secondary"
                                    }
                                `}
                                aria-label="Previous page"
                            >
                                <ChevronLeft size={14} />
                            </button>


                            {pageNumbers.map((page) => (

                                <button
                                    key={page}
                                    type="button"
                                    onClick={() => handlePageClick(page)}
                                    className={`
                                        w-7
                                        h-7
                                        rounded-md
                                        text-[11px]
                                        font-medium
                                        transition
                                        cursor-pointer

                                        ${
                                            currentPage === page
                                                ? "bg-primary text-white"
                                                : "border border-theme-border-light text-theme-text-secondary hover:bg-theme-surface-secondary"
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
                                    w-7
                                    h-7
                                    flex
                                    items-center
                                    justify-center
                                    rounded-md
                                    transition
                                    cursor-pointer

                                    ${
                                        currentPage === totalPages
                                            ? "text-theme-text-muted cursor-not-allowed bg-theme-surface-secondary"
                                            : "text-theme-text-secondary hover:bg-theme-surface-secondary"
                                    }
                                `}
                                aria-label="Next page"
                            >
                                <ChevronRight size={14} />
                            </button>

                        </div>

                    </div>


                    {/* MOBILE: VIEW ALL LEADS */}

                    <div className="sm:hidden px-5 pb-4">

                        <button
                            type="button"
                            onClick={handleViewAllLeads}
                            className="
                                w-full
                                h-[36px]
                                inline-flex
                                items-center
                                justify-center
                                gap-1.5
                                rounded-md
                                bg-primary
                                text-white
                                text-[12px]
                                font-medium
                                hover:bg-primaryHover
                                transition-colors
                                duration-200
                                cursor-pointer
                            "
                        >
                            View All Leads
                            <ExternalLink size={13} />
                        </button>

                    </div>

                </div>

            </div>


            {/* LEAD DETAILS POPUP */}

            {selectedLead && (
                <LeadDetailsPopup
                    lead={selectedLead}
                    onClose={() => setSelectedLead(null)}
                />
            )}

        </>

    );


    return createPortal(popupContent, document.body);

}


export default AllLeadsPopup;
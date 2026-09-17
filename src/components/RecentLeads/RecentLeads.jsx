import React, { useState } from "react";

import { ArrowRight } from "lucide-react";

import { leads } from "../../data/leadsData";

import AllLeadsPopup from "./AllLeadsPopup";
import LeadDetailsPopup from "../LeadDetailsPopup/LeadDetailsPopup";


const PREVIEW_COUNT = 5;


function RecentLeads() {

    const [showAllLeads, setShowAllLeads] = useState(false);

    const [selectedLead, setSelectedLead] = useState(null);

    const previewLeads = leads.slice(0, PREVIEW_COUNT);


    return (

        <>

            <div className="w-full min-w-0 overflow-hidden">

                {previewLeads.map((lead) => (

                    <div
                        key={lead.id}
                        className="
                            flex
                            items-center

                            h-[38px]
                            mb-[2px]

                            min-w-0
                            transition-colors
                            duration-300
                        "
                    >

                        {/* Avatar */}

                        <div
                            className="
                                w-[22px]
                                h-[22px]

                                rounded-full

                                flex
                                items-center
                                justify-center

                                text-white
                                text-[9px]
                                font-semibold

                                shrink-0

                                mr-[10px]
                            "
                            style={{ backgroundColor: lead.color }}
                        >
                            {lead.avatar}
                        </div>


                        {/* NAME */}

                        <button
                            type="button"
                            onClick={() => setSelectedLead(lead)}
                            className="
                                w-[130px]

                                text-left

                                text-[12px]
                                font-medium

                                text-blue-500
                                hover:text-blue-600
                                hover:underline

                                truncate
                                cursor-pointer
                                transition-colors
                            "
                        >
                            {lead.name}
                        </button>


                        {/* Company */}

                        <div className="w-[95px] text-[12px] text-theme-text truncate">
                            {lead.company}
                        </div>


                        {/* Status */}

                        <div
                            className={`
                                w-[60px]
                                px-[6px]
                                py-[3px]

                                rounded-[5px]

                                text-center
                                text-[9px]
                                font-medium

                                shrink-0

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
                        </div>


                        {/* Time */}

                        <div className="ml-auto text-[10px] text-theme-text-secondary whitespace-nowrap shrink-0 pl-2">
                            {lead.lastActivity}
                        </div>

                    </div>

                ))}


                {/* MORE LEADS */}

                <button
                    type="button"
                    onClick={() => setShowAllLeads(true)}
                    className="
                        flex
                        items-center
                        justify-center
                        gap-1.5

                        w-full

                        mt-3

                        h-[34px]
                        px-3

                        rounded-md

                        bg-primary/10
                        text-primary

                        text-[12px]
                        font-medium

                        hover:bg-primary/20

                        transition-colors
                        duration-200

                        cursor-pointer
                    "
                >

                    More Leads

                    <ArrowRight size={13} />

                </button>

            </div>


            {/* ALL LEADS POPUP */}

            {showAllLeads && (
                <AllLeadsPopup
                    onClose={() => setShowAllLeads(false)}
                />
            )}


            {/* LEAD DETAILS POPUP */}

            {selectedLead && (
                <LeadDetailsPopup
                    lead={selectedLead}
                    onClose={() => setSelectedLead(null)}
                />
            )}

        </>

    );

}


export default RecentLeads;
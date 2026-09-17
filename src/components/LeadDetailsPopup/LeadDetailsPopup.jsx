import React, { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

import {
    X,
    Mail,
    Phone,
    Building2,
    User,
    Tag,
    Clock
} from "lucide-react";


function LeadDetailsPopup({ lead, onClose }) {

    const panelRef = useRef(null);


    // =================================================
    // CLOSE ON OUTSIDE CLICK
    // =================================================

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                panelRef.current &&
                !panelRef.current.contains(event.target)
            ) {

                onClose();

            }

        };


        document.addEventListener(
            "mousedown",
            handleClickOutside
        );


        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, [onClose]);


    if (!lead) return null;


    // =================================================
    // STATUS COLORS
    // =================================================

    const statusClasses =
        lead.status === "Qualified"
            ? "bg-green-500/15 text-green-500"
            : lead.status === "Contacted"
            ? "bg-yellow-500/15 text-yellow-600"
            : lead.status === "New"
            ? "bg-blue-500/15 text-blue-500"
            : lead.status === "Proposal"
            ? "bg-orange-500/15 text-orange-500"
            : "bg-emerald-500/15 text-emerald-500";


    const popupContent = (

        <div
            className="
                fixed
                inset-0
                z-[130]

                flex
                items-center
                justify-center

                bg-black/50

                p-4

                pointer-events-auto
            "
        >

            <div
                ref={panelRef}

                className="
                    w-full
                    max-w-[460px]
                    max-h-[90vh]

                    overflow-y-auto

                    bg-theme-surface
                    border
                    border-theme-border-light
                    rounded-xl
                    shadow-2xl

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
                        px-5 py-4
                        border-b
                        border-theme-border-light
                    "
                >

                    <h2 className="text-base font-semibold text-theme-text">
                        Lead Details
                    </h2>


                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            w-8 h-8
                            rounded-lg
                            flex items-center justify-center
                            text-theme-text-secondary
                            hover:bg-theme-surface-secondary
                            hover:text-theme-text
                            transition cursor-pointer
                        "
                        aria-label="Close"
                    >
                        <X size={18} />
                    </button>

                </div>


                {/* PROFILE HEADER */}

                <div
                    className="
                        flex
                        items-center
                        gap-4
                        px-5 py-5
                        border-b
                        border-theme-border-light
                    "
                >

                    <div
                        className={`
                            w-14 h-14
                            rounded-full
                            flex items-center justify-center
                            text-lg font-semibold
                            shrink-0
                            ${lead.avatarColor}
                        `}
                    >
                        {lead.initials}
                    </div>


                    <div className="min-w-0 flex-1">

                        <h3 className="text-[15px] font-semibold text-theme-text truncate">
                            {lead.name}
                        </h3>

                        <p className="text-[12px] text-theme-text-secondary mt-0.5 truncate">
                            {lead.company}
                        </p>


                        <span
                            className={`
                                inline-block mt-2
                                px-2 py-1
                                rounded-full
                                text-[10px] font-medium
                                ${statusClasses}
                            `}
                        >
                            {lead.status}
                        </span>

                    </div>

                </div>


                {/* DETAILS */}

                <div className="px-5 py-4 flex flex-col gap-3">

                    <DetailRow
                        icon={<Mail size={15} />}
                        label="Email"
                        value={lead.email}
                    />

                    <DetailRow
                        icon={<Phone size={15} />}
                        label="Phone"
                        value={lead.phone}
                    />

                    <DetailRow
                        icon={<Building2 size={15} />}
                        label="Company"
                        value={lead.company}
                    />

                    <DetailRow
                        icon={<Tag size={15} />}
                        label="Source"
                        value={lead.source}
                    />

                    <DetailRow
                        icon={<User size={15} />}
                        label="Assigned To"
                        value={lead.assignedTo}
                    />

                    <DetailRow
                        icon={<Clock size={15} />}
                        label="Last Activity"
                        value={lead.lastActivity}
                    />

                </div>

            </div>

        </div>
    );


    return createPortal(popupContent, document.body);
}


// =====================================================
// DETAIL ROW
// =====================================================

function DetailRow({ icon, label, value }) {
    return (
        <div className="flex items-start gap-3">

            <div
                className="
                    w-8 h-8
                    rounded-md
                    bg-primary/10
                    text-primary
                    flex items-center justify-center
                    shrink-0
                "
            >
                {icon}
            </div>


            <div className="min-w-0 flex-1">

                <p className="text-[10px] text-theme-text-muted uppercase tracking-wider">
                    {label}
                </p>

                <p className="text-[12px] text-theme-text mt-0.5 break-words">
                    {value || "—"}
                </p>

            </div>

        </div>
    );
}


export default LeadDetailsPopup;
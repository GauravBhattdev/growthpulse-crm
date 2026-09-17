import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
    Search,
    BookOpen,
    Ticket,
    MessageCircle,
    ChevronRight,
    ChevronDown
} from "lucide-react";

import { toast } from "react-toastify";

import {
    supportCards,
    faqs,
    supportTickets
} from "../../data/helpSupportData";


function HelpSupport() {

    const navigate = useNavigate();

    // =================================================
    // STATE
    // =================================================

    const [searchText, setSearchText] = useState("");

    const [openFaqId, setOpenFaqId] = useState(null);


    // =================================================
    // ICON MAP (for support cards)
    // =================================================

    const cardIcons = {
        1: <BookOpen size={26} />,
        2: <Ticket size={26} />,
        3: <MessageCircle size={26} />
    };


    // =================================================
    // HANDLERS
    // =================================================

    const handleCardAction = (card) => {

        if (card.id === 1) {
            toast.info("Opening Knowledge Base...");
        } else if (card.id === 2) {
            toast.info("Opening new support ticket...");
        } else if (card.id === 3) {
            toast.info("Starting live chat...");
        }

    };


    const handleFaqToggle = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };


    const handleViewAllTickets = () => {
        navigate("/support-tickets");
    };


    // =================================================
    // STATUS COLORS
    // =================================================

    const getStatusClasses = (status) => {

        if (status === "Open") return "bg-primary/15 text-primary";
        if (status === "In Progress") return "bg-blue-500/15 text-blue-500";
        if (status === "Resolved") return "bg-green-500/15 text-green-500";

        return "bg-theme-surface-secondary text-theme-text-secondary";
    };


    return (

        <div
            className="
                w-full
                min-h-screen

                bg-theme-page
                text-theme-text

                px-4
                sm:px-6
                lg:px-8

                py-5
                sm:py-6
                lg:py-8

                transition-colors
                duration-300
            "
        >

            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div>

                <h1 className="text-[24px] sm:text-[27px] font-semibold text-theme-text">
                    Help & Support
                </h1>

                <p className="mt-1 text-[12px] sm:text-[13px] text-theme-text-secondary">
                    How can we help you today?
                </p>

            </div>


            {/* =================================================
                SEARCH BAR
            ================================================= */}

            <div
                className="
                    mt-4
                    flex
                    items-center
                    gap-3

                    h-[46px]
                    px-4

                    bg-theme-surface
                    border
                    border-theme-border-light
                    rounded-lg

                    transition-colors
                    duration-300
                "
            >

                <Search size={18} className="text-theme-text-secondary shrink-0" />

                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="How can we help you today?"
                    className="
                        w-full
                        bg-transparent
                        outline-none
                        border-none

                        text-[13px]
                        text-theme-text
                        placeholder:text-theme-text-muted
                    "
                />

            </div>


            {/* =================================================
                SUPPORT CARDS
            ================================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

                {supportCards.map((card) => (

                    <div
                        key={card.id}
                        className="
                            bg-theme-surface
                            border
                            border-theme-border-light
                            rounded-lg

                            p-4

                            transition-all
                            duration-300

                            hover:shadow-md
                        "
                    >

                        <div className="flex items-start gap-3">

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-full

                                    bg-primary
                                    text-white

                                    flex
                                    items-center
                                    justify-center

                                    shrink-0
                                "
                            >
                                {cardIcons[card.id]}
                            </div>


                            <div className="min-w-0 flex-1">

                                <h3 className="text-[14px] font-semibold text-theme-text">
                                    {card.title}
                                </h3>

                                <p className="text-[11px] text-theme-text-secondary mt-1 leading-relaxed">
                                    {card.description}
                                </p>

                            </div>

                        </div>


                        <button
                            type="button"
                            onClick={() => handleCardAction(card)}
                            className="
                                mt-4

                                inline-flex
                                items-center
                                gap-1

                                h-[32px]
                                px-4

                                bg-primary
                                hover:bg-primaryHover
                                text-white

                                text-[11px]
                                font-medium

                                rounded-md

                                transition
                                duration-200

                                cursor-pointer
                            "
                        >

                            {card.buttonText}

                            <ChevronRight size={13} />

                        </button>

                    </div>

                ))}

            </div>


            {/* =================================================
                BOTTOM SECTION (FAQ + TICKETS)
            ================================================= */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">


                {/* LEFT — FAQ */}

                <div
                    className="
                        bg-theme-surface
                        border
                        border-theme-border-light
                        rounded-lg

                        p-4

                        transition-colors
                        duration-300
                    "
                >

                    <h2 className="text-[15px] font-semibold text-theme-text mb-3">
                        Frequently Asked Questions
                    </h2>


                    <div className="flex flex-col gap-2">

                        {faqs.map((faq) => {

                            const isOpen = openFaqId === faq.id;

                            return (

                                <div
                                    key={faq.id}
                                    className="
                                        border
                                        border-theme-border-light
                                        rounded-md

                                        overflow-hidden

                                        transition-colors
                                        duration-300
                                    "
                                >

                                    <button
                                        type="button"
                                        onClick={() => handleFaqToggle(faq.id)}
                                        className="
                                            w-full

                                            flex
                                            items-center
                                            justify-between
                                            gap-2

                                            px-3
                                            py-2.5

                                            text-left

                                            text-[12px]
                                            font-medium
                                            text-theme-text

                                            hover:bg-theme-surface-secondary

                                            transition
                                            duration-200

                                            cursor-pointer
                                        "
                                    >

                                        <span className="truncate">
                                            {faq.question}
                                        </span>


                                        <ChevronDown
                                            size={15}
                                            className={`
                                                text-theme-text-secondary
                                                shrink-0

                                                transition-transform
                                                duration-200

                                                ${isOpen ? "rotate-180" : ""}
                                            `}
                                        />

                                    </button>


                                    {isOpen && (

                                        <div
                                            className="
                                                px-3
                                                py-2.5

                                                bg-theme-surface-secondary

                                                border-t
                                                border-theme-border-light

                                                text-[11px]
                                                text-theme-text-secondary
                                                leading-relaxed
                                            "
                                        >
                                            {faq.answer}
                                        </div>

                                    )}

                                </div>

                            );

                        })}

                    </div>

                </div>


                {/* RIGHT — SUPPORT TICKETS */}

                <div
                    className="
                        bg-theme-surface
                        border
                        border-theme-border-light
                        rounded-lg

                        p-4

                        transition-colors
                        duration-300
                    "
                >

                    <div className="flex items-center justify-between gap-2 mb-3">

                        <h2 className="text-[15px] font-semibold text-theme-text">
                            My Support Tickets?
                        </h2>


                        <button
                            type="button"
                            onClick={handleViewAllTickets}
                            className="
                                inline-flex
                                items-center
                                gap-1

                                text-[11px]
                                text-primary
                                font-medium

                                hover:underline

                                transition
                                cursor-pointer
                            "
                        >

                            View All Tickets

                            <ChevronRight size={12} />

                        </button>

                    </div>


                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[420px] text-left">

                            <thead>

                                <tr className="border-b border-theme-border-light">

                                    <th className="pb-2 text-[10px] font-medium text-theme-text-secondary">
                                        Ticket Id
                                    </th>

                                    <th className="pb-2 text-[10px] font-medium text-theme-text-secondary">
                                        Issue
                                    </th>

                                    <th className="pb-2 text-[10px] font-medium text-theme-text-secondary">
                                        Status
                                    </th>

                                    <th className="pb-2 text-[10px] font-medium text-theme-text-secondary">
                                        Last updated
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {supportTickets.map((ticket) => (

                                    <tr
                                        key={ticket.id}
                                        className="
                                            border-b
                                            border-theme-border-light
                                            last:border-b-0

                                            hover:bg-theme-surface-secondary

                                            transition-colors
                                            duration-200
                                        "
                                    >

                                        <td className="py-2.5 text-[11px] font-medium text-theme-text">
                                            {ticket.id}
                                        </td>


                                        <td className="py-2.5 text-[11px] text-theme-text-secondary">
                                            {ticket.issue}
                                        </td>


                                        <td className="py-2.5">

                                            <span
                                                className={`
                                                    inline-block
                                                    px-2
                                                    py-0.5

                                                    rounded-full

                                                    text-[9px]
                                                    font-medium

                                                    ${getStatusClasses(ticket.status)}
                                                `}
                                            >
                                                {ticket.status}
                                            </span>

                                        </td>


                                        <td className="py-2.5 text-[10px] text-theme-text-muted">
                                            {ticket.lastUpdated}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default HelpSupport;
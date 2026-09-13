import React, {
    useEffect,
    useRef,
    useState
} from "react";

import { useNavigate } from "react-router-dom";

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
    ChevronRight,
    Upload,
    Plus,
    Phone
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


// =====================================================
// DATE RANGE OPTIONS
// =====================================================

const dateRangeOptions = [
    "D1",
    "D3",
    "D7",
    "D15",
    "D30"
];


// =====================================================
// SUPPORT TICKETS COMPONENT
// =====================================================

function SupportTickets() {

    // =================================================
    // NAVIGATION
    // =================================================

    const navigate = useNavigate();


    // =================================================
    // LOADING STATE
    // =================================================

    const [loading, setLoading] = useState(true);


    // =================================================
    // SEARCH STATE
    // =================================================

    const [searchText, setSearchText] = useState("");


    // =================================================
    // STATUS FILTER STATE
    // =================================================

    const [selectedStatuses, setSelectedStatuses] = useState([]);


    // =================================================
    // PRIORITY FILTER STATE
    // =================================================

    const [selectedPriorities, setSelectedPriorities] = useState([]);


    // =================================================
    // DATE RANGE STATE
    // =================================================

    const [selectedDateRange, setSelectedDateRange] = useState("D7");


    // =================================================
    // DROPDOWN STATE
    // =================================================

    const [showStatusDropdown, setShowStatusDropdown] = useState(false);

    const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);


    // =================================================
    // FILTER PANEL STATE
    // =================================================

    const [showFilterPanel, setShowFilterPanel] = useState(false);


    // =================================================
    // DROPDOWN REFERENCES
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
    // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
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

    }, []);


    // =================================================
    // CALLING PAGE NAVIGATION
    // =================================================

    const handleCalling = () => {

        navigate("/calling");

    };


    // =================================================
    // DATE RANGE HANDLER
    // =================================================

    const handleDateRangeChange = (range) => {

        setSelectedDateRange(range);

    };


    // =================================================
    // STATUS CHECKBOX HANDLER
    // =================================================

    const handleStatusChange = (status) => {

        if (selectedStatuses.includes(status)) {

            setSelectedStatuses(
                selectedStatuses.filter(
                    (item) => item !== status
                )
            );

        } else {

            setSelectedStatuses([
                ...selectedStatuses,
                status
            ]);

        }

    };


    // =================================================
    // PRIORITY CHECKBOX HANDLER
    // =================================================

    const handlePriorityChange = (priority) => {

        if (selectedPriorities.includes(priority)) {

            setSelectedPriorities(
                selectedPriorities.filter(
                    (item) => item !== priority
                )
            );

        } else {

            setSelectedPriorities([
                ...selectedPriorities,
                priority
            ]);

        }

    };


    // =================================================
    // DUMMY DATE RANGE FILTER
    // =================================================

    const getTicketsByDateRange = () => {

        switch (selectedDateRange) {

            case "D1":

                return tickets.slice(0, 1);


            case "D3":

                return tickets.slice(0, 2);


            case "D7":

                return tickets.slice(0, 4);


            case "D15":

                return tickets.slice(0, 6);


            case "D30":

                return tickets.slice(0, 8);


            default:

                return tickets;

        }

    };


    // =================================================
    // FILTER TICKETS
    // =================================================

    const dateFilteredTickets = getTicketsByDateRange();


    const filteredTickets = dateFilteredTickets.filter((ticket) => {

        const searchValue = searchText.toLowerCase();


        // SEARCH FILTER

        const matchesSearch =
            ticket.id.toLowerCase().includes(searchValue) ||
            ticket.subject.toLowerCase().includes(searchValue) ||
            ticket.customer.toLowerCase().includes(searchValue);


        // STATUS FILTER

        const matchesStatus =
            selectedStatuses.length === 0 ||
            selectedStatuses.includes(ticket.status);


        // PRIORITY FILTER

        const matchesPriority =
            selectedPriorities.length === 0 ||
            selectedPriorities.includes(ticket.priority);


        return (
            matchesSearch &&
            matchesStatus &&
            matchesPriority
        );

    });


    // =================================================
    // RESET ALL FILTERS
    // =================================================

    const handleResetFilters = () => {

        setSearchText("");

        setSelectedStatuses([]);

        setSelectedPriorities([]);

        setSelectedDateRange("D7");

        setShowFilterPanel(false);

    };


    // =================================================
    // SHOW LOADER
    // =================================================

    if (loading) {

        return (
            <Loader text="Loading support tickets..." />
        );

    }


    return (

        <div
            className="
                w-full
                min-h-screen
                bg-white

                pl-6
                pr-4

                sm:pl-8
                sm:pr-6

                lg:pl-10
                lg:pr-8

                pt-6
                sm:pt-8
                lg:pt-10
            "
        >

            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div
                className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                    gap-4
                "
            >

                {/* PAGE TITLE */}

                <div>

                    <h1 className="text-[27px] font-semibold text-[#111]">
                        Support Tickets
                    </h1>

                    <p className="mt-1 text-[13px] text-[#444]">
                        Manage your subscription, payments and billing details
                    </p>

                </div>


                {/* =================================================
                    CALLING BUTTON
                ================================================= */}

                <button
                    onClick={handleCalling}
                    className="
                        group

                        flex
                        items-center
                        justify-center
                        gap-2

                        w-full
                        sm:w-auto

                        px-5
                        py-2.5

                        mr-1
                        sm:mr-2

                        bg-[#4b397b]
                        text-white

                        rounded-lg

                        text-sm
                        font-medium

                        shadow-sm

                        transition-all
                        duration-300
                        ease-out

                        hover:bg-[#3f315f]
                        hover:scale-[1.03]
                        hover:-translate-y-1
                        hover:shadow-lg

                        active:scale-[0.97]
                        active:translate-y-0

                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#8b3df5]
                        focus:ring-offset-2
                    "
                >

                    <Phone
                        size={17}
                        className="
                            transition-all
                            duration-300
                            ease-out

                            group-hover:-translate-y-1
                            group-hover:rotate-6
                            group-hover:scale-110
                        "
                    />

                    <span>
                        Calling
                    </span>

                </button>

            </div>


            {/* =================================================
                SUMMARY CARDS
            ================================================= */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-5
                    gap-4
                    mt-5
                "
            >

                {/* TOTAL */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-purple-100
                            text-purple-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <Ticket size={21} />

                    </div>


                    <div>

                        <p className="text-xs text-gray-700">
                            Total Tickets
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            1,248
                        </h2>

                        <p className="text-[10px] text-gray-500">
                            All Time
                        </p>

                    </div>

                </div>


                {/* OPEN */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-blue-100
                            text-blue-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <MessageSquare size={21} />

                    </div>


                    <div>

                        <p className="text-xs text-gray-700">
                            Open
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            156
                        </h2>

                    </div>

                </div>


                {/* IN PROGRESS */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-orange-100
                            text-orange-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <Clock size={21} />

                    </div>


                    <div>

                        <p className="text-xs text-gray-700">
                            In Progress
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            72
                        </h2>

                    </div>

                </div>


                {/* RESOLVED */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-green-100
                            text-green-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <Check size={22} />

                    </div>


                    <div>

                        <p className="text-xs text-gray-700">
                            Resolved
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            980
                        </h2>

                    </div>

                </div>


                {/* CLOSED */}

                <div
                    className="
                        h-[80px]
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        flex items-center
                        px-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-md
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-red-100
                            text-red-500
                            flex items-center
                            justify-center
                            mr-4
                            shrink-0
                        "
                    >

                        <X size={22} />

                    </div>


                    <div>

                        <p className="text-xs text-gray-700">
                            Closed
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900">
                            50
                        </h2>

                    </div>

                </div>

            </div>


            {/* =================================================
                ACTION BAR
            ================================================= */}

            <div
                className="
                    mt-7
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-3
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
                        sm:w-[220px]
                        px-2
                        bg-white
                    "
                >

                    <Search
                        size={14}
                        className="text-gray-600 shrink-0"
                    />

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
                            text-gray-700
                            placeholder:text-gray-500
                        "
                    />

                </div>


                {/* RIGHT ACTIONS */}

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        w-full
                        sm:w-auto
                    "
                >

                    {/* IMPORT */}

                    <button
                        className="
                            h-[32px]
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-3
                            border
                            border-gray-300
                            bg-white
                            rounded-md
                            text-[10px]
                            text-gray-700
                            hover:bg-gray-100
                            transition
                            duration-200
                            flex-1
                            sm:flex-none
                        "
                    >

                        <Upload size={13} />

                        Import Invoice

                    </button>


                    {/* CREATE */}

                    <button
                        className="
                            h-[32px]
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-3
                            bg-[#8b3df5]
                            text-white
                            rounded-md
                            text-[10px]
                            font-medium
                            hover:bg-[#7430d6]
                            transition
                            duration-200
                            flex-1
                            sm:flex-none
                        "
                    >

                        <Plus size={14} />

                        Create Invoice

                    </button>

                </div>

            </div>


            {/* =================================================
                TABLE CONTAINER
            ================================================= */}

            <div
                className="
                    mt-2
                    bg-white
                    border border-gray-300
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
                        min-h-[52px]
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        gap-3
                        px-2
                        py-2
                        border-b
                        border-gray-300
                    "
                >

                    {/* =================================================
                        DATE RANGE BUTTONS
                    ================================================= */}

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-1
                        "
                    >

                        {dateRangeOptions.map((range) => (

                            <button
                                key={range}
                                onClick={() =>
                                    handleDateRangeChange(range)
                                }
                                className={`
                                    h-[30px]
                                    px-4
                                    border
                                    border-gray-300
                                    text-[9px]

                                    transition-all
                                    duration-200
                                    ease-out

                                    ${
                                        selectedDateRange === range
                                            ? "bg-[#8b3df5] text-white shadow-sm"
                                            : "bg-white text-gray-700 hover:bg-gray-100"
                                    }
                                `}
                            >

                                {range}

                            </button>

                        ))}


                        {/* CUSTOM */}

                        <button
                            onClick={() => {
                                alert(
                                    "Custom Date Range will be connected later."
                                );
                            }}
                            className="
                                h-[30px]
                                px-4
                                border
                                border-gray-300
                                text-[9px]
                                text-gray-700
                                bg-white

                                transition-all
                                duration-200

                                hover:bg-gray-100
                            "
                        >

                            Custom

                        </button>

                    </div>


                    {/* =================================================
                        FILTERS
                    ================================================= */}

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                        "
                    >

                        {/* =================================================
                            STATUS DROPDOWN
                        ================================================= */}

                        <div
                            ref={statusDropdownRef}
                            className="relative"
                        >

                            <button
                                onClick={() => {

                                    setShowStatusDropdown(
                                        !showStatusDropdown
                                    );

                                    setShowPriorityDropdown(false);

                                    setShowFilterPanel(false);

                                }}
                                className="
                                    h-[32px]
                                    min-w-[100px]
                                    px-3
                                    border
                                    border-gray-300
                                    rounded-md
                                    flex
                                    items-center
                                    justify-between
                                    gap-2
                                    text-[10px]
                                    text-gray-700
                                    bg-white

                                    hover:bg-gray-50

                                    transition
                                    duration-200
                                "
                            >

                                {selectedStatuses.length === 0
                                    ? "All Status"
                                    : `${selectedStatuses.length} Selected`
                                }

                                <ChevronDown
                                    size={13}
                                    className={`
                                        transition-transform
                                        duration-200

                                        ${
                                            showStatusDropdown
                                                ? "rotate-180"
                                                : ""
                                        }
                                    `}
                                />

                            </button>


                            {showStatusDropdown && (

                                <div
                                    className="
                                        absolute
                                        right-0
                                        top-[38px]
                                        z-50
                                        w-[170px]
                                        bg-white
                                        border
                                        border-gray-300
                                        rounded-md
                                        shadow-lg
                                        p-2
                                    "
                                >

                                    {/* ALL STATUS */}

                                    <label
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            px-2
                                            py-2
                                            text-[10px]
                                            text-gray-700
                                            cursor-pointer
                                            hover:bg-gray-100
                                            rounded
                                        "
                                    >

                                        <input
                                            type="checkbox"
                                            checked={
                                                selectedStatuses.length === 0
                                            }
                                            onChange={() =>
                                                setSelectedStatuses([])
                                            }
                                        />

                                        All Status

                                    </label>


                                    <div className="border-t border-gray-200 my-1" />


                                    {statusOptions.map((status) => (

                                        <label
                                            key={status}
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                px-2
                                                py-2
                                                text-[10px]
                                                text-gray-700
                                                cursor-pointer
                                                hover:bg-gray-100
                                                rounded
                                            "
                                        >

                                            <input
                                                type="checkbox"
                                                checked={selectedStatuses.includes(
                                                    status
                                                )}
                                                onChange={() =>
                                                    handleStatusChange(status)
                                                }
                                            />

                                            {status}

                                        </label>

                                    ))}

                                </div>

                            )}

                        </div>


                        {/* =================================================
                            PRIORITY DROPDOWN
                        ================================================= */}

                        <div
                            ref={priorityDropdownRef}
                            className="relative"
                        >

                            <button
                                onClick={() => {

                                    setShowPriorityDropdown(
                                        !showPriorityDropdown
                                    );

                                    setShowStatusDropdown(false);

                                    setShowFilterPanel(false);

                                }}
                                className="
                                    h-[32px]
                                    min-w-[95px]
                                    px-3
                                    border
                                    border-gray-300
                                    rounded-md
                                    flex
                                    items-center
                                    justify-between
                                    gap-2
                                    text-[10px]
                                    text-gray-700
                                    bg-white

                                    hover:bg-gray-50

                                    transition
                                    duration-200
                                "
                            >

                                {selectedPriorities.length === 0
                                    ? "All Priority"
                                    : `${selectedPriorities.length} Selected`
                                }

                                <ChevronDown
                                    size={13}
                                    className={`
                                        transition-transform
                                        duration-200

                                        ${
                                            showPriorityDropdown
                                                ? "rotate-180"
                                                : ""
                                        }
                                    `}
                                />

                            </button>


                            {showPriorityDropdown && (

                                <div
                                    className="
                                        absolute
                                        right-0
                                        top-[38px]
                                        z-50
                                        w-[160px]
                                        bg-white
                                        border
                                        border-gray-300
                                        rounded-md
                                        shadow-lg
                                        p-2
                                    "
                                >

                                    {/* ALL PRIORITY */}

                                    <label
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            px-2
                                            py-2
                                            text-[10px]
                                            text-gray-700
                                            cursor-pointer
                                            hover:bg-gray-100
                                            rounded
                                        "
                                    >

                                        <input
                                            type="checkbox"
                                            checked={
                                                selectedPriorities.length === 0
                                            }
                                            onChange={() =>
                                                setSelectedPriorities([])
                                            }
                                        />

                                        All Priority

                                    </label>


                                    <div className="border-t border-gray-200 my-1" />


                                    {priorityOptions.map((priority) => (

                                        <label
                                            key={priority}
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                px-2
                                                py-2
                                                text-[10px]
                                                text-gray-700
                                                cursor-pointer
                                                hover:bg-gray-100
                                                rounded
                                            "
                                        >

                                            <input
                                                type="checkbox"
                                                checked={selectedPriorities.includes(
                                                    priority
                                                )}
                                                onChange={() =>
                                                    handlePriorityChange(
                                                        priority
                                                    )
                                                }
                                            />

                                            {priority}

                                        </label>

                                    ))}

                                </div>

                            )}

                        </div>


                        {/* =================================================
                            RESET
                        ================================================= */}

                        <button
                            onClick={handleResetFilters}
                            className="
                                h-[32px]
                                px-3
                                border
                                border-gray-300
                                rounded-md
                                text-[10px]
                                text-gray-700

                                hover:bg-gray-100

                                transition
                                duration-200
                            "
                        >

                            Reset

                        </button>


                        {/* =================================================
                            FILTER ICON
                        ================================================= */}

                        <div
                            ref={filterPanelRef}
                            className="relative"
                        >

                            <button
                                onClick={() => {

                                    setShowFilterPanel(
                                        !showFilterPanel
                                    );

                                    setShowStatusDropdown(false);

                                    setShowPriorityDropdown(false);

                                }}
                                className={`
                                    h-[32px]
                                    w-[34px]
                                    border
                                    rounded-md

                                    flex
                                    items-center
                                    justify-center

                                    transition-all
                                    duration-200

                                    ${
                                        showFilterPanel
                                            ? "bg-[#8b3df5] text-white border-[#8b3df5]"
                                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }
                                `}
                            >

                                <Filter
                                    size={15}
                                    className={`
                                        transition-transform
                                        duration-200

                                        ${
                                            showFilterPanel
                                                ? "rotate-180"
                                                : ""
                                        }
                                    `}
                                />

                            </button>


                            {/* =================================================
                                ACTIVE FILTERS PANEL
                            ================================================= */}

                            {showFilterPanel && (

                                <div
                                    className="
                                        absolute
                                        right-0
                                        top-[38px]
                                        z-50

                                        w-[230px]

                                        bg-white
                                        border
                                        border-gray-300
                                        rounded-lg
                                        shadow-lg

                                        p-3
                                    "
                                >

                                    {/* HEADER */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            mb-3
                                        "
                                    >

                                        <p
                                            className="
                                                text-[11px]
                                                font-semibold
                                                text-gray-800
                                            "
                                        >
                                            Active Filters
                                        </p>


                                        <button
                                            onClick={() =>
                                                setShowFilterPanel(false)
                                            }
                                            className="
                                                text-gray-500
                                                hover:text-gray-800
                                                transition
                                            "
                                        >

                                            <X size={14} />

                                        </button>

                                    </div>


                                    {/* STATUS */}

                                    <div className="mb-3">

                                        <p className="text-[9px] text-gray-500 mb-1">
                                            Status
                                        </p>

                                        <div
                                            className="
                                                bg-gray-100
                                                rounded
                                                px-2
                                                py-1.5
                                            "
                                        >

                                            <p className="text-[10px] text-gray-700">

                                                {selectedStatuses.length === 0
                                                    ? "All Status"
                                                    : selectedStatuses.join(", ")
                                                }

                                            </p>

                                        </div>

                                    </div>


                                    {/* PRIORITY */}

                                    <div className="mb-3">

                                        <p className="text-[9px] text-gray-500 mb-1">
                                            Priority
                                        </p>

                                        <div
                                            className="
                                                bg-gray-100
                                                rounded
                                                px-2
                                                py-1.5
                                            "
                                        >

                                            <p className="text-[10px] text-gray-700">

                                                {selectedPriorities.length === 0
                                                    ? "All Priority"
                                                    : selectedPriorities.join(", ")
                                                }

                                            </p>

                                        </div>

                                    </div>


                                    {/* CLEAR ALL */}

                                    <button
                                        onClick={handleResetFilters}
                                        className="
                                            w-full
                                            h-[30px]

                                            bg-[#8b3df5]
                                            hover:bg-[#7430d6]

                                            text-white
                                            text-[9px]
                                            font-medium

                                            rounded-md

                                            transition
                                            duration-200
                                        "
                                    >

                                        Clear All Filters

                                    </button>

                                </div>

                            )}

                        </div>

                    </div>

                </div>


                {/* =================================================
                    TABLE
                ================================================= */}

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[900px] border-collapse">

                        <thead>

                            <tr className="bg-purple-300">

                                <th className="text-left px-7 py-2.5 text-[10px] font-medium text-gray-700">
                                    Ticket ID
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Subject
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Customer
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Department
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Priority
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Status
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Created On
                                </th>

                                <th className="text-left px-3 py-2.5 text-[10px] font-medium text-gray-700">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {filteredTickets.length > 0 ? (

                                filteredTickets.map((ticket) => (

                                    <tr
                                        key={ticket.id}
                                        className="
                                            border-b
                                            border-gray-300
                                            hover:bg-gray-50
                                            transition
                                            duration-200
                                        "
                                    >

                                        <td className="px-7 py-3 text-[10px] font-medium text-purple-600">
                                            {ticket.id}
                                        </td>

                                        <td className="px-3 py-3 text-[10px] text-gray-700 whitespace-nowrap">
                                            {ticket.subject}
                                        </td>

                                        <td className="px-3 py-3 text-[10px] text-gray-700 whitespace-nowrap">
                                            {ticket.customer}
                                        </td>

                                        <td className="px-3 py-3 text-[10px] text-gray-700">
                                            {ticket.department}
                                        </td>

                                        <td className="px-3 py-3">

                                            <span
                                                className={`
                                                    inline-block
                                                    px-2
                                                    py-1
                                                    rounded
                                                    text-[8px]
                                                    font-medium

                                                    ${
                                                        ticket.priority === "High"
                                                            ? "bg-red-100 text-red-500"
                                                            : ticket.priority === "Medium"
                                                            ? "bg-orange-100 text-orange-500"
                                                            : "bg-green-100 text-green-600"
                                                    }
                                                `}
                                            >

                                                {ticket.priority}

                                            </span>

                                        </td>

                                        <td className="px-3 py-3">

                                            <span
                                                className={`
                                                    inline-block
                                                    px-2
                                                    py-1
                                                    rounded
                                                    text-[8px]
                                                    font-medium

                                                    ${
                                                        ticket.status === "Open"
                                                            ? "bg-blue-100 text-blue-500"
                                                            : ticket.status === "In Progress"
                                                            ? "bg-orange-100 text-orange-500"
                                                            : ticket.status === "Resolved"
                                                            ? "bg-green-100 text-green-600"
                                                            : "bg-gray-200 text-gray-600"
                                                    }
                                                `}
                                            >

                                                {ticket.status}

                                            </span>

                                        </td>

                                        <td className="px-3 py-2 text-[9px] text-gray-700 whitespace-nowrap">

                                            <div>
                                                {ticket.date}
                                            </div>

                                            <div className="text-[7px] text-gray-500">
                                                {ticket.time}
                                            </div>

                                        </td>

                                        <td className="px-3 py-3">

                                            <div className="flex items-center gap-4">

                                                <Eye
                                                    size={14}
                                                    className="
                                                        text-gray-600
                                                        cursor-pointer

                                                        hover:text-purple-600

                                                        transition
                                                        duration-200
                                                    "
                                                />

                                                <MoreVertical
                                                    size={15}
                                                    className="
                                                        text-gray-700
                                                        cursor-pointer

                                                        hover:scale-110

                                                        transition
                                                        duration-200
                                                    "
                                                />

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="8"
                                        className="
                                            text-center
                                            py-10
                                            text-[11px]
                                            text-gray-500
                                        "
                                    >

                                        No tickets found

                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>


                {/* =================================================
                    PAGINATION
                ================================================= */}

                <div
                    className="
                        min-h-[40px]
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-3
                        px-4
                        sm:px-7
                        py-2
                    "
                >

                    <p className="text-[9px] text-gray-600">

                        Showing {filteredTickets.length} of {dateFilteredTickets.length} results

                    </p>


                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-3
                            sm:gap-5
                        "
                    >

                        <button
                            className="
                                text-gray-700
                                hover:text-purple-600
                                transition
                            "
                        >

                            <ChevronLeft size={14} />

                        </button>


                        <button
                            className="
                                w-5
                                h-5
                                bg-purple-600
                                text-white
                                rounded
                                text-[9px]
                            "
                        >
                            1
                        </button>


                        <button className="text-[9px] text-gray-700">
                            2
                        </button>

                        <button className="text-[9px] text-gray-700">
                            3
                        </button>

                        <span className="text-[9px] text-gray-500">
                            ...
                        </span>

                        <button className="text-[9px] text-gray-700">
                            250
                        </button>

                        <button
                            className="
                                text-gray-700
                                hover:text-purple-600
                                transition
                            "
                        >

                            <ChevronRight size={14} />

                        </button>


                        <button
                            className="
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-300
                                rounded
                                px-2.5
                                py-1.5
                                text-[9px]

                                hover:bg-gray-100

                                transition
                            "
                        >

                            10 / Page

                            <ChevronDown size={11} />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default SupportTickets;
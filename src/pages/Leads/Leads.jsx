
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


/* =================================================
   LEAD STATS
================================================= */

const leadStats = [
    {
        title: "Total Leads",
        value: "1,248",
        color: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300"
    },
    {
        title: "New",
        value: "320",
        color: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300"
    },
    {
        title: "Contacted",
        value: "348",
        color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-300"
    },
    {
        title: "Qualified",
        value: "384",
        color: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300"
    },
    {
        title: "Proposal",
        value: "264",
        color: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300"
    },
    {
        title: "Closed",
        value: "200",
        color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300"
    }
];


/* =================================================
   LEADS DATA
================================================= */

const leads = [
    {
        id: 1,
        name: "Rahul Sharma",
        company: "TechCorp",
        source: "Website",
        assignedTo: "Him Mostins",
        status: "Qualified",
        lastActivity: "2m ago",
        initials: "RS",
        avatarColor: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300"
    },
    {
        id: 2,
        name: "Ankit Verma",
        company: "Nova Ltd",
        source: "LinkedIn",
        assignedTo: "Virele Netkatorie",
        status: "Contacted",
        lastActivity: "10m ago",
        initials: "AV",
        avatarColor: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300"
    },
    {
        id: 3,
        name: "Priya Singh",
        company: "DesignHub",
        source: "Referral",
        assignedTo: "Linte Preddenbling",
        status: "New",
        lastActivity: "20m ago",
        initials: "PS",
        avatarColor: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300"
    },
    {
        id: 4,
        name: "Karan Joshi",
        company: "BuildX",
        source: "Cold Call",
        assignedTo: "Him Mostins",
        status: "Proposal",
        lastActivity: "30m ago",
        initials: "KJ",
        avatarColor: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300"
    },
    {
        id: 5,
        name: "Neha Mehta",
        company: "BrightSoft",
        source: "Website",
        assignedTo: "Virele Netkatorie",
        status: "Closed",
        lastActivity: "1h ago",
        initials: "NM",
        avatarColor: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300"
    },
    {
        id: 6,
        name: "Amit Kapoor",
        company: "CloudNova",
        source: "LinkedIn",
        assignedTo: "Him Mostins",
        status: "New",
        lastActivity: "1h ago",
        initials: "AK",
        avatarColor: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300"
    },
    {
        id: 7,
        name: "Sneha Gupta",
        company: "PixelWorks",
        source: "Referral",
        assignedTo: "Linte Preddenbling",
        status: "Qualified",
        lastActivity: "1h ago",
        initials: "SG",
        avatarColor: "bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-300"
    },
    {
        id: 8,
        name: "Rohit Malhotra",
        company: "FinEdge",
        source: "Website",
        assignedTo: "Virele Netkatorie",
        status: "Contacted",
        lastActivity: "2h ago",
        initials: "RM",
        avatarColor: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300"
    },
    {
        id: 9,
        name: "Pooja Agarwal",
        company: "MarketPro",
        source: "Cold Call",
        assignedTo: "Him Mostins",
        status: "Proposal",
        lastActivity: "2h ago",
        initials: "PA",
        avatarColor: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300"
    },
    {
        id: 10,
        name: "Vikas Thakur",
        company: "SoftLabs",
        source: "LinkedIn",
        assignedTo: "Linte Preddenbling",
        status: "Closed",
        lastActivity: "3h ago",
        initials: "VT",
        avatarColor: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300"
    },
    {
        id: 11,
        name: "Megha Joshi",
        company: "DataCore",
        source: "Website",
        assignedTo: "Virele Netkatorie",
        status: "Qualified",
        lastActivity: "3h ago",
        initials: "MJ",
        avatarColor: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300"
    },
    {
        id: 12,
        name: "Arjun Rawat",
        company: "NextGen Solutions",
        source: "Referral",
        assignedTo: "Him Mostins",
        status: "New",
        lastActivity: "4h ago",
        initials: "AR",
        avatarColor: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300"
    },
    {
        id: 13,
        name: "Simran Kaur",
        company: "Creative Minds",
        source: "LinkedIn",
        assignedTo: "Linte Preddenbling",
        status: "Contacted",
        lastActivity: "4h ago",
        initials: "SK",
        avatarColor: "bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-300"
    },
    {
        id: 14,
        name: "Manish Bhatia",
        company: "PrimeTech",
        source: "Website",
        assignedTo: "Him Mostins",
        status: "Qualified",
        lastActivity: "5h ago",
        initials: "MB",
        avatarColor: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300"
    },
    {
        id: 15,
        name: "Riya Sharma",
        company: "UrbanNest",
        source: "Referral",
        assignedTo: "Virele Netkatorie",
        status: "Proposal",
        lastActivity: "5h ago",
        initials: "RS",
        avatarColor: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300"
    },
    {
        id: 16,
        name: "Deepak Kumar",
        company: "InfoSystems",
        source: "Cold Call",
        assignedTo: "Linte Preddenbling",
        status: "Closed",
        lastActivity: "6h ago",
        initials: "DK",
        avatarColor: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300"
    },
    {
        id: 17,
        name: "Nisha Verma",
        company: "AppWorks",
        source: "LinkedIn",
        assignedTo: "Him Mostins",
        status: "New",
        lastActivity: "6h ago",
        initials: "NV",
        avatarColor: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300"
    },
    {
        id: 18,
        name: "Saurabh Singh",
        company: "TechBridge",
        source: "Website",
        assignedTo: "Virele Netkatorie",
        status: "Contacted",
        lastActivity: "7h ago",
        initials: "SS",
        avatarColor: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300"
    },
    {
        id: 19,
        name: "Kavita Sharma",
        company: "BrightFuture",
        source: "Referral",
        assignedTo: "Linte Preddenbling",
        status: "Qualified",
        lastActivity: "7h ago",
        initials: "KS",
        avatarColor: "bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-300"
    },
    {
        id: 20,
        name: "Mohit Jain",
        company: "DigitalEdge",
        source: "Cold Call",
        assignedTo: "Him Mostins",
        status: "Proposal",
        lastActivity: "8h ago",
        initials: "MJ",
        avatarColor: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300"
    },
    {
        id: 21,
        name: "Anjali Mehra",
        company: "CodeCraft",
        source: "Website",
        assignedTo: "Virele Netkatorie",
        status: "Closed",
        lastActivity: "8h ago",
        initials: "AM",
        avatarColor: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300"
    },
    {
        id: 22,
        name: "Varun Arora",
        company: "GrowthLabs",
        source: "LinkedIn",
        assignedTo: "Linte Preddenbling",
        status: "New",
        lastActivity: "9h ago",
        initials: "VA",
        avatarColor: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300"
    },
    {
        id: 23,
        name: "Shweta Gupta",
        company: "InnoTech",
        source: "Referral",
        assignedTo: "Him Mostins",
        status: "Contacted",
        lastActivity: "9h ago",
        initials: "SG",
        avatarColor: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300"
    },
    {
        id: 24,
        name: "Rajeev Mehta",
        company: "SmartSolutions",
        source: "Website",
        assignedTo: "Virele Netkatorie",
        status: "Qualified",
        lastActivity: "10h ago",
        initials: "RM",
        avatarColor: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300"
    },
    {
        id: 25,
        name: "Tanya Kapoor",
        company: "VisionTech",
        source: "Cold Call",
        assignedTo: "Linte Preddenbling",
        status: "Proposal",
        lastActivity: "10h ago",
        initials: "TK",
        avatarColor: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300"
    },
    {
        id: 26,
        name: "Akash Sharma",
        company: "WebMatrix",
        source: "LinkedIn",
        assignedTo: "Him Mostins",
        status: "Closed",
        lastActivity: "11h ago",
        initials: "AS",
        avatarColor: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300"
    },
    {
        id: 27,
        name: "Divya Nair",
        company: "CloudWorks",
        source: "Website",
        assignedTo: "Virele Netkatorie",
        status: "New",
        lastActivity: "11h ago",
        initials: "DN",
        avatarColor: "bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-300"
    },
    {
        id: 28,
        name: "Harish Kumar",
        company: "EnterpriseHub",
        source: "Referral",
        assignedTo: "Linte Preddenbling",
        status: "Contacted",
        lastActivity: "12h ago",
        initials: "HK",
        avatarColor: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300"
    },
    {
        id: 29,
        name: "Ayesha Khan",
        company: "MarketWorld",
        source: "LinkedIn",
        assignedTo: "Him Mostins",
        status: "Qualified",
        lastActivity: "12h ago",
        initials: "AK",
        avatarColor: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300"
    },
    {
        id: 30,
        name: "Nitin Saxena",
        company: "TechVision",
        source: "Cold Call",
        assignedTo: "Virele Netkatorie",
        status: "Proposal",
        lastActivity: "13h ago",
        initials: "NS",
        avatarColor: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300"
    }
];


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
                lead.name
                    .toLowerCase()
                    .includes(search) ||

                lead.company
                    .toLowerCase()
                    .includes(search);

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

    const startIndex =
        (currentPage - 1) * leadsPerPage;

    const endIndex =
        startIndex + leadsPerPage;

    const currentLeads =
        filteredLeads.slice(startIndex, endIndex);


    /* =================================================
       PAGE NUMBERS
    ================================================= */

    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );


    /* =================================================
       PREVIOUS PAGE
    ================================================= */

    const handlePrevious = () => {

        setCurrentPage((previousPage) =>
            Math.max(previousPage - 1, 1)
        );

    };


    /* =================================================
       NEXT PAGE
    ================================================= */

    const handleNext = () => {

        setCurrentPage((previousPage) =>
            Math.min(previousPage + 1, totalPages)
        );

    };


    /* =================================================
       PAGE CLICK
    ================================================= */

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
            {
                type: "text/csv;charset=utf-8;"
            }
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

        return (
            <Loader text="Loading Leads..." />
        );

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

            {/* =================================================
                HEADER
            ================================================= */}

            <div
                className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-4
                    mb-6
                "
            >

                <div>

                    <h1
                        className="
                            text-xl
                            sm:text-2xl
                            font-semibold
                            text-theme-text
                        "
                    >
                        Leads
                    </h1>

                    <p
                        className="
                            text-xs
                            sm:text-sm
                            text-theme-text-secondary
                            mt-1
                        "
                    >
                        Manage and track all your leads
                    </p>

                </div>


                <div
                    className="
                        flex
                        flex-wrap
                        gap-2
                    "
                >

                    {/* EXPORT LEADS */}

                    <button
                        type="button"
                        onClick={handleExportLeads}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            border
                            border-theme-border-light

                            bg-theme-surface

                            text-theme-text-secondary

                            px-3
                            sm:px-4

                            py-2.5

                            rounded-md

                            text-xs
                            lg:text-sm

                            font-medium

                            hover:bg-theme-surface-secondary
                            hover:text-theme-text

                            active:scale-95

                            transition-all
                            duration-200
                        "
                    >

                        <Download size={16} />

                        <span>
                            Export Leads
                        </span>

                    </button>


                    {/* CREATE LEAD */}

                    <button
                        type="button"
                        onClick={() => navigate("/create-lead")}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            bg-purple-600
                            text-white

                            px-3
                            sm:px-4

                            py-2.5

                            rounded-md

                            text-xs
                            lg:text-sm

                            font-medium

                            hover:bg-purple-700

                            active:scale-95

                            transition-all
                            duration-200
                        "
                    >

                        <Plus size={16} />

                        <span>
                            Create Lead
                        </span>

                    </button>


                    {/* ASSIGN NEW LEAD */}

                    <button
                        type="button"
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            bg-blue-600
                            text-white

                            px-3
                            sm:px-4

                            py-2.5

                            rounded-md

                            text-xs
                            lg:text-sm

                            font-medium

                            hover:bg-blue-700

                            active:scale-95

                            transition-all
                            duration-200
                        "
                    >

                        <UserPlus size={16} />

                        <span>
                            Assign New Lead
                        </span>

                    </button>

                </div>

            </div>


            {/* =================================================
                STATS
            ================================================= */}

            <div
                className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    lg:grid-cols-6

                    gap-3
                    sm:gap-4

                    mb-6
                "
            >

                {leadStats.map((stat) => (

                    <div
                        key={stat.title}
                        className="
                            bg-theme-surface

                            border
                            border-theme-border-light

                            rounded-lg

                            p-4

                            shadow-sm

                            transition-colors
                            duration-300
                        "
                    >

                        <p
                            className="
                                text-xs
                                text-theme-text-secondary
                                mb-2
                            "
                        >
                            {stat.title}
                        </p>


                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                gap-2
                            "
                        >

                            <h2
                                className="
                                    text-lg
                                    sm:text-xl
                                    font-semibold
                                    text-theme-text
                                "
                            >
                                {stat.value}
                            </h2>


                            <div
                                className={`
                                    px-2
                                    py-1
                                    rounded-md
                                    text-xs
                                    font-medium

                                    ${stat.color}
                                `}
                            >
                                Leads
                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* =================================================
                SEARCH & FILTER
            ================================================= */}

            <div
                className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center

                    gap-3

                    mb-6
                "
            >

                {/* SEARCH */}

                <div
                    className="
                        relative
                        w-full
                        md:w-64
                        lg:w-72
                        shrink-0
                    "
                >

                    <Search
                        size={17}
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
                        placeholder="Search leads..."
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                        className="
                            w-full

                            border
                            border-theme-border-light

                            rounded-md

                            pl-9
                            pr-3

                            py-2.5

                            text-sm

                            bg-theme-surface
                            text-theme-text

                            placeholder:text-theme-text-muted

                            outline-none

                            focus:ring-2
                            focus:ring-purple-500

                            focus:border-purple-500

                            transition-colors
                            duration-200
                        "
                    />

                </div>


                {/* RIGHT FILTER AREA */}

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        justify-end

                        gap-3

                        md:ml-auto
                    "
                >

                    {/* STATUS FILTER */}

                    <div className="relative">

                        <Filter
                            size={15}
                            className="
                                absolute
                                left-3
                                top-1/2
                                -translate-y-1/2

                                text-theme-text-muted

                                pointer-events-none
                            "
                        />


                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            className="
                                w-full
                                sm:w-40

                                border
                                border-theme-border-light

                                rounded-md

                                pl-9
                                pr-8

                                py-2.5

                                text-sm

                                bg-theme-surface
                                text-theme-text

                                outline-none

                                focus:ring-2
                                focus:ring-purple-500

                                focus:border-purple-500

                                transition-colors
                                duration-200
                            "
                        >

                            <option value="All">
                                All Status
                            </option>

                            <option value="New">
                                New
                            </option>

                            <option value="Contacted">
                                Contacted
                            </option>

                            <option value="Qualified">
                                Qualified
                            </option>

                            <option value="Proposal">
                                Proposal
                            </option>

                            <option value="Closed">
                                Closed
                            </option>

                        </select>

                    </div>


                    {/* SOURCE FILTER */}

                    <select
                        value={sourceFilter}
                        onChange={(e) =>
                            setSourceFilter(e.target.value)
                        }
                        className="
                            w-full
                            sm:w-40

                            border
                            border-theme-border-light

                            rounded-md

                            px-3
                            py-2.5

                            text-sm

                            bg-theme-surface
                            text-theme-text

                            outline-none

                            focus:ring-2
                            focus:ring-purple-500

                            focus:border-purple-500

                            transition-colors
                            duration-200
                        "
                    >

                        <option value="All">
                            All Sources
                        </option>

                        <option value="Website">
                            Website
                        </option>

                        <option value="LinkedIn">
                            LinkedIn
                        </option>

                        <option value="Referral">
                            Referral
                        </option>

                        <option value="Cold Call">
                            Cold Call
                        </option>

                    </select>


                    {/* ASSIGNED FILTER */}

                    <select
                        value={assignedFilter}
                        onChange={(e) =>
                            setAssignedFilter(e.target.value)
                        }
                        className="
                            w-full
                            sm:w-40

                            border
                            border-theme-border-light

                            rounded-md

                            px-3
                            py-2.5

                            text-sm

                            bg-theme-surface
                            text-theme-text

                            outline-none

                            focus:ring-2
                            focus:ring-purple-500

                            focus:border-purple-500

                            transition-colors
                            duration-200
                        "
                    >

                        <option value="All">
                            All Assigned
                        </option>

                        <option value="Him Mostins">
                            Him Mostins
                        </option>

                        <option value="Virele Netkatorie">
                            Virele Netkatorie
                        </option>

                        <option value="Linte Preddenbling">
                            Linte Preddenbling
                        </option>

                    </select>


                    {/* CLEAR FILTER */}

                    <button
                        type="button"
                        onClick={clearFilters}
                        title="Clear all filters"
                        className="
                            flex
                            items-center
                            justify-center

                            w-11
                            h-11

                            border
                            border-theme-border-light

                            rounded-md

                            bg-theme-surface

                            text-theme-text-secondary

                            hover:bg-theme-surface-secondary
                            hover:text-primary

                            active:scale-95

                            transition-all
                            duration-200

                            shrink-0
                        "
                    >

                        <Filter size={18} />

                    </button>

                </div>

            </div>


            {/* =================================================
                TABLE
            ================================================= */}

            <div
                className="
                    bg-theme-surface

                    border
                    border-theme-border-light

                    rounded-lg

                    shadow-sm

                    overflow-x-auto

                    transition-colors
                    duration-300
                "
            >

                <table
                    className="
                        w-full
                        min-w-[900px]
                        text-left
                    "
                >

                    <thead>

                        <tr
                            className="
                                border-b
                                border-theme-border-light

                                bg-purple-100
                                dark:bg-purple-500/10
                            "
                        >

                            <th className="
                                px-4
                                py-3
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                ID
                            </th>

                            <th className="
                                px-4
                                py-3
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Lead
                            </th>

                            <th className="
                                px-4
                                py-3
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Company
                            </th>

                            <th className="
                                px-4
                                py-3
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Source
                            </th>

                            <th className="
                                px-4
                                py-3
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Assigned To
                            </th>

                            <th className="
                                px-4
                                py-3
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Status
                            </th>

                            <th className="
                                px-4
                                py-3
                                text-xs
                                font-semibold
                                text-theme-text-secondary
                            ">
                                Last Activity
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {currentLeads.length > 0 ? (

                            currentLeads.map((lead) => (

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

                                    {/* ID */}

                                    <td
                                        className="
                                            px-4
                                            py-4

                                            text-sm
                                            font-medium
                                            text-theme-text-secondary
                                        "
                                    >
                                        {lead.id}
                                    </td>


                                    {/* LEAD */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >

                                            <div
                                                className={`
                                                    w-9
                                                    h-9

                                                    rounded-full

                                                    flex
                                                    items-center
                                                    justify-center

                                                    text-xs
                                                    font-semibold

                                                    ${lead.avatarColor}
                                                `}
                                            >
                                                {lead.initials}
                                            </div>


                                            <div>

                                                <p
                                                    className="
                                                        text-sm
                                                        font-medium
                                                        text-theme-text
                                                    "
                                                >
                                                    {lead.name}
                                                </p>

                                            </div>

                                        </div>

                                    </td>


                                    {/* COMPANY */}

                                    <td
                                        className="
                                            px-4
                                            py-4

                                            text-sm
                                            text-theme-text-secondary
                                        "
                                    >
                                        {lead.company}
                                    </td>


                                    {/* SOURCE */}

                                    <td
                                        className="
                                            px-4
                                            py-4

                                            text-sm
                                            text-theme-text-secondary
                                        "
                                    >
                                        {lead.source}
                                    </td>


                                    {/* ASSIGNED TO */}

                                    <td
                                        className="
                                            px-4
                                            py-4

                                            text-sm
                                            text-theme-text-secondary
                                        "
                                    >
                                        {lead.assignedTo}
                                    </td>


                                    {/* STATUS */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                        "
                                    >

                                        <span
                                            className={`
                                                inline-flex

                                                px-2.5
                                                py-1

                                                rounded-full

                                                text-xs
                                                font-medium

                                                ${
                                                    lead.status === "Qualified"
                                                        ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
                                                        : lead.status === "Contacted"
                                                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300"
                                                        : lead.status === "New"
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
                                                        : lead.status === "Proposal"
                                                        ? "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
                                                        : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300"
                                                }
                                            `}
                                        >
                                            {lead.status}
                                        </span>

                                    </td>


                                    {/* LAST ACTIVITY */}

                                    <td
                                        className="
                                            px-4
                                            py-4

                                            text-sm
                                            text-theme-text-muted
                                        "
                                    >
                                        {lead.lastActivity}
                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="
                                        text-center
                                        py-10
                                        text-sm
                                        text-theme-text-secondary
                                    "
                                >
                                    No leads found
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
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between

                    gap-3

                    py-4
                "
            >

                <p
                    className="
                        text-xs
                        sm:text-sm
                        text-theme-text-secondary
                    "
                >

                    Showing{" "}

                    {filteredLeads.length === 0
                        ? 0
                        : startIndex + 1}

                    {" "}to{" "}

                    {Math.min(
                        endIndex,
                        filteredLeads.length
                    )}

                    {" "}of{" "}

                    {filteredLeads.length}

                    {" "}matching leads

                </p>


                <div
                    className="
                        flex
                        items-center
                        gap-2
                        flex-wrap
                    "
                >

                    {/* PREVIOUS */}

                    <button
                        type="button"
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`
                            px-3
                            py-2

                            border
                            border-theme-border-light

                            rounded-md

                            text-xs

                            transition

                            ${
                                currentPage === 1
                                    ? "text-theme-text-muted cursor-not-allowed bg-theme-surface-secondary"
                                    : "text-theme-text-secondary hover:bg-theme-surface-secondary hover:text-theme-text"
                            }
                        `}
                    >
                        Previous
                    </button>


                    {/* PAGE NUMBERS */}

                    {pageNumbers.map((page) => (

                        <button
                            type="button"
                            key={page}
                            onClick={() =>
                                handlePageChange(page)
                            }
                            className={`
                                px-3
                                py-2

                                rounded-md

                                text-xs

                                transition

                                ${
                                    currentPage === page
                                        ? "bg-purple-600 text-white"
                                        : "border border-theme-border-light text-theme-text-secondary hover:bg-theme-surface-secondary hover:text-theme-text"
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
                        disabled={
                            currentPage === totalPages
                        }
                        className={`
                            px-3
                            py-2

                            border
                            border-theme-border-light

                            rounded-md

                            text-xs

                            transition

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

        </div>

    );

}


export default Leads;


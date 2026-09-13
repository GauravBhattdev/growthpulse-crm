import React, { useEffect, useState } from "react";

import {
    Search,
    Filter,
    Download,
    Plus,
    UserPlus
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Loader from "../../components/Loader/Loader";


const leadStats = [
    {
        title: "Total Leads",
        value: "1,248",
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "New",
        value: "320",
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Contacted",
        value: "348",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        title: "Qualified",
        value: "384",
        color: "bg-green-100 text-green-600"
    },
    {
        title: "Proposal",
        value: "264",
        color: "bg-orange-100 text-orange-600"
    },
    {
        title: "Closed",
        value: "200",
        color: "bg-emerald-100 text-emerald-600"
    }
];


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
        avatarColor: "bg-green-100 text-green-600"
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
        avatarColor: "bg-purple-100 text-purple-600"
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
        avatarColor: "bg-orange-100 text-orange-600"
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
        avatarColor: "bg-blue-100 text-blue-600"
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
        avatarColor: "bg-green-100 text-green-600"
    }
];


function Leads() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const [statusFilter, setStatusFilter] = useState("All");

    const [sourceFilter, setSourceFilter] = useState("All");

    const [assignedFilter, setAssignedFilter] = useState("All");


    /* ================= LOADING ================= */

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    /* ================= FILTER LOGIC ================= */

    const filteredLeads = leads.filter((lead) => {

        const matchesSearch =
            lead.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||

            lead.company
                .toLowerCase()
                .includes(searchTerm.toLowerCase());


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


    /* ================= CLEAR FILTERS ================= */

    const clearFilters = () => {

        setSearchTerm("");

        setStatusFilter("All");

        setSourceFilter("All");

        setAssignedFilter("All");

    };


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
                bg-white
                pl-6
                sm:pl-8
                lg:pl-10
                pt-6
                sm:pt-8
                lg:pt-10
                pr-4
                sm:pr-6
                lg:pr-10
            "
        >

            {/* ================= HEADER ================= */}

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
                            text-gray-900
                        "
                    >
                        Leads
                    </h1>

                    <p
                        className="
                            text-xs
                            sm:text-sm
                            text-gray-500
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

                    {/* Export Leads */}

                    <button
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            border
                            border-gray-300
                            text-gray-700
                            px-3
                            sm:px-4
                            py-2.5
                            rounded-md
                            text-xs
                            lg:text-sm
                            font-medium
                            hover:bg-gray-50
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


                    {/* Create Lead */}

                    <button
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


                    {/* Assign New Lead */}

                    <button
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


            {/* ================= STATS ================= */}

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
                            bg-white
                            border
                            border-gray-200
                            rounded-lg
                            p-4
                            shadow-sm
                        "
                    >

                        <p
                            className="
                                text-xs
                                text-gray-500
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
                            "
                        >

                            <h2
                                className="
                                    text-lg
                                    sm:text-xl
                                    font-semibold
                                    text-gray-900
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


            {/* ================= SEARCH & FILTER ================= */}

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

                {/* ================= SEARCH ================= */}

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
                            text-gray-400
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
                            border-gray-300
                            rounded-md
                            pl-9
                            pr-3
                            py-2.5
                            text-sm
                            outline-none
                            focus:ring-2
                            focus:ring-purple-500
                            focus:border-purple-500
                        "
                    />

                </div>


                {/* ================= RIGHT FILTER AREA ================= */}

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

                    {/* Status Filter */}

                    <div className="relative">

                        <Filter
                            size={15}
                            className="
                                absolute
                                left-3
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
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
                                border-gray-300
                                rounded-md
                                pl-9
                                pr-8
                                py-2.5
                                text-sm
                                bg-white
                                outline-none
                                focus:ring-2
                                focus:ring-purple-500
                                focus:border-purple-500
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


                    {/* Source Filter */}

                    <select
                        value={sourceFilter}
                        onChange={(e) =>
                            setSourceFilter(e.target.value)
                        }
                        className="
                            w-full
                            sm:w-40
                            border
                            border-gray-300
                            rounded-md
                            px-3
                            py-2.5
                            text-sm
                            bg-white
                            outline-none
                            focus:ring-2
                            focus:ring-purple-500
                            focus:border-purple-500
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


                    {/* Assigned Filter */}

                    <select
                        value={assignedFilter}
                        onChange={(e) =>
                            setAssignedFilter(e.target.value)
                        }
                        className="
                            w-full
                            sm:w-40
                            border
                            border-gray-300
                            rounded-md
                            px-3
                            py-2.5
                            text-sm
                            bg-white
                            outline-none
                            focus:ring-2
                            focus:ring-purple-500
                            focus:border-purple-500
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


                    {/* Filter / Reset Button */}

                    <button
                        onClick={clearFilters}
                        title="Clear all filters"
                        className="
                            flex
                            items-center
                            justify-center
                            w-11
                            h-11
                            border
                            border-gray-300
                            rounded-md
                            bg-white
                            text-gray-700
                            hover:bg-gray-50
                            hover:text-purple-600
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


            {/* ================= TABLE ================= */}

            <div
                className="
                    bg-white
                    border
                    border-gray-200
                    rounded-lg
                    shadow-sm
                    overflow-x-auto
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
                                border-gray-200
                                bg-gray-50
                            "
                        >

                            <th
                                className="
                                    px-4
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-gray-500
                                "
                            >
                                ID
                            </th>


                            <th
                                className="
                                    px-4
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-gray-500
                                "
                            >
                                Lead
                            </th>


                            <th
                                className="
                                    px-4
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-gray-500
                                "
                            >
                                Company
                            </th>


                            <th
                                className="
                                    px-4
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-gray-500
                                "
                            >
                                Source
                            </th>


                            <th
                                className="
                                    px-4
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-gray-500
                                "
                            >
                                Assigned To
                            </th>


                            <th
                                className="
                                    px-4
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-gray-500
                                "
                            >
                                Status
                            </th>


                            <th
                                className="
                                    px-4
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-gray-500
                                "
                            >
                                Last Activity
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {filteredLeads.length > 0 ? (

                            filteredLeads.map((lead) => (

                                <tr
                                    key={lead.id}
                                    className="
                                        border-b
                                        border-gray-100
                                        hover:bg-gray-50
                                        transition
                                    "
                                >

                                    {/* ID */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-sm
                                            font-medium
                                            text-gray-700
                                        "
                                    >
                                        {lead.id}
                                    </td>


                                    {/* Lead */}

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
                                                        text-gray-900
                                                    "
                                                >
                                                    {lead.name}
                                                </p>

                                            </div>

                                        </div>

                                    </td>


                                    {/* Company */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-sm
                                            text-gray-700
                                        "
                                    >
                                        {lead.company}
                                    </td>


                                    {/* Source */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-sm
                                            text-gray-600
                                        "
                                    >
                                        {lead.source}
                                    </td>


                                    {/* Assigned To */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-sm
                                            text-gray-600
                                        "
                                    >
                                        {lead.assignedTo}
                                    </td>


                                    {/* Status */}

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
                                                        ? "bg-green-100 text-green-700"
                                                        : lead.status === "Contacted"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : lead.status === "New"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : lead.status === "Proposal"
                                                        ? "bg-orange-100 text-orange-700"
                                                        : "bg-emerald-100 text-emerald-700"
                                                }
                                            `}
                                        >
                                            {lead.status}
                                        </span>

                                    </td>


                                    {/* Last Activity */}

                                    <td
                                        className="
                                            px-4
                                            py-4
                                            text-sm
                                            text-gray-500
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
                                        text-gray-500
                                    "
                                >
                                    No leads found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>


            {/* ================= PAGINATION ================= */}

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
                        text-gray-500
                    "
                >
                    Showing 1 to {filteredLeads.length} of 1,248 leads
                </p>


                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <button
                        className="
                            px-3
                            py-2
                            border
                            border-gray-300
                            rounded-md
                            text-xs
                            text-gray-500
                            hover:bg-gray-50
                        "
                    >
                        Previous
                    </button>


                    <button
                        className="
                            px-3
                            py-2
                            rounded-md
                            bg-purple-600
                            text-white
                            text-xs
                        "
                    >
                        1
                    </button>


                    <button
                        className="
                            px-3
                            py-2
                            border
                            border-gray-300
                            rounded-md
                            text-xs
                            text-gray-700
                            hover:bg-gray-50
                        "
                    >
                        2
                    </button>


                    <button
                        className="
                            px-3
                            py-2
                            border
                            border-gray-300
                            rounded-md
                            text-xs
                            text-gray-700
                            hover:bg-gray-50
                        "
                    >
                        3
                    </button>


                    <button
                        className="
                            px-3
                            py-2
                            border
                            border-gray-300
                            rounded-md
                            text-xs
                            text-gray-700
                            hover:bg-gray-50
                        "
                    >
                        Next
                    </button>

                </div>

            </div>

        </div>

    );

}


export default Leads;
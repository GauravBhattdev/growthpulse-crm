import React, { useEffect, useMemo, useState } from "react";

import {
    Search,
    SlidersHorizontal,
    MoreVertical,
    ChevronDown,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import Loader from "../../components/Loader/Loader";
import CreateTeamMember from "../../components/CreateTeamMember/CreateTeamMember";

import {
    members,
    teamOptions,
    roleOptions
} from "../../data/teamMemberData";


function TeamMember() {

    // =================================================
    // LOADING
    // =================================================

    const [loading, setLoading] = useState(true);


    // =================================================
    // POPUP
    // =================================================

    const [showCreateMember, setShowCreateMember] = useState(false);


    // =================================================
    // FILTERS
    // =================================================

    const [searchText, setSearchText] = useState("");
    const [teamFilter, setTeamFilter] = useState("All");
    const [roleFilter, setRoleFilter] = useState("All");


    // =================================================
    // PAGINATION
    // =================================================

    const membersPerPage = 7;

    const [currentPage, setCurrentPage] = useState(1);


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
    // FILTER MEMBERS
    // =================================================

    const filteredMembers = useMemo(() => {

        return members.filter((member) => {

            const search = searchText.toLowerCase().trim();

            const matchesSearch =
                member.name.toLowerCase().includes(search) ||
                member.role.toLowerCase().includes(search) ||
                member.team.toLowerCase().includes(search);

            const matchesTeam =
                teamFilter === "All" ||
                member.team === teamFilter;

            const matchesRole =
                roleFilter === "All" ||
                member.role === roleFilter;

            return matchesSearch && matchesTeam && matchesRole;

        });

    }, [searchText, teamFilter, roleFilter]);


    // =================================================
    // PAGINATION CALC
    // =================================================

    const totalPages = Math.max(
        1,
        Math.ceil(filteredMembers.length / membersPerPage)
    );

    const startIndex = (currentPage - 1) * membersPerPage;
    const endIndex = startIndex + membersPerPage;

    const currentMembers = filteredMembers.slice(startIndex, endIndex);


    // =================================================
    // RESET PAGE ON FILTER CHANGE
    // =================================================

    useEffect(() => {
        setCurrentPage(1);
    }, [searchText, teamFilter, roleFilter]);


    // =================================================
    // PAGE HANDLERS
    // =================================================

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePageClick = (page) => setCurrentPage(page);


    const pageNumbers = Array.from(
        { length: totalPages },
        (_, i) => i + 1
    );


    // =================================================
    // STATUS COLORS
    // =================================================

    const getStatusClasses = (status) => {

        if (status === "Active") return "bg-green-500/15 text-green-500";
        if (status === "Away") return "bg-orange-500/15 text-orange-500";
        if (status === "Inactive") return "bg-red-500/15 text-red-500";

        return "bg-theme-surface-secondary text-theme-text-secondary";
    };


    // =================================================
    // LOADER
    // =================================================

    if (loading) {

        return (
            <div className="min-h-screen bg-theme-page flex items-center justify-center">
                <Loader text="Loading team members..." />
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

                pl-6 sm:pl-8 lg:pl-10
                pr-4 sm:pr-6 lg:pr-8

                pt-6 sm:pt-8 lg:pt-10

                transition-colors
                duration-300
            "
        >

            {/* PAGE HEADER */}

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                <div>

                    <h1 className="text-[24px] sm:text-[27px] font-semibold text-theme-text">
                        Team Members
                    </h1>

                    <p className="mt-1 text-[12px] sm:text-[13px] text-theme-text-secondary">
                        View and manage all the team members.
                    </p>

                </div>


                <button
                    type="button"
                    onClick={() => setShowCreateMember(true)}
                    className="
                        flex items-center justify-center gap-2
                        w-full sm:w-auto
                        bg-primary hover:bg-primaryHover
                        text-white
                        px-5 py-2.5
                        rounded-md
                        text-sm font-medium
                        transition duration-200
                        cursor-pointer
                    "
                >
                    + Create Team Member
                </button>

            </div>


            {/* TABLE CONTAINER */}

            <div
                className="
                    mt-4
                    bg-theme-surface
                    border border-theme-border-light
                    rounded-md
                    shadow-sm
                    overflow-hidden
                    transition-colors duration-300
                "
            >

                {/* FILTER / SEARCH */}

                <div
                    className="
                        flex flex-col md:flex-row md:items-center md:justify-between
                        gap-3
                        p-3
                        border-b border-theme-border-light
                    "
                >

                    <div
                        className="
                            flex items-center gap-2
                            border border-theme-border-light
                            rounded-md
                            h-[34px]
                            w-full md:w-[200px]
                            px-2
                            bg-theme-surface
                        "
                    >

                        <Search size={15} className="text-theme-text-secondary shrink-0" />

                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search Members..."
                            className="
                                w-full
                                outline-none
                                border-none
                                text-[12px]
                                text-theme-text
                                placeholder:text-theme-text-muted
                                bg-transparent
                            "
                        />

                    </div>


                    <div className="flex flex-wrap items-center gap-2">

                        {/* TEAM */}

                        <div className="relative">

                            <select
                                value={teamFilter}
                                onChange={(e) => setTeamFilter(e.target.value)}
                                className="
                                    appearance-none
                                    border border-theme-border-light
                                    rounded-md
                                    h-[34px]
                                    pl-3 pr-8
                                    text-[12px]
                                    text-theme-text
                                    bg-theme-surface
                                    outline-none
                                    focus:border-primary
                                    cursor-pointer
                                "
                            >

                                {teamOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}

                            </select>

                            <ChevronDown
                                size={14}
                                className="
                                    absolute right-2 top-1/2 -translate-y-1/2
                                    text-theme-text-secondary
                                    pointer-events-none
                                "
                            />

                        </div>


                        {/* ROLE */}

                        <div className="relative">

                            <select
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                                className="
                                    appearance-none
                                    border border-theme-border-light
                                    rounded-md
                                    h-[34px]
                                    pl-3 pr-8
                                    text-[12px]
                                    text-theme-text
                                    bg-theme-surface
                                    outline-none
                                    focus:border-primary
                                    cursor-pointer
                                "
                            >

                                {roleOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}

                            </select>

                            <ChevronDown
                                size={14}
                                className="
                                    absolute right-2 top-1/2 -translate-y-1/2
                                    text-theme-text-secondary
                                    pointer-events-none
                                "
                            />

                        </div>


                        {/* RESET */}

                        <button
                            type="button"
                            onClick={() => {
                                setSearchText("");
                                setTeamFilter("All");
                                setRoleFilter("All");
                            }}
                            className="
                                w-[34px] h-[34px]
                                flex items-center justify-center
                                border border-theme-border-light
                                rounded-md
                                text-theme-text-secondary
                                bg-theme-surface
                                hover:bg-theme-surface-secondary
                                hover:text-theme-text
                                transition
                                cursor-pointer
                            "
                            title="Reset filters"
                        >
                            <SlidersHorizontal size={17} />
                        </button>

                    </div>

                </div>


                {/* TABLE */}

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[800px] border-collapse">

                        <thead>

                            <tr className="bg-primary/10">

                                <th className="text-left px-4 py-3 text-[12px] font-semibold text-theme-text-secondary">Member</th>
                                <th className="text-left px-4 py-3 text-[12px] font-semibold text-theme-text-secondary">Role</th>
                                <th className="text-left px-4 py-3 text-[12px] font-semibold text-theme-text-secondary">Team</th>
                                <th className="text-left px-4 py-3 text-[12px] font-semibold text-theme-text-secondary">Leads</th>
                                <th className="text-left px-4 py-3 text-[12px] font-semibold text-theme-text-secondary">Performance</th>
                                <th className="text-left px-4 py-3 text-[12px] font-semibold text-theme-text-secondary">Status</th>
                                <th className="text-center px-4 py-3 text-[12px] font-semibold text-theme-text-secondary">Action</th>

                            </tr>

                        </thead>


                        <tbody>

                            {currentMembers.length > 0 ? (

                                currentMembers.map((member) => (

                                    <tr
                                        key={member.id}
                                        className="
                                            border-t border-theme-border-light
                                            hover:bg-theme-surface-secondary
                                            transition-colors duration-200
                                        "
                                    >

                                        <td className="px-4 py-3">

                                            <div className="flex items-center gap-3">

                                                <div
                                                    className={`
                                                        w-[30px] h-[30px]
                                                        rounded-full
                                                        flex items-center justify-center
                                                        text-[10px] font-semibold
                                                        shrink-0
                                                        ${member.avatarColor}
                                                    `}
                                                >
                                                    {member.avatar}
                                                </div>

                                                <span className="text-[12px] font-medium text-theme-text">
                                                    {member.name}
                                                </span>

                                            </div>

                                        </td>


                                        <td className="px-4 py-3 text-[12px] text-theme-text-secondary">
                                            {member.role}
                                        </td>


                                        <td className="px-4 py-3 text-[12px] text-theme-text-secondary">
                                            {member.team}
                                        </td>


                                        <td className="px-4 py-3 text-[12px] font-medium text-theme-text">
                                            {member.leads}
                                        </td>


                                        <td className="px-4 py-3">

                                            <div className="w-[82px]">

                                                <div className="text-[11px] text-theme-text mb-1">
                                                    {member.performance}%
                                                </div>

                                                <div className="w-full h-[5px] bg-theme-surface-secondary rounded-full overflow-hidden">

                                                    <div
                                                        className="h-full bg-green-500 rounded-full"
                                                        style={{ width: `${member.performance}%` }}
                                                    />

                                                </div>

                                            </div>

                                        </td>


                                        <td className="px-4 py-3">

                                            <span
                                                className={`
                                                    inline-block px-2 py-1 rounded-full
                                                    text-[10px] font-medium
                                                    ${getStatusClasses(member.status)}
                                                `}
                                            >
                                                {member.status}
                                            </span>

                                        </td>


                                        <td className="px-4 py-3 text-center">

                                            <button
                                                type="button"
                                                className="
                                                    text-theme-text-secondary
                                                    hover:text-theme-text
                                                    transition
                                                    cursor-pointer
                                                "
                                            >
                                                <MoreVertical size={18} />
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="7" className="text-center py-10 text-[12px] text-theme-text-muted">
                                        No members found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>


                {/* PAGINATION */}

                <div
                    className="
                        flex flex-col sm:flex-row sm:items-center sm:justify-between
                        gap-3
                        px-4 sm:px-5 py-3
                        border-t border-theme-border-light
                    "
                >

                    <p className="text-[11px] text-theme-text-secondary">

                        Showing{" "}
                        {filteredMembers.length === 0 ? 0 : startIndex + 1}
                        {" "}to{" "}
                        {Math.min(endIndex, filteredMembers.length)}
                        {" "}of{" "}
                        {filteredMembers.length} results

                    </p>


                    <div className="flex items-center gap-1.5 flex-wrap">

                        <button
                            type="button"
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className={`
                                w-7 h-7 flex items-center justify-center rounded-md
                                transition cursor-pointer
                                ${
                                    currentPage === 1
                                        ? "text-theme-text-muted cursor-not-allowed opacity-50"
                                        : "text-theme-text-secondary hover:bg-theme-surface-secondary"
                                }
                            `}
                        >
                            <ChevronLeft size={14} />
                        </button>


                        {pageNumbers.map((page) => (

                            <button
                                key={page}
                                type="button"
                                onClick={() => handlePageClick(page)}
                                className={`
                                    min-w-[28px] h-7 px-1.5 rounded-md
                                    text-[11px] font-medium
                                    transition cursor-pointer
                                    ${
                                        currentPage === page
                                            ? "bg-primary text-white"
                                            : "text-theme-text-secondary hover:bg-theme-surface-secondary"
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
                                w-7 h-7 flex items-center justify-center rounded-md
                                transition cursor-pointer
                                ${
                                    currentPage === totalPages
                                        ? "text-theme-text-muted cursor-not-allowed opacity-50"
                                        : "text-theme-text-secondary hover:bg-theme-surface-secondary"
                                }
                            `}
                        >
                            <ChevronRight size={14} />
                        </button>


                        <button
                            type="button"
                            className="
                                ml-2
                                flex items-center gap-2
                                border border-theme-border-light
                                rounded-md
                                px-3 py-1.5
                                text-[11px]
                                text-theme-text-secondary
                                bg-theme-surface
                                hover:bg-theme-surface-secondary
                                transition cursor-pointer
                            "
                        >
                            7 / Page
                            <ChevronDown size={12} />
                        </button>

                    </div>

                </div>

            </div>


            {/* CREATE TEAM MEMBER POPUP */}

            {showCreateMember && (
                <CreateTeamMember
                    onClose={() => setShowCreateMember(false)}
                />
            )}

        </div>

    );

}


export default TeamMember;
import React, { useState } from "react";

import {
    Search,
    SlidersHorizontal,
    MoreVertical,
    ChevronDown,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import CreateTeamMember from "../../components/CreateTeamMember/CreateTeamMember";


const members = [
    {
        id: 1,
        name: "Him Mostins",
        role: "Sales Manager",
        team: "Sales Team",
        leads: 128,
        performance: 92,
        status: "Active",
        avatar: "HM"
    },
    {
        id: 2,
        name: "Virele Netkatorie",
        role: "Sales Executive",
        team: "Sales Team",
        leads: 96,
        performance: 87,
        status: "Active",
        avatar: "VN"
    },
    {
        id: 3,
        name: "Linte Preddenbling",
        role: "Designer",
        team: "Design Team",
        leads: 42,
        performance: 91,
        status: "Active",
        avatar: "LP"
    },
    {
        id: 4,
        name: "Rahit kumar",
        role: "Support Executive",
        team: "Support Team",
        leads: 65,
        performance: 84,
        status: "Away",
        avatar: "RK"
    },
    {
        id: 5,
        name: "Amit Patel",
        role: "Marketing Manager",
        team: "Marketing Team",
        leads: 58,
        performance: 78,
        status: "Active",
        avatar: "AP"
    },
    {
        id: 6,
        name: "Sneha Sharma",
        role: "Developer",
        team: "Development Team",
        leads: 72,
        performance: 90,
        status: "Inactive",
        avatar: "SS"
    }
];


function TeamMember() {

    const [showCreateMember, setShowCreateMember] = useState(false);


    return (

        <div className="w-full min-h-screen bg-white pl-6 sm:pl-8 lg:pl-10 pt-6 sm:pt-8 lg:pt-10">

            {/* =================================
                PAGE HEADER
            ================================== */}

            <div className="flex items-start justify-between pt-3">

                <div>

                    <h1 className="text-[27px] font-semibold text-[#111]">
                        Team Members
                    </h1>

                    <p className="mt-1 text-[13px] text-[#444]">
                        View and manage all the teams members.
                    </p>

                </div>


                {/* Create Team Member Button */}

                <button
                    type="button"
                    onClick={() => setShowCreateMember(true)}
                    className="
                        flex
                        items-center
                        gap-2
                        bg-[#4b397b]
                        text-white
                        px-5
                        py-3
                        rounded-md
                        text-sm
                        font-medium
                        hover:bg-[#3f315f]
                        transition
                        duration-200
                        cursor-pointer
                    "
                >

                    + Create Team Member

                </button>

            </div>


            {/* =================================
                TABLE CONTAINER
            ================================== */}

            <div
                className="
                    mt-4
                    bg-white
                    border
                    border-[#d0d0d0]
                    rounded-md
                    shadow-sm
                    overflow-hidden
                "
            >

                {/* =================================
                    FILTER / SEARCH AREA
                ================================== */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        p-2
                        border-b
                        border-[#d0d0d0]
                    "
                >

                    {/* Search */}

                    <div
                        className="
                            flex
                            items-center
                            border
                            border-[#bdbdbd]
                            rounded
                            h-[31px]
                            w-[165px]
                            px-2
                        "
                    >

                        <Search
                            size={15}
                            className="text-gray-500"
                        />

                        <input
                            type="text"
                            placeholder="Search Members..."
                            className="
                                w-full
                                outline-none
                                border-none
                                text-[11px]
                                ml-2
                                text-gray-700
                            "
                        />

                    </div>


                    {/* Filters */}

                    <div className="flex items-center gap-2">

                        {/* Team */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border
                                border-[#bdbdbd]
                                rounded
                                h-[31px]
                                w-[122px]
                                px-2
                                text-[11px]
                                text-gray-700
                            "
                        >

                            <span>
                                All Teams
                            </span>

                            <ChevronDown size={15} />

                        </div>


                        {/* Role */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                border
                                border-[#bdbdbd]
                                rounded
                                h-[31px]
                                w-[122px]
                                px-2
                                text-[11px]
                                text-gray-700
                            "
                        >

                            <span>
                                All Roles
                            </span>

                            <ChevronDown size={15} />

                        </div>


                        {/* Filter button */}

                        <button
                            className="
                                w-[31px]
                                h-[31px]
                                flex
                                items-center
                                justify-center
                                border
                                border-[#bdbdbd]
                                rounded
                                hover:bg-gray-100
                            "
                        >

                            <SlidersHorizontal
                                size={17}
                            />

                        </button>

                    </div>

                </div>


                {/* =================================
                    TABLE
                ================================== */}

                <div className="overflow-x-auto">

                    <table className="w-full border-collapse">

                        {/* Table Header */}

                        <thead>

                            <tr className="bg-[#eeeeee]">

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Member
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Role
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Team
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Leads
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Performance
                                </th>

                                <th className="text-left px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Status
                                </th>

                                <th className="text-center px-4 py-3 text-[12px] font-medium text-[#333]">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        {/* Table Body */}

                        <tbody>

                            {members.map((member) => (

                                <tr
                                    key={member.id}
                                    className="
                                        border-t
                                        border-[#cfcfcf]
                                        hover:bg-gray-50
                                    "
                                >

                                    {/* Member */}

                                    <td className="px-4 py-3">

                                        <div className="flex items-center gap-3">

                                            <div
                                                className="
                                                    w-[22px]
                                                    h-[22px]
                                                    rounded-full
                                                    bg-gray-300
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-[7px]
                                                    font-semibold
                                                    text-gray-700
                                                "
                                            >
                                                {member.avatar}
                                            </div>

                                            <span className="text-[12px] text-[#333]">
                                                {member.name}
                                            </span>

                                        </div>

                                    </td>


                                    {/* Role */}

                                    <td className="px-4 py-3 text-[12px] text-[#333]">
                                        {member.role}
                                    </td>


                                    {/* Team */}

                                    <td className="px-4 py-3 text-[12px] text-[#333]">
                                        {member.team}
                                    </td>


                                    {/* Leads */}

                                    <td className="px-4 py-3 text-[12px] text-[#333]">
                                        {member.leads}
                                    </td>


                                    {/* Performance */}

                                    <td className="px-4 py-3">

                                        <div className="w-[82px]">

                                            <div className="text-[12px] text-[#333] mb-1">
                                                {member.performance}%
                                            </div>

                                            <div
                                                className="
                                                    w-full
                                                    h-[5px]
                                                    bg-gray-300
                                                    rounded-full
                                                    overflow-hidden
                                                "
                                            >

                                                <div
                                                    className="
                                                        h-full
                                                        bg-green-500
                                                        rounded-full
                                                    "
                                                    style={{
                                                        width: `${member.performance}%`
                                                    }}
                                                />

                                            </div>

                                        </div>

                                    </td>


                                    {/* Status */}

                                    <td className="px-4 py-3">

                                        <span
                                            className={`
                                                inline-block
                                                px-2
                                                py-1
                                                rounded
                                                text-[9px]
                                                font-medium
                                                ${
                                                    member.status === "Active"
                                                        ? "bg-green-100 text-green-600"
                                                        : member.status === "Away"
                                                        ? "bg-orange-100 text-orange-500"
                                                        : "bg-red-100 text-red-500"
                                                }
                                            `}
                                        >
                                            {member.status}
                                        </span>

                                    </td>


                                    {/* Action */}

                                    <td className="px-4 py-3 text-center">

                                        <button
                                            className="
                                                text-gray-700
                                                hover:text-black
                                            "
                                        >

                                            <MoreVertical
                                                size={18}
                                            />

                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* =================================
                    PAGINATION
                ================================== */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-5
                        py-2
                        border-t
                        border-[#d0d0d0]
                    "
                >

                    {/* Result count */}

                    <p className="text-[11px] text-[#444]">
                        Showing 1 to 7 of 37 results
                    </p>


                    {/* Pages */}

                    <div className="flex items-center gap-5">

                        <button>

                            <ChevronLeft
                                size={17}
                                className="text-gray-700"
                            />

                        </button>


                        <button
                            className="
                                w-6
                                h-6
                                rounded
                                bg-[#8b3df5]
                                text-white
                                text-[11px]
                            "
                        >
                            1
                        </button>


                        <button className="text-[11px]">
                            2
                        </button>


                        <button className="text-[11px]">
                            3
                        </button>


                        <span className="text-[11px]">
                            ...
                        </span>


                        <button className="text-[11px]">
                            6
                        </button>


                        <button>

                            <ChevronRight
                                size={17}
                                className="text-gray-700"
                            />

                        </button>

                    </div>


                    {/* Rows per page */}

                    <button
                        className="
                            flex
                            items-center
                            gap-2
                            border
                            border-gray-300
                            rounded
                            px-3
                            py-2
                            text-[11px]
                        "
                    >

                        10 / Page

                        <ChevronDown size={14} />

                    </button>

                </div>

            </div>


            {/* =================================
                CREATE TEAM MEMBER POPUP
            ================================== */}

            {showCreateMember && (

                <CreateTeamMember
                    onClose={() => setShowCreateMember(false)}
                />

            )}

        </div>

    );
}


export default TeamMember;
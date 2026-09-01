import React from "react";
import { useNavigate } from "react-router-dom";

import {
    Megaphone,
    BarChart3,
    PenTool,
    Headphones,
    Code2,
    MoreVertical,
    Plus
} from "lucide-react";


const teams = [
    {
        id: 1,
        name: "Sales Team",
        members: 15,
        activeProjects: 32,
        performance: 88,
        icon: Megaphone,
        iconBg: "bg-purple-200",
    },
    {
        id: 2,
        name: "Marketing Team",
        members: 10,
        activeProjects: 18,
        performance: 76,
        icon: BarChart3,
        iconBg: "bg-blue-200",
    },
    {
        id: 3,
        name: "Design Team",
        members: 12,
        activeProjects: 28,
        performance: 84,
        icon: PenTool,
        iconBg: "bg-green-200",
    },
    {
        id: 4,
        name: "Support Team",
        members: 8,
        activeProjects: 12,
        performance: 82,
        icon: Headphones,
        iconBg: "bg-yellow-200",
    },
    {
        id: 5,
        name: "Development Team",
        members: 20,
        activeProjects: 26,
        performance: 90,
        icon: Code2,
        iconBg: "bg-purple-200",
    }
];


function Teams() {

    const navigate = useNavigate();


    return (

        <div className="w-full min-h-screen bg-white">

            {/* =========================
                PAGE HEADER
            ========================== */}

            <div className="
                flex
                flex-col
                sm:flex-row
                items-start
                sm:items-center
                justify-between
                gap-4
                pt-3
            ">

                <div>

                    <h1 className="text-[27px] font-semibold text-black">
                        Teams
                    </h1>

                    <p className="mt-1 text-[13px] text-black">
                        Manage all your teams and performance.
                    </p>

                </div>


                {/* Create Team */}

                <button
                    className="
                        flex
                        items-center
                        justify-center
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
                        w-full
                        sm:w-auto
                    "
                >

                    <Plus size={17} />

                    Create Team

                </button>

            </div>


            {/* =========================
                ALL TEAMS BUTTON
            ========================== */}

            <div className="mt-6">

                <button
                    className="
                        flex
                        items-center
                        justify-center
                        gap-3
                        bg-[#4b397b]
                        text-white
                        px-5
                        py-3
                        rounded-md
                        text-sm
                        font-medium
                    "
                >

                    All Teams

                    <span
                        className="
                            flex
                            items-center
                            justify-center
                            w-6
                            h-6
                            rounded-full
                            bg-white
                            text-[#4b397b]
                            font-semibold
                        "
                    >
                        5
                    </span>

                </button>

            </div>


            {/* =========================
                TEAM CARDS
            ========================== */}

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-4
                    mt-7
                "
            >

                {teams.map((team) => {

                    const TeamIcon = team.icon;

                    return (

                        <div
                            key={team.id}
                            className="
                                bg-white
                                border
                                border-[#cfcfcf]
                                p-4
                                min-h-[200px]
                                hover:shadow-md
                                transition
                                duration-200
                                min-w-0
                            "
                        >

                            {/* Team Information */}

                            <div className="
                                flex
                                items-center
                                gap-4
                                min-w-0
                            ">

                                {/* Icon */}

                                <div
                                    className={`
                                        w-14
                                        h-14
                                        rounded-full
                                        ${team.iconBg}
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                    `}
                                >

                                    <TeamIcon
                                        size={30}
                                        className="text-[#111]"
                                    />

                                </div>


                                {/* Team Name */}

                                <div className="min-w-0">

                                    <h2 className="
                                        text-[18px]
                                        font-medium
                                        text-[#222]
                                        break-words
                                    ">
                                        {team.name}
                                    </h2>

                                    <p className="text-[12px] text-[#333] mt-1">
                                        {team.members} Members
                                    </p>

                                </div>

                            </div>


                            {/* Members */}

                            <div className="flex items-center mt-4">

                                <div className="flex -space-x-1">

                                    <div className="w-7 h-7 rounded-full bg-[#e8b08c] border-2 border-white flex items-center justify-center text-[8px]">
                                        A
                                    </div>

                                    <div className="w-7 h-7 rounded-full bg-[#d8b090] border-2 border-white flex items-center justify-center text-[8px]">
                                        R
                                    </div>

                                    <div className="w-7 h-7 rounded-full bg-[#8d8d8d] border-2 border-white flex items-center justify-center text-[8px] text-white">
                                        K
                                    </div>

                                    <div className="w-7 h-7 rounded-full bg-[#e6b4c0] border-2 border-white flex items-center justify-center text-[8px]">
                                        P
                                    </div>

                                    <div className="w-7 h-7 rounded-full bg-[#777] border-2 border-white flex items-center justify-center text-[8px] text-white">
                                        N
                                    </div>

                                </div>


                                <span
                                    className="
                                        ml-2
                                        w-7
                                        h-7
                                        rounded-full
                                        bg-gray-200
                                        flex
                                        items-center
                                        justify-center
                                        text-[9px]
                                        text-gray-700
                                        shrink-0
                                    "
                                >
                                    +8
                                </span>

                            </div>


                            {/* Divider */}

                            <div className="border-t border-gray-300 mt-4"></div>


                            {/* Projects and Performance */}

                            <div className="
                                flex
                                flex-wrap
                                items-center
                                gap-y-2
                                mt-3
                                text-[12px]
                            ">

                                <span className="text-[18px] text-[#333]">
                                    {team.activeProjects}
                                </span>

                                <span className="ml-2 text-[#333]">
                                    Active Projects
                                </span>


                                <span className="
                                    mx-3
                                    text-gray-300
                                    hidden
                                    sm:inline
                                ">
                                    |
                                </span>


                                <span className="text-[16px] text-green-600 font-medium">
                                    {team.performance}%
                                </span>

                                <span className="ml-2 text-[#333]">
                                    Performance
                                </span>

                            </div>


                            {/* Bottom Buttons */}

                            <div className="
                                flex
                                flex-col
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                                gap-3
                                mt-4
                            ">

                                {/* View Team and Team Members */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    w-full
                                    sm:w-auto
                                ">

                                    {/* View Team */}

                                    <button
                                        className="
                                            border
                                            border-gray-300
                                            bg-white
                                            px-4
                                            py-2
                                            rounded
                                            text-[11px]
                                            text-[#4b397b]
                                            font-semibold
                                            hover:bg-gray-50
                                            transition
                                        "
                                    >

                                        View Team

                                    </button>


                                    {/* Team Members */}

                                    <button
                                        onClick={() => navigate("/team-member")}
                                        className="
                                            border
                                            border-gray-300
                                            bg-white
                                            px-4
                                            py-2
                                            rounded
                                            text-[11px]
                                            text-[#4b397b]
                                            font-semibold
                                            hover:bg-gray-50
                                            transition
                                        "
                                    >

                                        Team Members

                                    </button>

                                </div>


                                {/* More Options */}

                                <button
                                    className="
                                        text-gray-700
                                        hover:text-black
                                        transition
                                        self-end
                                        sm:self-auto
                                    "
                                >

                                    <MoreVertical size={20} />

                                </button>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );
}


export default Teams;
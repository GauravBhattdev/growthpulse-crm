import React, { useEffect, useState } from "react";
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

import CreateTeam from "../../components/CreateTeam/CreateTeam";
import Loader from "../../components/Loader/Loader";


const teams = [
    {
        id: 1,
        name: "Sales Team",
        members: 15,
        activeProjects: 32,
        performance: 88,
        icon: Megaphone,
        iconBg: "bg-purple-200 dark:bg-purple-500/20",
    },
    {
        id: 2,
        name: "Marketing Team",
        members: 10,
        activeProjects: 18,
        performance: 76,
        icon: BarChart3,
        iconBg: "bg-blue-200 dark:bg-blue-500/20",
    },
    {
        id: 3,
        name: "Design Team",
        members: 12,
        activeProjects: 28,
        performance: 84,
        icon: PenTool,
        iconBg: "bg-green-200 dark:bg-green-500/20",
    },
    {
        id: 4,
        name: "Support Team",
        members: 8,
        activeProjects: 12,
        performance: 82,
        icon: Headphones,
        iconBg: "bg-yellow-200 dark:bg-yellow-500/20",
    },
    {
        id: 5,
        name: "Development Team",
        members: 20,
        activeProjects: 26,
        performance: 90,
        icon: Code2,
        iconBg: "bg-purple-200 dark:bg-purple-500/20",
    }
];


function Teams() {

    const navigate = useNavigate();

    const [showCreateTeam, setShowCreateTeam] = useState(false);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    if (loading) {

        return <Loader text="Loading teams..." />;

    }


    return (

        <div className="
            w-full
            min-h-screen
            bg-theme-page
            text-theme-text
            pl-6
            sm:pl-8
            lg:pl-10
            pr-4
            sm:pr-6
            lg:pr-8
            pt-4
            sm:pt-5
            lg:pt-6
            transition-colors
            duration-300
        ">

            {/* =========================
                PAGE HEADER
            ========================== */}

            <div
                className="
                    flex
                    flex-col
                    sm:flex-row
                    items-start
                    sm:items-center
                    justify-between
                    gap-4
                "
            >

                <div>

                    <h1 className="
                        text-[27px]
                        font-semibold
                        text-theme-text
                    ">
                        Teams
                    </h1>

                    <p className="
                        mt-1
                        text-[13px]
                        text-theme-text-secondary
                    ">
                        Manage all your teams and performance.
                    </p>

                </div>


                {/* Create Team */}

                <button
                    type="button"
                    onClick={() => setShowCreateTeam(true)}
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
                        cursor-pointer
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
                    type="button"
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
                                bg-theme-surface
                                border
                                border-theme-border-light
                                p-4
                                min-h-[200px]
                                hover:shadow-md
                                transition
                                duration-200
                                min-w-0
                            "
                        >

                            {/* Team Information */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    min-w-0
                                "
                            >

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
                                        className="text-theme-text"
                                    />

                                </div>


                                {/* Team Name */}

                                <div className="min-w-0">

                                    <h2
                                        className="
                                            text-[18px]
                                            font-medium
                                            text-theme-text
                                            break-words
                                        "
                                    >
                                        {team.name}
                                    </h2>

                                    <p className="
                                        text-[12px]
                                        text-theme-text-secondary
                                        mt-1
                                    ">
                                        {team.members} Members
                                    </p>

                                </div>

                            </div>


                            {/* Members */}

                            <div className="flex items-center mt-4">

                                <div className="flex -space-x-1">

                                    <div
                                        className="
                                            w-7
                                            h-7
                                            rounded-full
                                            bg-[#e8b08c]
                                            border-2
                                            border-white
                                            dark:border-[#160d27]
                                            flex
                                            items-center
                                            justify-center
                                            text-[8px]
                                        "
                                    >
                                        A
                                    </div>

                                    <div
                                        className="
                                            w-7
                                            h-7
                                            rounded-full
                                            bg-[#d8b090]
                                            border-2
                                            border-white
                                            dark:border-[#160d27]
                                            flex
                                            items-center
                                            justify-center
                                            text-[8px]
                                        "
                                    >
                                        R
                                    </div>

                                    <div
                                        className="
                                            w-7
                                            h-7
                                            rounded-full
                                            bg-[#8d8d8d]
                                            border-2
                                            border-white
                                            dark:border-[#160d27]
                                            flex
                                            items-center
                                            justify-center
                                            text-[8px]
                                            text-white
                                        "
                                    >
                                        K
                                    </div>

                                    <div
                                        className="
                                            w-7
                                            h-7
                                            rounded-full
                                            bg-[#e6b4c0]
                                            border-2
                                            border-white
                                            dark:border-[#160d27]
                                            flex
                                            items-center
                                            justify-center
                                            text-[8px]
                                        "
                                    >
                                        P
                                    </div>

                                    <div
                                        className="
                                            w-7
                                            h-7
                                            rounded-full
                                            bg-[#777]
                                            border-2
                                            border-white
                                            dark:border-[#160d27]
                                            flex
                                            items-center
                                            justify-center
                                            text-[8px]
                                            text-white
                                        "
                                    >
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
                                        dark:bg-gray-700
                                        flex
                                        items-center
                                        justify-center
                                        text-[9px]
                                        text-gray-700
                                        dark:text-gray-200
                                        shrink-0
                                    "
                                >
                                    +8
                                </span>

                            </div>


                            {/* Divider */}

                            <div className="
                                border-t
                                border-theme-border-light
                                mt-4
                            "></div>


                            {/* Projects and Performance */}

                            <div
                                className="
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-y-2
                                    mt-3
                                    text-[12px]
                                "
                            >

                                <span className="
                                    text-[18px]
                                    text-theme-text
                                ">
                                    {team.activeProjects}
                                </span>

                                <span className="
                                    ml-2
                                    text-theme-text-secondary
                                ">
                                    Active Projects
                                </span>


                                <span
                                    className="
                                        mx-3
                                        text-theme-text-muted
                                        hidden
                                        sm:inline
                                    "
                                >
                                    |
                                </span>


                                <span
                                    className="
                                        text-[16px]
                                        text-green-600
                                        dark:text-green-400
                                        font-medium
                                    "
                                >
                                    {team.performance}%
                                </span>

                                <span className="
                                    ml-2
                                    text-theme-text-secondary
                                ">
                                    Performance
                                </span>

                            </div>


                            {/* Bottom Buttons */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    gap-3
                                    mt-4
                                "
                            >

                                {/* View Team and Team Members */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        w-full
                                        sm:w-auto
                                    "
                                >

                                    {/* View Team */}

                                    <button
                                        type="button"
                                        className="
                                            border
                                            border-theme-border-light
                                            bg-theme-surface
                                            px-4
                                            py-2
                                            rounded
                                            text-[11px]
                                            text-primary
                                            font-semibold
                                            hover:bg-theme-surface-secondary
                                            transition
                                        "
                                    >

                                        View Team

                                    </button>


                                    {/* Team Members */}

                                    <button
                                        type="button"
                                        onClick={() => navigate("/team-member")}
                                        className="
                                            border
                                            border-theme-border-light
                                            bg-theme-surface
                                            px-4
                                            py-2
                                            rounded
                                            text-[11px]
                                            text-primary
                                            font-semibold
                                            hover:bg-theme-surface-secondary
                                            transition
                                        "
                                    >

                                        Team Members

                                    </button>

                                </div>


                                {/* More Options */}

                                <button
                                    type="button"
                                    className="
                                        text-theme-text-secondary
                                        hover:text-theme-text
                                        hover:bg-theme-surface-secondary
                                        rounded-md
                                        p-1
                                        transition
                                        self-end
                                        sm:self-auto
                                    "
                                    title="More Options"
                                >

                                    <MoreVertical size={20} />

                                </button>

                            </div>

                        </div>

                    );

                })}

            </div>


            {/* =========================
                CREATE TEAM POPUP
            ========================== */}

            {showCreateTeam && (

                <CreateTeam
                    onClose={() => setShowCreateTeam(false)}
                />

            )}

        </div>

    );

}


export default Teams;

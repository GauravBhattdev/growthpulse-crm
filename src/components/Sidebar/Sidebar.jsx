import React from "react";
import { NavLink } from "react-router-dom";

import {
    LayoutDashboard,
    Users,
    UserPlus,
    FileText,
    CreditCard,
    Ticket,
    Building2,
    Settings,
    HelpCircle
} from "lucide-react";

function Sidebar() {

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard
        },
        {
            name: "Teams",
            path: "/teams",
            icon: Users
        },
        {
            name: "Leads",
            path: "/leads",
            icon: UserPlus
        },
        {
            name: "Invoice",
            path: "/invoice",
            icon: FileText
        },
        {
            name: "Billing",
            path: "/billing",
            icon: CreditCard
        },
        {
            name: "Support Tickets",
            path: "/support-tickets",
            icon: Ticket
        },
        {
            name: "Organisation",
            path: "/organisation",
            icon: Building2
        }
    ];

    return (

        <aside
            className="
                fixed
                top-0
                left-0
                w-[70px]
                lg:w-[240px]
                h-screen
                bg-[#160d27]
                text-white
                z-50
                overflow-y-auto
            "
        >

            {/* =================================================
                LOGO
            ================================================= */}

            <h2
                className="
                    text-2xl
                    font-bold
                    py-5
                    m-0
                    text-center
                    lg:text-left
                    px-3
                    lg:px-7
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                "
            >

                {/* Desktop Logo */}

                <span className="hidden lg:inline">
                    GrowthPulse
                </span>


                {/* Mobile Logo */}

                <span className="lg:hidden">
                    G
                </span>

            </h2>


            {/* =================================================
                MAIN NAVIGATION
            ================================================= */}

            <nav>

                <ul className="list-none p-0 m-0">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <li key={item.path}>

                                <NavLink
                                    to={item.path}
                                    title={item.name}
                                    className={({ isActive }) =>
                                        `
                                        group

                                        flex
                                        items-center
                                        gap-3
                                        no-underline
                                        text-white

                                        px-3
                                        lg:px-5

                                        py-3

                                        mx-2
                                        lg:mx-3

                                        my-1

                                        rounded-md

                                        transition-all
                                        duration-300
                                        ease-out

                                        justify-center
                                        lg:justify-start

                                        hover:translate-x-1
                                        hover:shadow-md

                                        ${
                                            isActive
                                                ? `
                                                    bg-[#3f315f]
                                                    shadow-[0_4px_12px_rgba(0,0,0,0.20)]
                                                `
                                                : `
                                                    hover:bg-[#2b1c43]
                                                `
                                        }
                                        `
                                    }
                                >

                                    {/* =================================================
                                        ICON
                                    ================================================= */}

                                    <Icon
                                        size={19}
                                        strokeWidth={2}
                                        className="
                                            shrink-0

                                            transition-all
                                            duration-300
                                            ease-out

                                            group-hover:-translate-y-1
                                            group-hover:scale-110
                                            group-hover:rotate-2
                                        "
                                    />


                                    {/* =================================================
                                        MENU TEXT
                                    ================================================= */}

                                    <span
                                        className="
                                            hidden
                                            lg:inline

                                            transition-all
                                            duration-300

                                            group-hover:translate-x-[2px]
                                        "
                                    >

                                        {item.name}

                                    </span>

                                </NavLink>

                            </li>

                        );

                    })}

                </ul>

            </nav>


            {/* =================================================
                BOTTOM NAVIGATION
            ================================================= */}

            <div
                className="
                    absolute
                    bottom-5
                    w-full
                "
            >

                <ul className="list-none p-0 m-0">

                    {/* =================================================
                        SETTINGS
                    ================================================= */}

                    <li>

                        <NavLink
                            to="/settings"
                            title="Settings"
                            className={({ isActive }) =>
                                `
                                group

                                flex
                                items-center
                                gap-3
                                no-underline
                                text-white

                                px-3
                                lg:px-5

                                py-3

                                mx-2
                                lg:mx-3

                                my-1

                                rounded-md

                                transition-all
                                duration-300
                                ease-out

                                justify-center
                                lg:justify-start

                                hover:translate-x-1
                                hover:shadow-md

                                ${
                                    isActive
                                        ? `
                                            bg-[#3f315f]
                                            shadow-[0_4px_12px_rgba(0,0,0,0.20)]
                                        `
                                        : `
                                            hover:bg-[#2b1c43]
                                        `
                                }
                                `
                            }
                        >

                            <Settings
                                size={19}
                                strokeWidth={2}
                                className="
                                    shrink-0

                                    transition-all
                                    duration-300
                                    ease-out

                                    group-hover:-translate-y-1
                                    group-hover:scale-110
                                    group-hover:rotate-6
                                "
                            />

                            <span
                                className="
                                    hidden
                                    lg:inline

                                    transition-all
                                    duration-300

                                    group-hover:translate-x-[2px]
                                "
                            >
                                Settings
                            </span>

                        </NavLink>

                    </li>


                    {/* =================================================
                        HELP & SUPPORT
                    ================================================= */}

                    <li>

                        <NavLink
                            to="/help-support"
                            title="Help & Support"
                            className={({ isActive }) =>
                                `
                                group

                                flex
                                items-center
                                gap-3
                                no-underline
                                text-white

                                px-3
                                lg:px-5

                                py-3

                                mx-2
                                lg:mx-3

                                my-1

                                rounded-md

                                transition-all
                                duration-300
                                ease-out

                                justify-center
                                lg:justify-start

                                hover:translate-x-1
                                hover:shadow-md

                                ${
                                    isActive
                                        ? `
                                            bg-[#3f315f]
                                            shadow-[0_4px_12px_rgba(0,0,0,0.20)]
                                        `
                                        : `
                                            hover:bg-[#2b1c43]
                                        `
                                }
                                `
                            }
                        >

                            <HelpCircle
                                size={19}
                                strokeWidth={2}
                                className="
                                    shrink-0

                                    transition-all
                                    duration-300
                                    ease-out

                                    group-hover:-translate-y-1
                                    group-hover:scale-110
                                    group-hover:rotate-2
                                "
                            />

                            <span
                                className="
                                    hidden
                                    lg:inline

                                    transition-all
                                    duration-300

                                    group-hover:translate-x-[2px]
                                "
                            >
                                Help & Support
                            </span>

                        </NavLink>

                    </li>

                </ul>

            </div>

        </aside>

    );
}

export default Sidebar;
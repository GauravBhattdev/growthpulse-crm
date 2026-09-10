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
    HelpCircle,
    X
} from "lucide-react";


function Sidebar({
    isSidebarOpen,
    setIsSidebarOpen
}) {

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


    const handleNavigation = () => {
        setIsSidebarOpen(false);
    };


    const navLinkClass = ({ isActive }) =>
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

        justify-start

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
        `;


    return (

        <aside
            className={`
                fixed
                top-0
                left-0
                w-[240px]
                h-screen
                bg-[#160d27]
                text-white
                z-50
                overflow-y-auto

                transform
                transition-transform
                duration-300
                ease-in-out

                lg:translate-x-0

                ${
                    isSidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }
            `}
        >

            {/* =================================================
                LOGO
            ================================================= */}

            <div className="
                flex
                items-center
                justify-between
                px-5
                lg:px-7
                py-5
            ">

                <h2
                    className="
                        text-2xl
                        font-bold
                        m-0
                        cursor-pointer
                        transition-all
                        duration-300
                        hover:scale-[1.03]
                    "
                >
                    GrowthPulse
                </h2>


                {/* Mobile Close Button */}

                <button
                    type="button"
                    onClick={() => setIsSidebarOpen(false)}
                    className="
                        lg:hidden
                        p-1
                        rounded-md
                        hover:bg-[#2b1c43]
                    "
                    aria-label="Close menu"
                >

                    <X size={22} />

                </button>

            </div>


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
                                    onClick={handleNavigation}
                                    className={navLinkClass}
                                >

                                    {/* Icon */}

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


                                    {/* Menu Text */}

                                    <span className="
                                        transition-all
                                        duration-300
                                        group-hover:translate-x-[2px]
                                    ">
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
                            onClick={handleNavigation}
                            className={navLinkClass}
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

                            <span>
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
                            onClick={handleNavigation}
                            className={navLinkClass}
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

                            <span>
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
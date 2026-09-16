import React from "react";

import {
    LayoutDashboard,
    Users,
    UserRound,
    FileText,
    CreditCard,
    Headphones,
    Building2,
    Settings,
    HelpCircle,
    Menu,
    X,
} from "lucide-react";

import { NavLink } from "react-router-dom";


function Sidebar({
    isSidebarOpen,
    setIsSidebarOpen,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
}) {

    // =================================================
    // MAIN MENU
    // =================================================

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Teams",
            path: "/teams",
            icon: Users,
        },
        {
            name: "Leads",
            path: "/leads",
            icon: UserRound,
        },
        {
            name: "Invoice",
            path: "/invoice",
            icon: FileText,
        },
        {
            name: "Billing",
            path: "/billing",
            icon: CreditCard,
        },
        {
            name: "Support Tickets",
            path: "/support-tickets",
            icon: Headphones,
        },
        {
            name: "Organisation",
            path: "/organisation",
            icon: Building2,
        },
    ];


    // =================================================
    // BOTTOM MENU
    // =================================================

    const bottomItems = [
        {
            name: "Settings",
            path: "/settings",
            icon: Settings,
        },
        {
            name: "Help & Support",
            path: "/help-support",
            icon: HelpCircle,
        },
    ];


    // =================================================
    // MOBILE NAVIGATION
    // =================================================

    const handleMobileNavigation = () => {

        if (window.innerWidth < 1024) {
            setIsSidebarOpen(false);
        }

    };


    return (

        <aside
            className={`
                fixed
                top-0
                left-0
                z-50

                h-screen
                w-[280px]

                bg-theme-surface

                border-r
                border-theme-border

                flex
                flex-col

                overflow-visible

                transition-all
                duration-300
                ease-in-out

                ${
                    isSidebarCollapsed
                        ? "lg:w-[78px]"
                        : "lg:w-[240px]"
                }

                ${
                    isSidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }

                lg:translate-x-0
            `}
        >

            {/* =================================================
                LOGO HEADER
            ================================================= */}

            <div
                className="
                    h-[66px]
                    shrink-0

                    flex
                    items-center

                    px-4

                    border-b
                    border-theme-border
                "
            >

                <div
                    className={`
                        flex
                        items-center

                        w-full

                        ${
                            isSidebarCollapsed
                                ? "lg:justify-center"
                                : "justify-between"
                        }
                    `}
                >

                    {/* LOGO */}

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <div
                            className="
                                w-9
                                h-9
                                shrink-0

                                rounded-lg

                                bg-primary

                                flex
                                items-center
                                justify-center

                                text-white

                                font-bold
                                text-sm
                            "
                        >
                            G
                        </div>


                        {!isSidebarCollapsed && (

                            <span
                                className="
                                    text-theme-text

                                    font-semibold
                                    text-lg

                                    whitespace-nowrap

                                    hidden
                                    lg:block
                                "
                            >
                                GrowthPulse
                            </span>

                        )}

                    </div>


                    {/* MOBILE CLOSE */}

                    <button
                        type="button"

                        onClick={() =>
                            setIsSidebarOpen(false)
                        }

                        className="
                            lg:hidden

                            w-9
                            h-9

                            rounded-lg

                            flex
                            items-center
                            justify-center

                            text-theme-text-secondary

                            hover:bg-theme-surface-secondary
                            hover:text-theme-text

                            transition
                            duration-200
                        "
                    >

                        <X size={20} />

                    </button>

                </div>

            </div>


            {/* =================================================
                HAMBURGER
                ONLY ICON - NO "COLLAPSE MENU" TEXT
            ================================================= */}

            <div
                className="
                    px-4
                    pt-4
                    pb-2

                    hidden
                    lg:block
                "
            >

                <button
                    type="button"

                    onClick={() =>
                        setIsSidebarCollapsed(
                            !isSidebarCollapsed
                        )
                    }

                    className="
                        w-10
                        h-10

                        rounded-lg

                        flex
                        items-center
                        justify-center

                        text-theme-text-secondary

                        hover:bg-theme-surface-secondary
                        hover:text-theme-text

                        transition-all
                        duration-200
                    "
                >

                    <Menu
                        size={21}
                        strokeWidth={2}
                    />

                </button>

            </div>


            {/* =================================================
                MAIN NAVIGATION
            ================================================= */}

            <nav
                className="
                    flex-1

                    px-3
                    py-3

                    overflow-visible
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        gap-1
                    "
                >

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink
                                key={item.path}

                                to={item.path}

                                onClick={
                                    handleMobileNavigation
                                }

                                className={({
                                    isActive,
                                }) => `
                                    group
                                    relative

                                    w-full
                                    h-11

                                    rounded-lg

                                    flex
                                    items-center

                                    transition-all
                                    duration-200

                                    ${
                                        isSidebarCollapsed
                                            ? "lg:justify-center"
                                            : "justify-start px-3 gap-3"
                                    }

                                    ${
                                        isActive
                                            ? `
                                                bg-theme-surface-secondary
                                                text-primary
                                            `
                                            : `
                                                text-theme-text-secondary

                                                hover:bg-theme-surface-secondary
                                                hover:text-theme-text
                                            `
                                    }
                                `}
                            >

                                {/* ICON */}

                                <Icon
                                    size={20}
                                    strokeWidth={2}

                                    className="
                                        shrink-0
                                    "
                                />


                                {/* MENU NAME */}

                                {!isSidebarCollapsed && (

                                    <span
                                        className="
                                            text-sm
                                            font-medium

                                            whitespace-nowrap

                                            hidden
                                            lg:block
                                        "
                                    >
                                        {item.name}
                                    </span>

                                )}


                                {/* =================================================
                                    COLLAPSED TOOLTIP
                                ================================================= */}

                                {isSidebarCollapsed && (

                                    <div
                                        className="
                                            hidden
                                            lg:block

                                            absolute

                                            left-[70px]
                                            top-1/2

                                            -translate-y-1/2

                                            z-[9999]

                                            whitespace-nowrap

                                            px-3
                                            py-2

                                            rounded-lg

                                            bg-theme-surface-secondary

                                            border
                                            border-theme-border-light

                                            text-theme-text

                                            text-sm
                                            font-medium

                                            shadow-lg

                                            opacity-0
                                            invisible

                                            translate-x-[-4px]

                                            group-hover:opacity-100
                                            group-hover:visible
                                            group-hover:translate-x-0

                                            transition-all
                                            duration-200

                                            pointer-events-none
                                        "
                                    >
                                        {item.name}
                                    </div>

                                )}

                            </NavLink>

                        );

                    })}

                </div>

            </nav>


            {/* =================================================
                BOTTOM MENU
            ================================================= */}

            <div
                className="
                    shrink-0

                    px-3
                    pb-4
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        gap-1
                    "
                >

                    {bottomItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink
                                key={item.path}

                                to={item.path}

                                onClick={
                                    handleMobileNavigation
                                }

                                className={({
                                    isActive,
                                }) => `
                                    group
                                    relative

                                    w-full
                                    h-11

                                    rounded-lg

                                    flex
                                    items-center

                                    transition-all
                                    duration-200

                                    ${
                                        isSidebarCollapsed
                                            ? "lg:justify-center"
                                            : "justify-start px-3 gap-3"
                                    }

                                    ${
                                        isActive
                                            ? `
                                                bg-theme-surface-secondary
                                                text-primary
                                            `
                                            : `
                                                text-theme-text-secondary

                                                hover:bg-theme-surface-secondary
                                                hover:text-theme-text
                                            `
                                    }
                                `}
                            >

                                <Icon
                                    size={20}
                                    strokeWidth={2}

                                    className="
                                        shrink-0
                                    "
                                />


                                {/* MENU NAME */}

                                {!isSidebarCollapsed && (

                                    <span
                                        className="
                                            text-sm
                                            font-medium

                                            whitespace-nowrap

                                            hidden
                                            lg:block
                                        "
                                    >
                                        {item.name}
                                    </span>

                                )}


                                {/* =================================================
                                    COLLAPSED TOOLTIP
                                ================================================= */}

                                {isSidebarCollapsed && (

                                    <div
                                        className="
                                            hidden
                                            lg:block

                                            absolute

                                            left-[70px]
                                            top-1/2

                                            -translate-y-1/2

                                            z-[9999]

                                            whitespace-nowrap

                                            px-3
                                            py-2

                                            rounded-lg

                                            bg-theme-surface-secondary

                                            border
                                            border-theme-border-light

                                            text-theme-text

                                            text-sm
                                            font-medium

                                            shadow-lg

                                            opacity-0
                                            invisible

                                            translate-x-[-4px]

                                            group-hover:opacity-100
                                            group-hover:visible
                                            group-hover:translate-x-0

                                            transition-all
                                            duration-200

                                            pointer-events-none
                                        "
                                    >
                                        {item.name}
                                    </div>

                                )}

                            </NavLink>

                        );

                    })}

                </div>

            </div>

        </aside>

    );

}


export default Sidebar;
import React, { useEffect, useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";


function MainLayout({ children }) {

    /* =================================================
       THEME
    ================================================= */

    const [theme, setTheme] = useState(() => {

        const savedTheme =
            localStorage.getItem("theme");

        return savedTheme || "dark";

    });


    /* =================================================
       APPLY THEME
    ================================================= */

    useEffect(() => {

        const root =
            document.documentElement;


        if (theme === "dark") {

            root.classList.add("dark");

        } else {

            root.classList.remove("dark");

        }


        localStorage.setItem(
            "theme",
            theme
        );

    }, [theme]);


    /* =================================================
       MOBILE SIDEBAR
    ================================================= */

    const [isSidebarOpen, setIsSidebarOpen] =
        useState(false);


    /* =================================================
       DESKTOP SIDEBAR
    ================================================= */

    const [isSidebarCollapsed, setIsSidebarCollapsed] =
        useState(false);


    return (

        <div
            className="
                min-h-screen
                bg-theme-page
                transition-colors
                duration-300
            "
        >

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}

                isSidebarCollapsed={isSidebarCollapsed}
                setIsSidebarCollapsed={setIsSidebarCollapsed}

                theme={theme}
            />


            {/* =================================================
                MOBILE OVERLAY
            ================================================= */}

            {isSidebarOpen && (

                <div
                    onClick={() =>
                        setIsSidebarOpen(false)
                    }

                    className="
                        fixed
                        inset-0
                        bg-black/50
                        z-40
                        lg:hidden
                    "
                />

            )}


            {/* =================================================
                MAIN AREA
            ================================================= */}

            <div
                className={`
                    min-h-screen
                    bg-theme-page

                    ml-0

                    ${
                        isSidebarCollapsed
                            ? "lg:ml-[78px]"
                            : "lg:ml-[240px]"
                    }

                    transition-all
                    duration-300
                    ease-in-out
                `}
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <Header
                    onMenuClick={() =>
                        setIsSidebarOpen(true)
                    }

                    theme={theme}

                    setTheme={setTheme}
                />


                {/* =================================================
                    PAGE CONTENT
                ================================================= */}

                <main
                    className="
                        w-full
                        max-w-full
                        overflow-x-hidden
                    "
                >

                    {children}

                </main>

            </div>

        </div>

    );

}


export default MainLayout;
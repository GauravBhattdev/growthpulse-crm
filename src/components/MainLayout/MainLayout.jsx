import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";


function MainLayout({ children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (

        <div className="min-h-screen bg-[#151026]">

            {/* Sidebar */}

            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />


            {/* Mobile Overlay */}

            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="
                        fixed
                        inset-0
                        bg-black/50
                        z-40
                        lg:hidden
                    "
                />
            )}


            {/* Main Area */}

            <div
                className="
                    min-h-screen
                    bg-[#151026]
                    ml-0
                    lg:ml-[240px]
                "
            >

                {/* Header */}

                <Header
                    onMenuClick={() => setIsSidebarOpen(true)}
                />


                {/* Page Content */}

                <main className="
                    px-3
                    sm:px-4
                    lg:px-5
                    py-4
                    w-full
                    max-w-full
                    overflow-x-hidden
                ">
                    {children}
                </main>

            </div>

        </div>

    );

}


export default MainLayout;
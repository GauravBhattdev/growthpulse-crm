import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";


function MainLayout({ children }) {

    return (

        <div className="min-h-screen bg-[#151026]">

            {/* Sidebar */}

            <Sidebar />


            {/* Main Area */}

            <div className="ml-0 lg:ml-[240px] min-h-screen bg-[#151026]">

                {/* Header */}

                <Header />


                {/* Page Content */}

                <main className="px-3 sm:px-4 lg:px-5 py-4">
                    {children}
                </main>

            </div>

        </div>

    );

}


export default MainLayout;
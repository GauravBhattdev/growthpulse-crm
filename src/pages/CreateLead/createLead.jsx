import React, { useState } from "react";

import {
    FileText,
    CloudUpload,
    Link2
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import ManualLeadForm from "./ManualLeadForm";
import ExcelUpload from "./ExcelUpload";
import ApiConnector from "./ApiConnector";


// =====================================================
// CREATE LEAD COMPONENT
// =====================================================

function CreateLead() {

    const navigate = useNavigate();


    // =====================================================
    // ACTIVE METHOD
    // =====================================================

    const [activeMethod, setActiveMethod] = useState("manual");


    // =====================================================
    // COMPONENT
    // =====================================================

    return (

        <div className="
            w-full
            min-h-screen
            bg-white
            p-4
            sm:p-6
            lg:p-8
        ">


            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div className="
                flex
                flex-col
                lg:flex-row
                lg:items-start
                lg:justify-between
                gap-5
                mb-6
            ">


                {/* =================================================
                    TITLE + BREADCRUMB
                ================================================= */}

                <div>


                    {/* TITLE */}

                    <h1 className="
                        text-2xl
                        sm:text-[27px]
                        font-semibold
                        text-[#111]
                    ">
                        Create Lead
                    </h1>


                    {/* BREADCRUMB */}

                    <div className="
                        flex
                        items-center
                        gap-3
                        mt-2
                        text-xs
                        sm:text-sm
                    ">


                        <button
                            type="button"
                            onClick={() => navigate("/leads")}
                            className="
                                text-[#8b3df5]
                                font-medium
                                hover:underline
                            "
                        >
                            Leads
                        </button>


                        <span className="text-gray-500">
                            ›
                        </span>


                        <span className="text-gray-400">
                            Create Lead
                        </span>

                    </div>

                </div>



                {/* =================================================
                    METHOD SELECTION
                ================================================= */}

                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-3
                    gap-2
                    w-full
                    lg:w-auto
                ">


                    {/* =================================================
                        MANUAL FORM
                    ================================================= */}

                    <button
                        type="button"
                        onClick={() => setActiveMethod("manual")}
                        className={`
                            relative
                            flex
                            items-center
                            gap-3
                            min-h-[60px]
                            sm:w-[170px]
                            px-3
                            py-2
                            bg-white
                            border
                            rounded-md
                            text-left
                            shadow-sm
                            transition-all
                            duration-200

                            ${
                                activeMethod === "manual"
                                    ? "border-purple-500 shadow-md"
                                    : "border-gray-300 hover:border-purple-300 hover:shadow-md"
                            }
                        `}
                    >


                        {/* RADIO */}

                        <div className="
                            w-5
                            h-5
                            rounded-full
                            border-2
                            border-purple-500
                            flex
                            items-center
                            justify-center
                            shrink-0
                        ">

                            {activeMethod === "manual" && (

                                <div className="
                                    w-2.5
                                    h-2.5
                                    rounded-full
                                    bg-[#8b3df5]
                                " />

                            )}

                        </div>


                        {/* ICON */}

                        <FileText
                            size={23}
                            className="text-[#8b3df5] shrink-0"
                        />


                        {/* TEXT */}

                        <div>

                            <p className="
                                text-sm
                                font-medium
                                text-gray-900
                            ">
                                Manual Form
                            </p>


                            <p className="
                                text-[9px]
                                leading-tight
                                text-gray-500
                                mt-0.5
                            ">
                                Lead added manually
                                <br />
                                by admin.
                            </p>

                        </div>

                    </button>



                    {/* =================================================
                        EXCEL / UPLOAD
                    ================================================= */}

                    <button
                        type="button"
                        onClick={() => setActiveMethod("upload")}
                        className={`
                            relative
                            flex
                            items-center
                            gap-3
                            min-h-[60px]
                            sm:w-[170px]
                            px-3
                            py-2
                            bg-white
                            border
                            rounded-md
                            text-left
                            shadow-sm
                            transition-all
                            duration-200

                            ${
                                activeMethod === "upload"
                                    ? "border-purple-500 shadow-md"
                                    : "border-gray-300 hover:border-purple-300 hover:shadow-md"
                            }
                        `}
                    >


                        {/* RADIO */}

                        <div className="
                            w-5
                            h-5
                            rounded-full
                            border-2
                            border-purple-500
                            flex
                            items-center
                            justify-center
                            shrink-0
                        ">

                            {activeMethod === "upload" && (

                                <div className="
                                    w-2.5
                                    h-2.5
                                    rounded-full
                                    bg-[#8b3df5]
                                " />

                            )}

                        </div>


                        {/* ICON */}

                        <CloudUpload
                            size={24}
                            className="text-green-500 shrink-0"
                        />


                        {/* TEXT */}

                        <div>

                            <p className="
                                text-sm
                                font-medium
                                text-gray-900
                            ">
                                Excel / Upload
                            </p>


                            <p className="
                                text-[9px]
                                leading-tight
                                text-gray-500
                                mt-0.5
                            ">
                                Lead received through
                                <br />
                                website form.
                            </p>

                        </div>

                    </button>



                    {/* =================================================
                        API / CONNECTOR
                    ================================================= */}

                    <button
                        type="button"
                        onClick={() => setActiveMethod("api")}
                        className={`
                            relative
                            flex
                            items-center
                            gap-3
                            min-h-[60px]
                            sm:w-[170px]
                            px-3
                            py-2
                            bg-white
                            border
                            rounded-md
                            text-left
                            shadow-sm
                            transition-all
                            duration-200

                            ${
                                activeMethod === "api"
                                    ? "border-purple-500 shadow-md"
                                    : "border-gray-300 hover:border-purple-300 hover:shadow-md"
                            }
                        `}
                    >


                        {/* RADIO */}

                        <div className="
                            w-5
                            h-5
                            rounded-full
                            border-2
                            border-purple-500
                            flex
                            items-center
                            justify-center
                            shrink-0
                        ">

                            {activeMethod === "api" && (

                                <div className="
                                    w-2.5
                                    h-2.5
                                    rounded-full
                                    bg-[#8b3df5]
                                " />

                            )}

                        </div>


                        {/* ICON */}

                        <Link2
                            size={24}
                            className="text-blue-500 shrink-0"
                        />


                        {/* TEXT */}

                        <div>

                            <p className="
                                text-sm
                                font-medium
                                text-gray-900
                            ">
                                API / Connector
                            </p>


                            <p className="
                                text-[9px]
                                leading-tight
                                text-gray-500
                                mt-0.5
                            ">
                                Lead received through
                                <br />
                                API / Connector
                            </p>

                        </div>

                    </button>

                </div>

            </div>



            {/* =================================================
                ACTIVE CONTENT
            ================================================= */}

            <div className="
                w-full
                transition-all
                duration-300
            ">


                {/* =================================================
                    MANUAL FORM
                ================================================= */}

                {activeMethod === "manual" && (

                    <ManualLeadForm />

                )}



                {/* =================================================
                    EXCEL / UPLOAD
                ================================================= */}

                {activeMethod === "upload" && (

                    <ExcelUpload />

                )}



                {/* =================================================
                    API / CONNECTOR
                ================================================= */}

                {activeMethod === "api" && (

                    <ApiConnector />

                )}

            </div>

        </div>

    );

}


export default CreateLead;
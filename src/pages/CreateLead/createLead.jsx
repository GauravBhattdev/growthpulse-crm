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


function CreateLead() {

    const navigate = useNavigate();

    const [activeMethod, setActiveMethod] = useState("manual");


    return (

        <div
            className="
                w-full
                min-h-screen

                bg-theme-page
                text-theme-text

                p-4
                sm:p-6
                lg:p-8

                transition-colors
                duration-300
            "
        >

            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div
                className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                    gap-5
                    mb-6
                "
            >

                <div>

                    <h1
                        className="
                            text-2xl
                            sm:text-[27px]
                            font-semibold
                            text-theme-text
                        "
                    >
                        Create Lead
                    </h1>


                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            mt-2
                            text-xs
                            sm:text-sm
                        "
                    >

                        <button
                            type="button"
                            onClick={() => navigate("/leads")}
                            className="
                                text-primary
                                font-medium
                                hover:underline
                            "
                        >
                            Leads
                        </button>


                        <span className="text-theme-text-muted">
                            ›
                        </span>


                        <span className="text-theme-text-secondary">
                            Create Lead
                        </span>

                    </div>

                </div>


                {/* METHOD SELECTION */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-3
                        gap-2
                        w-full
                        lg:w-auto
                    "
                >

                    {/* MANUAL FORM */}

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
                            bg-theme-surface
                            border
                            rounded-md
                            text-left
                            shadow-sm
                            transition-all
                            duration-200
                            cursor-pointer

                            ${
                                activeMethod === "manual"
                                    ? "border-primary shadow-md"
                                    : "border-theme-border-light hover:border-primary hover:shadow-md"
                            }
                        `}
                    >

                        <div
                            className="
                                w-5
                                h-5
                                rounded-full
                                border-2
                                border-primary
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >

                            {activeMethod === "manual" && (
                                <div
                                    className="
                                        w-2.5
                                        h-2.5
                                        rounded-full
                                        bg-primary
                                    "
                                />
                            )}

                        </div>


                        <FileText
                            size={23}
                            className="text-primary shrink-0"
                        />


                        <div>

                            <p className="text-sm font-medium text-theme-text">
                                Manual Form
                            </p>

                            <p className="text-[9px] leading-tight text-theme-text-secondary mt-0.5">
                                Lead added manually
                                <br />
                                by admin.
                            </p>

                        </div>

                    </button>


                    {/* EXCEL / UPLOAD */}

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
                            bg-theme-surface
                            border
                            rounded-md
                            text-left
                            shadow-sm
                            transition-all
                            duration-200
                            cursor-pointer

                            ${
                                activeMethod === "upload"
                                    ? "border-primary shadow-md"
                                    : "border-theme-border-light hover:border-primary hover:shadow-md"
                            }
                        `}
                    >

                        <div
                            className="
                                w-5
                                h-5
                                rounded-full
                                border-2
                                border-primary
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >

                            {activeMethod === "upload" && (
                                <div
                                    className="
                                        w-2.5
                                        h-2.5
                                        rounded-full
                                        bg-primary
                                    "
                                />
                            )}

                        </div>


                        <CloudUpload
                            size={24}
                            className="text-green-500 shrink-0"
                        />


                        <div>

                            <p className="text-sm font-medium text-theme-text">
                                Excel / Upload
                            </p>

                            <p className="text-[9px] leading-tight text-theme-text-secondary mt-0.5">
                                Upload leads via
                                <br />
                                CSV or Excel.
                            </p>

                        </div>

                    </button>


                    {/* API / CONNECTOR */}

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
                            bg-theme-surface
                            border
                            rounded-md
                            text-left
                            shadow-sm
                            transition-all
                            duration-200
                            cursor-pointer

                            ${
                                activeMethod === "api"
                                    ? "border-primary shadow-md"
                                    : "border-theme-border-light hover:border-primary hover:shadow-md"
                            }
                        `}
                    >

                        <div
                            className="
                                w-5
                                h-5
                                rounded-full
                                border-2
                                border-primary
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >

                            {activeMethod === "api" && (
                                <div
                                    className="
                                        w-2.5
                                        h-2.5
                                        rounded-full
                                        bg-primary
                                    "
                                />
                            )}

                        </div>


                        <Link2
                            size={24}
                            className="text-blue-500 shrink-0"
                        />


                        <div>

                            <p className="text-sm font-medium text-theme-text">
                                API / Connector
                            </p>

                            <p className="text-[9px] leading-tight text-theme-text-secondary mt-0.5">
                                Connect via API
                                <br />
                                or integration.
                            </p>

                        </div>

                    </button>

                </div>

            </div>


            {/* =================================================
                ACTIVE CONTENT
            ================================================= */}

            <div
                className="
                    w-full
                    transition-all
                    duration-300
                "
            >

                {activeMethod === "manual" && (
                    <ManualLeadForm />
                )}


                {activeMethod === "upload" && (
                    <ExcelUpload
                        onCancel={() => setActiveMethod("manual")}
                    />
                )}


                {activeMethod === "api" && (
                    <ApiConnector
                        onCancel={() => setActiveMethod("manual")}
                    />
                )}

            </div>

        </div>

    );

}


export default CreateLead;
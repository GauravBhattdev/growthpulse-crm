import React, { useState } from "react";

import {
    Check,
    ArrowRight,
    ArrowLeft
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import UploadFile from "./ExcelUpload/UploadFile";
import PreviewLeads from "./ExcelUpload/PreviewLeads";
import ImportLeads from "./ExcelUpload/ImportLeads";


function ExcelUpload() {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);

    const [selectedFile, setSelectedFile] = useState(null);

    const [loading, setLoading] = useState(false);


    // ==========================================
    // STEPS
    // ==========================================

    const steps = [
        { number: 1, title: "Upload File" },
        { number: 2, title: "Preview Leads" },
        { number: 3, title: "Import Leads" }
    ];


    // ==========================================
    // NEXT
    // ==========================================

    const handleNext = () => {

        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }

    };


    // ==========================================
    // BACK
    // ==========================================

    const handleBack = () => {

        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }

    };


    // ==========================================
    // CANCEL — back to Leads page
    // ==========================================

    const handleCancel = () => {

        if (loading) {
            return;
        }

        navigate("/leads");

    };


    // ==========================================
    // IMPORT
    // ==========================================

    const handleImport = () => {

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert("Leads imported successfully!");
        }, 1500);

    };


    return (

        <div
            className="
                w-full
                flex
                flex-col
                lg:flex-row
                gap-4
                items-stretch
            "
        >

            {/* LEFT BOX - STEP PROCESS */}

            <div
                className="
                    w-full
                    lg:w-[285px]
                    xl:w-[300px]
                    shrink-0

                    border
                    border-theme-border-light
                    rounded-[10px]
                    bg-theme-surface

                    p-5

                    transition-colors
                    duration-300
                "
            >

                <h2
                    className="
                        text-[15px]
                        font-semibold
                        text-theme-text
                        mb-5
                    "
                >
                    1. Upload Process
                </h2>


                <div className="flex flex-col">

                    {steps.map((step, index) => (

                        <div key={step.number} className="relative">

                            <button
                                type="button"
                                onClick={() => setCurrentStep(step.number)}
                                disabled={loading}
                                className="
                                    w-full
                                    flex
                                    items-center
                                    gap-3
                                    text-left
                                    p-2
                                    rounded-md
                                    transition
                                    hover:bg-theme-surface-secondary
                                    disabled:cursor-not-allowed
                                    cursor-pointer
                                "
                            >

                                <div className={`
                                    w-8
                                    h-8
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    text-xs
                                    font-medium
                                    shrink-0
                                    relative
                                    z-10
                                    transition-colors
                                    duration-300

                                    ${
                                        currentStep >= step.number
                                            ? "bg-primary text-white"
                                            : "bg-theme-surface-secondary text-theme-text-secondary"
                                    }
                                `}>

                                    {currentStep > step.number ? (
                                        <Check size={14} />
                                    ) : (
                                        step.number
                                    )}

                                </div>


                                <p className={`
                                    text-xs
                                    font-medium
                                    transition-colors
                                    duration-300

                                    ${
                                        currentStep === step.number
                                            ? "text-primary"
                                            : currentStep > step.number
                                            ? "text-theme-text"
                                            : "text-theme-text-secondary"
                                    }
                                `}>
                                    {step.title}
                                </p>

                            </button>


                            {index < steps.length - 1 && (
                                <div
                                    className="
                                        absolute
                                        left-[23px]
                                        top-[40px]
                                        h-[24px]
                                        border-l-2
                                        border-dotted
                                        border-theme-border-light
                                    "
                                />
                            )}

                        </div>

                    ))}

                </div>

            </div>


            {/* RIGHT BOX - CONTENT + FOOTER */}

            <div
                className="
                    flex-1
                    min-w-0
                    flex
                    flex-col

                    border
                    border-theme-border-light
                    rounded-[10px]
                    bg-theme-surface

                    transition-colors
                    duration-300
                "
            >

                {/* CONTENT */}

                <div className="flex-1 p-5 sm:p-6">

                    <h2
                        className="
                            text-[15px]
                            font-semibold
                            text-theme-text
                            mb-5
                        "
                    >
                        {currentStep}. {steps[currentStep - 1]?.title}
                    </h2>


                    {currentStep === 1 && (
                        <UploadFile
                            selectedFile={selectedFile}
                            setSelectedFile={setSelectedFile}
                            loading={loading}
                        />
                    )}


                    {currentStep === 2 && (
                        <PreviewLeads />
                    )}


                    {currentStep === 3 && (
                        <ImportLeads
                            loading={loading}
                            onImport={handleImport}
                        />
                    )}

                </div>


                {/* FOOTER (inside the panel) */}

                <div
                    className="
                        shrink-0

                        border-t
                        border-theme-border-light

                        px-5
                        sm:px-6
                        py-3

                        flex
                        items-center
                        justify-between
                        gap-3

                        transition-colors
                        duration-300
                    "
                >

                    {/* CANCEL */}

                    <button
                        type="button"
                        onClick={handleCancel}
                        disabled={loading}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            px-4
                            sm:px-5
                            py-2.5

                            min-w-[90px]
                            sm:min-w-[100px]

                            border
                            border-theme-border-light
                            rounded-md

                            bg-theme-surface
                            text-theme-text

                            text-xs
                            sm:text-sm
                            font-semibold

                            hover:bg-theme-surface-secondary

                            transition

                            disabled:opacity-50
                            disabled:cursor-not-allowed
                            cursor-pointer
                        "
                    >
                        Cancel
                    </button>


                    {/* RIGHT BUTTONS */}

                    <div className="flex items-center gap-2">

                        {currentStep > 1 && (

                            <button
                                type="button"
                                onClick={handleBack}
                                disabled={loading}
                                className="
                                    flex
                                    items-center
                                    gap-1.5
                                    px-3
                                    sm:px-5
                                    py-2.5
                                    border
                                    border-theme-border-light
                                    rounded-md
                                    text-xs
                                    text-theme-text
                                    hover:bg-theme-surface-secondary
                                    transition
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                    cursor-pointer
                                "
                            >
                                <ArrowLeft size={14} />
                                <span>Back</span>
                            </button>

                        )}


                        {currentStep < 3 && (

                            <button
                                type="button"
                                onClick={handleNext}
                                disabled={
                                    loading ||
                                    (currentStep === 1 && !selectedFile)
                                }
                                className="
                                    flex
                                    items-center
                                    gap-1.5
                                    px-3
                                    sm:px-5
                                    py-2.5
                                    bg-primary
                                    text-white
                                    rounded-md
                                    text-xs
                                    font-medium
                                    hover:bg-primaryHover
                                    transition
                                    disabled:opacity-40
                                    disabled:cursor-not-allowed
                                    cursor-pointer
                                "
                            >
                                <span>Next</span>
                                <ArrowRight size={14} />
                            </button>

                        )}

                    </div>

                </div>

            </div>

        </div>

    );

}


export default ExcelUpload;
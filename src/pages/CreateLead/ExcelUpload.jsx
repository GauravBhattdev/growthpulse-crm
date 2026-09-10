import React, { useState } from "react";

import {
    Check,
    ArrowRight,
    ArrowLeft
} from "lucide-react";

import UploadFile from "./ExcelUpload/UploadFile";
import MapFields from "./ExcelUpload/MapFields";
import PreviewLeads from "./ExcelUpload/PreviewLeads";
import ImportLeads from "./ExcelUpload/ImportLeads";


function ExcelUpload() {


    // ==========================================
    // STATE
    // ==========================================

    const [currentStep, setCurrentStep] = useState(1);

    const [selectedFile, setSelectedFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const [mapping, setMapping] = useState({
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        company: "Company Name",
        source: "Source",
        status: "Status"
    });


    // ==========================================
    // STEPS
    // ==========================================

    const steps = [
        {
            number: 1,
            title: "Upload File"
        },
        {
            number: 2,
            title: "Map Fields"
        },
        {
            number: 3,
            title: "Preview Leads"
        },
        {
            number: 4,
            title: "Import Leads"
        }
    ];


    // ==========================================
    // NEXT
    // ==========================================

    const handleNext = () => {

        if (currentStep < 4) {

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
    // MAPPING CHANGE
    // ==========================================

    const handleMappingChange = (field, value) => {

        setMapping((previousMapping) => ({

            ...previousMapping,

            [field]: value

        }));

    };


    // ==========================================
    // CANCEL
    // ==========================================

    const handleCancel = () => {

        if (loading) {
            return;
        }

        setCurrentStep(1);

        setSelectedFile(null);

    };


    // ==========================================
    // IMPORT
    // ==========================================

    const handleImport = () => {

        setLoading(true);

        console.log(
            "Importing leads from:",
            selectedFile
        );

        setTimeout(() => {

            setLoading(false);

            console.log(
                "Leads imported successfully!"
            );

            alert(
                "Leads imported successfully!"
            );

        }, 1500);

    };


    return (

        <div className="
            w-full
            flex
            flex-col
            lg:flex-row
            gap-4
            items-stretch
        ">


            {/* ==========================================
                LEFT BOX - STEP PROCESS
            ========================================== */}

            <div className="
                w-full
                lg:w-[285px]
                xl:w-[300px]
                shrink-0
                border
                border-gray-300
                rounded-[10px]
                bg-white
                p-5
            ">

                <h2 className="
                    text-[15px]
                    font-semibold
                    text-gray-800
                    mb-5
                ">
                    1. Upload Process
                </h2>


                {/* ==========================================
                    STEPS WITH DOTTED LINES
                ========================================== */}

                <div className="
                    flex
                    flex-col
                ">

                    {steps.map((step, index) => (

                        <div
                            key={step.number}
                            className="
                                relative
                            "
                        >

                            {/* STEP BUTTON */}

                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentStep(step.number)
                                }
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
                                    hover:bg-gray-50
                                    disabled:cursor-not-allowed
                                "
                            >

                                {/* STEP CIRCLE */}

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

                                    ${
                                        currentStep >= step.number
                                            ? "bg-[#8b3df5] text-white"
                                            : "bg-gray-200 text-gray-500"
                                    }

                                `}>

                                    {currentStep > step.number ? (

                                        <Check size={14} />

                                    ) : (

                                        step.number

                                    )}

                                </div>


                                {/* STEP TITLE */}

                                <p className={`

                                    text-xs
                                    font-medium

                                    ${
                                        currentStep === step.number
                                            ? "text-[#8b3df5]"
                                            : currentStep > step.number
                                            ? "text-gray-700"
                                            : "text-gray-500"
                                    }

                                `}>

                                    {step.title}

                                </p>

                            </button>


                            {/* ==========================================
                                DOTTED CONNECTOR
                            ========================================== */}

                            {index < steps.length - 1 && (

                                <div className="
                                    absolute
                                    left-[23px]
                                    top-[40px]
                                    h-[24px]
                                    border-l-2
                                    border-dotted
                                    border-gray-300
                                " />

                            )}

                        </div>

                    ))}

                </div>

            </div>


            {/* ==========================================
                RIGHT BOX - CONTENT
            ========================================== */}

            <div className="
                flex-1
                min-w-0
                border
                border-gray-300
                rounded-[10px]
                bg-white
                p-5
                sm:p-6
                pb-24
            ">


                {/* ==========================================
                    BOX HEADING
                ========================================== */}

                <h2 className="
                    text-[15px]
                    font-semibold
                    text-gray-800
                    mb-5
                ">

                    2. Upload Lead Files

                </h2>


                {/* ==========================================
                    STEP 1
                ========================================== */}

                {currentStep === 1 && (

                    <UploadFile

                        selectedFile={selectedFile}

                        setSelectedFile={setSelectedFile}

                        loading={loading}

                    />

                )}


                {/* ==========================================
                    STEP 2
                ========================================== */}

                {currentStep === 2 && (

                    <MapFields

                        mapping={mapping}

                        onMappingChange={
                            handleMappingChange
                        }

                        loading={loading}

                    />

                )}


                {/* ==========================================
                    STEP 3
                ========================================== */}

                {currentStep === 3 && (

                    <PreviewLeads />

                )}


                {/* ==========================================
                    STEP 4
                ========================================== */}

                {currentStep === 4 && (

                    <ImportLeads

                        loading={loading}

                        onImport={handleImport}

                    />

                )}

            </div>


            {/* ==========================================
                FOOTER BUTTONS
            ========================================== */}

            <div className="
                fixed
                bottom-0
                left-0
                right-0
                lg:left-[240px]
                bg-white
                border-t
                border-gray-200
                px-4
                sm:px-6
                py-3
                z-40
            ">

                <div className="
                    flex
                    items-center
                    justify-between
                    gap-3
                ">


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
                            border-gray-800
                            rounded-md
                            bg-white
                            text-gray-900
                            text-xs
                            sm:text-sm
                            font-semibold
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        Cancel

                    </button>


                    {/* RIGHT BUTTONS */}

                    <div className="
                        flex
                        items-center
                        gap-2
                    ">


                        {/* BACK */}

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
                                    border-gray-300
                                    rounded-md
                                    text-xs
                                    text-gray-700
                                    hover:bg-gray-100
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                "
                            >

                                <ArrowLeft size={14} />

                                <span>
                                    Back
                                </span>

                            </button>

                        )}


                        {/* NEXT */}

                        {currentStep < 4 && (

                            <button
                                type="button"
                                onClick={handleNext}
                                disabled={
                                    loading ||
                                    (
                                        currentStep === 1 &&
                                        !selectedFile
                                    )
                                }
                                className="
                                    flex
                                    items-center
                                    gap-1.5
                                    px-3
                                    sm:px-5
                                    py-2.5
                                    bg-[#8b3df5]
                                    text-white
                                    rounded-md
                                    text-xs
                                    font-medium
                                    hover:bg-[#7630d8]
                                    disabled:opacity-40
                                    disabled:cursor-not-allowed
                                "
                            >

                                <span>
                                    Next
                                </span>

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
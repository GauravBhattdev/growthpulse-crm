import React, { useState } from "react";

import {
    Upload,
    FileSpreadsheet,
    Trash2,
    Check,
    ArrowRight,
    ArrowLeft,
    Download,
    Loader2
} from "lucide-react";


function ExcelUpload() {


    // ==========================================
    // STATE
    // ==========================================

    const [currentStep, setCurrentStep] = useState(1);

    const [selectedFile, setSelectedFile] = useState(null);

    const [dragActive, setDragActive] = useState(false);

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
    // FILE SELECT
    // ==========================================

    const handleFileChange = (event) => {

        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);
        }

    };


    // ==========================================
    // DRAG EVENTS
    // ==========================================

    const handleDragOver = (event) => {

        event.preventDefault();

        setDragActive(true);

    };


    const handleDragLeave = () => {

        setDragActive(false);

    };


    const handleDrop = (event) => {

        event.preventDefault();

        setDragActive(false);

        const file = event.dataTransfer.files[0];

        if (file) {
            setSelectedFile(file);
        }

    };


    // ==========================================
    // REMOVE FILE
    // ==========================================

    const handleRemoveFile = () => {

        setSelectedFile(null);

    };


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

        console.log("Importing leads from:", selectedFile);

        setTimeout(() => {

            setLoading(false);

            console.log("Leads imported successfully!");

            alert("Leads imported successfully!");

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


                {/* STEPS */}

                <div className="
                    flex
                    flex-col
                    gap-3
                ">

                    {steps.map((step) => (

                        <button
                            key={step.number}
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
                                hover:bg-gray-50
                                disabled:cursor-not-allowed
                            "
                        >

                            {/* STEP NUMBER */}

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

                                ${
                                    currentStep > step.number
                                        ? "bg-[#8b3df5] text-white"
                                        : currentStep === step.number
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

                            <div>

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

                            </div>

                        </button>

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
                    STEP 1 - UPLOAD FILE
                ========================================== */}

                {currentStep === 1 && (

                    <div>

                        <h3 className="
                            text-[16px]
                            font-semibold
                            text-[#222]
                        ">
                            Upload Leads File
                        </h3>


                        <p className="
                            text-xs
                            text-gray-500
                            mt-1
                            mb-5
                        ">
                            Upload an Excel or CSV file containing your leads.
                        </p>


                        {/* UPLOAD AREA */}

                        {!selectedFile && (

                            <label
                                htmlFor="lead-file"
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={`

                                    block
                                    cursor-pointer
                                    border-2
                                    border-dashed
                                    rounded-lg
                                    p-8
                                    sm:p-12
                                    text-center
                                    transition

                                    ${
                                        dragActive
                                            ? "border-[#8b3df5] bg-purple-50"
                                            : "border-gray-300 hover:border-[#8b3df5] hover:bg-gray-50"
                                    }

                                `}
                            >

                                <input
                                    id="lead-file"
                                    type="file"
                                    accept=".xlsx,.xls,.csv"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />


                                <div className="
                                    flex
                                    justify-center
                                    mb-3
                                ">

                                    <div className="
                                        w-14
                                        h-14
                                        rounded-full
                                        bg-purple-100
                                        flex
                                        items-center
                                        justify-center
                                    ">

                                        <Upload
                                            size={26}
                                            className="text-[#8b3df5]"
                                        />

                                    </div>

                                </div>


                                <h3 className="
                                    text-sm
                                    font-medium
                                    text-gray-800
                                ">
                                    Drag & Drop your file here
                                </h3>


                                <p className="
                                    text-xs
                                    text-gray-500
                                    mt-1
                                ">
                                    or click to browse from your computer
                                </p>


                                <p className="
                                    text-[10px]
                                    text-gray-400
                                    mt-3
                                ">
                                    Supported formats: XLSX, XLS, CSV
                                </p>

                            </label>

                        )}


                        {/* SELECTED FILE */}

                        {selectedFile && (

                            <div className="
                                border
                                border-gray-300
                                rounded-lg
                                p-4
                                flex
                                items-center
                                justify-between
                                gap-3
                            ">

                                <div className="
                                    flex
                                    items-center
                                    gap-3
                                    min-w-0
                                ">

                                    <div className="
                                        w-10
                                        h-10
                                        rounded-md
                                        bg-green-100
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                    ">

                                        <FileSpreadsheet
                                            size={21}
                                            className="text-green-600"
                                        />

                                    </div>


                                    <div className="min-w-0">

                                        <p className="
                                            text-sm
                                            font-medium
                                            text-gray-800
                                            truncate
                                        ">
                                            {selectedFile.name}
                                        </p>


                                        <p className="
                                            text-[10px]
                                            text-gray-500
                                            mt-0.5
                                        ">
                                            {(selectedFile.size / 1024).toFixed(1)} KB
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="button"
                                    onClick={handleRemoveFile}
                                    disabled={loading}
                                    className="
                                        p-2
                                        text-red-500
                                        hover:bg-red-50
                                        rounded-md
                                        disabled:opacity-50
                                        disabled:cursor-not-allowed
                                    "
                                >

                                    <Trash2 size={17} />

                                </button>

                            </div>

                        )}


                        {/* INSTRUCTIONS */}

                        <div className="
                            mt-5
                            bg-[#f8f7fb]
                            rounded-md
                            p-4
                        ">

                            <h3 className="
                                text-xs
                                font-semibold
                                text-gray-800
                                mb-2
                            ">
                                Upload Instructions
                            </h3>


                            <ul className="
                                text-[11px]
                                text-gray-600
                                space-y-1.5
                                list-disc
                                pl-4
                            ">

                                <li>
                                    Make sure your file contains column headers.
                                </li>

                                <li>
                                    Maximum file size is 10 MB.
                                </li>

                                <li>
                                    Supported file types are XLSX, XLS and CSV.
                                </li>

                                <li>
                                    Duplicate leads will be identified during import.
                                </li>

                            </ul>


                            <button
                                type="button"
                                disabled={loading}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    mt-3
                                    text-[11px]
                                    text-[#8b3df5]
                                    font-medium
                                    disabled:opacity-50
                                "
                            >

                                <Download size={14} />

                                Download Sample Template

                            </button>

                        </div>

                    </div>

                )}


                {/* ==========================================
                    STEP 2 - MAP FIELDS
                ========================================== */}

                {currentStep === 2 && (

                    <div>

                        <h3 className="
                            text-[16px]
                            font-semibold
                            text-[#222]
                        ">
                            Map Fields
                        </h3>


                        <p className="
                            text-xs
                            text-gray-500
                            mt-1
                            mb-5
                        ">
                            Match your file columns with the lead fields.
                        </p>


                        <div className="
                            overflow-x-auto
                        ">

                            <table className="
                                w-full
                                min-w-[650px]
                                border-collapse
                            ">

                                <thead>

                                    <tr className="
                                        bg-[#f6f5f8]
                                        text-left
                                    ">

                                        <th className="
                                            px-3
                                            py-2.5
                                            text-xs
                                            font-medium
                                            text-gray-700
                                            border
                                            border-gray-200
                                        ">
                                            Lead Field
                                        </th>


                                        <th className="
                                            px-3
                                            py-2.5
                                            text-xs
                                            font-medium
                                            text-gray-700
                                            border
                                            border-gray-200
                                        ">
                                            File Column
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {Object.entries(mapping).map(
                                        ([field, value]) => (

                                            <tr key={field}>

                                                <td className="
                                                    px-3
                                                    py-2.5
                                                    text-xs
                                                    text-gray-700
                                                    border
                                                    border-gray-200
                                                ">

                                                    {field
                                                        .replace(/([A-Z])/g, " $1")
                                                        .replace(/^./, (char) =>
                                                            char.toUpperCase()
                                                        )
                                                    }

                                                </td>


                                                <td className="
                                                    px-3
                                                    py-2.5
                                                    border
                                                    border-gray-200
                                                ">

                                                    <select
                                                        value={value}
                                                        onChange={(event) =>
                                                            handleMappingChange(
                                                                field,
                                                                event.target.value
                                                            )
                                                        }
                                                        disabled={loading}
                                                        className="
                                                            w-full
                                                            h-[34px]
                                                            px-2
                                                            border
                                                            border-gray-300
                                                            rounded
                                                            text-xs
                                                            outline-none
                                                            bg-white
                                                            disabled:bg-gray-100
                                                        "
                                                    >

                                                        <option>
                                                            First Name
                                                        </option>

                                                        <option>
                                                            Last Name
                                                        </option>

                                                        <option>
                                                            Email
                                                        </option>

                                                        <option>
                                                            Phone
                                                        </option>

                                                        <option>
                                                            Company Name
                                                        </option>

                                                        <option>
                                                            Source
                                                        </option>

                                                        <option>
                                                            Status
                                                        </option>

                                                        <option>
                                                            Lead Owner
                                                        </option>

                                                        <option>
                                                            Industry
                                                        </option>

                                                        <option>
                                                            Country
                                                        </option>

                                                        <option>
                                                            City
                                                        </option>

                                                        <option>
                                                            State
                                                        </option>

                                                    </select>

                                                </td>

                                            </tr>

                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                )}


                {/* ==========================================
                    STEP 3 - PREVIEW
                ========================================== */}

                {currentStep === 3 && (

                    <div>

                        <h3 className="
                            text-[16px]
                            font-semibold
                            text-[#222]
                        ">
                            Preview Leads
                        </h3>


                        <p className="
                            text-xs
                            text-gray-500
                            mt-1
                            mb-5
                        ">
                            Review the leads before importing them.
                        </p>


                        <div className="
                            flex
                            flex-wrap
                            gap-3
                            mb-4
                        ">

                            <div className="
                                px-4
                                py-2
                                bg-purple-50
                                rounded-md
                            ">

                                <p className="
                                    text-[10px]
                                    text-gray-500
                                ">
                                    Total Leads
                                </p>

                                <p className="
                                    text-lg
                                    font-semibold
                                    text-[#8b3df5]
                                ">
                                    25
                                </p>

                            </div>


                            <div className="
                                px-4
                                py-2
                                bg-green-50
                                rounded-md
                            ">

                                <p className="
                                    text-[10px]
                                    text-gray-500
                                ">
                                    Valid Leads
                                </p>

                                <p className="
                                    text-lg
                                    font-semibold
                                    text-green-600
                                ">
                                    23
                                </p>

                            </div>


                            <div className="
                                px-4
                                py-2
                                bg-red-50
                                rounded-md
                            ">

                                <p className="
                                    text-[10px]
                                    text-gray-500
                                ">
                                    Errors
                                </p>

                                <p className="
                                    text-lg
                                    font-semibold
                                    text-red-500
                                ">
                                    2
                                </p>

                            </div>

                        </div>


                        <div className="
                            overflow-x-auto
                            border
                            border-gray-200
                            rounded-md
                        ">

                            <table className="
                                w-full
                                min-w-[800px]
                                text-left
                            ">

                                <thead>

                                    <tr className="bg-[#f6f5f8]">

                                        <th className="px-3 py-2 text-xs">
                                            First Name
                                        </th>

                                        <th className="px-3 py-2 text-xs">
                                            Last Name
                                        </th>

                                        <th className="px-3 py-2 text-xs">
                                            Email
                                        </th>

                                        <th className="px-3 py-2 text-xs">
                                            Phone
                                        </th>

                                        <th className="px-3 py-2 text-xs">
                                            Company
                                        </th>

                                        <th className="px-3 py-2 text-xs">
                                            Status
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    <tr className="border-t">

                                        <td className="px-3 py-2 text-xs">
                                            Rahul
                                        </td>

                                        <td className="px-3 py-2 text-xs">
                                            Sharma
                                        </td>

                                        <td className="px-3 py-2 text-xs">
                                            rahul@example.com
                                        </td>

                                        <td className="px-3 py-2 text-xs">
                                            +91 9876543210
                                        </td>

                                        <td className="px-3 py-2 text-xs">
                                            ABC Company
                                        </td>

                                        <td className="
                                            px-3
                                            py-2
                                            text-xs
                                            text-green-600
                                        ">
                                            Valid
                                        </td>

                                    </tr>


                                    <tr className="border-t">

                                        <td className="px-3 py-2 text-xs">
                                            Amit
                                        </td>

                                        <td className="px-3 py-2 text-xs">
                                            Kumar
                                        </td>

                                        <td className="px-3 py-2 text-xs">
                                            amit@example.com
                                        </td>

                                        <td className="px-3 py-2 text-xs">
                                            +91 9988776655
                                        </td>

                                        <td className="px-3 py-2 text-xs">
                                            XYZ Pvt Ltd
                                        </td>

                                        <td className="
                                            px-3
                                            py-2
                                            text-xs
                                            text-green-600
                                        ">
                                            Valid
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                )}


                {/* ==========================================
                    STEP 4 - IMPORT
                ========================================== */}

                {currentStep === 4 && (

                    <div className="
                        text-center
                        py-8
                        sm:py-12
                    ">

                        <div className="
                            w-16
                            h-16
                            rounded-full
                            bg-green-100
                            flex
                            items-center
                            justify-center
                            mx-auto
                            mb-4
                        ">

                            <Check
                                size={30}
                                className="text-green-600"
                            />

                        </div>


                        <h3 className="
                            text-lg
                            font-semibold
                            text-gray-800
                        ">
                            Ready to Import
                        </h3>


                        <p className="
                            text-xs
                            text-gray-500
                            mt-2
                        ">
                            Your file contains 23 valid leads ready to be imported.
                        </p>


                        <button
                            type="button"
                            onClick={handleImport}
                            disabled={loading}
                            className="
                                mt-5
                                px-6
                                py-2.5
                                bg-[#8b3df5]
                                text-white
                                text-xs
                                rounded-md
                                hover:bg-[#7630d8]
                                disabled:opacity-70
                                disabled:cursor-not-allowed
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                            "
                        >

                            {loading ? (

                                <>

                                    <Loader2
                                        size={14}
                                        className="animate-spin"
                                    />

                                    Importing...

                                </>

                            ) : (

                                "Import Leads"

                            )}

                        </button>

                    </div>

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
                            px-5
                            py-2.5
                            min-w-[100px]
                            border
                            border-gray-800
                            rounded-md
                            bg-white
                            text-gray-900
                            text-sm
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

                        {currentStep > 1 && (

                            <button
                                type="button"
                                onClick={handleBack}
                                disabled={loading}
                                className="
                                    flex
                                    items-center
                                    gap-1.5
                                    px-5
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

                                Back

                            </button>

                        )}


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
                                    px-5
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

                                Next

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
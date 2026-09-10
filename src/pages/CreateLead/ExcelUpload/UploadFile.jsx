import React, { useRef, useState } from "react";

import {
    Upload,
    FileSpreadsheet,
    Trash2,
    Download
} from "lucide-react";


function UploadFile({
    selectedFile,
    setSelectedFile,
    loading
}) {

    const [dragActive, setDragActive] = useState(false);

    const fileInputRef = useRef(null);


    // ==========================================
    // FILE SELECT
    // ==========================================

    const handleFileChange = (event) => {

        const file = event.target.files?.[0];

        if (file) {

            setSelectedFile(file);

        }

    };


    // ==========================================
    // OPEN FILE SELECTOR
    // ==========================================

    const handleBrowseClick = () => {

        if (loading) {
            return;
        }

        fileInputRef.current?.click();

    };


    // ==========================================
    // DRAG OVER
    // ==========================================

    const handleDragOver = (event) => {

        event.preventDefault();

        event.stopPropagation();

        if (!loading) {

            setDragActive(true);

        }

    };


    // ==========================================
    // DRAG LEAVE
    // ==========================================

    const handleDragLeave = (event) => {

        event.preventDefault();

        event.stopPropagation();

        setDragActive(false);

    };


    // ==========================================
    // DROP FILE
    // ==========================================

    const handleDrop = (event) => {

        event.preventDefault();

        event.stopPropagation();

        setDragActive(false);

        if (loading) {
            return;
        }

        const file = event.dataTransfer.files?.[0];

        if (file) {

            setSelectedFile(file);

        }

    };


    // ==========================================
    // REMOVE FILE
    // ==========================================

    const handleRemoveFile = () => {

        if (loading) {
            return;
        }

        setSelectedFile(null);

        if (fileInputRef.current) {

            fileInputRef.current.value = "";

        }

    };


    return (

        <div className="w-full min-w-0">


            {/* ==========================================
                HEADING
            ========================================== */}

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


            {/* ==========================================
                UPLOAD AREA
            ========================================== */}

            {!selectedFile && (

                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleBrowseClick}
                    className={`
                        w-full
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

                        ${
                            loading
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }
                    `}
                >

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="*/*"
                        onChange={handleFileChange}
                        disabled={loading}
                        className="hidden"
                    />


                    {/* UPLOAD ICON */}

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


                    {/* TITLE */}

                    <h3 className="
                        text-sm
                        font-medium
                        text-gray-800
                    ">
                        Drag & Drop your file here
                    </h3>


                    {/* BROWSE */}

                    <p className="
                        text-xs
                        text-gray-500
                        mt-1
                    ">
                        or click to browse from your computer
                    </p>


                    {/* FORMAT */}

                    <p className="
                        text-[10px]
                        text-gray-400
                        mt-3
                    ">
                       For testing: Any file is allowed
                    </p>

                </div>

            )}


            {/* ==========================================
                SELECTED FILE
            ========================================== */}

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


                    {/* REMOVE */}

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
                            shrink-0
                        "
                    >

                        <Trash2 size={17} />

                    </button>

                </div>

            )}


            {/* ==========================================
                INSTRUCTIONS
            ========================================== */}

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

    );

}


export default UploadFile;
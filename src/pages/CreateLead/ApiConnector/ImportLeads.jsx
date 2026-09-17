import React from "react";

import {
    Check,
    AlertTriangle,
    XCircle,
    Users,
    Download,
    ExternalLink,
    ChevronDown
} from "lucide-react";


function ImportLeads({
    onFinish
}) {

    return (
        <div className="w-full">

            {/* =========================================
                PAGE HEADER
            ========================================= */}

            <div
                className="
                    flex
                    items-start
                    justify-between
                    gap-3
                "
            >

                <div>

                    <h2
                        className="
                            text-[17px]
                            font-semibold
                            text-primary
                        "
                    >
                        Import Leads
                    </h2>

                    <p
                        className="
                            text-[10px]
                            text-theme-text-secondary
                            mt-1
                        "
                    >
                        Import filtered leads into your system.
                    </p>

                </div>


                {/* CONNECTOR */}

                <div
                    className="
                        w-[175px]
                        min-h-[46px]
                        border
                        border-theme-border-light
                        rounded-md
                        px-2.5
                        py-1.5
                        flex
                        items-center
                        justify-between

                        transition-colors
                        duration-300
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <div
                            className="
                                w-[32px]
                                h-[32px]
                                rounded-full
                                bg-[#e8f7ff]
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <span
                                className="
                                    text-[6px]
                                    font-bold
                                    text-[#00a1e0]
                                "
                            >
                                salesforce
                            </span>

                        </div>


                        <div>

                            <p
                                className="
                                    text-[9px]
                                    font-medium
                                    text-theme-text
                                "
                            >
                                Salesforce
                            </p>

                            <p
                                className="
                                    text-[7px]
                                    text-theme-text-secondary
                                "
                            >
                                CRM
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        className="
                            text-[7px]
                            text-primary
                            hover:underline
                            cursor-pointer
                        "
                    >
                        ✎ Change
                    </button>

                </div>

            </div>


            {/* =========================================
                STATISTICS
            ========================================= */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-2
                    mt-4
                "
            >

                {/* TOTAL LEADS */}

                <div
                    className="
                        border
                        border-theme-border-light
                        rounded-md
                        h-[52px]
                        px-3
                        flex
                        items-center
                        gap-2

                        transition-colors
                        duration-300
                    "
                >

                    <div
                        className="
                            w-8
                            h-8
                            rounded-full
                            bg-primary/15
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <Users
                            size={16}
                            className="text-primary"
                        />

                    </div>


                    <div>

                        <p
                            className="
                                text-[16px]
                                font-semibold
                                text-theme-text
                            "
                        >
                            1,210
                        </p>

                        <p
                            className="
                                text-[8px]
                                text-theme-text-secondary
                            "
                        >
                            Total Leads
                        </p>

                    </div>

                </div>


                {/* SUCCESSFULLY */}

                <div
                    className="
                        border
                        border-theme-border-light
                        rounded-md
                        h-[52px]
                        px-3
                        flex
                        items-center
                        gap-2

                        transition-colors
                        duration-300
                    "
                >

                    <div
                        className="
                            w-8
                            h-8
                            rounded-full
                            bg-green-500/15
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <Check
                            size={17}
                            className="text-green-500"
                        />

                    </div>


                    <div>

                        <p
                            className="
                                text-[16px]
                                font-semibold
                                text-theme-text
                            "
                        >
                            1,185
                        </p>

                        <p
                            className="
                                text-[8px]
                                text-theme-text-secondary
                            "
                        >
                            Successfully
                        </p>

                    </div>

                </div>


                {/* SKIPPED */}

                <div
                    className="
                        border
                        border-theme-border-light
                        rounded-md
                        h-[52px]
                        px-3
                        flex
                        items-center
                        gap-2

                        transition-colors
                        duration-300
                    "
                >

                    <div
                        className="
                            w-8
                            h-8
                            rounded-full
                            bg-orange-500/15
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <AlertTriangle
                            size={17}
                            className="text-orange-500"
                        />

                    </div>


                    <div>

                        <p
                            className="
                                text-[16px]
                                font-semibold
                                text-theme-text
                            "
                        >
                            15
                        </p>

                        <p
                            className="
                                text-[8px]
                                text-theme-text-secondary
                            "
                        >
                            Skipped
                        </p>

                    </div>

                </div>


                {/* FAILED */}

                <div
                    className="
                        border
                        border-theme-border-light
                        rounded-md
                        h-[52px]
                        px-3
                        flex
                        items-center
                        gap-2

                        transition-colors
                        duration-300
                    "
                >

                    <div
                        className="
                            w-8
                            h-8
                            rounded-full
                            bg-red-500/15
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <XCircle
                            size={17}
                            className="text-red-500"
                        />

                    </div>


                    <div>

                        <p
                            className="
                                text-[16px]
                                font-semibold
                                text-theme-text
                            "
                        >
                            10
                        </p>

                        <p
                            className="
                                text-[8px]
                                text-theme-text-secondary
                            "
                        >
                            Failed
                        </p>

                    </div>

                </div>

            </div>


            {/* =========================================
                IMPORT PROGRESS
            ========================================= */}

            <div
                className="
                    border
                    border-theme-border-light
                    rounded-md
                    mt-3
                    p-2.5

                    transition-colors
                    duration-300
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >

                    <p
                        className="
                            text-[9px]
                            font-semibold
                            text-theme-text
                        "
                    >
                        Import progress
                    </p>

                    <p
                        className="
                            text-[9px]
                            text-primary
                            font-medium
                        "
                    >
                        98%
                    </p>

                </div>


                {/* PROGRESS BAR */}

                <div
                    className="
                        w-full
                        h-[10px]
                        bg-theme-surface-secondary
                        rounded-full
                        mt-1.5
                        overflow-hidden
                    "
                >

                    <div
                        className="
                            h-full
                            w-[98%]
                            bg-primary
                            rounded-full
                        "
                    />

                </div>


                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mt-1.5
                    "
                >

                    <p
                        className="
                            text-[7px]
                            text-theme-text-secondary
                        "
                    >
                        Importing leads...(1,185 of 1,210)
                    </p>

                    <p
                        className="
                            text-[7px]
                            text-theme-text-secondary
                        "
                    >
                        Estimated time remaining: 00:00:05
                    </p>

                </div>

            </div>


            {/* =========================================
                IMPORT LOG
            ========================================= */}

            <div
                className="
                    border
                    border-theme-border-light
                    rounded-md
                    mt-3
                    overflow-hidden

                    transition-colors
                    duration-300
                "
            >

                {/* LOG HEADER */}

                <div
                    className="
                        h-[32px]
                        px-2.5
                        flex
                        items-center
                        justify-between
                    "
                >

                    <p
                        className="
                            text-[9px]
                            font-semibold
                            text-theme-text
                        "
                    >
                        Import Log
                    </p>


                    <button
                        type="button"
                        className="
                            h-[26px]
                            px-2.5
                            border
                            border-primary
                            rounded-md
                            text-[8px]
                            text-primary
                            flex
                            items-center
                            gap-1
                            hover:bg-primary/10
                            transition
                            cursor-pointer
                        "
                    >

                        <Download size={11} />

                        Download

                    </button>

                </div>


                {/* TABLE */}

                <div className="overflow-x-auto">

                    <table
                        className="
                            w-full
                            min-w-[600px]
                            border-collapse
                        "
                    >

                        <thead>

                            <tr
                                className="
                                    bg-theme-surface-secondary
                                    border-t
                                    border-b
                                    border-theme-border-light
                                "
                            >

                                <th
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-left
                                        font-medium
                                        text-theme-text
                                    "
                                >
                                    Status
                                </th>

                                <th
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-left
                                        font-medium
                                        text-theme-text
                                    "
                                >
                                    Description
                                </th>

                                <th
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-left
                                        font-medium
                                        text-theme-text
                                    "
                                >
                                    Count
                                </th>

                                <th
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-left
                                        font-medium
                                        text-theme-text
                                    "
                                >
                                    Details
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {/* SUCCESS */}

                            <tr
                                className="
                                    border-b
                                    border-theme-border-light
                                "
                            >

                                <td
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-1
                                            text-theme-text
                                        "
                                    >

                                        <Check
                                            size={13}
                                            className="text-green-500"
                                        />

                                        Successfully

                                    </div>

                                </td>


                                <td
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-theme-text
                                    "
                                >
                                    Leads Imported Successfully
                                </td>


                                <td
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-theme-text
                                    "
                                >
                                    1,185
                                </td>


                                <td
                                    className="
                                        px-2
                                        py-2
                                    "
                                >

                                    <button
                                        type="button"
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-[8px]
                                            text-primary
                                            hover:underline
                                            cursor-pointer
                                        "
                                    >
                                        View Details
                                        <ChevronDown size={12} />
                                    </button>

                                </td>

                            </tr>


                            {/* SKIPPED */}

                            <tr
                                className="
                                    border-b
                                    border-theme-border-light
                                "
                            >

                                <td
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-1
                                            text-theme-text
                                        "
                                    >

                                        <AlertTriangle
                                            size={13}
                                            className="text-orange-500"
                                        />

                                        Skipped

                                    </div>

                                </td>


                                <td
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-theme-text
                                    "
                                >
                                    Leads skipped due to duplicate or missing data.
                                </td>


                                <td
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-theme-text
                                    "
                                >
                                    15
                                </td>


                                <td
                                    className="
                                        px-2
                                        py-2
                                    "
                                >

                                    <button
                                        type="button"
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-[8px]
                                            text-primary
                                            hover:underline
                                            cursor-pointer
                                        "
                                    >
                                        View Details
                                        <ChevronDown size={12} />
                                    </button>

                                </td>

                            </tr>


                            {/* FAILED */}

                            <tr>

                                <td
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-1
                                            text-theme-text
                                        "
                                    >

                                        <XCircle
                                            size={13}
                                            className="text-red-500"
                                        />

                                        Failed

                                    </div>

                                </td>


                                <td
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-theme-text
                                    "
                                >
                                    Leads failed to import due to errors.
                                </td>


                                <td
                                    className="
                                        px-2
                                        py-2
                                        text-[8px]
                                        text-theme-text
                                    "
                                >
                                    10
                                </td>


                                <td
                                    className="
                                        px-2
                                        py-2
                                    "
                                >

                                    <button
                                        type="button"
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-[8px]
                                            text-primary
                                            hover:underline
                                            cursor-pointer
                                        "
                                    >
                                        View Details
                                        <ChevronDown size={12} />
                                    </button>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>


            {/* =========================================
                SUCCESS MESSAGE
            ========================================= */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    bg-green-500/15
                    border
                    border-theme-border-light
                    rounded-md
                    mt-3
                    p-3

                    transition-colors
                    duration-300
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <div
                        className="
                            w-9
                            h-9
                            rounded-full
                            border-[3px]
                            border-green-500
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <Check
                            size={21}
                            className="text-green-500"
                        />

                    </div>


                    <div>

                        <p
                            className="
                                text-[9px]
                                font-semibold
                                text-theme-text
                            "
                        >
                            Import Complete
                        </p>

                        <p
                            className="
                                text-[7px]
                                text-theme-text-secondary
                                mt-0.5
                            "
                        >
                            1,185 leads imported successfully
                        </p>

                    </div>

                </div>


                <button
                    type="button"
                    className="
                        h-[27px]
                        px-3
                        border
                        border-primary
                        rounded-md
                        text-[8px]
                        text-primary
                        flex
                        items-center
                        gap-1
                        hover:bg-primary/10
                        transition
                        cursor-pointer
                    "
                >

                    View Imported Leads

                    <ExternalLink size={11} />

                </button>

            </div>

        </div>
    );
}


export default ImportLeads;
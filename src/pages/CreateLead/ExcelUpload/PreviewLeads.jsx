import React from "react";


function PreviewLeads() {

    return (

        <div className="w-full min-w-0">

            {/* Heading */}

            <h2
                className="
                    text-lg
                    sm:text-[18px]
                    font-semibold
                    text-primary
                "
            >
                Preview Leads
            </h2>


            <p
                className="
                    text-[11px]
                    sm:text-xs
                    text-theme-text-secondary
                    mt-1
                    mb-5
                "
            >
                Review the leads before importing them.
            </p>


            {/* Lead Statistics */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-3
                    gap-3
                    mb-5
                "
            >

                {/* Total Leads */}

                <div
                    className="
                        border
                        border-theme-border-light
                        rounded-md
                        px-4
                        py-3
                        bg-primary/10

                        transition-colors
                        duration-300
                    "
                >

                    <p
                        className="
                            m-0
                            text-[10px]
                            text-theme-text-secondary
                        "
                    >
                        Total Leads
                    </p>

                    <p
                        className="
                            m-0
                            mt-1
                            text-xl
                            font-semibold
                            text-primary
                        "
                    >
                        25
                    </p>

                </div>


                {/* Valid Leads */}

                <div
                    className="
                        border
                        border-theme-border-light
                        rounded-md
                        px-4
                        py-3
                        bg-green-500/10

                        transition-colors
                        duration-300
                    "
                >

                    <p
                        className="
                            m-0
                            text-[10px]
                            text-theme-text-secondary
                        "
                    >
                        Valid Leads
                    </p>

                    <p
                        className="
                            m-0
                            mt-1
                            text-xl
                            font-semibold
                            text-green-500
                        "
                    >
                        23
                    </p>

                </div>


                {/* Errors */}

                <div
                    className="
                        border
                        border-theme-border-light
                        rounded-md
                        px-4
                        py-3
                        bg-red-500/10

                        transition-colors
                        duration-300
                    "
                >

                    <p
                        className="
                            m-0
                            text-[10px]
                            text-theme-text-secondary
                        "
                    >
                        Errors
                    </p>

                    <p
                        className="
                            m-0
                            mt-1
                            text-xl
                            font-semibold
                            text-red-500
                        "
                    >
                        2
                    </p>

                </div>

            </div>


            {/* Preview Table */}

            <div
                className="
                    w-full
                    overflow-x-auto
                    border
                    border-theme-border-light
                    rounded-md

                    transition-colors
                    duration-300
                "
            >

                <table
                    className="
                        w-full
                        min-w-[750px]
                        border-collapse
                        text-left
                    "
                >

                    <thead>

                        <tr className="bg-theme-surface-secondary">

                            <th
                                className="
                                    px-3
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-theme-text
                                "
                            >
                                First Name
                            </th>

                            <th
                                className="
                                    px-3
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-theme-text
                                "
                            >
                                Last Name
                            </th>

                            <th
                                className="
                                    px-3
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-theme-text
                                "
                            >
                                Email
                            </th>

                            <th
                                className="
                                    px-3
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-theme-text
                                "
                            >
                                Phone
                            </th>

                            <th
                                className="
                                    px-3
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-theme-text
                                "
                            >
                                Company
                            </th>

                            <th
                                className="
                                    px-3
                                    py-3
                                    text-xs
                                    font-semibold
                                    text-theme-text
                                "
                            >
                                Status
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {/* Lead 1 */}

                        <tr className="border-t border-theme-border-light">

                            <td className="px-3 py-3 text-xs text-theme-text">
                                Rahul
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                Sharma
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                rahul@example.com
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                +91 9876543210
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                ABC Company
                            </td>

                            <td
                                className="
                                    px-3
                                    py-3
                                    text-xs
                                    font-medium
                                    text-green-500
                                "
                            >
                                Valid
                            </td>

                        </tr>


                        {/* Lead 2 */}

                        <tr className="border-t border-theme-border-light">

                            <td className="px-3 py-3 text-xs text-theme-text">
                                Amit
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                Kumar
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                amit@example.com
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                +91 9988776655
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                XYZ Pvt Ltd
                            </td>

                            <td
                                className="
                                    px-3
                                    py-3
                                    text-xs
                                    font-medium
                                    text-green-500
                                "
                            >
                                Valid
                            </td>

                        </tr>


                        {/* Lead 3 */}

                        <tr className="border-t border-theme-border-light">

                            <td className="px-3 py-3 text-xs text-theme-text">
                                Priya
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                Singh
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                priya@example.com
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                +91 9123456789
                            </td>

                            <td className="px-3 py-3 text-xs text-theme-text">
                                Tech Solutions
                            </td>

                            <td
                                className="
                                    px-3
                                    py-3
                                    text-xs
                                    font-medium
                                    text-red-500
                                "
                            >
                                Error
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Mobile Table Information */}

            <p
                className="
                    sm:hidden
                    mt-2
                    text-[9px]
                    text-theme-text-muted
                    text-center
                "
            >
                Swipe horizontally to view all columns.
            </p>

        </div>

    );

}

export default PreviewLeads;
import React from "react";

function PreviewLeads() {

    return (

        <div className="w-full min-w-0">

            {/* Heading */}

            <h2 className="
                text-lg
                sm:text-[18px]
                font-semibold
                text-[#8B3DF5]
            ">
                Preview Leads
            </h2>


            <p className="
                text-[11px]
                sm:text-xs
                text-gray-600
                mt-1
                mb-5
            ">
                Review the leads before importing them.
            </p>


            {/* Lead Statistics */}

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-3
                mb-5
            ">

                {/* Total Leads */}

                <div className="
                    border
                    border-gray-200
                    rounded-md
                    px-4
                    py-3
                    bg-purple-50
                ">

                    <p className="
                        m-0
                        text-[10px]
                        text-gray-500
                    ">
                        Total Leads
                    </p>

                    <p className="
                        m-0
                        mt-1
                        text-xl
                        font-semibold
                        text-[#8B3DF5]
                    ">
                        25
                    </p>

                </div>


                {/* Valid Leads */}

                <div className="
                    border
                    border-gray-200
                    rounded-md
                    px-4
                    py-3
                    bg-green-50
                ">

                    <p className="
                        m-0
                        text-[10px]
                        text-gray-500
                    ">
                        Valid Leads
                    </p>

                    <p className="
                        m-0
                        mt-1
                        text-xl
                        font-semibold
                        text-green-600
                    ">
                        23
                    </p>

                </div>


                {/* Errors */}

                <div className="
                    border
                    border-gray-200
                    rounded-md
                    px-4
                    py-3
                    bg-red-50
                ">

                    <p className="
                        m-0
                        text-[10px]
                        text-gray-500
                    ">
                        Errors
                    </p>

                    <p className="
                        m-0
                        mt-1
                        text-xl
                        font-semibold
                        text-red-500
                    ">
                        2
                    </p>

                </div>

            </div>


            {/* Preview Table */}

            <div className="
                w-full
                overflow-x-auto
                border
                border-gray-200
                rounded-md
            ">

                <table className="
                    w-full
                    min-w-[750px]
                    border-collapse
                    text-left
                ">

                    <thead>

                        <tr className="bg-[#f6f5f8]">

                            <th className="
                                px-3
                                py-3
                                text-xs
                                font-semibold
                                text-gray-700
                            ">
                                First Name
                            </th>

                            <th className="
                                px-3
                                py-3
                                text-xs
                                font-semibold
                                text-gray-700
                            ">
                                Last Name
                            </th>

                            <th className="
                                px-3
                                py-3
                                text-xs
                                font-semibold
                                text-gray-700
                            ">
                                Email
                            </th>

                            <th className="
                                px-3
                                py-3
                                text-xs
                                font-semibold
                                text-gray-700
                            ">
                                Phone
                            </th>

                            <th className="
                                px-3
                                py-3
                                text-xs
                                font-semibold
                                text-gray-700
                            ">
                                Company
                            </th>

                            <th className="
                                px-3
                                py-3
                                text-xs
                                font-semibold
                                text-gray-700
                            ">
                                Status
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {/* Lead 1 */}

                        <tr className="border-t border-gray-200">

                            <td className="px-3 py-3 text-xs text-gray-700">
                                Rahul
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                Sharma
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                rahul@example.com
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                +91 9876543210
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                ABC Company
                            </td>

                            <td className="
                                px-3
                                py-3
                                text-xs
                                font-medium
                                text-green-600
                            ">
                                Valid
                            </td>

                        </tr>


                        {/* Lead 2 */}

                        <tr className="border-t border-gray-200">

                            <td className="px-3 py-3 text-xs text-gray-700">
                                Amit
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                Kumar
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                amit@example.com
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                +91 9988776655
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                XYZ Pvt Ltd
                            </td>

                            <td className="
                                px-3
                                py-3
                                text-xs
                                font-medium
                                text-green-600
                            ">
                                Valid
                            </td>

                        </tr>


                        {/* Lead 3 */}

                        <tr className="border-t border-gray-200">

                            <td className="px-3 py-3 text-xs text-gray-700">
                                Priya
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                Singh
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                priya@example.com
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                +91 9123456789
                            </td>

                            <td className="px-3 py-3 text-xs text-gray-700">
                                Tech Solutions
                            </td>

                            <td className="
                                px-3
                                py-3
                                text-xs
                                font-medium
                                text-red-500
                            ">
                                Error
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Mobile Table Information */}

            <p className="
                sm:hidden
                mt-2
                text-[9px]
                text-gray-400
                text-center
            ">
                Swipe horizontally to view all columns.
            </p>

        </div>

    );

}

export default PreviewLeads;
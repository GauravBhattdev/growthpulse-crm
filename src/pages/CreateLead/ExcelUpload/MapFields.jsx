import React from "react";


function MapFields({
    mapping,
    onMappingChange,
    loading
}) {

    return (

        <div className="w-full min-w-0">

            {/* Heading */}

            <h2 className="
                text-lg
                sm:text-[18px]
                font-semibold
                text-[#8B3DF5]
            ">
                Map Your Fields
            </h2>


            <p className="
                text-[11px]
                sm:text-xs
                text-gray-600
                mt-1
                mb-5
            ">
                Match your file columns with the lead fields.
            </p>


            {/* Mapping Table */}

            <div className="
                w-full
                overflow-x-auto
                border
                border-gray-200
                rounded-md
            ">

                <table className="
                    w-full
                    min-w-[600px]
                    border-collapse
                ">

                    <thead>

                        <tr className="bg-[#f6f5f8]">

                            <th className="
                                px-3
                                py-3
                                text-left
                                text-xs
                                font-semibold
                                text-gray-700
                                border-b
                                border-gray-200
                            ">
                                Lead Field
                            </th>


                            <th className="
                                px-3
                                py-3
                                text-left
                                text-xs
                                font-semibold
                                text-gray-700
                                border-b
                                border-gray-200
                            ">
                                File Column
                            </th>


                            <th className="
                                px-3
                                py-3
                                text-left
                                text-xs
                                font-semibold
                                text-gray-700
                                border-b
                                border-gray-200
                            ">
                                Sample Value
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {Object.entries(mapping).map(
                            ([field, value]) => (

                                <tr
                                    key={field}
                                    className="border-b border-gray-200 last:border-b-0"
                                >

                                    {/* Lead Field */}

                                    <td className="
                                        px-3
                                        py-3
                                        text-xs
                                        text-gray-700
                                        whitespace-nowrap
                                    ">

                                        {field
                                            .replace(/([A-Z])/g, " $1")
                                            .replace(/^./, (char) =>
                                                char.toUpperCase()
                                            )
                                        }

                                    </td>


                                    {/* File Column */}

                                    <td className="px-3 py-3">

                                        <select
                                            value={value}
                                            onChange={(event) =>
                                                onMappingChange(
                                                    field,
                                                    event.target.value
                                                )
                                            }
                                            disabled={loading}
                                            className="
                                                w-full
                                                min-w-[180px]

                                                h-[36px]

                                                px-2

                                                border
                                                border-gray-300

                                                rounded-md

                                                text-xs

                                                outline-none

                                                bg-white

                                                text-gray-700

                                                focus:border-[#8B3DF5]

                                                disabled:bg-gray-100
                                            "
                                        >

                                            <option value="">
                                                Select Column
                                            </option>

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


                                    {/* Sample Value */}

                                    <td className="
                                        px-3
                                        py-3

                                        text-xs
                                        text-gray-500

                                        whitespace-nowrap
                                    ">

                                        {getSampleValue(field)}

                                    </td>

                                </tr>

                            )
                        )}

                    </tbody>

                </table>

            </div>


            {/* Auto Mapping Message */}

            <div className="
                mt-4

                flex
                items-start
                gap-2

                bg-[#f1e6ff]

                rounded-md

                px-4
                py-3
            ">

                <span className="
                    text-[#8B3DF5]
                    text-sm
                    shrink-0
                ">
                    ✓
                </span>

                <p className="
                    m-0

                    text-[10px]
                    sm:text-[11px]

                    text-gray-700
                ">
                    Fields have been automatically mapped based on your file
                    column names. You can change the mapping if required.
                </p>

            </div>

        </div>

    );

}


/* =================================================
   SAMPLE VALUES
================================================= */

function getSampleValue(field) {

    const sampleValues = {

        firstName: "Rahul",

        lastName: "Sharma",

        email: "rahul@example.com",

        phone: "+91 9876543210",

        company: "ABC Company",

        source: "Website",

        status: "New"

    };


    return sampleValues[field] || "-";

}


export default MapFields;
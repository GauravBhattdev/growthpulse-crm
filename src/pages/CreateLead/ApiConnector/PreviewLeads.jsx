import React from "react";

import {
    Search,
    Filter,
    Users,
    CircleCheck,
    CircleX,
    MoreVertical
} from "lucide-react";

import ConnectorIcon from "./ConnectorIcon";


function PreviewLeads({
    selectedConnector,
    connectors,
    previewLeads,
    previewLeadStats,
    previewStatusOptions,
    previewLeadSourceOptions,
    rowsPerPageOptions,
    paginationPages,
    previewPagination,
    onChangeConnector
}) {

    const selectedConnectorData =
        connectors.find(
            (connector) =>
                connector.name === selectedConnector
        );


    const connectorIcon =
        selectedConnectorData?.icon || "salesforce";


    const connectorType =
        selectedConnectorData?.type || "CRM";


    return (
        <div>

            {/* HEADER */}

            <div className="
                flex
                items-start
                justify-between
                gap-3
            ">

                <div>

                    <h2 className="
                        text-[17px]
                        font-semibold
                        text-primary
                    ">
                        Preview Leads
                    </h2>


                    <p className="
                        text-[10px]
                        text-gray-600
                        mt-1
                    ">
                        Review and verify leads before importing.
                    </p>

                </div>


                <div className="
                    w-[175px]
                    min-h-[42px]
                    border
                    border-gray-400
                    rounded-md
                    px-2.5
                    py-1.5
                    flex
                    items-center
                    justify-between
                ">

                    <div className="
                        flex
                        items-center
                        gap-2
                    ">

                        <ConnectorIcon
                            icon={connectorIcon}
                        />


                        <div>

                            <p className="
                                text-[9px]
                                font-semibold
                            ">
                                {selectedConnector}
                            </p>


                            <p className="
                                text-[7px]
                                text-gray-500
                            ">
                                {connectorType}
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        onClick={onChangeConnector}
                        className="
                            text-[7px]
                            text-primary
                        "
                    >
                        ✎ Change
                    </button>

                </div>

            </div>


            {/* STATS */}

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-2
                mt-4
            ">

                {/* TOTAL */}

                <div className="
                    border
                    border-gray-400
                    rounded-md
                    h-[52px]
                    px-3
                    flex
                    items-center
                    gap-2
                ">

                    <div className="
                        w-8
                        h-8
                        rounded-full
                        bg-purple-100
                        flex
                        items-center
                        justify-center
                    ">

                        <Users
                            size={16}
                            className="text-purple-600"
                        />

                    </div>


                    <div>

                        <p className="
                            text-[16px]
                            font-semibold
                            text-gray-900
                        ">
                            {previewLeadStats.totalLeads}
                        </p>


                        <p className="
                            text-[8px]
                            text-gray-600
                        ">
                            Total Leads
                        </p>

                    </div>

                </div>


                {/* VALID */}

                <div className="
                    border
                    border-gray-400
                    rounded-md
                    h-[52px]
                    px-3
                    flex
                    items-center
                    gap-2
                ">

                    <div className="
                        w-8
                        h-8
                        rounded-full
                        bg-green-100
                        flex
                        items-center
                        justify-center
                    ">

                        <CircleCheck
                            size={17}
                            className="text-green-600"
                        />

                    </div>


                    <div>

                        <p className="
                            text-[16px]
                            font-semibold
                            text-gray-900
                        ">
                            {previewLeadStats.validLeads}
                        </p>


                        <p className="
                            text-[8px]
                            text-gray-600
                        ">
                            Leads to import
                        </p>

                    </div>

                </div>


                {/* INVALID */}

                <div className="
                    border
                    border-gray-400
                    rounded-md
                    h-[52px]
                    px-3
                    flex
                    items-center
                    gap-2
                ">

                    <div className="
                        w-8
                        h-8
                        rounded-full
                        bg-red-100
                        flex
                        items-center
                        justify-center
                    ">

                        <CircleX
                            size={17}
                            className="text-red-500"
                        />

                    </div>


                    <div>

                        <p className="
                            text-[16px]
                            font-semibold
                            text-gray-900
                        ">
                            {previewLeadStats.invalidLeads}
                        </p>


                        <p className="
                            text-[8px]
                            text-gray-600
                        ">
                            Leads Excluded
                        </p>

                    </div>

                </div>

            </div>


            {/* SEARCH / FILTER */}

            <div className="
                flex
                flex-col
                lg:flex-row
                gap-2
                mt-3
            ">

                <div className="
                    relative
                    flex-1
                ">

                    <Search
                        size={13}
                        className="
                            absolute
                            left-2
                            top-1/2
                            -translate-y-1/2
                            text-gray-500
                        "
                    />


                    <input
                        type="text"
                        placeholder="Search by name, email, company..."
                        className="
                            w-full
                            h-[30px]
                            pl-7
                            pr-2
                            border
                            border-gray-300
                            rounded-md
                            text-[9px]
                            outline-none
                            focus:border-primary
                        "
                    />

                </div>


                <select className="
                    h-[30px]
                    w-full
                    lg:w-[105px]
                    border
                    border-gray-300
                    rounded-md
                    text-[9px]
                    px-2
                    bg-white
                ">

                    {previewStatusOptions.map(
                        (status) => (
                            <option
                                key={status}
                                value={status}
                            >
                                {status}
                            </option>
                        )
                    )}

                </select>


                <select className="
                    h-[30px]
                    w-full
                    lg:w-[120px]
                    border
                    border-gray-300
                    rounded-md
                    text-[9px]
                    px-2
                    bg-white
                ">

                    {previewLeadSourceOptions.map(
                        (source) => (
                            <option
                                key={source}
                                value={source}
                            >
                                {source}
                            </option>
                        )
                    )}

                </select>


                <button
                    type="button"
                    className="
                        h-[30px]
                        px-3
                        border
                        border-gray-300
                        rounded-md
                        text-[9px]
                        flex
                        items-center
                        justify-center
                        gap-1
                    "
                >

                    <Filter size={12} />

                    Filters

                </button>

            </div>


            {/* TABLE */}

            <div className="
                overflow-x-auto
                border
                border-gray-300
                rounded-md
                mt-3
            ">

                <table className="
                    w-full
                    min-w-[720px]
                    border-collapse
                ">

                    <thead>

                        <tr className="
                            bg-gray-50
                            border-b
                            border-gray-300
                        ">

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                <input type="checkbox" />
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                #
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                Name
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                Email
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                Company
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                Phone
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                Lead Source
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                Status
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                Created Date
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium">
                                Action
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {previewLeads.map(
                            (lead, index) => (

                                <tr
                                    key={lead.id || index}
                                    className="
                                        border-b
                                        border-gray-200
                                    "
                                >

                                    <td className="
                                        px-2
                                        py-1.5
                                        text-[8px]
                                    ">
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                        />
                                    </td>


                                    <td className="
                                        px-2
                                        py-1.5
                                        text-[8px]
                                    ">
                                        {index + 1}
                                    </td>


                                    <td className="
                                        px-2
                                        py-1.5
                                        text-[8px]
                                    ">
                                        {lead.name}
                                    </td>


                                    <td className="
                                        px-2
                                        py-1.5
                                        text-[8px]
                                    ">
                                        {lead.email}
                                    </td>


                                    <td className="
                                        px-2
                                        py-1.5
                                        text-[8px]
                                    ">
                                        {lead.company}
                                    </td>


                                    <td className="
                                        px-2
                                        py-1.5
                                        text-[8px]
                                    ">
                                        {lead.phone}
                                    </td>


                                    <td className="
                                        px-2
                                        py-1.5
                                        text-[8px]
                                    ">
                                        {lead.leadSource}
                                    </td>


                                    <td className="
                                        px-2
                                        py-1.5
                                        text-[8px]
                                    ">

                                        <span className={`
                                            px-1.5
                                            py-0.5
                                            rounded
                                            text-[6px]

                                            ${
                                                lead.status === "Converted"
                                                    ? "bg-green-100 text-green-600"
                                                    : lead.status === "Qualified"
                                                        ? "bg-purple-100 text-purple-600"
                                                        : "bg-blue-100 text-blue-600"
                                            }
                                        `}>
                                            {lead.status}
                                        </span>

                                    </td>


                                    <td className="
                                        px-2
                                        py-1.5
                                        text-[8px]
                                    ">
                                        {lead.createdDate}
                                    </td>


                                    <td className="
                                        px-2
                                        py-1.5
                                    ">

                                        <button
                                            type="button"
                                            className="text-gray-700"
                                        >
                                            <MoreVertical size={12} />
                                        </button>

                                    </td>

                                </tr>
                            )
                        )}

                    </tbody>

                </table>

            </div>


            {/* FOOTER */}

            <div className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-between
                gap-2
                mt-2
            ">

                <div className="
                    flex
                    items-center
                    gap-2
                ">

                    <span className="
                        text-[8px]
                        text-gray-600
                    ">
                        Rows per page:
                    </span>


                    <select className="
                        h-[23px]
                        border
                        border-gray-300
                        rounded
                        text-[8px]
                    ">

                        {rowsPerPageOptions.map(
                            (option) => (
                                <option
                                    key={option}
                                    value={option}
                                >
                                    {option}
                                </option>
                            )
                        )}

                    </select>

                </div>


                <p className="
                    text-[8px]
                    text-gray-600
                ">
                    Showing {previewPagination.start} to{" "}
                    {previewPagination.end} of{" "}
                    {previewLeadStats.totalLeads.toLocaleString()} leads
                </p>


                <div className="
                    flex
                    items-center
                    gap-1
                ">

                    <button className="
                        w-5
                        h-5
                        border
                        border-gray-300
                        rounded
                        text-[8px]
                    ">
                        ‹
                    </button>


                    {paginationPages.map(
                        (page, index) => (

                            <React.Fragment key={page}>

                                {index === 3 && (
                                    <span className="text-[8px]">
                                        ...
                                    </span>
                                )}


                                <button
                                    className={`
                                        w-5
                                        h-5
                                        rounded
                                        text-[8px]

                                        ${
                                            page === previewPagination.currentPage
                                                ? "bg-primary text-white"
                                                : "border border-gray-300"
                                        }
                                    `}
                                >
                                    {page}
                                </button>

                            </React.Fragment>
                        )
                    )}


                    <button className="
                        w-5
                        h-5
                        border
                        border-gray-300
                        rounded
                        text-[8px]
                    ">
                        ›
                    </button>

                </div>

            </div>

        </div>
    );
}


export default PreviewLeads;
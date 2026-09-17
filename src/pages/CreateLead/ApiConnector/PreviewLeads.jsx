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
                        Preview Leads
                    </h2>


                    <p
                        className="
                            text-[10px]
                            text-theme-text-secondary
                            mt-1
                        "
                    >
                        Review and verify leads before importing.
                    </p>

                </div>


                <div
                    className="
                        w-[175px]
                        min-h-[42px]
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

                        <ConnectorIcon
                            icon={connectorIcon}
                        />


                        <div>

                            <p
                                className="
                                    text-[9px]
                                    font-semibold
                                    text-theme-text
                                "
                            >
                                {selectedConnector}
                            </p>


                            <p
                                className="
                                    text-[7px]
                                    text-theme-text-secondary
                                "
                            >
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
                            hover:underline
                            cursor-pointer
                        "
                    >
                        ✎ Change
                    </button>

                </div>

            </div>


            {/* STATS */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-3
                    gap-2
                    mt-4
                "
            >

                {/* TOTAL */}

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
                            {previewLeadStats.totalLeads}
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


                {/* VALID */}

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

                        <CircleCheck
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
                            {previewLeadStats.validLeads}
                        </p>


                        <p
                            className="
                                text-[8px]
                                text-theme-text-secondary
                            "
                        >
                            Leads to import
                        </p>

                    </div>

                </div>


                {/* INVALID */}

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

                        <CircleX
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
                            {previewLeadStats.invalidLeads}
                        </p>


                        <p
                            className="
                                text-[8px]
                                text-theme-text-secondary
                            "
                        >
                            Leads Excluded
                        </p>

                    </div>

                </div>

            </div>


            {/* SEARCH / FILTER */}

            <div
                className="
                    flex
                    flex-col
                    lg:flex-row
                    gap-2
                    mt-3
                "
            >

                <div
                    className="
                        relative
                        flex-1
                    "
                >

                    <Search
                        size={13}
                        className="
                            absolute
                            left-2
                            top-1/2
                            -translate-y-1/2
                            text-theme-text-secondary
                            pointer-events-none
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
                            border-theme-border-light
                            rounded-md
                            text-[9px]
                            text-theme-text
                            bg-theme-surface
                            placeholder:text-theme-text-muted
                            outline-none
                            focus:border-primary
                        "
                    />

                </div>


                <select
                    className="
                        h-[30px]
                        w-full
                        lg:w-[105px]
                        border
                        border-theme-border-light
                        rounded-md
                        text-[9px]
                        px-2
                        bg-theme-surface
                        text-theme-text
                        outline-none
                    "
                >

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


                <select
                    className="
                        h-[30px]
                        w-full
                        lg:w-[120px]
                        border
                        border-theme-border-light
                        rounded-md
                        text-[9px]
                        px-2
                        bg-theme-surface
                        text-theme-text
                        outline-none
                    "
                >

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
                        border-theme-border-light
                        rounded-md
                        text-[9px]
                        text-theme-text
                        bg-theme-surface
                        flex
                        items-center
                        justify-center
                        gap-1
                        hover:bg-theme-surface-secondary
                        transition
                        cursor-pointer
                    "
                >

                    <Filter size={12} />

                    Filters

                </button>

            </div>


            {/* TABLE */}

            <div
                className="
                    overflow-x-auto
                    border
                    border-theme-border-light
                    rounded-md
                    mt-3

                    transition-colors
                    duration-300
                "
            >

                <table
                    className="
                        w-full
                        min-w-[720px]
                        border-collapse
                    "
                >

                    <thead>

                        <tr
                            className="
                                bg-theme-surface-secondary
                                border-b
                                border-theme-border-light
                            "
                        >

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
                                <input type="checkbox" />
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
                                #
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
                                Name
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
                                Email
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
                                Company
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
                                Phone
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
                                Lead Source
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
                                Status
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
                                Created Date
                            </th>

                            <th className="px-2 py-2 text-[8px] text-left font-medium text-theme-text">
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
                                        border-theme-border-light
                                        transition-colors
                                        duration-200
                                    "
                                >

                                    <td className="px-2 py-1.5 text-[8px]">
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                        />
                                    </td>


                                    <td className="px-2 py-1.5 text-[8px] text-theme-text">
                                        {index + 1}
                                    </td>


                                    <td className="px-2 py-1.5 text-[8px] text-theme-text">
                                        {lead.name}
                                    </td>


                                    <td className="px-2 py-1.5 text-[8px] text-theme-text">
                                        {lead.email}
                                    </td>


                                    <td className="px-2 py-1.5 text-[8px] text-theme-text">
                                        {lead.company}
                                    </td>


                                    <td className="px-2 py-1.5 text-[8px] text-theme-text">
                                        {lead.phone}
                                    </td>


                                    <td className="px-2 py-1.5 text-[8px] text-theme-text">
                                        {lead.leadSource}
                                    </td>


                                    <td className="px-2 py-1.5 text-[8px]">

                                        <span className={`
                                            px-1.5
                                            py-0.5
                                            rounded
                                            text-[6px]

                                            ${
                                                lead.status === "Converted"
                                                    ? "bg-green-500/15 text-green-500"
                                                    : lead.status === "Qualified"
                                                        ? "bg-primary/15 text-primary"
                                                        : "bg-blue-500/15 text-blue-500"
                                            }
                                        `}>
                                            {lead.status}
                                        </span>

                                    </td>


                                    <td className="px-2 py-1.5 text-[8px] text-theme-text">
                                        {lead.createdDate}
                                    </td>


                                    <td className="px-2 py-1.5">

                                        <button
                                            type="button"
                                            className="
                                                text-theme-text
                                                hover:text-primary
                                                transition
                                                cursor-pointer
                                            "
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

            <div
                className="
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    justify-between
                    gap-2
                    mt-2
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <span
                        className="
                            text-[8px]
                            text-theme-text-secondary
                        "
                    >
                        Rows per page:
                    </span>


                    <select
                        className="
                            h-[23px]
                            border
                            border-theme-border-light
                            rounded
                            text-[8px]
                            bg-theme-surface
                            text-theme-text
                            outline-none
                        "
                    >

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


                <p
                    className="
                        text-[8px]
                        text-theme-text-secondary
                    "
                >
                    Showing {previewPagination.start} to{" "}
                    {previewPagination.end} of{" "}
                    {previewLeadStats.totalLeads.toLocaleString()} leads
                </p>


                <div
                    className="
                        flex
                        items-center
                        gap-1
                    "
                >

                    <button
                        className="
                            w-5
                            h-5
                            border
                            border-theme-border-light
                            rounded
                            text-[8px]
                            text-theme-text
                            bg-theme-surface
                            hover:bg-theme-surface-secondary
                            transition
                            cursor-pointer
                        "
                    >
                        ‹
                    </button>


                    {paginationPages.map(
                        (page, index) => (

                            <React.Fragment key={page}>

                                {index === 3 && (
                                    <span className="text-[8px] text-theme-text-secondary">
                                        ...
                                    </span>
                                )}


                                <button
                                    className={`
                                        w-5
                                        h-5
                                        rounded
                                        text-[8px]
                                        cursor-pointer
                                        transition

                                        ${
                                            page === previewPagination.currentPage
                                                ? "bg-primary text-white"
                                                : "border border-theme-border-light text-theme-text bg-theme-surface hover:bg-theme-surface-secondary"
                                        }
                                    `}
                                >
                                    {page}
                                </button>

                            </React.Fragment>
                        )
                    )}


                    <button
                        className="
                            w-5
                            h-5
                            border
                            border-theme-border-light
                            rounded
                            text-[8px]
                            text-theme-text
                            bg-theme-surface
                            hover:bg-theme-surface-secondary
                            transition
                            cursor-pointer
                        "
                    >
                        ›
                    </button>

                </div>

            </div>

        </div>
    );
}


export default PreviewLeads;
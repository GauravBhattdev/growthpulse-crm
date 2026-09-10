import React from "react";

import {
    Plus,
    Trash2,
    Filter
} from "lucide-react";

import ConnectorIcon from "./ConnectorIcon";


function FilterData({
    selectedConnector,
    connectors,
    filters,
    filterFieldOptions,
    filterConditionOptions,
    filterSummary,
    estimatedLeads,
    updateFilter,
    addFilter,
    removeFilter,
    clearFilters,
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


    const selectClass = `
        w-full
        h-[34px]
        px-2.5
        border
        border-gray-300
        rounded-md
        bg-white
        text-[11px]
        text-gray-700
        outline-none
        focus:border-primary
    `;


    const inputClass = `
        w-full
        h-[35px]
        px-3
        border
        border-gray-300
        rounded-md
        text-[11px]
        text-gray-700
        outline-none
        focus:border-primary
    `;


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
                        Filter Data
                    </h2>


                    <p className="
                        text-[10px]
                        text-gray-600
                        mt-1
                    ">
                        Apply filters to import only the leads that match your criteria.
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


            {/* FILTERS */}

            <div className="
                border-t
                border-gray-300
                mt-4
                pt-3
            ">

                <h3 className="
                    text-[11px]
                    font-semibold
                    text-gray-800
                    mb-2
                ">
                    Apply Filters
                </h3>


                {/* COLUMN HEADERS */}

                <div className="
                    grid
                    grid-cols-[1fr_1fr_1.8fr_25px]
                    gap-2
                    mb-1
                    px-1
                ">

                    <span className="
                        text-[8px]
                        text-gray-600
                        font-medium
                    ">
                        Field
                    </span>


                    <span className="
                        text-[8px]
                        text-gray-600
                        font-medium
                    ">
                        Condition
                    </span>


                    <span className="
                        text-[8px]
                        text-gray-600
                        font-medium
                    ">
                        Value
                    </span>

                </div>


                {/* FILTER ROWS */}

                <div className="
                    flex
                    flex-col
                    gap-1.5
                ">

                    {filters.map(
                        (filterItem, index) => (

                            <div
                                key={index}
                                className="
                                    grid
                                    grid-cols-[1fr_1fr_1.8fr_25px]
                                    gap-2
                                    items-center
                                "
                            >

                                <select
                                    value={filterItem.field}
                                    onChange={(event) =>
                                        updateFilter(
                                            index,
                                            "field",
                                            event.target.value
                                        )
                                    }
                                    className={selectClass}
                                >

                                    {filterFieldOptions.map(
                                        (field) => (
                                            <option
                                                key={field}
                                                value={field}
                                            >
                                                {field}
                                            </option>
                                        )
                                    )}

                                </select>


                                <select
                                    value={filterItem.condition}
                                    onChange={(event) =>
                                        updateFilter(
                                            index,
                                            "condition",
                                            event.target.value
                                        )
                                    }
                                    className={selectClass}
                                >

                                    {filterConditionOptions.map(
                                        (condition) => (
                                            <option
                                                key={condition}
                                                value={condition}
                                            >
                                                {condition}
                                            </option>
                                        )
                                    )}

                                </select>


                                <div className="
                                    flex
                                    gap-1
                                    min-w-0
                                ">

                                    <input
                                        type="text"
                                        value={filterItem.value}
                                        onChange={(event) =>
                                            updateFilter(
                                                index,
                                                "value",
                                                event.target.value
                                            )
                                        }
                                        className={inputClass}
                                    />


                                    {filterItem.condition ===
                                        "Between" && (
                                        <input
                                            type="text"
                                            value={
                                                filterItem.secondValue || ""
                                            }
                                            onChange={(event) =>
                                                updateFilter(
                                                    index,
                                                    "secondValue",
                                                    event.target.value
                                                )
                                            }
                                            className={inputClass}
                                        />
                                    )}

                                </div>


                                <button
                                    type="button"
                                    onClick={() =>
                                        removeFilter(index)
                                    }
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        text-gray-700
                                        hover:text-red-500
                                    "
                                >
                                    <Trash2 size={13} />
                                </button>

                            </div>
                        )
                    )}

                </div>


                {/* FILTER BUTTONS */}

                <div className="
                    flex
                    justify-between
                    items-center
                    mt-3
                ">

                    <button
                        type="button"
                        onClick={addFilter}
                        className="
                            h-[31px]
                            px-4
                            border
                            border-primary
                            rounded-md
                            text-[9px]
                            text-primary
                            font-medium
                            flex
                            items-center
                            gap-1.5
                        "
                    >

                        <Plus size={13} />

                        Add Filter

                    </button>


                    <button
                        type="button"
                        onClick={clearFilters}
                        className="
                            h-[31px]
                            px-4
                            border
                            border-primary
                            rounded-md
                            text-[9px]
                            text-primary
                            font-medium
                            flex
                            items-center
                            gap-1.5
                        "
                    >

                        <Trash2 size={12} />

                        Clear All Filters

                    </button>

                </div>


                {/* SUMMARY */}

                <div className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    border
                    border-gray-300
                    rounded-md
                    mt-3
                    p-2.5
                ">

                    <div className="
                        flex
                        items-center
                        gap-2
                        min-w-0
                    ">

                        <div className="
                            w-10
                            h-10
                            rounded-full
                            bg-purple-100
                            flex
                            items-center
                            justify-center
                            shrink-0
                        ">

                            <Filter
                                size={19}
                                className="text-primary"
                            />

                        </div>


                        <div>

                            <p className="
                                text-[10px]
                                font-semibold
                                text-gray-800
                            ">
                                Filter Summary
                            </p>


                            <p className="
                                text-[7px]
                                leading-[11px]
                                text-gray-600
                            ">
                                {filterSummary}
                            </p>

                        </div>

                    </div>


                    <div className="
                        w-[125px]
                        shrink-0
                        bg-[#ead8fb]
                        rounded-md
                        py-2
                        text-center
                    ">

                        <p className="
                            text-[7px]
                            text-gray-700
                        ">
                            Estimated Leads
                        </p>


                        <p className="
                            text-[20px]
                            font-semibold
                            text-gray-900
                        ">
                            {estimatedLeads}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default FilterData;
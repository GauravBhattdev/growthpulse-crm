import React from "react";

import {
    Plus,
    RefreshCw,
    CalendarDays
} from "lucide-react";

import ConnectorIcon from "./ConnectorIcon";


function MapFields({
    selectedConnector,
    connectors,
    mappings,
    fieldOptions,
    updateMapping,
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
                        Map Fields
                    </h2>


                    <p className="
                        text-[10px]
                        text-gray-600
                        mt-1
                    ">
                        Map the fields from {selectedConnector} to your lead fields.
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


            {/* MAPPING */}

            <div className="
                border-t
                border-gray-300
                mt-4
                pt-3
            ">

                {/* HEADINGS */}

                <div className="
                    grid
                    grid-cols-[1fr_35px_1fr_1fr]
                    gap-2
                    items-center
                    mb-2
                    px-0.5
                ">

                    <div className="
                        text-[9px]
                        text-gray-700
                        font-semibold
                    ">
                        {selectedConnector} Fields
                    </div>


                    <div />


                    <div className="
                        text-[9px]
                        text-gray-700
                        font-semibold
                    ">
                        GrowthPulse Lead Fields
                    </div>


                    <div className="
                        text-[9px]
                        text-gray-700
                        font-semibold
                    ">
                        Default Value (optional)
                    </div>

                </div>


                {/* ROWS */}

                <div className="
                    flex
                    flex-col
                    gap-1.5
                ">

                    {mappings.map(
                        (mapping, index) => (

                            <div
                                key={index}
                                className="
                                    grid
                                    grid-cols-[1fr_35px_1fr_1fr]
                                    gap-2
                                    items-center
                                "
                            >

                                <select
                                    value={mapping.connector}
                                    onChange={(event) =>
                                        updateMapping(
                                            index,
                                            "connector",
                                            event.target.value
                                        )
                                    }
                                    className={selectClass}
                                >

                                    {fieldOptions.map(
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


                                <div className="
                                    flex
                                    justify-center
                                    text-gray-800
                                    text-base
                                ">
                                    →
                                </div>


                                <select
                                    value={mapping.growthpulse}
                                    onChange={(event) =>
                                        updateMapping(
                                            index,
                                            "growthpulse",
                                            event.target.value
                                        )
                                    }
                                    className={selectClass}
                                >

                                    {fieldOptions.map(
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


                                <div className="relative">

                                    <input
                                        type="text"
                                        value={mapping.defaultValue}
                                        onChange={(event) =>
                                            updateMapping(
                                                index,
                                                "defaultValue",
                                                event.target.value
                                            )
                                        }
                                        className={inputClass}
                                    />


                                    {index === 7 && (
                                        <CalendarDays
                                            size={13}
                                            className="
                                                absolute
                                                right-2
                                                top-1/2
                                                -translate-y-1/2
                                                text-gray-600
                                            "
                                        />
                                    )}

                                </div>

                            </div>
                        )
                    )}

                </div>


                {/* BUTTONS */}

                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    gap-2
                    mt-3
                ">

                    <button
                        type="button"
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
                            justify-center
                            gap-1.5
                        "
                    >

                        <Plus size={13} />

                        Add Custom Mapping

                    </button>


                    <button
                        type="button"
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
                            justify-center
                            gap-1.5
                        "
                    >

                        <RefreshCw size={13} />

                        Refresh Field

                    </button>

                </div>

            </div>

        </div>
    );
}


export default MapFields;
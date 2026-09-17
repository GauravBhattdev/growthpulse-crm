import React from "react";

import {
    Lock,
    Search
} from "lucide-react";

import ConnectorIcon from "./ConnectorIcon";


function SelectConnector({
    connectors,
    searchText,
    setSearchText,
    onConnectorSelect
}) {

    const filteredConnectors = connectors.filter(
        (connector) =>
            connector.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
    );


    return (

        <div>

            <h2
                className="
                    text-[17px]
                    font-semibold
                    text-primary
                "
            >
                Select Connector
            </h2>


            <p
                className="
                    text-[10px]
                    text-theme-text-secondary
                    mt-1
                    mb-3
                "
            >
                Choose the API or connector from which you want to import leads.
            </p>


            {/* SEARCH */}

            <div
                className="
                    relative
                    w-full
                    max-w-[300px]
                    mb-3
                "
            >

                <Search
                    size={14}
                    className="
                        absolute
                        left-2.5
                        top-1/2
                        -translate-y-1/2
                        text-theme-text-secondary
                        pointer-events-none
                    "
                />


                <input
                    type="text"
                    value={searchText}
                    onChange={(event) =>
                        setSearchText(event.target.value)
                    }
                    placeholder="Search Connectors..."
                    className="
                        w-full
                        h-[32px]
                        pl-8
                        pr-2
                        border
                        border-theme-border-light
                        rounded-md
                        text-[10px]
                        text-theme-text
                        bg-theme-surface
                        placeholder:text-theme-text-muted
                        outline-none
                        focus:border-primary
                        transition-colors
                        duration-200
                    "
                />

            </div>


            {/* CONNECTORS */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-2.5
                "
            >

                {filteredConnectors.map((connector) => (

                    <div
                        key={connector.name}
                        className="
                            relative
                            min-h-[98px]
                            border
                            border-theme-border-light
                            rounded-[7px]
                            p-2.5
                            bg-theme-surface

                            transition-colors
                            duration-300
                        "
                    >

                        <Lock
                            size={13}
                            className="
                                absolute
                                top-2
                                right-2
                                text-theme-text
                            "
                        />


                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <ConnectorIcon
                                icon={connector.icon}
                            />


                            <div>

                                <h3
                                    className="
                                        text-[11px]
                                        font-semibold
                                        text-theme-text
                                    "
                                >
                                    {connector.name}
                                </h3>


                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1
                                        mt-0.5
                                    "
                                >

                                    <span
                                        className="
                                            text-[7px]
                                            text-theme-text-secondary
                                        "
                                    >
                                        {connector.type}
                                    </span>


                                    {connector.type === "Paid" && (
                                        <span
                                            className="
                                                text-[6px]
                                                px-1
                                                rounded
                                                bg-primary/15
                                                text-primary
                                            "
                                        >
                                            Paid
                                        </span>
                                    )}

                                </div>

                            </div>

                        </div>


                        <p
                            className="
                                text-[8px]
                                text-theme-text-secondary
                                mt-2
                                leading-[11px]
                            "
                        >
                            {connector.description}
                        </p>


                        <button
                            type="button"
                            onClick={() =>
                                onConnectorSelect(connector.name)
                            }
                            className="
                                mt-2
                                px-3
                                py-1
                                bg-primary
                                text-white
                                text-[8px]
                                rounded-sm
                                hover:bg-primaryHover
                                transition
                                cursor-pointer
                            "
                        >
                            Connect
                        </button>

                    </div>
                ))}

            </div>

        </div>

    );
}


export default SelectConnector;
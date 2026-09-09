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

            <h2 className="
                text-[17px]
                font-semibold
                text-primary
            ">
                Select Connector
            </h2>


            <p className="
                text-[10px]
                text-gray-600
                mt-1
                mb-3
            ">
                Choose the API or connector from which you want to import leads.
            </p>


            {/* SEARCH */}

            <div className="
                relative
                w-full
                max-w-[300px]
                mb-3
            ">

                <Search
                    size={14}
                    className="
                        absolute
                        left-2.5
                        top-1/2
                        -translate-y-1/2
                        text-gray-500
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
                        border-gray-300
                        rounded-md
                        text-[10px]
                        outline-none
                        focus:border-primary
                    "
                />

            </div>


            {/* CONNECTORS */}

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-2.5
            ">

                {filteredConnectors.map((connector) => (

                    <div
                        key={connector.name}
                        className="
                            relative
                            min-h-[98px]
                            border
                            border-gray-400
                            rounded-[7px]
                            p-2.5
                            bg-white
                        "
                    >

                        <Lock
                            size={13}
                            className="
                                absolute
                                top-2
                                right-2
                                text-gray-800
                            "
                        />


                        <div className="
                            flex
                            items-center
                            gap-2
                        ">

                            <ConnectorIcon
                                icon={connector.icon}
                            />


                            <div>

                                <h3 className="
                                    text-[11px]
                                    font-semibold
                                    text-gray-800
                                ">
                                    {connector.name}
                                </h3>


                                <div className="
                                    flex
                                    items-center
                                    gap-1
                                    mt-0.5
                                ">

                                    <span className="
                                        text-[7px]
                                        text-gray-600
                                    ">
                                        {connector.type}
                                    </span>


                                    {connector.type === "Paid" && (
                                        <span className="
                                            text-[6px]
                                            px-1
                                            rounded
                                            bg-purple-100
                                            text-purple-600
                                        ">
                                            Paid
                                        </span>
                                    )}

                                </div>

                            </div>

                        </div>


                        <p className="
                            text-[8px]
                            text-gray-600
                            mt-2
                            leading-[11px]
                        ">
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
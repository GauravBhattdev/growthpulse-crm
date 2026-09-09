import React from "react";

import {
    Loader2,
    Plug
} from "lucide-react";

import ConnectorIcon from "./ConnectorIcon";


function ConfigureConnection({
    selectedConnector,
    connectors,
    connectionName,
    setConnectionName,
    authenticationMethod,
    setAuthenticationMethod,
    authenticationMethods,
    clientId,
    setClientId,
    clientSecret,
    setClientSecret,
    username,
    setUsername,
    password,
    setPassword,
    apiUrl,
    setApiUrl,
    testingConnection,
    onTestConnection,
    onChangeConnector
}) {

    /* =====================================================
       SELECTED CONNECTOR
    ===================================================== */

    const selectedConnectorData =
        connectors?.find(
            (connector) =>
                connector.name === selectedConnector
        );


    /* =====================================================
       CONNECTOR INFORMATION
    ===================================================== */

    const connectorIcon =
        selectedConnectorData?.icon || "salesforce";

    const connectorType =
        selectedConnectorData?.type || "CRM";


    /* =====================================================
       COMMON INPUT CLASS
    ===================================================== */

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


    /* =====================================================
       COMMON SELECT CLASS
    ===================================================== */

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


    return (
        <div>

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="
                flex
                items-start
                justify-between
                gap-3
            ">

                {/* PAGE TITLE */}

                <div>

                    <h2 className="
                        text-[17px]
                        font-semibold
                        text-primary
                    ">
                        Configure Connection
                    </h2>


                    <p className="
                        text-[10px]
                        text-gray-600
                        mt-1
                    ">
                        Connect your {selectedConnector} account to import leads.
                    </p>

                </div>


                {/* =================================================
                    SELECTED CONNECTOR
                ================================================= */}

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

                    {/* CONNECTOR INFO */}

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


                    {/* CHANGE CONNECTOR */}

                    <button
                        type="button"
                        onClick={onChangeConnector}
                        className="
                            text-[7px]
                            text-primary
                            hover:underline
                        "
                    >
                        ✎ Change
                    </button>

                </div>

            </div>


            {/* =================================================
                CONNECTION DETAILS
            ================================================= */}

            <div className="
                border-t
                border-gray-300
                mt-4
                pt-4
            ">

                <h3 className="
                    text-[16px]
                    font-semibold
                    text-gray-800
                    mb-3
                ">
                    Connection Details
                </h3>


                {/* =================================================
                    FORM GRID
                ================================================= */}

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-x-4
                    gap-y-3
                ">


                    {/* =================================================
                        CONNECTION NAME
                    ================================================= */}

                    <div>

                        <label className="
                            block
                            text-[10px]
                            font-medium
                            text-gray-700
                            mb-1
                        ">
                            Connection Name
                        </label>


                        <input
                            type="text"
                            value={connectionName}
                            onChange={(event) =>
                                setConnectionName(
                                    event.target.value
                                )
                            }
                            placeholder="Enter Connection Name"
                            className={inputClass}
                        />

                    </div>


                    {/* =================================================
                        AUTHENTICATION METHOD
                    ================================================= */}

                    <div>

                        <label className="
                            block
                            text-[10px]
                            font-medium
                            text-gray-700
                            mb-1
                        ">
                            Authentication Method
                        </label>


                        <select
                            value={authenticationMethod}
                            onChange={(event) =>
                                setAuthenticationMethod(
                                    event.target.value
                                )
                            }
                            className={selectClass}
                        >

                            {authenticationMethods?.map(
                                (method) => (

                                    <option
                                        key={method}
                                        value={method}
                                    >
                                        {method}
                                    </option>

                                )
                            )}

                        </select>

                    </div>


                    {/* =================================================
                        CLIENT ID
                    ================================================= */}

                    <div>

                        <label className="
                            block
                            text-[10px]
                            font-medium
                            text-gray-700
                            mb-1
                        ">
                            Client ID
                        </label>


                        <input
                            type="text"
                            value={clientId}
                            onChange={(event) =>
                                setClientId(
                                    event.target.value
                                )
                            }
                            placeholder="Enter Client ID"
                            className={inputClass}
                        />

                    </div>


                    {/* =================================================
                        CLIENT SECRET
                    ================================================= */}

                    <div>

                        <label className="
                            block
                            text-[10px]
                            font-medium
                            text-gray-700
                            mb-1
                        ">
                            Client Secret
                        </label>


                        <input
                            type="password"
                            value={clientSecret}
                            onChange={(event) =>
                                setClientSecret(
                                    event.target.value
                                )
                            }
                            placeholder="Enter Client Secret"
                            className={inputClass}
                        />

                    </div>


                    {/* =================================================
                        USERNAME
                    ================================================= */}

                    <div>

                        <label className="
                            block
                            text-[10px]
                            font-medium
                            text-gray-700
                            mb-1
                        ">
                            Username / Email
                        </label>


                        <input
                            type="text"
                            value={username}
                            onChange={(event) =>
                                setUsername(
                                    event.target.value
                                )
                            }
                            placeholder={`Enter ${selectedConnector} Username`}
                            className={inputClass}
                        />

                    </div>


                    {/* =================================================
                        PASSWORD
                    ================================================= */}

                    <div>

                        <label className="
                            block
                            text-[10px]
                            font-medium
                            text-gray-700
                            mb-1
                        ">
                            Password
                        </label>


                        <input
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(
                                    event.target.value
                                )
                            }
                            placeholder="Enter Password"
                            className={inputClass}
                        />

                    </div>


                    {/* =================================================
                        API URL
                    ================================================= */}

                    <div className="
                        md:col-span-2
                    ">

                        <label className="
                            block
                            text-[10px]
                            font-medium
                            text-gray-700
                            mb-1
                        ">
                            API URL
                        </label>


                        <input
                            type="text"
                            value={apiUrl}
                            onChange={(event) =>
                                setApiUrl(
                                    event.target.value
                                )
                            }
                            placeholder="Enter API URL"
                            className={inputClass}
                        />

                    </div>

                </div>


                {/* =================================================
                    TEST CONNECTION + STATUS
                ================================================= */}

                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-2
                    mt-3
                ">


                    {/* =================================================
                        TEST CONNECTION BUTTON
                    ================================================= */}

                    <button
                        type="button"
                        onClick={onTestConnection}
                        disabled={testingConnection}
                        className="
                            h-[35px]
                            px-4
                            border-2
                            border-primary
                            text-primary
                            rounded-md
                            text-[10px]
                            font-semibold
                            flex
                            items-center
                            justify-center
                            gap-2
                            disabled:opacity-60
                            disabled:cursor-not-allowed
                        "
                    >

                        {testingConnection ? (

                            <>
                                <Loader2
                                    size={13}
                                    className="animate-spin"
                                />

                                Testing Connection...
                            </>

                        ) : (

                            <>
                                <Plug
                                    size={13}
                                />

                                Test Connection
                            </>

                        )}

                    </button>


                    {/* =================================================
                        CONNECTION STATUS
                    ================================================= */}

                    <div className="
                        flex-1
                        min-h-[35px]
                        border
                        border-gray-400
                        rounded-md
                        px-3
                        flex
                        items-center
                        gap-2
                    ">

                        {/* STATUS DOT */}

                        <div className="
                            w-2
                            h-2
                            rounded-full
                            bg-gray-400
                        " />


                        {/* STATUS TEXT */}

                        <div>

                            <p className="
                                text-[9px]
                                font-semibold
                                text-gray-800
                            ">
                                Connection Status
                            </p>


                            <p className="
                                text-[7px]
                                text-gray-500
                            ">
                                Not Connected
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default ConfigureConnection;
import React, { useState } from "react";

import {
    ChevronRight,
    ChevronLeft,
    Check
} from "lucide-react";


import {
    connectors,
    steps,
    connectionDefaults,
    authenticationMethods,
    fieldOptions,
    defaultMappings,
    filterFieldOptions,
    filterConditionOptions,
    defaultFilters,
    newFilter,
    filterSummary,
    previewLeads,
    previewLeadStats,
    previewStatusOptions,
    previewLeadSourceOptions,
    rowsPerPageOptions,
    paginationPages,
    previewPagination
} from "../../data/apiConnectorData";


import Stepper from "./ApiConnector/Stepper";
import SelectConnector from "./ApiConnector/SelectConnector";
import ConfigureConnection from "./ApiConnector/ConfigureConnection";
import MapFields from "./ApiConnector/MapFields";
import FilterData from "./ApiConnector/FilterData";
import PreviewLeads from "./ApiConnector/PreviewLeads";
import ImportLeads from "./ApiConnector/ImportLeads";
import SuccessPopup from "./ApiConnector/SuccessPopup";


function ApiConnector() {

    // =====================================================
    // STEP
    // =====================================================

    const [currentStep, setCurrentStep] = useState(1);


    // =====================================================
    // CONNECTOR
    // =====================================================

    const [selectedConnector, setSelectedConnector] =
        useState("Salesforce");


    const [searchText, setSearchText] =
        useState("");


    // =====================================================
    // CONNECTION
    // =====================================================

    const [connectionName, setConnectionName] =
        useState(
            connectionDefaults.connectionName
        );


    const [authenticationMethod, setAuthenticationMethod] =
        useState(
            connectionDefaults.authenticationMethod
        );


    const [clientId, setClientId] =
        useState("");


    const [clientSecret, setClientSecret] =
        useState("");


    const [username, setUsername] =
        useState("");


    const [password, setPassword] =
        useState("");


    const [apiUrl, setApiUrl] =
        useState(
            connectionDefaults.apiUrl
        );


    // =====================================================
    // LOADING
    // =====================================================

    const [testingConnection, setTestingConnection] =
        useState(false);


    const [importingLeads, setImportingLeads] =
        useState(false);


    // =====================================================
    // SUCCESS POPUP
    // =====================================================

    const [showSuccessPopup, setShowSuccessPopup] =
        useState(false);


    const [successMessage, setSuccessMessage] =
        useState("");


    // =====================================================
    // MAPPINGS
    // =====================================================

    const [mappings, setMappings] =
        useState(defaultMappings);


    // =====================================================
    // FILTERS
    // =====================================================

    const [filters, setFilters] =
        useState(defaultFilters);


    // =====================================================
    // STEP NAVIGATION
    // =====================================================

    const handleStepClick = (stepNumber) => {
        setCurrentStep(stepNumber);
    };


    const handleNext = () => {

        if (currentStep < 6) {
            setCurrentStep(
                currentStep + 1
            );
        }
    };


    const handleBack = () => {

        if (currentStep > 1) {
            setCurrentStep(
                currentStep - 1
            );
        }
    };


    const handleFinish = () => {

        setCurrentStep(1);

    };


    // =====================================================
    // CONNECTOR
    // =====================================================

    const handleConnectorSelect = (connectorName) => {

        setSelectedConnector(
            connectorName
        );

    };


    const handleChangeConnector = () => {

        setCurrentStep(1);

    };


    // =====================================================
    // TEST CONNECTION
    // =====================================================

    const handleTestConnection = () => {

        setTestingConnection(true);


        setTimeout(() => {

            setTestingConnection(false);


            setSuccessMessage(
                "Connection tested successfully."
            );


            setShowSuccessPopup(true);

        }, 1500);
    };


    // =====================================================
    // IMPORT
    // =====================================================

    const handleImport = () => {

        setImportingLeads(true);


        setTimeout(() => {

            setImportingLeads(false);


            setSuccessMessage(
                "Leads imported successfully!"
            );


            setShowSuccessPopup(true);

        }, 1500);
    };


    // =====================================================
    // MAPPING
    // =====================================================

    const updateMapping = (
        index,
        property,
        value
    ) => {

        setMappings((previous) => {

            const updated = [
                ...previous
            ];


            updated[index] = {
                ...updated[index],
                [property]: value
            };


            return updated;

        });
    };


    // =====================================================
    // FILTER
    // =====================================================

    const addFilter = () => {

        setFilters((previous) => [

            ...previous,

            {
                ...newFilter
            }

        ]);
    };


    const removeFilter = (index) => {

        setFilters((previous) =>
            previous.filter(
                (_, filterIndex) =>
                    filterIndex !== index
            )
        );
    };


    const clearFilters = () => {

        setFilters([]);

    };


    const updateFilter = (
        index,
        property,
        value
    ) => {

        setFilters((previous) => {

            const updated = [
                ...previous
            ];


            updated[index] = {
                ...updated[index],
                [property]: value
            };


            return updated;

        });
    };


    // =====================================================
    // FOOTER BUTTONS
    // =====================================================

    const renderNextButton = () => {

        // STEP 1

        if (currentStep === 1) {

            return (
                <button
                    type="button"
                    onClick={handleNext}
                    className="
                        h-[38px]
                        min-w-[100px]
                        px-5
                        bg-primary
                        text-white
                        rounded-md
                        text-xs
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-primaryHover
                    "
                >

                    Next

                    <ChevronRight size={16} />

                </button>
            );
        }


        // STEP 2

        if (currentStep === 2) {

            return (
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={
                        testingConnection ||
                        importingLeads
                    }
                    className="
                        h-[38px]
                        min-w-[170px]
                        px-5
                        bg-primary
                        text-white
                        rounded-md
                        text-xs
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-primaryHover
                        disabled:opacity-60
                    "
                >

                    Save & Continue

                    <ChevronRight size={16} />

                </button>
            );
        }


        // STEP 3

        if (currentStep === 3) {

            return (
                <button
                    type="button"
                    onClick={handleNext}
                    className="
                        h-[38px]
                        min-w-[170px]
                        px-5
                        bg-primary
                        text-white
                        rounded-md
                        text-xs
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-primaryHover
                    "
                >

                    Save & Continue

                    <ChevronRight size={16} />

                </button>
            );
        }


        // STEP 4

        if (currentStep === 4) {

            return (
                <button
                    type="button"
                    onClick={handleNext}
                    className="
                        h-[38px]
                        min-w-[205px]
                        px-5
                        bg-primary
                        text-white
                        rounded-md
                        text-xs
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-primaryHover
                    "
                >

                    Apply Filters & Preview

                    <ChevronRight size={16} />

                </button>
            );
        }


        // STEP 5

        if (currentStep === 5) {

            return (
                <button
                    type="button"
                    onClick={handleNext}
                    className="
                        h-[38px]
                        min-w-[190px]
                        px-5
                        bg-primary
                        text-white
                        rounded-md
                        text-xs
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-primaryHover
                    "
                >

                    Import{" "}

                    {previewLeadStats.validLeads.toLocaleString()}

                    {" "}Leads

                    <ChevronRight size={16} />

                </button>
            );
        }


        // STEP 6

        if (currentStep === 6) {

            return (
                <button
                    type="button"
                    onClick={handleFinish}
                    disabled={importingLeads}
                    className="
                        h-[38px]
                        min-w-[105px]
                        px-5
                        bg-primary
                        text-white
                        rounded-md
                        text-xs
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-primaryHover
                        disabled:opacity-60
                        disabled:cursor-not-allowed
                    "
                >

                    Finish

                    <Check size={16} />

                </button>
            );
        }


        return null;
    };


    // =====================================================
    // STEP CONTENT
    // =====================================================

    const renderStepContent = () => {

        switch (currentStep) {

            // =================================================
            // STEP 1
            // =================================================

            case 1:

                return (
                    <SelectConnector
                        connectors={connectors}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        onConnectorSelect={
                            handleConnectorSelect
                        }
                    />
                );


            // =================================================
            // STEP 2
            // =================================================

            case 2:

                return (
                    <ConfigureConnection
                        selectedConnector={
                            selectedConnector
                        }
                        connectors={connectors}
                        connectionName={
                            connectionName
                        }
                        setConnectionName={
                            setConnectionName
                        }
                        authenticationMethod={
                            authenticationMethod
                        }
                        setAuthenticationMethod={
                            setAuthenticationMethod
                        }
                        authenticationMethods={
                            authenticationMethods
                        }
                        clientId={
                            clientId
                        }
                        setClientId={
                            setClientId
                        }
                        clientSecret={
                            clientSecret
                        }
                        setClientSecret={
                            setClientSecret
                        }
                        username={
                            username
                        }
                        setUsername={
                            setUsername
                        }
                        password={
                            password
                        }
                        setPassword={
                            setPassword
                        }
                        apiUrl={
                            apiUrl
                        }
                        setApiUrl={
                            setApiUrl
                        }
                        testingConnection={
                            testingConnection
                        }
                        onTestConnection={
                            handleTestConnection
                        }
                        onChangeConnector={
                            handleChangeConnector
                        }
                    />
                );


            // =================================================
            // STEP 3
            // =================================================

            case 3:

                return (
                    <MapFields
                        selectedConnector={
                            selectedConnector
                        }
                        connectors={
                            connectors
                        }
                        mappings={
                            mappings
                        }
                        fieldOptions={
                            fieldOptions
                        }
                        updateMapping={
                            updateMapping
                        }
                        onChangeConnector={
                            handleChangeConnector
                        }
                    />
                );


            // =================================================
            // STEP 4
            // =================================================

            case 4:

                return (
                    <FilterData
                        selectedConnector={
                            selectedConnector
                        }
                        connectors={
                            connectors
                        }
                        filters={
                            filters
                        }
                        filterFieldOptions={
                            filterFieldOptions
                        }
                        filterConditionOptions={
                            filterConditionOptions
                        }
                        filterSummary={
                            filterSummary
                        }
                        estimatedLeads={
                            previewLeadStats.totalLeads
                        }
                        updateFilter={
                            updateFilter
                        }
                        addFilter={
                            addFilter
                        }
                        removeFilter={
                            removeFilter
                        }
                        clearFilters={
                            clearFilters
                        }
                        onChangeConnector={
                            handleChangeConnector
                        }
                    />
                );


            // =================================================
            // STEP 5
            // =================================================

            case 5:

                return (
                    <PreviewLeads
                        selectedConnector={
                            selectedConnector
                        }
                        connectors={
                            connectors
                        }
                        previewLeads={
                            previewLeads
                        }
                        previewLeadStats={
                            previewLeadStats
                        }
                        previewStatusOptions={
                            previewStatusOptions
                        }
                        previewLeadSourceOptions={
                            previewLeadSourceOptions
                        }
                        rowsPerPageOptions={
                            rowsPerPageOptions
                        }
                        paginationPages={
                            paginationPages
                        }
                        previewPagination={
                            previewPagination
                        }
                        onChangeConnector={
                            handleChangeConnector
                        }
                    />
                );


            // =================================================
            // STEP 6
            // =================================================

            case 6:

                return (
                    <ImportLeads
                        importingLeads={
                            importingLeads
                        }
                        onImport={
                            handleImport
                        }
                    />
                );


            default:

                return null;
        }
    };


    // =====================================================
    // RENDER
    // =====================================================

    return (

        <div className="w-full">

            {/* MAIN */}

            <div className="
                flex
                flex-col
                lg:flex-row
                gap-3
                items-stretch
            ">

                {/* STEPPER */}

                <Stepper
                    steps={steps}
                    currentStep={currentStep}
                    onStepClick={
                        handleStepClick
                    }
                />


                {/* CONTENT */}

                <div className="
                    flex-1
                    min-w-0
                    border
                    border-gray-300
                    rounded-[8px]
                    bg-white
                    p-4
                    sm:p-5
                ">

                    {renderStepContent()}

                </div>

            </div>


            {/* FOOTER */}

            <div className="
                flex
                items-center
                justify-between
                mt-3
                gap-3
            ">

                {/* LEFT BUTTONS */}

                <div className="
                    flex
                    items-center
                    gap-2
                ">

                    {/* BACK */}

                    <button
                        type="button"
                        onClick={handleBack}
                        disabled={
                            currentStep === 1 ||
                            testingConnection ||
                            importingLeads
                        }
                        className="
                            h-[38px]
                            min-w-[92px]
                            px-4
                            border
                            border-gray-800
                            rounded-md
                            bg-white
                            text-gray-900
                            text-xs
                            font-medium
                            flex
                            items-center
                            justify-center
                            gap-2
                            hover:bg-gray-100
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        <ChevronLeft size={17} />

                        Back

                    </button>


                    {/* CANCEL */}

                    <button
                        type="button"
                        onClick={() =>
                            setCurrentStep(1)
                        }
                        disabled={
                            testingConnection ||
                            importingLeads
                        }
                        className="
                            h-[38px]
                            min-w-[92px]
                            px-4
                            border
                            border-gray-800
                            rounded-md
                            bg-white
                            text-gray-900
                            text-xs
                            font-medium
                            flex
                            items-center
                            justify-center
                            gap-2
                            hover:bg-gray-100
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        Cancel

                    </button>

                </div>


                {/* RIGHT BUTTON */}

                {renderNextButton()}

            </div>


            {/* SUCCESS POPUP */}

            {showSuccessPopup && (

                <SuccessPopup
                    message={
                        successMessage
                    }
                    onClose={() =>
                        setShowSuccessPopup(false)
                    }
                />

            )}

        </div>
    );
}


export default ApiConnector;
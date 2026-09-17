import React, { useState } from "react";

import {
    ChevronRight,
    ChevronLeft,
    Check
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";


import {
    connectors,
    steps,
    connectionDefaults,
    authenticationMethods,
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
import FilterData from "./ApiConnector/FilterData";
import PreviewLeads from "./ApiConnector/PreviewLeads";
import ImportLeads from "./ApiConnector/ImportLeads";
import SuccessPopup from "./ApiConnector/SuccessPopup";


function ApiConnector() {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);

    const [selectedConnector, setSelectedConnector] = useState("Salesforce");

    const [searchText, setSearchText] = useState("");

    const [connectionName, setConnectionName] =
        useState(connectionDefaults.connectionName);

    const [authenticationMethod, setAuthenticationMethod] =
        useState(connectionDefaults.authenticationMethod);

    const [clientId, setClientId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [apiUrl, setApiUrl] = useState(connectionDefaults.apiUrl);

    const [testingConnection, setTestingConnection] = useState(false);
    const [importingLeads, setImportingLeads] = useState(false);

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const [filters, setFilters] = useState(defaultFilters);


    const handleStepClick = (stepNumber) => {
        setCurrentStep(stepNumber);
    };

    const handleNext = () => {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };


    const handleFinish = () => {

        toast.success("Lead created successfully!");

        setTimeout(() => {
            navigate("/leads");
        }, 800);

    };


    const handleCancel = () => {

        if (testingConnection || importingLeads) return;

        navigate("/leads");

    };


    const handleConnectorSelect = (connectorName) => {
        setSelectedConnector(connectorName);
    };

    const handleChangeConnector = () => {
        setCurrentStep(1);
    };


    const handleTestConnection = () => {

        setTestingConnection(true);

        setTimeout(() => {

            setTestingConnection(false);

            setSuccessMessage("Connection tested successfully.");

            setShowSuccessPopup(true);

        }, 1500);

    };


    const handleImport = () => {

        setImportingLeads(true);

        setTimeout(() => {

            setImportingLeads(false);

            toast.success("Lead created successfully!");

            setTimeout(() => {
                navigate("/leads");
            }, 800);

        }, 1500);

    };


    const addFilter = () => {
        setFilters((previous) => [
            ...previous,
            { ...newFilter }
        ]);
    };

    const removeFilter = (index) => {
        setFilters((previous) =>
            previous.filter((_, i) => i !== index)
        );
    };

    const clearFilters = () => {
        setFilters([]);
    };

    const updateFilter = (index, property, value) => {

        setFilters((previous) => {

            const updated = [...previous];

            updated[index] = {
                ...updated[index],
                [property]: value
            };

            return updated;

        });

    };


    // =================================================
    // NEXT BUTTON
    // =================================================

    const renderNextButton = () => {

        if (currentStep === 1) {
            return (
                <button
                    type="button"
                    onClick={handleNext}
                    className="
                        h-[38px]
                        min-w-[100px]
                        px-5
                        bg-primary hover:bg-primaryHover
                        text-white
                        rounded-md
                        text-xs font-medium
                        flex items-center justify-center gap-2
                        transition cursor-pointer
                    "
                >
                    Next
                    <ChevronRight size={16} />
                </button>
            );
        }


        if (currentStep === 2) {
            return (
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={testingConnection || importingLeads}
                    className="
                        h-[38px]
                        min-w-[170px]
                        px-5
                        bg-primary hover:bg-primaryHover
                        text-white
                        rounded-md
                        text-xs font-medium
                        flex items-center justify-center gap-2
                        transition cursor-pointer
                        disabled:opacity-60 disabled:cursor-not-allowed
                    "
                >
                    Save & Continue
                    <ChevronRight size={16} />
                </button>
            );
        }


        if (currentStep === 3) {
            return (
                <button
                    type="button"
                    onClick={handleNext}
                    className="
                        h-[38px]
                        min-w-[205px]
                        px-5
                        bg-primary hover:bg-primaryHover
                        text-white
                        rounded-md
                        text-xs font-medium
                        flex items-center justify-center gap-2
                        transition cursor-pointer
                    "
                >
                    Apply Filters & Preview
                    <ChevronRight size={16} />
                </button>
            );
        }


        if (currentStep === 4) {
            return (
                <button
                    type="button"
                    onClick={handleNext}
                    className="
                        h-[38px]
                        min-w-[190px]
                        px-5
                        bg-primary hover:bg-primaryHover
                        text-white
                        rounded-md
                        text-xs font-medium
                        flex items-center justify-center gap-2
                        transition cursor-pointer
                    "
                >
                    Import {previewLeadStats.validLeads.toLocaleString()} Leads
                    <ChevronRight size={16} />
                </button>
            );
        }


        if (currentStep === 5) {
            return (
                <button
                    type="button"
                    onClick={handleFinish}
                    disabled={importingLeads}
                    className="
                        h-[38px]
                        min-w-[105px]
                        px-5
                        bg-primary hover:bg-primaryHover
                        text-white
                        rounded-md
                        text-xs font-medium
                        flex items-center justify-center gap-2
                        transition cursor-pointer
                        disabled:opacity-60 disabled:cursor-not-allowed
                    "
                >
                    Finish
                    <Check size={16} />
                </button>
            );
        }

        return null;
    };


    // =================================================
    // STEP CONTENT
    // =================================================

    const renderStepContent = () => {

        switch (currentStep) {

            case 1:
                return (
                    <SelectConnector
                        connectors={connectors}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        onConnectorSelect={handleConnectorSelect}
                    />
                );

            case 2:
                return (
                    <ConfigureConnection
                        selectedConnector={selectedConnector}
                        connectors={connectors}
                        connectionName={connectionName}
                        setConnectionName={setConnectionName}
                        authenticationMethod={authenticationMethod}
                        setAuthenticationMethod={setAuthenticationMethod}
                        authenticationMethods={authenticationMethods}
                        clientId={clientId}
                        setClientId={setClientId}
                        clientSecret={clientSecret}
                        setClientSecret={setClientSecret}
                        username={username}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}
                        apiUrl={apiUrl}
                        setApiUrl={setApiUrl}
                        testingConnection={testingConnection}
                        onTestConnection={handleTestConnection}
                        onChangeConnector={handleChangeConnector}
                    />
                );

            case 3:
                return (
                    <FilterData
                        selectedConnector={selectedConnector}
                        connectors={connectors}
                        filters={filters}
                        filterFieldOptions={filterFieldOptions}
                        filterConditionOptions={filterConditionOptions}
                        filterSummary={filterSummary}
                        estimatedLeads={previewLeadStats.totalLeads}
                        updateFilter={updateFilter}
                        addFilter={addFilter}
                        removeFilter={removeFilter}
                        clearFilters={clearFilters}
                        onChangeConnector={handleChangeConnector}
                    />
                );

            case 4:
                return (
                    <PreviewLeads
                        selectedConnector={selectedConnector}
                        connectors={connectors}
                        previewLeads={previewLeads}
                        previewLeadStats={previewLeadStats}
                        previewStatusOptions={previewStatusOptions}
                        previewLeadSourceOptions={previewLeadSourceOptions}
                        rowsPerPageOptions={rowsPerPageOptions}
                        paginationPages={paginationPages}
                        previewPagination={previewPagination}
                        onChangeConnector={handleChangeConnector}
                    />
                );

            case 5:
                return (
                    <ImportLeads
                        importingLeads={importingLeads}
                        onImport={handleImport}
                    />
                );

            default:
                return null;
        }

    };


    return (

        <div className="w-full">

            <div className="flex flex-col lg:flex-row gap-3 items-stretch">

                <Stepper
                    steps={steps}
                    currentStep={currentStep}
                    onStepClick={handleStepClick}
                />


                <div
                    className="
                        flex-1 min-w-0 flex flex-col
                        border border-theme-border-light
                        rounded-[8px]
                        bg-theme-surface
                        transition-colors duration-300
                    "
                >

                    <div className="flex-1 p-4 sm:p-5">
                        {renderStepContent()}
                    </div>


                    <div
                        className="
                            shrink-0
                            border-t border-theme-border-light
                            px-4 sm:px-5
                            py-3
                            flex items-center justify-between
                            gap-3
                            transition-colors duration-300
                        "
                    >

                        <div className="flex items-center gap-2">

                            <button
                                type="button"
                                onClick={handleBack}
                                disabled={currentStep === 1 || testingConnection || importingLeads}
                                className="
                                    h-[38px]
                                    min-w-[92px]
                                    px-4
                                    border border-theme-border-light
                                    rounded-md
                                    bg-theme-surface
                                    text-theme-text
                                    text-xs font-medium
                                    flex items-center justify-center gap-2
                                    hover:bg-theme-surface-secondary
                                    transition cursor-pointer
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                "
                            >
                                <ChevronLeft size={17} />
                                Back
                            </button>


                            <button
                                type="button"
                                onClick={handleCancel}
                                disabled={testingConnection || importingLeads}
                                className="
                                    h-[38px]
                                    min-w-[92px]
                                    px-4
                                    border border-theme-border-light
                                    rounded-md
                                    bg-theme-surface
                                    text-theme-text
                                    text-xs font-medium
                                    flex items-center justify-center gap-2
                                    hover:bg-theme-surface-secondary
                                    transition cursor-pointer
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                "
                            >
                                Cancel
                            </button>

                        </div>


                        {renderNextButton()}

                    </div>

                </div>

            </div>


            {showSuccessPopup && (
                <SuccessPopup
                    message={successMessage}
                    onClose={() => setShowSuccessPopup(false)}
                />
            )}

        </div>

    );

}


export default ApiConnector;
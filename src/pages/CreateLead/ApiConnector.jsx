import React, { useState } from "react";

import {
  Check,
  ChevronRight,
  ChevronLeft,
  Search,
  FileSpreadsheet,
  Webhook,
  Code2,
  Loader2,
  X,
} from "lucide-react";

function ApiConnector() {
  // =====================================================
  // CURRENT STEP
  // =====================================================

  const [currentStep, setCurrentStep] = useState(1);

  // =====================================================
  // SELECTED CONNECTOR
  // =====================================================

  const [selectedConnector, setSelectedConnector] = useState("Salesforce");

  // =====================================================
  // SEARCH
  // =====================================================

  const [searchText, setSearchText] = useState("");

  // =====================================================
  // LOADING / SUCCESS POPUP
  // =====================================================

  const [testingConnection, setTestingConnection] = useState(false);
  const [importingLeads, setImportingLeads] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // =====================================================
  // CONNECTOR LIST
  // =====================================================

  const connectors = [
    {
      name: "Salesforce",
      description: "Connect leads from Salesforce.",
      icon: "salesforce",
    },

    {
      name: "HubSpot",
      description: "Connect leads from HubSpot.",
      icon: "hubspot",
    },

    {
      name: "Zoho CRM",
      description: "Connect leads from Zoho CRM.",
      icon: "zoho",
    },

    {
      name: "Pipedrive",
      description: "Connect leads from Pipedrive.",
      icon: "pipedrive",
    },

    {
      name: "Google Sheets",
      description: "Import leads from Google Sheets.",
      icon: "sheets",
    },

    {
      name: "Microsoft Excel",
      description: "Import leads from Microsoft Excel.",
      icon: "excel",
    },

    {
      name: "Webhooks",
      description: "Receive leads using webhooks.",
      icon: "webhook",
    },

    {
      name: "Custom API",
      description: "Connect your custom API.",
      icon: "api",
    },
  ];

  // =====================================================
  // STEPS
  // =====================================================

  const steps = [
    {
      number: 1,
      title: "Select Connector",
      description: "Choose a platform to fetch leads.",
    },

    {
      number: 2,
      title: "Configure Connection",
      description: "Connect your account.",
    },

    {
      number: 3,
      title: "Map Fields",
      description: "Map connector fields with CRM.",
    },

    {
      number: 4,
      title: "Filter Data",
      description: "Filter the data you want to import.",
    },

    {
      number: 5,
      title: "Preview Leads",
      description: "Review leads before importing.",
    },

    {
      number: 6,
      title: "Import Leads",
      description: "Import leads to your CRM.",
    },
  ];

  // =====================================================
  // FILTER CONNECTORS
  // =====================================================

  const filteredConnectors = connectors.filter((connector) =>
    connector.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  // =====================================================
  // GET CONNECTOR ICON
  // =====================================================

  const getConnectorIcon = (icon) => {
    if (icon === "salesforce") {
      return (
        <div
          className="
                    w-16
                    h-16
                    rounded-full
                    bg-[#e8f7ff]
                    flex
                    items-center
                    justify-center
                "
        >
          <span
            className="
                        text-[10px]
                        font-bold
                        text-[#00a1e0]
                    "
          >
            salesforce
          </span>
        </div>
      );
    }

    if (icon === "hubspot") {
      return (
        <div
          className="
                    w-16
                    h-16
                    rounded-full
                    bg-[#fff1ed]
                    flex
                    items-center
                    justify-center
                "
        >
          <span
            className="
                        text-xl
                        font-bold
                        text-[#ff6542]
                    "
          >
            ●
          </span>
        </div>
      );
    }

    if (icon === "zoho") {
      return (
        <div
          className="
                    w-16
                    h-16
                    rounded-lg
                    bg-white
                    flex
                    items-center
                    justify-center
                    border
                    border-gray-100
                "
        >
          <span
            className="
                        text-[13px]
                        font-bold
                        text-[#e52d27]
                    "
          >
            ZOHO
          </span>
        </div>
      );
    }

    if (icon === "pipedrive") {
      return (
        <div
          className="
                    w-16
                    h-16
                    flex
                    items-center
                    justify-center
                "
        >
          <span
            className="
                        text-4xl
                        font-bold
                        text-black
                    "
          >
            p
          </span>
        </div>
      );
    }

    if (icon === "sheets") {
      return (
        <div
          className="
                    w-16
                    h-16
                    rounded-md
                    bg-green-100
                    flex
                    items-center
                    justify-center
                "
        >
          <FileSpreadsheet size={38} className="text-green-600" />
        </div>
      );
    }

    if (icon === "excel") {
      return (
        <div
          className="
                    w-16
                    h-16
                    rounded-md
                    bg-green-100
                    flex
                    items-center
                    justify-center
                "
        >
          <span
            className="
                        text-2xl
                        font-bold
                        text-green-700
                    "
          >
            X
          </span>
        </div>
      );
    }

    if (icon === "webhook") {
      return (
        <div
          className="
                    w-16
                    h-16
                    rounded-full
                    bg-pink-50
                    flex
                    items-center
                    justify-center
                "
        >
          <Webhook size={38} className="text-pink-600" />
        </div>
      );
    }

    return (
      <div
        className="
                w-16
                h-16
                rounded-full
                border-2
                border-purple-500
                flex
                items-center
                justify-center
            "
      >
        <Code2 size={30} className="text-purple-500" />
      </div>
    );
  };

  // =====================================================
  // STEP CLICK
  // =====================================================

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  // =====================================================
  // NEXT
  // =====================================================

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  // =====================================================
  // BACK / CANCEL
  // =====================================================

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // =====================================================
  // SELECT CONNECTOR
  // =====================================================

  const handleConnectorSelect = (connectorName) => {
    setSelectedConnector(connectorName);
  };

  // =====================================================
  // TEST CONNECTION
  // =====================================================

  const handleTestConnection = () => {
    setTestingConnection(true);

    setTimeout(() => {
      setTestingConnection(false);
      setSuccessMessage("Connection tested successfully.");
      setShowSuccessPopup(true);
    }, 1500);
  };

  // =====================================================
  // IMPORT LEADS
  // =====================================================

  const handleImport = () => {
    setImportingLeads(true);

    setTimeout(() => {
      setImportingLeads(false);
      setSuccessMessage("Leads imported successfully!");
      setShowSuccessPopup(true);
    }, 1500);
  };

  return (
    <div
      className="
            w-full
        "
    >
      {/* =================================================
                TWO SEPARATE BOXES
            ================================================= */}

      <div
        className="
                flex
                flex-col
                lg:flex-row
                gap-4
                items-stretch
            "
      >
        {/* =================================================
                    BOX 1 - CONNECTOR SETUP
                ================================================= */}

        <div
          className="
                    w-full
                    lg:w-[285px]
                    xl:w-[300px]
                    shrink-0
                    border
                    border-gray-300
                    rounded-[10px]
                    bg-white
                    p-5
                "
        >
          <h2
            className="
                        text-[17px]
                        font-semibold
                        text-[#8b3df5]
                        mb-6
                    "
          >
            1. Connector Setup
          </h2>

          {/* =================================================
                        VERTICAL STEPS
                    ================================================= */}

          <div
            className="
                        relative
                    "
          >
            {/* VERTICAL LINE */}

            <div
              className="
                            absolute
                            left-[15px]
                            top-[20px]
                            bottom-[20px]
                            w-[1px]
                            bg-gray-300
                        "
            />

            <div
              className="
                            flex
                            flex-col
                            gap-7
                        "
            >
              {steps.map((step) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => handleStepClick(step.number)}
                  className="
                                        relative
                                        flex
                                        items-start
                                        gap-3
                                        text-left
                                        w-full
                                    "
                >
                  {/* STEP CIRCLE */}

                  <div
                    className={`
                                        relative
                                        z-10
                                        w-[31px]
                                        h-[31px]
                                        shrink-0
                                        rounded-full
                                        border
                                        flex
                                        items-center
                                        justify-center
                                        text-xs
                                        font-medium
                                        transition-all

                                        ${
                                          currentStep === step.number
                                            ? "bg-[#8b3df5] border-[#8b3df5] text-white"
                                            : currentStep > step.number
                                              ? "bg-[#8b3df5] border-[#8b3df5] text-white"
                                              : "bg-white border-gray-300 text-gray-700"
                                        }
                                    `}
                  >
                    {currentStep > step.number ? (
                      <Check size={15} />
                    ) : (
                      step.number
                    )}
                  </div>

                  {/* STEP TEXT */}

                  <div
                    className="
                                        pt-0.5
                                        pr-1
                                    "
                  >
                    <p
                      className={`
                                            text-[13px]
                                            font-medium

                                            ${
                                              currentStep === step.number
                                                ? "text-[#8b3df5]"
                                                : "text-gray-800"
                                            }
                                        `}
                    >
                      {step.title}
                    </p>

                    <p
                      className="
                                            text-[10px]
                                            leading-[15px]
                                            text-gray-500
                                            mt-1
                                        "
                    >
                      {step.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
                    BOX 2 - MAIN CONTENT
                ================================================= */}

        <div
          className="
                    flex-1
                    min-w-0
                    border
                    border-gray-300
                    rounded-[10px]
                    bg-white
                    p-5
                    sm:p-6
                "
        >
          {/* =================================================
                        STEP 1 - SELECT CONNECTOR
                    ================================================= */}

          {currentStep === 1 && (
            <div>
              <h2
                className="
                                text-[17px]
                                font-semibold
                                text-[#8b3df5]
                                mb-1
                            "
              >
                2. Select Connector
              </h2>

              <p
                className="
                                text-xs
                                text-gray-600
                                mb-5
                            "
              >
                Choose the platform from which you want to receive leads.
              </p>

              {/* SEARCH */}

              <div
                className="
                                relative
                                w-full
                                max-w-[330px]
                                mb-5
                            "
              >
                <Search
                  size={17}
                  className="
                                        absolute
                                        left-3
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-500
                                    "
                />

                <input
                  type="text"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  placeholder="Search connectors..."
                  className="
                                        w-full
                                        h-[42px]
                                        pl-10
                                        pr-3
                                        border
                                        border-gray-300
                                        rounded-md
                                        text-xs
                                        outline-none
                                        focus:border-[#8b3df5]
                                    "
                />
              </div>

              {/* CONNECTOR CARDS */}

              <div
                className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                xl:grid-cols-4
                                gap-4
                            "
              >
                {filteredConnectors.map((connector) => (
                  <button
                    key={connector.name}
                    type="button"
                    onClick={() => handleConnectorSelect(connector.name)}
                    className={`
                                            relative
                                            min-h-[190px]
                                            border
                                            rounded-lg
                                            px-4
                                            py-5
                                            flex
                                            flex-col
                                            items-center
                                            justify-center
                                            text-center
                                            transition-all
                                            duration-200

                                            ${
                                              selectedConnector ===
                                              connector.name
                                                ? "border-[#8b3df5] shadow-sm"
                                                : "border-gray-300 hover:border-[#8b3df5]"
                                            }
                                        `}
                  >
                    {/* CHECK */}

                    {selectedConnector === connector.name && (
                      <div
                        className="
                                                absolute
                                                top-2
                                                right-2
                                                w-6
                                                h-6
                                                rounded-full
                                                bg-[#8b3df5]
                                                flex
                                                items-center
                                                justify-center
                                            "
                      >
                        <Check size={14} className="text-white" />
                      </div>
                    )}

                    {/* ICON */}

                    <div
                      className="
                                            mb-4
                                        "
                    >
                      {getConnectorIcon(connector.icon)}
                    </div>

                    {/* NAME */}

                    <h3
                      className="
                                            text-[14px]
                                            font-semibold
                                            text-gray-800
                                        "
                    >
                      {connector.name}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                                            text-[11px]
                                            leading-[17px]
                                            text-gray-600
                                            mt-2
                                            max-w-[150px]
                                        "
                    >
                      {connector.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* =================================================
                        STEP 2 - CONFIGURE CONNECTION
                    ================================================= */}

          {currentStep === 2 && (
            <div>
              <h2
                className="
                                text-[17px]
                                font-semibold
                                text-[#8b3df5]
                            "
              >
                2. Configure Connection
              </h2>

              <p
                className="
                                text-xs
                                text-gray-600
                                mt-1
                                mb-5
                            "
              >
                Connect your {selectedConnector} account.
              </p>

              <div
                className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-4
                                max-w-[750px]
                            "
              >
                <div>
                  <label
                    className="
                                        block
                                        text-xs
                                        font-medium
                                        text-gray-700
                                        mb-1.5
                                    "
                  >
                    API URL
                  </label>

                  <input
                    type="text"
                    placeholder="Enter API URL"
                    className="
                                            w-full
                                            h-[38px]
                                            px-3
                                            border
                                            border-gray-300
                                            rounded-md
                                            text-xs
                                            outline-none
                                            focus:border-[#8b3df5]
                                        "
                  />
                </div>

                <div>
                  <label
                    className="
                                        block
                                        text-xs
                                        font-medium
                                        text-gray-700
                                        mb-1.5
                                    "
                  >
                    API Key
                  </label>

                  <input
                    type="password"
                    placeholder="Enter API key"
                    className="
                                            w-full
                                            h-[38px]
                                            px-3
                                            border
                                            border-gray-300
                                            rounded-md
                                            text-xs
                                            outline-none
                                            focus:border-[#8b3df5]
                                        "
                  />
                </div>

                <div>
                  <label
                    className="
                                        block
                                        text-xs
                                        font-medium
                                        text-gray-700
                                        mb-1.5
                                    "
                  >
                    Username
                  </label>

                  <input
                    type="text"
                    placeholder="Enter username"
                    className="
                                            w-full
                                            h-[38px]
                                            px-3
                                            border
                                            border-gray-300
                                            rounded-md
                                            text-xs
                                            outline-none
                                            focus:border-[#8b3df5]
                                        "
                  />
                </div>

                <div>
                  <label
                    className="
                                        block
                                        text-xs
                                        font-medium
                                        text-gray-700
                                        mb-1.5
                                    "
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter password"
                    className="
                                            w-full
                                            h-[38px]
                                            px-3
                                            border
                                            border-gray-300
                                            rounded-md
                                            text-xs
                                            outline-none
                                            focus:border-[#8b3df5]
                                        "
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleTestConnection}
                disabled={testingConnection || importingLeads}
                className="
                                    mt-5
                                    px-5
                                    py-2
                                    bg-green-600
                                    text-white
                                    text-xs
                                    rounded-md
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    disabled:opacity-70
                                    disabled:cursor-not-allowed
                                "
              >
                {testingConnection ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Testing Connection...
                  </>
                ) : (
                  "Test Connection"
                )}
              </button>
            </div>
          )}

          {/* =================================================
                        STEP 3 - MAP FIELDS
                    ================================================= */}

          {currentStep === 3 && (
            <div>
              <h2
                className="
                                text-[17px]
                                font-semibold
                                text-[#8b3df5]
                            "
              >
                3. Map Fields
              </h2>

              <p
                className="
                                text-xs
                                text-gray-600
                                mt-1
                                mb-5
                            "
              >
                Map connector fields with your CRM fields.
              </p>

              <div
                className="
                                overflow-x-auto
                            "
              >
                <table
                  className="
                                    w-full
                                    min-w-[600px]
                                    border-collapse
                                "
                >
                  <thead>
                    <tr className="bg-gray-50">
                      <th
                        className="
                                                border
                                                border-gray-200
                                                px-3
                                                py-2.5
                                                text-left
                                                text-xs
                                                font-medium
                                            "
                      >
                        CRM Field
                      </th>

                      <th
                        className="
                                                border
                                                border-gray-200
                                                px-3
                                                py-2.5
                                                text-left
                                                text-xs
                                                font-medium
                                            "
                      >
                        Connector Field
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      "First Name",
                      "Last Name",
                      "Email",
                      "Phone",
                      "Company Name",
                      "Source",
                      "Status",
                    ].map((field) => (
                      <tr key={field}>
                        <td
                          className="
                                                    border
                                                    border-gray-200
                                                    px-3
                                                    py-2.5
                                                    text-xs
                                                "
                        >
                          {field}
                        </td>

                        <td
                          className="
                                                    border
                                                    border-gray-200
                                                    px-3
                                                    py-2
                                                "
                        >
                          <select
                            className="
                                                        w-full
                                                        h-[34px]
                                                        border
                                                        border-gray-300
                                                        rounded
                                                        px-2
                                                        text-xs
                                                        bg-white
                                                    "
                          >
                            <option>{field}</option>

                            <option>Email</option>

                            <option>Phone</option>

                            <option>Company</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =================================================
                        STEP 4 - FILTER DATA
                    ================================================= */}

          {currentStep === 4 && (
            <div>
              <h2
                className="
                                text-[17px]
                                font-semibold
                                text-[#8b3df5]
                            "
              >
                4. Filter Data
              </h2>

              <p
                className="
                                text-xs
                                text-gray-600
                                mt-1
                                mb-5
                            "
              >
                Filter the data you want to import.
              </p>

              <div
                className="
                                border
                                border-gray-300
                                rounded-lg
                                p-4
                            "
              >
                <div
                  className="
                                    grid
                                    grid-cols-1
                                    md:grid-cols-3
                                    gap-4
                                "
                >
                  <div>
                    <label
                      className="
                                            block
                                            text-xs
                                            font-medium
                                            mb-1.5
                                        "
                    >
                      Field
                    </label>

                    <select
                      className="
                                            w-full
                                            h-[38px]
                                            border
                                            border-gray-300
                                            rounded-md
                                            px-2
                                            text-xs
                                        "
                    >
                      <option>Status</option>

                      <option>Source</option>

                      <option>Industry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="
                                            block
                                            text-xs
                                            font-medium
                                            mb-1.5
                                        "
                    >
                      Condition
                    </label>

                    <select
                      className="
                                            w-full
                                            h-[38px]
                                            border
                                            border-gray-300
                                            rounded-md
                                            px-2
                                            text-xs
                                        "
                    >
                      <option>Is</option>

                      <option>Is not</option>

                      <option>Contains</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="
                                            block
                                            text-xs
                                            font-medium
                                            mb-1.5
                                        "
                    >
                      Value
                    </label>

                    <input
                      type="text"
                      placeholder="Enter value"
                      className="
                                                w-full
                                                h-[38px]
                                                border
                                                border-gray-300
                                                rounded-md
                                                px-3
                                                text-xs
                                                outline-none
                                            "
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =================================================
                        STEP 5 - PREVIEW
                    ================================================= */}

          {currentStep === 5 && (
            <div>
              <h2
                className="
                                text-[17px]
                                font-semibold
                                text-[#8b3df5]
                            "
              >
                5. Preview Leads
              </h2>

              <p
                className="
                                text-xs
                                text-gray-600
                                mt-1
                                mb-5
                            "
              >
                Review leads before importing.
              </p>

              <div
                className="
                                grid
                                grid-cols-1
                                sm:grid-cols-3
                                gap-3
                                mb-5
                            "
              >
                <div
                  className="
                                    bg-purple-50
                                    rounded-md
                                    p-4
                                "
                >
                  <p
                    className="
                                        text-[10px]
                                        text-gray-500
                                    "
                  >
                    Total Leads
                  </p>

                  <p
                    className="
                                        text-xl
                                        font-semibold
                                        text-[#8b3df5]
                                        mt-1
                                    "
                  >
                    48
                  </p>
                </div>

                <div
                  className="
                                    bg-green-50
                                    rounded-md
                                    p-4
                                "
                >
                  <p
                    className="
                                        text-[10px]
                                        text-gray-500
                                    "
                  >
                    Valid Leads
                  </p>

                  <p
                    className="
                                        text-xl
                                        font-semibold
                                        text-green-600
                                        mt-1
                                    "
                  >
                    45
                  </p>
                </div>

                <div
                  className="
                                    bg-red-50
                                    rounded-md
                                    p-4
                                "
                >
                  <p
                    className="
                                        text-[10px]
                                        text-gray-500
                                    "
                  >
                    Errors
                  </p>

                  <p
                    className="
                                        text-xl
                                        font-semibold
                                        text-red-500
                                        mt-1
                                    "
                  >
                    3
                  </p>
                </div>
              </div>

              <div
                className="
                                overflow-x-auto
                                border
                                border-gray-200
                                rounded-md
                            "
              >
                <table
                  className="
                                    w-full
                                    min-w-[700px]
                                "
                >
                  <thead>
                    <tr className="bg-gray-50">
                      <th
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                                text-left
                                            "
                      >
                        First Name
                      </th>

                      <th
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                                text-left
                                            "
                      >
                        Last Name
                      </th>

                      <th
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                                text-left
                                            "
                      >
                        Email
                      </th>

                      <th
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                                text-left
                                            "
                      >
                        Phone
                      </th>

                      <th
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                                text-left
                                            "
                      >
                        Company
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t">
                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        Rahul
                      </td>

                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        Sharma
                      </td>

                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        rahul@example.com
                      </td>

                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        +91 9876543210
                      </td>

                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        ABC Company
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        Amit
                      </td>

                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        Kumar
                      </td>

                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        amit@example.com
                      </td>

                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        +91 9988776655
                      </td>

                      <td
                        className="
                                                px-3
                                                py-2
                                                text-xs
                                            "
                      >
                        XYZ Pvt Ltd
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =================================================
                        STEP 6 - IMPORT
                    ================================================= */}

          {currentStep === 6 && (
            <div
              className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            text-center
                            min-h-[450px]
                        "
            >
              <div
                className="
                                w-16
                                h-16
                                rounded-full
                                bg-green-100
                                flex
                                items-center
                                justify-center
                                mb-4
                            "
              >
                <Check size={30} className="text-green-600" />
              </div>

              <h2
                className="
                                text-lg
                                font-semibold
                                text-gray-800
                            "
              >
                Ready to Import
              </h2>

              <p
                className="
                                text-xs
                                text-gray-500
                                mt-2
                            "
              >
                Your leads are ready to be imported into the CRM.
              </p>

              <button
                type="button"
                onClick={handleImport}
                disabled={importingLeads || testingConnection}
                className="
                                    mt-5
                                    px-6
                                    py-2.5
                                    bg-[#8b3df5]
                                    text-white
                                    rounded-md
                                    text-xs
                                    hover:bg-[#7630d8]
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    disabled:opacity-70
                                    disabled:cursor-not-allowed
                                "
              >
                {importingLeads ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Importing Leads...
                  </>
                ) : (
                  "Import Leads"
                )}
              </button>
            </div>
          )}

          {/* =================================================
                        FOOTER BUTTONS
                    ================================================= */}

          <div
            className="
                        flex
                        items-center
                        justify-between
                        mt-6
                        pt-4
                        border-t
                        border-gray-200
                    "
          >
            {/* CANCEL */}

            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1 || testingConnection || importingLeads}
              className="
        flex
        items-center
        justify-center
        gap-2
        px-5
        py-2.5
        min-w-[100px]
        border
        border-gray-800
        rounded-md
        bg-white
        text-gray-900
        text-sm
        font-semibold
        hover:bg-gray-100
        transition
        disabled:cursor-not-allowed
    "
            >
              <ChevronLeft size={16} />
              Cancel
            </button>

            {/* NEXT */}

            {currentStep < 6 && (
              <button
                type="button"
                onClick={handleNext}
                disabled={testingConnection || importingLeads}
                className="
                                    flex
                                    items-center
                                    gap-1.5
                                    px-5
                                    py-2.5
                                    bg-[#8b3df5]
                                    text-white
                                    rounded-md
                                    text-xs
                                    hover:bg-[#7630d8]
                                    disabled:opacity-70
                                    disabled:cursor-not-allowed
                                "
              >
                Next
                <ChevronRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* =================================================
                    SUCCESS POPUP
          ================================================= */}

      {showSuccessPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-[400px] rounded-xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Success
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {successMessage}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowSuccessPopup(false)}
                className="text-gray-500 hover:text-gray-800 transition"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={() => setShowSuccessPopup(false)}
                className="
                  px-5
                  py-2
                  bg-[#8b3df5]
                  text-white
                  text-sm
                  rounded-md
                  hover:bg-[#7630d8]
                  transition
                "
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApiConnector;
    
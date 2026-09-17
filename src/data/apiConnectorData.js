// =====================================================
// CONNECTORS
// =====================================================

export const connectors = [
    {
        name: "Salesforce",
        description: "Import leads from Salesforce CRM.",
        type: "CRM",
        icon: "salesforce"
    },
    {
        name: "HubSpot",
        description: "Import leads from HubSpot CRM.",
        type: "CRM",
        icon: "hubspot"
    },
    {
        name: "Zoho CRM",
        description: "Import leads from Zoho CRM.",
        type: "CRM",
        icon: "zoho"
    },
    {
        name: "Pipedrive",
        description: "Import leads from Pipedrive CRM.",
        type: "CRM",
        icon: "pipedrive"
    },
    {
        name: "Google Sheets",
        description: "Import leads from Google Sheets.",
        type: "CRM",
        icon: "sheets"
    },
    {
        name: "Microsoft Excel",
        description: "Import leads from Microsoft Excel CRM.",
        type: "CRM",
        icon: "excel"
    },
    {
        name: "Webhooks",
        description: "Receive leads from Webhooks.",
        type: "Paid",
        icon: "webhook"
    },
    {
        name: "Custom API",
        description: "Connect your custom API.",
        type: "Paid",
        icon: "api"
    },
    {
        name: "Other Connectors",
        description: "Import leads from other connectors.",
        type: "CRM",
        icon: "other"
    }
];


// =====================================================
// STEPS  (Map Fields removed — now 5 steps)
// =====================================================

export const steps = [
    {
        number: 1,
        title: "Select Connector",
        description: "Choose your connector"
    },
    {
        number: 2,
        title: "Configure Connection",
        description: "Enter API details"
    },
    {
        number: 3,
        title: "Filter Data",
        description: "Apply filters for leads"
    },
    {
        number: 4,
        title: "Preview Leads",
        description: "Preview & verify leads"
    },
    {
        number: 5,
        title: "Import Leads",
        description: "Import filtered leads"
    }
];


// =====================================================
// CONNECTION DEFAULTS
// =====================================================

export const connectionDefaults = {
    connectionName: "Salesforce Lead import",
    authenticationMethod: "OAuth 2.0",
    apiUrl: "https://login.salesforce.com/service/data/v59.0/"
};


// =====================================================
// AUTHENTICATION OPTIONS
// =====================================================

export const authenticationMethods = [
    "OAuth 2.0",
    "API Key",
    "Basic Authentication"
];


// =====================================================
// FIELD OPTIONS
// =====================================================

export const fieldOptions = [
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Company",
    "Title",
    "Lead Source",
    "Created Date"
];


// =====================================================
// DEFAULT MAPPINGS
// =====================================================

export const defaultMappings = [
    {
        connector: "First Name",
        growthpulse: "First Name",
        defaultValue: "-"
    },
    {
        connector: "Last Name",
        growthpulse: "Last Name",
        defaultValue: "-"
    },
    {
        connector: "Email",
        growthpulse: "Email",
        defaultValue: "-"
    },
    {
        connector: "Phone",
        growthpulse: "Phone",
        defaultValue: "-"
    },
    {
        connector: "Company",
        growthpulse: "Company",
        defaultValue: "-"
    },
    {
        connector: "Title",
        growthpulse: "Title",
        defaultValue: "-"
    },
    {
        connector: "Lead Source",
        growthpulse: "Lead Source",
        defaultValue: "-"
    },
    {
        connector: "Created Date",
        growthpulse: "Created Date",
        defaultValue: "Select Date"
    }
];


// =====================================================
// FILTER FIELD OPTIONS
// =====================================================

export const filterFieldOptions = [
    "Created Date",
    "Lead Source",
    "Status",
    "Country",
    "Email"
];


// =====================================================
// FILTER CONDITION OPTIONS
// =====================================================

export const filterConditionOptions = [
    "Between",
    "Equals",
    "Not Equals",
    "Contains",
    "Is Not Empty"
];


// =====================================================
// DEFAULT FILTERS
// =====================================================

export const defaultFilters = [
    {
        field: "Created Date",
        condition: "Between",
        value: "01/05/2026",
        secondValue: "31/05/2026"
    },
    {
        field: "Lead Source",
        condition: "Equals",
        value: "Website"
    },
    {
        field: "Status",
        condition: "Not Equals",
        value: "Converted"
    },
    {
        field: "Country",
        condition: "Equals",
        value: "India"
    },
    {
        field: "Email",
        condition: "Is Not Empty",
        value: "Is Not Empty"
    }
];


// =====================================================
// NEW FILTER DEFAULT
// =====================================================

export const newFilter = {
    field: "Status",
    condition: "Equals",
    value: "New"
};


// =====================================================
// FILTER SUMMARY
// =====================================================

export const filterSummary =
    "Created Date between 01/02/2026 AND Lead Source equals website AND Status not equals Converted AND Country equals India AND is not empty";


// =====================================================
// PREVIEW LEADS
// =====================================================

export const previewLeads = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@growthpulse.com",
        company: "Acme Corp",
        phone: "+91 9876543210",
        leadSource: "Website",
        status: "Converted",
        createdDate: "01/05/2026"
    },
    {
        id: 2,
        name: "Ankit Verma",
        email: "ankit@growthpulse.com",
        company: "Tech Solutions",
        phone: "+91 9123456780",
        leadSource: "Website",
        status: "New",
        createdDate: "01/05/2026"
    },
    {
        id: 3,
        name: "Priya Singh",
        email: "priya@growthpulse.com",
        company: "Innovative Pvt Ltd",
        phone: "+91 9988776655",
        leadSource: "API",
        status: "Qualified",
        createdDate: "01/05/2026"
    },
    {
        id: 4,
        name: "Karan Singh",
        email: "karan@growthpulse.com",
        company: "Global Inc",
        phone: "+91 9000090000",
        leadSource: "Partner",
        status: "New",
        createdDate: "30/04/2026"
    },
    {
        id: 5,
        name: "Neha Mehta",
        email: "neha@growthpulse.com",
        company: "NextGen Systems",
        phone: "+91 8765432109",
        leadSource: "Website",
        status: "Converted",
        createdDate: "30/04/2026"
    }
];


// =====================================================
// PREVIEW LEAD STATS
// =====================================================

export const previewLeadStats = {
    totalLeads: 1245,
    validLeads: 1210,
    invalidLeads: 35
};


// =====================================================
// PREVIEW FILTER OPTIONS
// =====================================================

export const previewStatusOptions = [
    "All Status",
    "New",
    "Qualified",
    "Converted"
];

export const previewLeadSourceOptions = [
    "All Lead Source",
    "Website",
    "API",
    "Partner"
];


// =====================================================
// TABLE OPTIONS
// =====================================================

export const rowsPerPageOptions = [
    10,
    25,
    50
];

export const paginationPages = [
    1,
    2,
    3,
    125
];


// =====================================================
// PREVIEW PAGINATION TEXT
// =====================================================

export const previewPagination = {
    currentPage: 1,
    totalPages: 125,
    start: 1,
    end: 10
};
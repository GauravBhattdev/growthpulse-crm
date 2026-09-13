import React, { useState } from "react";

import {
    X,
    Building2,
    MapPin,
    Mail,
    Phone,
    Globe,
    Upload,
    Save
} from "lucide-react";


// =====================================================
// EDIT ORGANISATION
// =====================================================

function EditOrganisation({ onClose }) {

    // =================================================
    // FORM STATES
    // =================================================

    const [organisationName, setOrganisationName] = useState(
        "GrowthPulse Technologies"
    );

    const [location, setLocation] = useState(
        "Noida, Uttar Pradesh, India"
    );

    const [email, setEmail] = useState(
        "info@growthpulse.com"
    );

    const [phone, setPhone] = useState(
        "+91 98765 43210"
    );

    const [website, setWebsite] = useState(
        "www.growthpulse.com"
    );

    const [details, setDetails] = useState(
        "GrowthPulse Technologies is a leading technology company focused on providing innovative solution for business growth and digital transformation."
    );


    // =================================================
    // LOGO
    // =================================================

    const [logo, setLogo] = useState(null);


    // =================================================
    // CLOSE ANIMATION
    // =================================================

    const [isClosing, setIsClosing] = useState(false);


    // =================================================
    // CLOSE POPUP
    // =================================================

    const handleClose = () => {

        setIsClosing(true);

        setTimeout(() => {

            onClose();

        }, 250);

    };


    // =================================================
    // LOGO CHANGE
    // =================================================

    const handleLogoChange = (event) => {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        const imageUrl = URL.createObjectURL(file);

        setLogo(imageUrl);

    };


    // =================================================
    // SAVE
    // =================================================

    const handleSave = () => {

        console.log("Organization Updated:", {
            organisationName,
            location,
            email,
            phone,
            website,
            details,
            logo
        });

        handleClose();

    };


    return (

        <div
            className={`
                fixed
                inset-0
                z-50

                flex
                items-center
                justify-center

                bg-black/40

                p-4

                transition-opacity
                duration-300

                ${isClosing
                    ? "opacity-0"
                    : "opacity-100"
                }
            `}
        >


            {/* =================================================
                POPUP
            ================================================= */}

            <div
                className={`
                    w-full
                    max-w-[500px]

                    max-h-[90vh]

                    bg-white

                    rounded-lg

                    shadow-2xl

                    overflow-y-auto

                    transition-all
                    duration-300
                    ease-out

                    ${
                        isClosing
                            ? "opacity-0 translate-y-6 scale-[0.98]"
                            : "opacity-100 translate-y-0 scale-100"
                    }
                `}
            >


                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        h-[76px]

                        flex
                        items-center
                        justify-between

                        px-4

                        border-b
                        border-gray-300
                    "
                >

                    <div className="
                        flex
                        items-center
                        gap-3
                    ">


                        {/* ORGANIZATION ICON */}

                        <div
                            className="
                                w-[42px]
                                h-[42px]

                                rounded-md

                                bg-purple-100

                                flex
                                items-center
                                justify-center
                            "
                        >

                            <Building2
                                size={25}
                                className="text-purple-500"
                            />

                        </div>


                        {/* TITLE */}

                        <div>

                            <h2
                                className="
                                    text-[20px]
                                    font-semibold
                                    text-gray-900
                                "
                            >
                                Edit Organization
                            </h2>

                            <p
                                className="
                                    text-[11px]
                                    text-gray-600
                                    mt-0.5
                                "
                            >
                                Update your organization details and information
                            </p>

                        </div>

                    </div>


                    {/* CLOSE */}

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            w-7
                            h-7

                            flex
                            items-center
                            justify-center

                            rounded-md

                            text-gray-500

                            hover:bg-gray-100
                            hover:text-gray-800

                            transition
                            duration-200
                        "
                    >

                        <X size={18} />

                    </button>

                </div>


                {/* =================================================
                    BODY
                ================================================= */}

                <div className="px-4 py-3">


                    {/* =================================================
                        ORGANIZATION LOGO
                    ================================================= */}

                    <div className="mb-5">

                        <h3
                            className="
                                text-[14px]
                                font-semibold
                                text-gray-900
                            "
                        >
                            Organization Logo
                        </h3>

                        <p
                            className="
                                text-[9px]
                                text-gray-500
                                mt-1
                            "
                        >
                            Upload your organization logo (JPG,PNG,SVG).
                        </p>


                        {/* LOGO + BUTTON */}

                        <div
                            className="
                                flex
                                items-center
                                gap-5

                                mt-3
                            "
                        >


                            {/* LOGO */}

                            <div className="text-center">

                                <div
                                    className="
                                        w-[70px]
                                        h-[70px]

                                        rounded-full

                                        border
                                        border-purple-500

                                        flex
                                        items-center
                                        justify-center

                                        overflow-hidden

                                        bg-white
                                    "
                                >

                                    {logo ? (

                                        <img
                                            src={logo}
                                            alt="Organization Logo"
                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                            "
                                        />

                                    ) : (

                                        <Building2
                                            size={32}
                                            strokeWidth={1.7}
                                            className="text-black"
                                        />

                                    )}

                                </div>


                                <p
                                    className="
                                        text-[9px]
                                        text-gray-500
                                        mt-2
                                    "
                                >
                                    Current logo
                                </p>

                            </div>


                            {/* CHANGE LOGO */}

                            <label
                                className="
                                    h-[32px]

                                    px-3

                                    flex
                                    items-center
                                    gap-2

                                    border
                                    border-purple-500

                                    rounded-md

                                    text-[9px]
                                    text-purple-500

                                    cursor-pointer

                                    hover:bg-purple-50

                                    transition
                                    duration-200
                                "
                            >

                                <Upload size={14} />

                                Change Logo

                                <input
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.svg"
                                    onChange={handleLogoChange}
                                    className="hidden"
                                />

                            </label>

                        </div>

                    </div>


                    {/* =================================================
                        FORM GRID
                    ================================================= */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2

                            gap-x-5
                            gap-y-4
                        "
                    >


                        {/* ORGANIZATION NAME */}

                        <div>

                            <label
                                className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-900
                                    mb-1.5
                                "
                            >
                                Organization Name
                            </label>

                            <div className="relative">

                                <Building2
                                    size={14}
                                    className="
                                        absolute
                                        left-2
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-800
                                    "
                                />

                                <input
                                    type="text"
                                    value={organisationName}
                                    onChange={(e) =>
                                        setOrganisationName(e.target.value)
                                    }
                                    className="
                                        w-full
                                        h-[38px]

                                        border
                                        border-gray-700

                                        rounded-md

                                        pl-8
                                        pr-2

                                        text-[11px]
                                        text-gray-800

                                        outline-none

                                        focus:border-purple-500
                                    "
                                />

                            </div>

                        </div>


                        {/* LOCATION */}

                        <div>

                            <label
                                className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-900
                                    mb-1.5
                                "
                            >
                                Location
                            </label>

                            <div className="relative">

                                <MapPin
                                    size={14}
                                    className="
                                        absolute
                                        left-2
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-800
                                    "
                                />

                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                    className="
                                        w-full
                                        h-[38px]

                                        border
                                        border-gray-700

                                        rounded-md

                                        pl-8
                                        pr-2

                                        text-[11px]
                                        text-gray-800

                                        outline-none

                                        focus:border-purple-500
                                    "
                                />

                            </div>

                        </div>


                        {/* EMAIL */}

                        <div>

                            <label
                                className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-900
                                    mb-1.5
                                "
                            >
                                Email
                            </label>

                            <div className="relative">

                                <Mail
                                    size={14}
                                    className="
                                        absolute
                                        left-2
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-800
                                    "
                                />

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    className="
                                        w-full
                                        h-[38px]

                                        border
                                        border-gray-700

                                        rounded-md

                                        pl-8
                                        pr-2

                                        text-[11px]
                                        text-gray-800

                                        outline-none

                                        focus:border-purple-500
                                    "
                                />

                            </div>

                        </div>


                        {/* PHONE */}

                        <div>

                            <label
                                className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-900
                                    mb-1.5
                                "
                            >
                                Phone
                            </label>

                            <div className="relative">

                                <Phone
                                    size={14}
                                    className="
                                        absolute
                                        left-2
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-800
                                    "
                                />

                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                    className="
                                        w-full
                                        h-[38px]

                                        border
                                        border-gray-700

                                        rounded-md

                                        pl-8
                                        pr-2

                                        text-[11px]
                                        text-gray-800

                                        outline-none

                                        focus:border-purple-500
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        WEBSITE
                    ================================================= */}

                    <div className="mt-4">

                        <label
                            className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-900
                                mb-1.5
                            "
                        >
                            Website
                        </label>

                        <div className="relative">

                            <Globe
                                size={14}
                                className="
                                    absolute
                                    left-2
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-800
                                "
                            />

                            <input
                                type="text"
                                value={website}
                                onChange={(e) =>
                                    setWebsite(e.target.value)
                                }
                                className="
                                    w-full
                                    h-[38px]

                                    border
                                    border-gray-700

                                    rounded-md

                                    pl-8
                                    pr-2

                                    text-[11px]
                                    text-gray-800

                                    outline-none

                                    focus:border-purple-500
                                "
                            />

                        </div>

                    </div>


                    {/* =================================================
                        ORGANIZATION DETAILS
                    ================================================= */}

                    <div className="mt-4">

                        <label
                            className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-900
                                mb-1
                            "
                        >
                            Organization Details
                        </label>

                        <p
                            className="
                                text-[9px]
                                text-gray-500
                                mb-1.5
                            "
                        >
                            Add a short description about your organization
                        </p>


                        <div className="relative">

                            <textarea
                                value={details}
                                maxLength={500}
                                onChange={(e) =>
                                    setDetails(e.target.value)
                                }
                                className="
                                    w-full
                                    h-[68px]

                                    resize-none

                                    border
                                    border-gray-700

                                    rounded-md

                                    p-2

                                    pb-5

                                    text-[10px]
                                    text-gray-500

                                    outline-none

                                    focus:border-purple-500
                                "
                            />


                            {/* CHARACTER COUNT */}

                            <span
                                className="
                                    absolute
                                    right-2
                                    bottom-1.5

                                    text-[7px]
                                    text-gray-500
                                "
                            >
                                {details.length}/500
                            </span>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <div
                    className="
                        flex
                        items-center
                        justify-between

                        px-4
                        py-3

                        border-t
                        border-gray-200
                    "
                >


                    {/* CANCEL */}

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            h-[32px]

                            min-w-[86px]

                            border
                            border-purple-500

                            rounded-md

                            bg-white

                            text-[10px]
                            font-medium
                            text-purple-500

                            hover:bg-purple-50

                            transition
                            duration-200
                        "
                    >
                        Cancel
                    </button>


                    {/* SAVE */}

                    <button
                        type="button"
                        onClick={handleSave}
                        className="
                            h-[32px]

                            px-3

                            flex
                            items-center
                            justify-center
                            gap-2

                            border
                            border-purple-500

                            rounded-md

                            bg-white

                            text-[10px]
                            font-medium
                            text-purple-500

                            hover:bg-purple-50

                            transition
                            duration-200
                        "
                    >

                        <Save size={14} />

                        Save Changes

                    </button>

                </div>

            </div>

        </div>

    );

}


export default EditOrganisation;
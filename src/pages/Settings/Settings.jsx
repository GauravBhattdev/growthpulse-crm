import React, { useState } from "react";

import {
    User,
    Building2,
    Users,
    Bell,
    Shield,
    Link,
    CreditCard,
    Palette,
    Save,
    Camera,
    Star,
    Coins,
    CalendarDays,
    Clock,
    LockKeyhole,
    ShieldCheck,
    Download,
    Trash2,
    ChevronRight
} from "lucide-react";


// =====================================================
// SETTINGS COMPONENT
// =====================================================

function Settings() {

    // =================================================
    // ACTIVE MENU
    // =================================================

    const [activeMenu, setActiveMenu] = useState("Profile");


    // =================================================
    // PROFILE
    // =================================================

    const [fullName, setFullName] =
        useState("Rahul Singh");

    const [email, setEmail] =
        useState("rahul@growthpulse.com");

    const [phone, setPhone] =
        useState("+91 98765 43210");

    const [designation, setDesignation] =
        useState("Team Lead");


    // =================================================
    // PREFERENCES
    // =================================================

    const [language, setLanguage] =
        useState("English");

    const [timezone, setTimezone] =
        useState("(GMT+05:30) India Standard Time");

    const [emailNotification, setEmailNotification] =
        useState(true);


    // =================================================
    // SETTINGS MENU
    // =================================================

    const menuItems = [

        {
            name: "Profile",
            icon: User
        },

        {
            name: "Organization",
            icon: Building2
        },

        {
            name: "User & Roles",
            icon: Users
        },

        {
            name: "Notifications",
            icon: Bell
        },

        {
            name: "Security",
            icon: Shield
        },

        {
            name: "Integration",
            icon: Link
        },

        {
            name: "Billing & credits",
            icon: CreditCard
        },

        {
            name: "Appearance",
            icon: Palette
        }

    ];


    // =================================================
    // SAVE CHANGES
    // =================================================

    const handleSaveChanges = () => {

        console.log("Profile Updated");

        console.log({
            fullName,
            email,
            phone,
            designation
        });

    };


    // =================================================
    // CHANGE PHOTO
    // =================================================

    const handleChangePhoto = () => {

        console.log("Change Photo clicked");

    };


    return (

        /*
            IMPORTANT:

            No dark background here.

            Header and Sidebar background are handled
            by MainLayout.

            Settings page content stays WHITE.
        */

          <div className="w-full min-h-screen bg-white pl-6 sm:pl-8 lg:pl-10 pt-6 sm:pt-8 lg:pt-10">



            {/* =====================================================
                PAGE HEADER
            ===================================================== */}

            <div>

                <h1
                    className="
                        text-[25px]
                        sm:text-[27px]
                        font-semibold
                        text-gray-900
                    "
                >
                    Setting
                </h1>

                <p
                    className="
                        mt-1
                        text-[11px]
                        sm:text-[13px]
                        text-gray-600
                    "
                >
                    Manage your account, preference and workspace setting
                </p>

            </div>


            {/* =====================================================
                MAIN SETTINGS
            ===================================================== */}

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-12
                    gap-3
                    mt-3
                "
            >


                {/* =================================================
                    LEFT SETTINGS MENU
                ================================================= */}

                <div
                    className="
                        lg:col-span-3

                        bg-white

                        border
                        border-gray-300

                        rounded-lg

                        shadow-sm

                        p-2.5

                        h-fit
                    "
                >

                    {menuItems.map((item) => {

                        const MenuIcon = item.icon;

                        const isActive =
                            activeMenu === item.name;

                        return (

                            <button
                                key={item.name}
                                type="button"
                                onClick={() =>
                                    setActiveMenu(item.name)
                                }
                                className={`
                                    w-full

                                    flex
                                    items-center
                                    gap-3

                                    px-3
                                    py-2.5

                                    rounded-md

                                    text-[11px]
                                    sm:text-[12px]

                                    text-left

                                    transition
                                    duration-200

                                    ${
                                        isActive
                                            ? "bg-purple-100 text-purple-700"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }
                                `}
                            >

                                <MenuIcon size={16} />

                                <span>
                                    {item.name}
                                </span>

                                <ChevronRight
                                    size={14}
                                    className="ml-auto"
                                />

                            </button>

                        );

                    })}

                </div>


                {/* =================================================
                    CENTER COLUMN
                ================================================= */}

                <div
                    className="
                        lg:col-span-5

                        flex
                        flex-col

                        gap-3
                    "
                >


                    {/* =================================================
                        PROFILE INFORMATION
                    ================================================= */}

                    <div
                        className="
                            bg-white

                            border
                            border-gray-300

                            rounded-lg

                            shadow-sm

                            p-3
                            sm:p-4
                        "
                    >


                        {/* HEADER */}

                        <h2
                            className="
                                text-[16px]
                                sm:text-[17px]

                                font-semibold

                                text-gray-900
                            "
                        >
                            Profile Information
                        </h2>

                        <p
                            className="
                                text-[9px]
                                sm:text-[10px]

                                text-gray-500

                                mt-0.5
                            "
                        >
                            Update your personal information and personal detail.
                        </p>


                        {/* =================================================
                            PROFILE PHOTO
                        ================================================= */}

                        <div
                            className="
                                flex
                                items-center
                                gap-4

                                mt-4
                            "
                        >

                            <div
                                className="
                                    relative

                                    w-[58px]
                                    h-[58px]

                                    rounded-full

                                    border-[3px]
                                    border-green-500

                                    flex
                                    items-center
                                    justify-center

                                    text-green-600

                                    text-[20px]
                                    font-medium
                                "
                            >

                                RS


                                {/* CAMERA ICON */}

                                <div
                                    className="
                                        absolute

                                        right-[-2px]
                                        bottom-[-2px]

                                        w-[17px]
                                        h-[17px]

                                        rounded-full

                                        bg-purple-500

                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Camera
                                        size={9}
                                        className="text-white"
                                    />

                                </div>

                            </div>


                            <button
                                type="button"
                                onClick={handleChangePhoto}
                                className="
                                    flex
                                    items-center
                                    gap-1.5

                                    border
                                    border-gray-400

                                    rounded

                                    px-2.5
                                    py-1.5

                                    text-[9px]

                                    text-gray-700

                                    hover:bg-gray-100

                                    transition
                                "
                            >

                                <Camera size={11} />

                                Change Photo

                            </button>

                        </div>


                        {/* =================================================
                            FORM
                        ================================================= */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2

                                gap-x-2
                                gap-y-3

                                mt-4
                            "
                        >


                            {/* FULL NAME */}

                            <div className="sm:col-span-2">

                                <label
                                    className="
                                        block

                                        text-[9px]
                                        font-medium

                                        text-gray-700

                                        mb-1
                                    "
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    className="
                                        w-full
                                        h-[32px]

                                        border
                                        border-gray-700

                                        rounded

                                        px-2

                                        text-[10px]

                                        text-gray-800

                                        outline-none

                                        focus:border-purple-500
                                    "
                                />

                            </div>


                            {/* EMAIL */}

                            <div className="sm:col-span-2">

                                <label
                                    className="
                                        block

                                        text-[9px]
                                        font-medium

                                        text-gray-700

                                        mb-1
                                    "
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    className="
                                        w-full
                                        h-[32px]

                                        border
                                        border-gray-700

                                        rounded

                                        px-2

                                        text-[10px]

                                        text-gray-800

                                        outline-none

                                        focus:border-purple-500
                                    "
                                />

                            </div>


                            {/* PHONE */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-[9px]
                                        font-medium

                                        text-gray-700

                                        mb-1
                                    "
                                >
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                    className="
                                        w-full
                                        h-[32px]

                                        border
                                        border-gray-700

                                        rounded

                                        px-2

                                        text-[10px]

                                        text-gray-800

                                        outline-none

                                        focus:border-purple-500
                                    "
                                />

                            </div>


                            {/* DESIGNATION */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-[9px]
                                        font-medium

                                        text-gray-700

                                        mb-1
                                    "
                                >
                                    Designation
                                </label>

                                <input
                                    type="text"
                                    value={designation}
                                    onChange={(e) =>
                                        setDesignation(e.target.value)
                                    }
                                    className="
                                        w-full
                                        h-[32px]

                                        border
                                        border-gray-700

                                        rounded

                                        px-2

                                        text-[10px]

                                        text-gray-800

                                        outline-none

                                        focus:border-purple-500
                                    "
                                />

                            </div>

                        </div>


                        {/* SAVE */}

                        <div className="mt-3">

                            <button
                                type="button"
                                onClick={handleSaveChanges}
                                className="
                                    flex
                                    items-center
                                    gap-1.5

                                    border
                                    border-gray-500

                                    bg-white

                                    rounded

                                    px-2.5
                                    py-1.5

                                    text-[9px]

                                    text-gray-800

                                    hover:bg-gray-100

                                    transition
                                "
                            >

                                <Save size={12} />

                                Save Changes

                            </button>

                        </div>

                    </div>


                    {/* =================================================
                        PREFERENCES
                    ================================================= */}

                    <div
                        className="
                            bg-white

                            border
                            border-gray-300

                            rounded-lg

                            shadow-sm

                            p-3
                            sm:p-4
                        "
                    >

                        <h2
                            className="
                                text-[16px]
                                sm:text-[17px]

                                font-semibold

                                text-gray-900
                            "
                        >
                            Preferences
                        </h2>

                        <p
                            className="
                                text-[9px]

                                text-gray-500

                                mt-0.5
                            "
                        >
                            Customize your experience.
                        </p>


                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2

                                gap-3

                                mt-3
                            "
                        >


                            {/* LANGUAGE */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-[9px]

                                        text-gray-700

                                        mb-1
                                    "
                                >
                                    Language
                                </label>

                                <select
                                    value={language}
                                    onChange={(e) =>
                                        setLanguage(e.target.value)
                                    }
                                    className="
                                        w-full

                                        h-[27px]

                                        border
                                        border-gray-700

                                        rounded

                                        px-2

                                        text-[8px]

                                        outline-none
                                    "
                                >

                                    <option>
                                        English
                                    </option>

                                    <option>
                                        Hindi
                                    </option>

                                </select>

                            </div>


                            {/* TIMEZONE */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-[9px]

                                        text-gray-700

                                        mb-1
                                    "
                                >
                                    Timezone
                                </label>

                                <select
                                    value={timezone}
                                    onChange={(e) =>
                                        setTimezone(e.target.value)
                                    }
                                    className="
                                        w-full

                                        h-[27px]

                                        border
                                        border-gray-700

                                        rounded

                                        px-2

                                        text-[8px]

                                        outline-none
                                    "
                                >

                                    <option>
                                        (GMT+05:30) India Standard Time
                                    </option>

                                    <option>
                                        (GMT+00:00) Greenwich Mean Time
                                    </option>

                                    <option>
                                        (GMT-05:00) Eastern Standard Time
                                    </option>

                                </select>

                            </div>

                        </div>


                        {/* EMAIL NOTIFICATION */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2

                                mt-3
                            "
                        >

                            <Bell size={11} />

                            <span
                                className="
                                    text-[9px]
                                    text-gray-700
                                "
                            >
                                Email Notification
                            </span>


                            {/* TOGGLE */}

                            <button
                                type="button"
                                onClick={() =>
                                    setEmailNotification(
                                        !emailNotification
                                    )
                                }
                                className={`
                                    relative

                                    w-[25px]
                                    h-[13px]

                                    rounded-full

                                    transition

                                    ${
                                        emailNotification
                                            ? "bg-purple-500"
                                            : "bg-gray-300"
                                    }
                                `}
                            >

                                <span
                                    className={`
                                        absolute

                                        top-[2px]

                                        w-[9px]
                                        h-[9px]

                                        rounded-full

                                        bg-white

                                        transition

                                        ${
                                            emailNotification
                                                ? "left-[14px]"
                                                : "left-[2px]"
                                        }
                                    `}
                                />

                            </button>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    RIGHT COLUMN
                ================================================= */}

                <div
                    className="
                        lg:col-span-4

                        flex
                        flex-col

                        gap-3
                    "
                >


                    {/* =================================================
                        ACCOUNT DETAILS
                    ================================================= */}

                    <div
                        className="
                            bg-white

                            border
                            border-gray-300

                            rounded-lg

                            shadow-sm

                            p-3
                            sm:p-4
                        "
                    >

                        <h2
                            className="
                                text-[16px]
                                sm:text-[17px]

                                font-semibold

                                text-gray-900
                            "
                        >
                            Account Details
                        </h2>

                        <p
                            className="
                                text-[9px]

                                text-gray-500

                                mt-0.5
                            "
                        >
                            Your account information and current plan.
                        </p>


                        {/* PLAN */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                mt-4
                            "
                        >

                            <div
                                className="
                                    w-6
                                    h-6

                                    rounded-full

                                    bg-yellow-200

                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <Star
                                    size={12}
                                    className="text-yellow-500"
                                />

                            </div>

                            <span className="text-[9px] text-gray-700">
                                Plan
                            </span>

                            <span
                                className="
                                    ml-auto
                                    text-[9px]
                                    text-gray-700
                                "
                            >
                                Professional
                            </span>

                            <span
                                className="
                                    px-1.5
                                    py-0.5

                                    rounded

                                    bg-purple-500

                                    text-[6px]

                                    text-white
                                "
                            >
                                Active
                            </span>

                        </div>


                        {/* CREDITS */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                mt-3
                            "
                        >

                            <div
                                className="
                                    w-6
                                    h-6

                                    rounded-full

                                    bg-green-200

                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <Coins
                                    size={12}
                                    className="text-green-600"
                                />

                            </div>

                            <span className="text-[9px] text-gray-700">
                                Credits
                            </span>

                            <span
                                className="
                                    ml-auto

                                    text-[9px]
                                    text-gray-700
                                "
                            >
                                2,450
                            </span>

                            <button
                                type="button"
                                className="
                                    border
                                    border-purple-500

                                    text-purple-500

                                    text-[6px]

                                    px-1

                                    rounded
                                "
                            >
                                + Add Credits
                            </button>

                        </div>


                        {/* MEMBER SINCE */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                mt-3
                            "
                        >

                            <div
                                className="
                                    w-6
                                    h-6

                                    rounded-full

                                    bg-blue-200

                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <CalendarDays
                                    size={12}
                                    className="text-blue-600"
                                />

                            </div>

                            <span className="text-[9px] text-gray-700">
                                Member Since
                            </span>

                            <span
                                className="
                                    ml-auto

                                    text-[9px]
                                    text-gray-700
                                "
                            >
                                12 Aug 2025
                            </span>

                        </div>


                        {/* LAST LOGIN */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                mt-3
                            "
                        >

                            <div
                                className="
                                    w-6
                                    h-6

                                    rounded-full

                                    bg-purple-200

                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <Clock
                                    size={12}
                                    className="text-purple-600"
                                />

                            </div>

                            <span className="text-[9px] text-gray-700">
                                Last Login
                            </span>

                            <span
                                className="
                                    ml-auto

                                    text-[9px]
                                    text-gray-700
                                "
                            >
                                26 Sep 2025, 04:32
                            </span>

                        </div>


                        {/* UPGRADE */}

                        <button
                            type="button"
                            className="
                                w-full

                                h-[29px]

                                mt-4

                                border
                                border-purple-500

                                rounded

                                text-[9px]

                                text-purple-500

                                hover:bg-purple-50

                                transition
                            "
                        >
                            Upgrade Plan
                        </button>

                    </div>


                    {/* =================================================
                        QUICK ACTION
                    ================================================= */}

                    <div
                        className="
                            bg-white

                            border
                            border-gray-300

                            rounded-lg

                            shadow-sm

                            p-3
                            sm:p-4
                        "
                    >

                        <h2
                            className="
                                text-[16px]
                                sm:text-[17px]

                                font-semibold

                                text-gray-900
                            "
                        >
                            Quick Action
                        </h2>

                        <p
                            className="
                                text-[9px]

                                text-gray-500

                                mt-0.5
                            "
                        >
                            Manage your account quickly
                        </p>


                        <div
                            className="
                                border-t

                                border-gray-400

                                mt-3
                            "
                        />


                        {/* CHANGE PASSWORD */}

                        <button
                            type="button"
                            className="
                                w-full

                                flex
                                items-center
                                gap-2

                                py-2.5

                                border-b
                                border-gray-300

                                text-left

                                hover:bg-gray-50

                                transition
                            "
                        >

                            <LockKeyhole
                                size={15}
                                className="text-gray-700"
                            />

                            <span
                                className="
                                    text-[9px]
                                    text-gray-700
                                "
                            >
                                Change Password
                            </span>

                            <ChevronRight
                                size={14}
                                className="ml-auto"
                            />

                        </button>


                        {/* TWO FACTOR */}

                        <button
                            type="button"
                            className="
                                w-full

                                flex
                                items-center
                                gap-2

                                py-2.5

                                border-b
                                border-gray-300

                                text-left

                                hover:bg-gray-50

                                transition
                            "
                        >

                            <ShieldCheck
                                size={15}
                                className="text-gray-700"
                            />

                            <span
                                className="
                                    text-[9px]
                                    text-gray-700
                                "
                            >
                                Two-Factor Authentication
                            </span>

                            <ChevronRight
                                size={14}
                                className="ml-auto"
                            />

                        </button>


                        {/* DOWNLOAD DATA */}

                        <button
                            type="button"
                            className="
                                w-full

                                flex
                                items-center
                                gap-2

                                py-2.5

                                border-b
                                border-gray-300

                                text-left

                                hover:bg-gray-50

                                transition
                            "
                        >

                            <Download
                                size={15}
                                className="text-gray-700"
                            />

                            <span
                                className="
                                    text-[9px]
                                    text-gray-700
                                "
                            >
                                Download Data
                            </span>

                            <ChevronRight
                                size={14}
                                className="ml-auto"
                            />

                        </button>


                        {/* DELETE ACCOUNT */}

                        <button
                            type="button"
                            className="
                                w-full

                                flex
                                items-center
                                gap-2

                                py-2.5

                                text-left

                                hover:bg-red-50

                                transition
                            "
                        >

                            <Trash2
                                size={15}
                                className="text-red-500"
                            />

                            <span
                                className="
                                    text-[9px]
                                    text-red-500
                                "
                            >
                                Delete Account
                            </span>

                            <ChevronRight
                                size={14}
                                className="
                                    ml-auto
                                    text-gray-700
                                "
                            />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default Settings;
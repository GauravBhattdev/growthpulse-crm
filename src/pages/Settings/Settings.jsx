import React, { useEffect, useState } from "react";

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

import { toast } from "react-toastify";

import Loader from "../../components/Loader/Loader";


function Settings() {

    // =================================================
    // LOADING
    // =================================================

    const [loading, setLoading] = useState(true);


    // =================================================
    // ACTIVE MENU
    // =================================================

    const [activeMenu, setActiveMenu] = useState("Profile");


    // =================================================
    // PROFILE
    // =================================================

    const [fullName, setFullName] = useState("Rahul Singh");
    const [email, setEmail] = useState("rahul@growthpulse.com");
    const [phone, setPhone] = useState("+91 98765 43210");
    const [designation, setDesignation] = useState("Team Lead");


    // =================================================
    // PREFERENCES
    // =================================================

    const [language, setLanguage] = useState("English");
    const [timezone, setTimezone] = useState("(GMT+05:30) India Standard Time");
    const [emailNotification, setEmailNotification] = useState(true);


    // =================================================
    // LOADER EFFECT
    // =================================================

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    // =================================================
    // SETTINGS MENU
    // =================================================

    const menuItems = [
        { name: "Profile", icon: User },
        { name: "Organization", icon: Building2 },
        { name: "User & Roles", icon: Users },
        { name: "Notifications", icon: Bell },
        { name: "Security", icon: Shield },
        { name: "Integration", icon: Link },
        { name: "Billing & credits", icon: CreditCard },
        { name: "Appearance", icon: Palette }
    ];


    // =================================================
    // HANDLERS
    // =================================================

    const handleMenuClick = (name) => {
        setActiveMenu(name);
        toast.info(`Opening ${name} settings...`);
    };


    const handleSaveChanges = () => {

        if (!fullName.trim()) {
            toast.error("Full name is required.");
            return;
        }

        if (!email.trim()) {
            toast.error("Email is required.");
            return;
        }

        toast.success("Profile updated successfully!");

    };


    const handleChangePhoto = () => {
        toast.info("Photo upload coming soon...");
    };


    const handleAddCredits = () => {
        toast.success("Opening Add Credits...");
    };


    const handleUpgradePlan = () => {
        toast.info("Opening plan upgrade options...");
    };


    const handleQuickAction = (action) => {
        toast.info(`Opening ${action}...`);
    };


    const handleDeleteAccount = () => {

        const confirmed = window.confirm(
            "Are you sure you want to delete your account? This action cannot be undone."
        );

        if (!confirmed) return;

        toast.error("Account deletion requires admin approval.");
    };


    const handleLanguageChange = (value) => {
        setLanguage(value);
        toast.success(`Language set to ${value}`);
    };


    const handleTimezoneChange = (value) => {
        setTimezone(value);
        toast.success(`Timezone updated`);
    };


    const handleToggleEmailNotification = () => {

        const next = !emailNotification;

        setEmailNotification(next);

        toast.success(
            next
                ? "Email notifications enabled"
                : "Email notifications disabled"
        );

    };


    // =================================================
    // LOADING RETURN
    // =================================================

    if (loading) {

        return (
            <div className="min-h-screen bg-theme-page flex items-center justify-center">
                <Loader text="Loading settings..." />
            </div>
        );

    }


    return (

        <div
            className="
                w-full
                min-h-screen

                bg-theme-page
                text-theme-text

                px-4
                sm:px-6
                lg:px-8

                pt-6
                sm:pt-8
                lg:pt-10

                transition-colors
                duration-300
            "
        >

            {/* =====================================================
                PAGE HEADER
            ===================================================== */}

            <div>

                <h1 className="text-[25px] sm:text-[27px] font-semibold text-theme-text">
                    Setting
                </h1>

                <p className="mt-1 text-[11px] sm:text-[13px] text-theme-text-secondary">
                    Manage your account, preference and workspace setting
                </p>

            </div>


            {/* =====================================================
                MAIN SETTINGS
            ===================================================== */}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-3">


                {/* LEFT SETTINGS MENU */}

                <div
                    className="
                        lg:col-span-3
                        bg-theme-surface
                        border border-theme-border
                        rounded-lg
                        shadow-sm
                        p-2.5
                        h-fit
                        transition-colors duration-300
                    "
                >

                    {menuItems.map((item) => {

                        const MenuIcon = item.icon;
                        const isActive = activeMenu === item.name;

                        return (

                            <button
                                key={item.name}
                                type="button"
                                onClick={() => handleMenuClick(item.name)}
                                className={`
                                    w-full
                                    flex items-center gap-3
                                    px-3 py-2.5
                                    rounded-md
                                    text-[11px] sm:text-[12px]
                                    text-left
                                    transition duration-200
                                    cursor-pointer

                                    ${
                                        isActive
                                            ? "bg-primary/15 text-primary"
                                            : "text-theme-text-secondary hover:bg-theme-surface-secondary hover:text-theme-text"
                                    }
                                `}
                            >

                                <MenuIcon size={16} />

                                <span>{item.name}</span>

                                <ChevronRight size={14} className="ml-auto" />

                            </button>

                        );

                    })}

                </div>


                {/* CENTER COLUMN */}

                <div className="lg:col-span-5 flex flex-col gap-3">


                    {/* PROFILE INFORMATION */}

                    <div
                        className="
                            bg-theme-surface
                            border border-theme-border
                            rounded-lg
                            shadow-sm
                            p-3 sm:p-4
                            transition-colors duration-300
                        "
                    >

                        <h2 className="text-[16px] sm:text-[17px] font-semibold text-theme-text">
                            Profile Information
                        </h2>

                        <p className="text-[9px] sm:text-[10px] text-theme-text-secondary mt-0.5">
                            Update your personal information and personal detail.
                        </p>


                        {/* PROFILE PHOTO */}

                        <div className="flex items-center gap-4 mt-4">

                            <div
                                className="
                                    relative
                                    w-[58px] h-[58px]
                                    rounded-full
                                    border-[3px]
                                    border-green-500
                                    flex items-center justify-center
                                    text-green-500
                                    text-[20px]
                                    font-medium
                                "
                            >

                                RS


                                <div
                                    className="
                                        absolute
                                        right-[-2px] bottom-[-2px]
                                        w-[17px] h-[17px]
                                        rounded-full
                                        bg-primary
                                        flex items-center justify-center
                                    "
                                >

                                    <Camera size={9} className="text-white" />

                                </div>

                            </div>


                            <button
                                type="button"
                                onClick={handleChangePhoto}
                                className="
                                    flex items-center gap-1.5
                                    border border-theme-border-light
                                    rounded
                                    px-2.5 py-1.5
                                    text-[9px]
                                    text-theme-text-secondary
                                    hover:bg-theme-surface-secondary
                                    hover:text-theme-text
                                    transition
                                    cursor-pointer
                                "
                            >

                                <Camera size={11} />

                                Change Photo

                            </button>

                        </div>


                        {/* FORM */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 mt-4">

                            {/* FULL NAME */}

                            <div className="sm:col-span-2">

                                <label className="block text-[9px] font-medium text-theme-text-secondary mb-1">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="
                                        w-full h-[32px]
                                        border border-theme-border-light
                                        rounded
                                        px-2
                                        text-[10px]
                                        bg-theme-surface
                                        text-theme-text
                                        placeholder:text-theme-text-muted
                                        outline-none
                                        focus:border-primary
                                        transition-colors
                                    "
                                />

                            </div>


                            {/* EMAIL */}

                            <div className="sm:col-span-2">

                                <label className="block text-[9px] font-medium text-theme-text-secondary mb-1">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="
                                        w-full h-[32px]
                                        border border-theme-border-light
                                        rounded
                                        px-2
                                        text-[10px]
                                        bg-theme-surface
                                        text-theme-text
                                        placeholder:text-theme-text-muted
                                        outline-none
                                        focus:border-primary
                                        transition-colors
                                    "
                                />

                            </div>


                            {/* PHONE */}

                            <div>

                                <label className="block text-[9px] font-medium text-theme-text-secondary mb-1">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="
                                        w-full h-[32px]
                                        border border-theme-border-light
                                        rounded
                                        px-2
                                        text-[10px]
                                        bg-theme-surface
                                        text-theme-text
                                        placeholder:text-theme-text-muted
                                        outline-none
                                        focus:border-primary
                                        transition-colors
                                    "
                                />

                            </div>


                            {/* DESIGNATION */}

                            <div>

                                <label className="block text-[9px] font-medium text-theme-text-secondary mb-1">
                                    Designation
                                </label>

                                <input
                                    type="text"
                                    value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                    className="
                                        w-full h-[32px]
                                        border border-theme-border-light
                                        rounded
                                        px-2
                                        text-[10px]
                                        bg-theme-surface
                                        text-theme-text
                                        placeholder:text-theme-text-muted
                                        outline-none
                                        focus:border-primary
                                        transition-colors
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
                                    flex items-center gap-1.5
                                    bg-primary
                                    hover:bg-primaryHover
                                    text-white
                                    rounded
                                    px-2.5 py-1.5
                                    text-[9px]
                                    transition
                                    cursor-pointer
                                "
                            >

                                <Save size={12} />

                                Save Changes

                            </button>

                        </div>

                    </div>


                    {/* PREFERENCES */}

                    <div
                        className="
                            bg-theme-surface
                            border border-theme-border
                            rounded-lg
                            shadow-sm
                            p-3 sm:p-4
                            transition-colors duration-300
                        "
                    >

                        <h2 className="text-[16px] sm:text-[17px] font-semibold text-theme-text">
                            Preferences
                        </h2>

                        <p className="text-[9px] text-theme-text-secondary mt-0.5">
                            Customize your experience.
                        </p>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">

                            {/* LANGUAGE */}

                            <div>

                                <label className="block text-[9px] text-theme-text-secondary mb-1">
                                    Language
                                </label>

                                <select
                                    value={language}
                                    onChange={(e) => handleLanguageChange(e.target.value)}
                                    className="
                                        w-full h-[27px]
                                        border border-theme-border-light
                                        rounded
                                        px-2
                                        text-[8px]
                                        bg-theme-surface
                                        text-theme-text
                                        outline-none
                                        focus:border-primary
                                        cursor-pointer
                                    "
                                >

                                    <option>English</option>
                                    <option>Hindi</option>

                                </select>

                            </div>


                            {/* TIMEZONE */}

                            <div>

                                <label className="block text-[9px] text-theme-text-secondary mb-1">
                                    Timezone
                                </label>

                                <select
                                    value={timezone}
                                    onChange={(e) => handleTimezoneChange(e.target.value)}
                                    className="
                                        w-full h-[27px]
                                        border border-theme-border-light
                                        rounded
                                        px-2
                                        text-[8px]
                                        bg-theme-surface
                                        text-theme-text
                                        outline-none
                                        focus:border-primary
                                        cursor-pointer
                                    "
                                >

                                    <option>(GMT+05:30) India Standard Time</option>
                                    <option>(GMT+00:00) Greenwich Mean Time</option>
                                    <option>(GMT-05:00) Eastern Standard Time</option>

                                </select>

                            </div>

                        </div>


                        {/* EMAIL NOTIFICATION */}

                        <div className="flex items-center gap-2 mt-3">

                            <Bell size={11} className="text-theme-text-secondary" />

                            <span className="text-[9px] text-theme-text-secondary">
                                Email Notification
                            </span>


                            <button
                                type="button"
                                onClick={handleToggleEmailNotification}
                                className={`
                                    relative
                                    w-[25px] h-[13px]
                                    rounded-full
                                    transition
                                    cursor-pointer

                                    ${
                                        emailNotification
                                            ? "bg-primary"
                                            : "bg-gray-400"
                                    }
                                `}
                            >

                                <span
                                    className={`
                                        absolute
                                        top-[2px]
                                        w-[9px] h-[9px]
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


                {/* RIGHT COLUMN */}

                <div className="lg:col-span-4 flex flex-col gap-3">


                    {/* ACCOUNT DETAILS */}

                    <div
                        className="
                            bg-theme-surface
                            border border-theme-border
                            rounded-lg
                            shadow-sm
                            p-3 sm:p-4
                            transition-colors duration-300
                        "
                    >

                        <h2 className="text-[16px] sm:text-[17px] font-semibold text-theme-text">
                            Account Details
                        </h2>

                        <p className="text-[9px] text-theme-text-secondary mt-0.5">
                            Your account information and current plan.
                        </p>


                        {/* PLAN */}

                        <div className="flex items-center gap-2 mt-4">

                            <div className="w-6 h-6 rounded-full bg-yellow-500/15 flex items-center justify-center">
                                <Star size={12} className="text-yellow-500" />
                            </div>

                            <span className="text-[9px] text-theme-text-secondary">Plan</span>

                            <span className="ml-auto text-[9px] text-theme-text">
                                Professional
                            </span>

                            <span className="px-1.5 py-0.5 rounded bg-primary text-[6px] text-white">
                                Active
                            </span>

                        </div>


                        {/* CREDITS */}

                        <div className="flex items-center gap-2 mt-3">

                            <div className="w-6 h-6 rounded-full bg-green-500/15 flex items-center justify-center">
                                <Coins size={12} className="text-green-500" />
                            </div>

                            <span className="text-[9px] text-theme-text-secondary">Credits</span>

                            <span className="ml-auto text-[9px] text-theme-text">
                                2,450
                            </span>

                            <button
                                type="button"
                                onClick={handleAddCredits}
                                className="
                                    border border-primary
                                    text-primary
                                    text-[6px]
                                    px-1
                                    rounded
                                    hover:bg-primary/10
                                    transition
                                    cursor-pointer
                                "
                            >
                                + Add Credits
                            </button>

                        </div>


                        {/* MEMBER SINCE */}

                        <div className="flex items-center gap-2 mt-3">

                            <div className="w-6 h-6 rounded-full bg-blue-500/15 flex items-center justify-center">
                                <CalendarDays size={12} className="text-blue-500" />
                            </div>

                            <span className="text-[9px] text-theme-text-secondary">
                                Member Since
                            </span>

                            <span className="ml-auto text-[9px] text-theme-text">
                                12 Aug 2025
                            </span>

                        </div>


                        {/* LAST LOGIN */}

                        <div className="flex items-center gap-2 mt-3">

                            <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                                <Clock size={12} className="text-primary" />
                            </div>

                            <span className="text-[9px] text-theme-text-secondary">
                                Last Login
                            </span>

                            <span className="ml-auto text-[9px] text-theme-text">
                                26 Sep 2025, 04:32
                            </span>

                        </div>


                        {/* UPGRADE */}

                        <button
                            type="button"
                            onClick={handleUpgradePlan}
                            className="
                                w-full h-[29px]
                                mt-4
                                border border-primary
                                rounded
                                text-[9px]
                                text-primary
                                hover:bg-primary/10
                                transition
                                cursor-pointer
                            "
                        >
                            Upgrade Plan
                        </button>

                    </div>


                    {/* QUICK ACTION */}

                    <div
                        className="
                            bg-theme-surface
                            border border-theme-border
                            rounded-lg
                            shadow-sm
                            p-3 sm:p-4
                            transition-colors duration-300
                        "
                    >

                        <h2 className="text-[16px] sm:text-[17px] font-semibold text-theme-text">
                            Quick Action
                        </h2>

                        <p className="text-[9px] text-theme-text-secondary mt-0.5">
                            Manage your account quickly
                        </p>


                        <div className="border-t border-theme-border-light mt-3" />


                        {/* CHANGE PASSWORD */}

                        <button
                            type="button"
                            onClick={() => handleQuickAction("Change Password")}
                            className="
                                w-full
                                flex items-center gap-2
                                py-2.5
                                border-b border-theme-border-light
                                text-left
                                text-theme-text-secondary
                                hover:bg-theme-surface-secondary
                                hover:text-theme-text
                                transition
                                cursor-pointer
                            "
                        >

                            <LockKeyhole size={15} />
                            <span className="text-[9px]">Change Password</span>
                            <ChevronRight size={14} className="ml-auto" />

                        </button>


                        {/* TWO FACTOR */}

                        <button
                            type="button"
                            onClick={() => handleQuickAction("Two-Factor Authentication")}
                            className="
                                w-full
                                flex items-center gap-2
                                py-2.5
                                border-b border-theme-border-light
                                text-left
                                text-theme-text-secondary
                                hover:bg-theme-surface-secondary
                                hover:text-theme-text
                                transition
                                cursor-pointer
                            "
                        >

                            <ShieldCheck size={15} />
                            <span className="text-[9px]">Two-Factor Authentication</span>
                            <ChevronRight size={14} className="ml-auto" />

                        </button>


                        {/* DOWNLOAD DATA */}

                        <button
                            type="button"
                            onClick={() => handleQuickAction("Download Data")}
                            className="
                                w-full
                                flex items-center gap-2
                                py-2.5
                                border-b border-theme-border-light
                                text-left
                                text-theme-text-secondary
                                hover:bg-theme-surface-secondary
                                hover:text-theme-text
                                transition
                                cursor-pointer
                            "
                        >

                            <Download size={15} />
                            <span className="text-[9px]">Download Data</span>
                            <ChevronRight size={14} className="ml-auto" />

                        </button>


                        {/* DELETE ACCOUNT */}

                        <button
                            type="button"
                            onClick={handleDeleteAccount}
                            className="
                                w-full
                                flex items-center gap-2
                                py-2.5
                                text-left
                                hover:bg-red-500/10
                                transition
                                cursor-pointer
                            "
                        >

                            <Trash2 size={15} className="text-red-500" />

                            <span className="text-[9px] text-red-500">
                                Delete Account
                            </span>

                            <ChevronRight
                                size={14}
                                className="ml-auto text-theme-text-secondary"
                            />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default Settings;
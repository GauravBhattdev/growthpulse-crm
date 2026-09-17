import React, { useEffect, useState } from "react";

import {
    Crown,
    Users,
    CircleDot,
    Cloud,
    Phone,
    Check,
    CalendarDays,
    IndianRupee,
    CreditCard,
    Mail,
    MapPin,
    Download,
    Pencil
} from "lucide-react";

import { toast } from "react-toastify";

import Loader from "../../components/Loader/Loader";


function Billing() {

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    // ==========================================
    // HANDLERS
    // ==========================================

    const handleManagePlan = () => {
        toast.success("Opening plan management...");
    };


    const handleCancelPlan = () => {
        toast.warn("Are you sure you want to cancel your plan?");
    };


    const handleUpdate = (field) => {
        toast.info(`Updating ${field}...`);
    };


    const handleDownloadInvoices = () => {
        toast.success("Downloading invoices...");
    };


    const handleViewFullUsage = () => {
        toast.info("Opening full usage report...");
    };


    if (loading) {

        return (
            <div className="min-h-screen bg-theme-page flex items-center justify-center">
                <Loader text="Loading billing..." />
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

                pl-6
                sm:pl-8
                lg:pl-10

                pr-4
                sm:pr-6
                lg:pr-8

                pt-6
                sm:pt-8
                lg:pt-10

                transition-colors
                duration-300
            "
        >

            {/* ================= PAGE HEADER ================= */}

            <div className="flex items-start justify-between">

                <div>

                    <h1 className="text-[27px] font-semibold text-theme-text">
                        Billing
                    </h1>

                    <p className="mt-1 text-[13px] text-theme-text-secondary">
                        Manage your subscription, payments and billing details
                    </p>

                </div>

            </div>


            {/* ================= TOP SECTION ================= */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">


                {/* ================= CURRENT PLAN ================= */}

                <div
                    className="
                        bg-theme-surface
                        border
                        border-theme-border-light
                        rounded-lg
                        shadow-sm
                        p-4
                        transition-colors
                        duration-300
                    "
                >

                    {/* Plan Header */}

                    <div className="flex items-start">

                        <div
                            className="
                                w-11
                                h-11
                                rounded-full
                                bg-primary/15
                                text-primary
                                flex
                                items-center
                                justify-center
                                mr-3
                            "
                        >

                            <Crown size={22} />

                        </div>


                        <div>

                            <p className="text-[11px] text-theme-text-secondary">
                                Current Plan
                            </p>

                            <h2 className="text-[17px] font-semibold text-theme-text">
                                Professional Plan
                            </h2>

                            <p className="text-[13px] text-theme-text-secondary">

                                <span className="font-semibold text-[16px] text-theme-text">
                                    ₹ 4,999
                                </span>

                                {" "} / month

                            </p>

                        </div>

                    </div>


                    {/* Description */}

                    <p className="text-[12px] text-theme-text-secondary mt-4">
                        All the tools you need to grow your business
                    </p>


                    {/* Features */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mt-4">

                        <div className="flex items-center gap-2 text-[11px] text-theme-text-secondary">
                            <Check size={13} className="text-primary" />
                            20 Team Members
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-theme-text-secondary">
                            <Check size={13} className="text-primary" />
                            Analytics & Reports
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-theme-text-secondary">
                            <Check size={13} className="text-primary" />
                            5,000 Leads
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-theme-text-secondary">
                            <Check size={13} className="text-primary" />
                            Email Support
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-theme-text-secondary">
                            <Check size={13} className="text-primary" />
                            Calling & Recording
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-theme-text-secondary">
                            <Check size={13} className="text-primary" />
                            Custom Integration
                        </div>

                    </div>


                    {/* Buttons */}

                    <div className="flex flex-wrap gap-3 mt-4">

                        <button
                            type="button"
                            onClick={handleManagePlan}
                            className="
                                bg-primary
                                text-white
                                px-5 sm:px-6
                                py-2
                                rounded
                                text-[11px]
                                hover:bg-primaryHover
                                transition
                                cursor-pointer
                            "
                        >
                            Manage Plan
                        </button>


                        <button
                            type="button"
                            onClick={handleCancelPlan}
                            className="
                                border
                                border-primary
                                text-primary
                                px-5 sm:px-6
                                py-2
                                rounded
                                text-[11px]
                                hover:bg-primary/10
                                transition
                                cursor-pointer
                            "
                        >
                            Cancel Plan
                        </button>

                    </div>

                </div>


                {/* ================= USAGE OVERVIEW ================= */}

                <div
                    className="
                        bg-theme-surface
                        border
                        border-theme-border-light
                        rounded-lg
                        shadow-sm
                        p-4
                        transition-colors
                        duration-300
                    "
                >

                    <div className="flex justify-between items-center">

                        <h2 className="text-[12px] font-semibold text-theme-text">
                            Usage Overview
                        </h2>

                        <span className="text-[10px] text-theme-text-muted">
                            Reset on 01 June, 2026
                        </span>

                    </div>


                    {/* Team Members */}

                    <div className="mt-4">

                        <div className="flex items-center">

                            <div
                                className="
                                    w-8 h-8
                                    bg-primary/15
                                    text-primary
                                    flex items-center justify-center
                                    rounded
                                    mr-3
                                "
                            >

                                <Users size={17} />

                            </div>


                            <div className="flex-1">

                                <div className="flex justify-between">

                                    <span className="text-[11px] text-theme-text-secondary">
                                        Team Members
                                    </span>

                                    <span className="text-[9px] text-theme-text-muted">
                                        12 / 20
                                    </span>

                                </div>


                                <div className="h-[5px] bg-theme-surface-secondary rounded-full mt-2">

                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: "60%" }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Leads */}

                    <div className="mt-4">

                        <div className="flex items-center">

                            <div
                                className="
                                    w-8 h-8
                                    bg-primary/15
                                    text-primary
                                    flex items-center justify-center
                                    rounded
                                    mr-3
                                "
                            >

                                <CircleDot size={17} />

                            </div>


                            <div className="flex-1">

                                <div className="flex justify-between">

                                    <span className="text-[11px] text-theme-text-secondary">
                                        Leads
                                    </span>

                                    <span className="text-[9px] text-theme-text-muted">
                                        2,450 / 5000
                                    </span>

                                </div>


                                <div className="h-[5px] bg-theme-surface-secondary rounded-full mt-2">

                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: "49%" }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Storage */}

                    <div className="mt-4">

                        <div className="flex items-center">

                            <div
                                className="
                                    w-8 h-8
                                    bg-primary/15
                                    text-primary
                                    flex items-center justify-center
                                    rounded
                                    mr-3
                                "
                            >

                                <Cloud size={17} />

                            </div>


                            <div className="flex-1">

                                <div className="flex justify-between">

                                    <span className="text-[11px] text-theme-text-secondary">
                                        Storage
                                    </span>

                                    <span className="text-[9px] text-theme-text-muted">
                                        18.6 / 50GB
                                    </span>

                                </div>


                                <div className="h-[5px] bg-theme-surface-secondary rounded-full mt-2">

                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: "37%" }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Calling Minutes */}

                    <div className="mt-4">

                        <div className="flex items-center">

                            <div
                                className="
                                    w-8 h-8
                                    bg-primary/15
                                    text-primary
                                    flex items-center justify-center
                                    rounded
                                    mr-3
                                "
                            >

                                <Phone size={17} />

                            </div>


                            <div className="flex-1">

                                <div className="flex justify-between">

                                    <span className="text-[11px] text-theme-text-secondary">
                                        Calling Minutes
                                    </span>

                                    <span className="text-[9px] text-theme-text-muted">
                                        1250 / 5000 Min
                                    </span>

                                </div>


                                <div className="h-[5px] bg-theme-surface-secondary rounded-full mt-2">

                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: "25%" }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    <button
                        type="button"
                        onClick={handleViewFullUsage}
                        className="
                            text-primary
                            text-[10px]
                            mt-3
                            hover:opacity-80
                            transition
                            cursor-pointer
                        "
                    >
                        View Full Usage
                    </button>

                </div>

            </div>


            {/* ================= BOTTOM SECTION ================= */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">


                {/* ================= BILLING INFORMATION ================= */}

                <div
                    className="
                        bg-theme-surface
                        border
                        border-theme-border-light
                        rounded-lg
                        shadow-sm
                        p-3
                        transition-colors
                        duration-300
                    "
                >

                    <h2 className="text-[11px] font-semibold text-theme-text mb-2">
                        Billing Information
                    </h2>


                    <BillingRow
                        icon={<Crown size={13} />}
                        title="Plan"
                        value="Professional Plan"
                    />


                    <BillingRow
                        icon={<CalendarDays size={13} />}
                        title="Billing Cycle"
                        value="Monthly"
                    />


                    <BillingRow
                        icon={<CalendarDays size={13} />}
                        title="Next Billing Date"
                        value="01 June, 2026"
                    />


                    <BillingRow
                        icon={<IndianRupee size={13} />}
                        title="Amount"
                        value="₹ 4,999"
                    />


                    <BillingRow
                        icon={<CreditCard size={13} />}
                        title="Payment Method"
                        value="•••• 4242"
                        action="Update"
                        onAction={() => handleUpdate("Payment Method")}
                    />


                    <BillingRow
                        icon={<Mail size={13} />}
                        title="Billing Email"
                        value="billing@growthpulse.com"
                        action="Update"
                        onAction={() => handleUpdate("Billing Email")}
                    />


                    <BillingRow
                        icon={<MapPin size={13} />}
                        title="Billing Address"
                        value={
                            <span className="text-[8px] leading-3 text-theme-text-secondary">
                                GrowthPulse Technologies Pvt. Ltd.<br />
                                123 Business Park, Sector 62,<br />
                                Noida, Uttar Pradesh - 201301, India
                            </span>
                        }
                        action="Update"
                        onAction={() => handleUpdate("Billing Address")}
                    />

                </div>


                {/* ================= PAYMENT HISTORY ================= */}

                <div
                    className="
                        bg-theme-surface
                        border
                        border-theme-border-light
                        rounded-lg
                        shadow-sm
                        p-3
                        transition-colors
                        duration-300
                    "
                >

                    <div className="flex justify-between items-center mb-3">

                        <h2 className="text-[11px] font-semibold text-theme-text">
                            Payment History
                        </h2>

                    </div>


                    {/* Table Header */}

                    <div
                        className="
                            grid
                            grid-cols-4
                            text-[9px]
                            text-theme-text-muted
                            pb-2
                            border-b
                            border-theme-border-light
                        "
                    >

                        <span>Date</span>
                        <span>Description</span>
                        <span>Amount</span>
                        <span>Status</span>

                    </div>


                    {/* Payment rows */}

                    {[
                        "01 May, 2026",
                        "01 Apr, 2026",
                        "01 Mar, 2026",
                        "01 Feb, 2026",
                        "01 Jan, 2026"
                    ].map((date) => (

                        <div
                            key={date}
                            className="
                                grid
                                grid-cols-4
                                items-center
                                py-2
                                border-b
                                border-theme-border-light
                                text-[9px]
                                text-theme-text-secondary
                            "
                        >

                            <span>{date}</span>
                            <span>Professional Plan</span>
                            <span>₹ 4,999</span>

                            <span>

                                <span
                                    className="
                                        bg-green-500/15
                                        text-green-500
                                        px-2
                                        py-1
                                        rounded
                                        text-[8px]
                                    "
                                >
                                    Paid
                                </span>

                            </span>

                        </div>

                    ))}


                    {/* Download */}

                    <div className="flex justify-end mt-3">

                        <button
                            type="button"
                            onClick={handleDownloadInvoices}
                            className="
                                flex items-center gap-1
                                text-primary
                                text-[10px]
                                font-medium
                                hover:opacity-80
                                transition
                                cursor-pointer
                            "
                        >

                            <Download size={13} />

                            Download Invoices

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}


/* ================= BILLING ROW ================= */

function BillingRow({ icon, title, value, action, onAction }) {

    return (

        <div
            className="
                min-h-[34px]
                flex
                items-center
                border-b
                border-theme-border-light
            "
        >

            <div
                className="
                    w-6 h-6
                    bg-primary/15
                    text-primary
                    rounded
                    flex items-center justify-center
                    mr-3
                    shrink-0
                "
            >

                {icon}

            </div>


            <div className="w-[125px] text-[10px] text-theme-text-secondary">
                {title}
            </div>


            <div className="flex-1 text-right text-[10px] text-theme-text-secondary">
                {value}
            </div>


            {action && (

                <button
                    type="button"
                    onClick={onAction}
                    className="
                        ml-3
                        flex
                        items-center
                        gap-1
                        text-[9px]
                        text-primary
                        hover:opacity-80
                        transition
                        cursor-pointer
                    "
                >

                    <Pencil size={10} />

                    {action}

                </button>

            )}

        </div>

    );

}


export default Billing;
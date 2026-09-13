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
    Download
} from "lucide-react";

import Loader from "../../components/Loader/Loader";


function Billing() {

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    if (loading) {

        return <Loader text="Loading billing..." />;

    }


    return (
        <div className="w-full min-h-screen bg-white pl-6 sm:pl-8 lg:pl-10 pt-6 sm:pt-8 lg:pt-10">

            {/* ================= PAGE HEADER ================= */}

            <div className="flex items-start justify-between">

                <div>

                    <h1 className="text-[27px] font-semibold text-[#111]">
                        Billing
                    </h1>

                    <p className="mt-1 text-[13px] text-[#444]">
                        Manage your subscription, payments and billing details
                    </p>

                </div>

            </div>


            {/* ================= TOP SECTION ================= */}

            <div className="grid grid-cols-2 gap-4 mt-5">


                {/* ================= CURRENT PLAN ================= */}

                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        p-4
                    "
                >

                    {/* Plan Header */}

                    <div className="flex items-start">

                        <div
                            className="
                                w-11 h-11
                                rounded-full
                                bg-purple-100
                                text-purple-600
                                flex items-center
                                justify-center
                                mr-3
                            "
                        >
                            <Crown size={22} />
                        </div>


                        <div>

                            <p className="text-[11px] text-gray-700">
                                Current Plan
                            </p>

                            <h2 className="text-[17px] font-semibold text-gray-900">
                                Professional Plan
                            </h2>

                            <p className="text-[13px] text-gray-700">
                                <span className="font-semibold text-[16px]">
                                    ₹ 4,999
                                </span>
                                {" "} / month
                            </p>

                        </div>

                    </div>


                    {/* Description */}

                    <p className="text-[12px] text-gray-700 mt-4">
                        All the tools you need to grow your business
                    </p>


                    {/* Features */}

                    <div className="grid grid-cols-2 gap-y-3 mt-4">

                        <div className="flex items-center gap-2 text-[11px] text-gray-700">
                            <Check size={13} className="text-purple-600" />
                            20 Team Members
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-gray-700">
                            <Check size={13} className="text-purple-600" />
                            Analytics & Reports
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-gray-700">
                            <Check size={13} className="text-purple-600" />
                            5,000 Leads
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-gray-700">
                            <Check size={13} className="text-purple-600" />
                            Email Support
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-gray-700">
                            <Check size={13} className="text-purple-600" />
                            Calling & Recording
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-gray-700">
                            <Check size={13} className="text-purple-600" />
                            Custom Integration
                        </div>

                    </div>


                    {/* Buttons */}

                    <div className="flex gap-3 mt-4">

                        <button
                            className="
                                bg-purple-600
                                text-white
                                px-6 py-2
                                rounded
                                text-[11px]
                                hover:bg-purple-700
                                transition
                            "
                        >
                            Manage Plan
                        </button>

                        <button
                            className="
                                border border-purple-400
                                text-purple-600
                                px-6 py-2
                                rounded
                                text-[11px]
                                hover:bg-purple-50
                                transition
                            "
                        >
                            Cancel Plan
                        </button>

                    </div>

                </div>


                {/* ================= USAGE OVERVIEW ================= */}

                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        p-4
                    "
                >

                    <div className="flex justify-between items-center">

                        <h2 className="text-[12px] font-semibold text-gray-800">
                            Usage Overview
                        </h2>

                        <span className="text-[10px] text-gray-500">
                            Reset on 01 June, 2026
                        </span>

                    </div>


                    {/* Team Members */}

                    <div className="mt-4">

                        <div className="flex items-center">

                            <div
                                className="
                                    w-8 h-8
                                    bg-purple-100
                                    text-purple-600
                                    flex items-center
                                    justify-center
                                    rounded
                                    mr-3
                                "
                            >
                                <Users size={17} />
                            </div>

                            <div className="flex-1">

                                <div className="flex justify-between">

                                    <span className="text-[11px] text-gray-700">
                                        Team Members
                                    </span>

                                    <span className="text-[9px] text-gray-500">
                                        12 / 20
                                    </span>

                                </div>

                                <div className="h-[5px] bg-gray-200 rounded-full mt-2">

                                    <div
                                        className="h-full bg-purple-600 rounded-full"
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
                                    bg-purple-100
                                    text-purple-600
                                    flex items-center
                                    justify-center
                                    rounded
                                    mr-3
                                "
                            >
                                <CircleDot size={17} />
                            </div>

                            <div className="flex-1">

                                <div className="flex justify-between">

                                    <span className="text-[11px] text-gray-700">
                                        Leads
                                    </span>

                                    <span className="text-[9px] text-gray-500">
                                        2,450 / 5000
                                    </span>

                                </div>

                                <div className="h-[5px] bg-gray-200 rounded-full mt-2">

                                    <div
                                        className="h-full bg-purple-600 rounded-full"
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
                                    bg-purple-100
                                    text-purple-600
                                    flex items-center
                                    justify-center
                                    rounded
                                    mr-3
                                "
                            >
                                <Cloud size={17} />
                            </div>

                            <div className="flex-1">

                                <div className="flex justify-between">

                                    <span className="text-[11px] text-gray-700">
                                        Storage
                                    </span>

                                    <span className="text-[9px] text-gray-500">
                                        18.6 / 50GB
                                    </span>

                                </div>

                                <div className="h-[5px] bg-gray-200 rounded-full mt-2">

                                    <div
                                        className="h-full bg-purple-600 rounded-full"
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
                                    bg-purple-100
                                    text-purple-600
                                    flex items-center
                                    justify-center
                                    rounded
                                    mr-3
                                "
                            >
                                <Phone size={17} />
                            </div>

                            <div className="flex-1">

                                <div className="flex justify-between">

                                    <span className="text-[11px] text-gray-700">
                                        Calling Minutes
                                    </span>

                                    <span className="text-[9px] text-gray-500">
                                        1250 / 5000 Min
                                    </span>

                                </div>

                                <div className="h-[5px] bg-gray-200 rounded-full mt-2">

                                    <div
                                        className="h-full bg-purple-600 rounded-full"
                                        style={{ width: "25%" }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    <button className="text-purple-600 text-[10px] mt-3">
                        View Full Image
                    </button>

                </div>

            </div>


            {/* ================= BOTTOM SECTION ================= */}

            <div className="grid grid-cols-2 gap-4 mt-4">


                {/* ================= BILLING INFORMATION ================= */}

                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        p-3
                    "
                >

                    <h2 className="text-[11px] font-semibold text-gray-800 mb-2">
                        Billing Information
                    </h2>


                    {/* Plan */}

                    <BillingRow
                        icon={<Crown size={13} />}
                        title="Plan"
                        value="Professional Plan"
                    />


                    {/* Billing Cycle */}

                    <BillingRow
                        icon={<CalendarDays size={13} />}
                        title="Billing Cycle"
                        value="Monthly"
                    />


                    {/* Next Billing */}

                    <BillingRow
                        icon={<CalendarDays size={13} />}
                        title="Next Billing Date"
                        value="01 June, 2026"
                    />


                    {/* Amount */}

                    <BillingRow
                        icon={<IndianRupee size={13} />}
                        title="Amount"
                        value="₹ 4,999"
                    />


                    {/* Payment Method */}

                    <BillingRow
                        icon={<CreditCard size={13} />}
                        title="Payment Method"
                        value="•••• 4242"
                        action="Update"
                    />


                    {/* Billing Email */}

                    <BillingRow
                        icon={<Mail size={13} />}
                        title="Billing Email"
                        value="billing@growthpulse.com"
                        action="Update"
                    />


                    {/* Address */}

                    <BillingRow
                        icon={<MapPin size={13} />}
                        title="Billing Address"
                        value={
                            <span className="text-[8px] leading-3">
                                GrowthPulse Technologies Pvt. Ltd.<br />
                                123Business Park, Sector 62,<br />
                                Noida, Uttar Pradesh - 201301, India
                            </span>
                        }
                        action="Update"
                    />

                </div>


                {/* ================= PAYMENT HISTORY ================= */}

                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        p-3
                    "
                >

                    <div className="flex justify-between items-center mb-3">

                        <h2 className="text-[11px] font-semibold text-gray-800">
                            Payment History
                        </h2>

                        <span className="text-[10px] text-purple-600">
                            Reset on 01 June, 2026
                        </span>

                    </div>


                    {/* Table Header */}

                    <div className="grid grid-cols-4 text-[9px] text-gray-500 pb-2 border-b border-gray-200">

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
                                grid grid-cols-4
                                items-center
                                py-2
                                border-b border-gray-200
                                text-[9px]
                                text-gray-700
                            "
                        >

                            <span>
                                {date}
                            </span>

                            <span>
                                Professional Plan
                            </span>

                            <span>
                                ₹ 4,999
                            </span>

                            <span>

                                <span
                                    className="
                                        bg-green-100
                                        text-green-600
                                        px-2 py-1
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
                            className="
                                flex items-center
                                gap-1
                                text-purple-600
                                text-[10px]
                                font-medium
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

function BillingRow({ icon, title, value, action }) {

    return (

        <div
            className="
                min-h-[34px]
                flex items-center
                border-b border-gray-200
            "
        >

            <div
                className="
                    w-6 h-6
                    bg-purple-100
                    text-purple-600
                    rounded
                    flex items-center
                    justify-center
                    mr-3
                "
            >
                {icon}
            </div>


            <div className="w-[125px] text-[10px] text-gray-700">
                {title}
            </div>


            <div className="flex-1 text-right text-[10px] text-gray-700">
                {value}
            </div>


            {action && (

                <button className="ml-3 text-[9px] text-purple-600">
                    {action}
                </button>

            )}

        </div>

    );
}


export default Billing;
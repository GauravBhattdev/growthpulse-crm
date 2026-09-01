import React from "react";

import {
    Building2,
    MapPin,
    Mail,
    Phone,
    Globe,
    Edit,
    Users,
    Settings,
    CreditCard,
    Shield,
    Clock,
    ChevronRight,
    Link,
    BarChart3,
    Code2,
    Headphones,
    Briefcase
} from "lucide-react";


// =====================================================
// TEAM MEMBERS
// =====================================================

const teamMembers = [
    {
        id: 1,
        name: "Admin",
        email: "admin@growthpulse.com",
        role: "Super Admin",
        department: "Management",
        status: "Active",
        avatar: "A",
        color: "bg-gray-300",
        you: true
    },
    {
        id: 2,
        name: "Ankit Verma",
        email: "ankit@growthpulse.com",
        role: "Manager",
        department: "Sales",
        status: "Active",
        avatar: "AV",
        color: "bg-purple-500"
    },
    {
        id: 3,
        name: "Priya Singh",
        email: "priya@growthpulse.com",
        role: "Team Lead",
        department: "Marketing",
        status: "Active",
        avatar: "PS",
        color: "bg-orange-500"
    },
    {
        id: 4,
        name: "Karan Joshi",
        email: "karan@growthpulse.com",
        role: "Member",
        department: "Marketing",
        status: "Active",
        avatar: "KJ",
        color: "bg-blue-500"
    },
    {
        id: 5,
        name: "Neha Mehta",
        email: "neha@growthpulse.com",
        role: "Member",
        department: "Support",
        status: "Active",
        avatar: "NM",
        color: "bg-green-600"
    },
    {
        id: 6,
        name: "Rahul Singh",
        email: "rahul@growthpulse.com",
        role: "Member",
        department: "Sales",
        status: "Inactive",
        avatar: "RS",
        color: "bg-green-500"
    }
];


// =====================================================
// DEPARTMENTS
// =====================================================

const departments = [
    {
        id: 1,
        name: "Management",
        members: 3,
        icon: Briefcase
    },
    {
        id: 2,
        name: "Sales",
        members: 5,
        icon: BarChart3
    },
    {
        id: 3,
        name: "Marketing",
        members: 4,
        icon: Users
    },
    {
        id: 4,
        name: "Development",
        members: 5,
        icon: Code2
    },
    {
        id: 5,
        name: "Support",
        members: 3,
        icon: Headphones
    }
];


// =====================================================
// ORGANISATION SETTINGS
// =====================================================

const organisationSettings = [
    {
        id: 1,
        name: "General Setting",
        icon: Settings
    },
    {
        id: 2,
        name: "Billing & Subscription",
        icon: CreditCard
    },
    {
        id: 3,
        name: "Security",
        icon: Shield
    },
    {
        id: 4,
        name: "Activity Logs",
        icon: Clock
    }
];


// =====================================================
// ORGANISATION COMPONENT
// =====================================================

function Organisation() {

    return (

        <div className="w-full min-h-screen bg-white pb-6">


            {/* =====================================================
                PAGE HEADER
            ===================================================== */}

            <div className="
                flex
                flex-col
                sm:flex-row
                sm:items-start
                sm:justify-between
                gap-3
            ">

                <div>

                    <h1 className="
                        text-[25px]
                        sm:text-[27px]
                        font-semibold
                        text-[#111]
                    ">
                        Organization
                    </h1>

                    <p className="
                        mt-1
                        text-[12px]
                        sm:text-[13px]
                        text-gray-600
                    ">
                        Manage your organization details, members and settings
                    </p>

                </div>

            </div>


            {/* =====================================================
                MAIN ORGANISATION PROFILE BOX
            ===================================================== */}

            <div className="
                mt-4
                bg-white
                border
                border-gray-300
                rounded-lg
                shadow-sm
                p-4
                sm:p-5
                relative
            ">


                {/* =================================================
                    EDIT ORGANISATION BUTTON
                ================================================= */}

                <button
                    className="
                        absolute
                        top-3
                        right-3
                        sm:top-4
                        sm:right-4
                        flex
                        items-center
                        gap-1.5
                        border
                        border-gray-400
                        bg-white
                        text-gray-700
                        px-3
                        py-1.5
                        rounded
                        text-[10px]
                        sm:text-[11px]
                        font-medium
                        hover:bg-gray-100
                        transition
                    "
                >

                    <Edit size={12} />

                    Edit Organization

                </button>


                {/* =================================================
                    PROFILE CONTENT
                ================================================= */}

                <div className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    gap-5
                    lg:gap-7
                    pt-8
                    lg:pt-3
                ">


                    {/* =================================================
                        LEFT SIDE
                    ================================================= */}

                    <div className="
                        flex
                        items-start
                        gap-4
                        lg:flex-1
                    ">


                        {/* ORGANISATION ICON */}

                        <div className="
                            w-[75px]
                            h-[75px]
                            sm:w-[95px]
                            sm:h-[95px]
                            rounded-full
                            border
                            border-gray-400
                            flex
                            items-center
                            justify-center
                            shrink-0
                            shadow-sm
                        ">

                            <Building2
                                size={42}
                                strokeWidth={1.7}
                                className="text-black"
                            />

                        </div>


                        {/* ORGANISATION DETAILS */}

                        <div className="min-w-0">

                            <h2 className="
                                text-[16px]
                                sm:text-[17px]
                                font-semibold
                                text-[#222]
                            ">
                                GrowthPulse Technologies
                            </h2>


                            {/* LOCATION */}

                            <div className="
                                flex
                                items-center
                                gap-2
                                mt-2
                                text-[11px]
                                text-gray-600
                            ">

                                <MapPin size={14} />

                                <span>
                                    Noida, Uttar Pradesh, India
                                </span>

                            </div>


                            {/* EMAIL */}

                            <div className="
                                flex
                                items-center
                                gap-2
                                mt-2
                                text-[11px]
                                text-gray-600
                            ">

                                <Mail size={14} />

                                <span>
                                    info@growthpulse.com
                                </span>

                            </div>


                            {/* PHONE */}

                            <div className="
                                flex
                                items-center
                                gap-2
                                mt-2
                                text-[11px]
                                text-gray-600
                            ">

                                <Phone size={14} />

                                <span>
                                    +91 98765 43210
                                </span>

                            </div>


                            {/* WEBSITE */}

                            <div className="
                                flex
                                items-center
                                gap-2
                                mt-2
                                text-[11px]
                                text-gray-600
                            ">

                                <Globe size={14} />

                                <span>
                                    www.growthpulse.com
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT SIDE ORGANISATION INFORMATION
                    ================================================= */}

                    <div className="
                        grid
                        grid-cols-2
                        sm:grid-cols-4
                        lg:grid-cols-4
                        w-full
                        lg:w-auto
                        lg:min-w-[470px]
                        border-t
                        lg:border-t-0
                        pt-4
                        lg:pt-0
                        gap-y-4
                    ">


                        {/* PLAN */}

                        <div className="
                            lg:border-l
                            border-gray-300
                            px-3
                            sm:px-4
                        ">

                            <p className="
                                text-[10px]
                                sm:text-[11px]
                                text-gray-400
                            ">
                                Plan
                            </p>

                            <p className="
                                mt-3
                                text-[11px]
                                sm:text-[12px]
                                font-medium
                                text-gray-800
                            ">
                                Professional
                            </p>

                        </div>


                        {/* MEMBER LIMIT */}

                        <div className="
                            border-l
                            border-gray-300
                            px-3
                            sm:px-4
                        ">

                            <p className="
                                text-[10px]
                                sm:text-[11px]
                                text-gray-400
                            ">
                                Member Limit
                            </p>

                            <p className="
                                mt-3
                                text-[11px]
                                sm:text-[12px]
                                font-medium
                                text-gray-800
                            ">
                                20
                            </p>

                        </div>


                        {/* JOINED ON */}

                        <div className="
                            border-l
                            border-gray-300
                            px-3
                            sm:px-4
                        ">

                            <p className="
                                text-[10px]
                                sm:text-[11px]
                                text-gray-400
                            ">
                                Joined On
                            </p>

                            <p className="
                                mt-3
                                text-[11px]
                                sm:text-[12px]
                                font-medium
                                text-gray-800
                                whitespace-nowrap
                            ">
                                01 Jan, 2026
                            </p>

                        </div>


                        {/* GST NUMBER */}

                        <div className="
                            border-l
                            border-gray-300
                            px-3
                            sm:px-4
                        ">

                            <p className="
                                text-[10px]
                                sm:text-[11px]
                                text-gray-400
                            ">
                                GST No.
                            </p>

                            <p className="
                                mt-3
                                text-[10px]
                                sm:text-[11px]
                                font-medium
                                text-gray-800
                                whitespace-nowrap
                            ">
                                09ABCDE1234F1Z5
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                LOWER CONTENT
            ===================================================== */}

            <div className="
                grid
                grid-cols-1
                xl:grid-cols-[minmax(0,1.8fr)_minmax(280px,1fr)]
                gap-3
                mt-3
            ">


                {/* =================================================
                    TEAM MEMBERS
                ================================================= */}

                <div className="
                    bg-white
                    border
                    border-gray-300
                    rounded-lg
                    shadow-sm
                    overflow-hidden
                ">


                    {/* TEAM MEMBERS HEADER */}

                    <div className="
                        h-[42px]
                        flex
                        items-center
                        px-3
                        border-b
                        border-gray-300
                    ">

                        <h2 className="
                            text-[14px]
                            font-semibold
                            text-gray-800
                        ">
                            Team Members
                        </h2>

                    </div>


                    {/* TABLE */}

                    <div className="overflow-x-auto">

                        <table className="
                            w-full
                            min-w-[650px]
                            border-collapse
                        ">


                            {/* TABLE HEADER */}

                            <thead>

                                <tr className="bg-purple-200">

                                    <th className="
                                        text-left
                                        px-3
                                        py-3
                                        text-[11px]
                                        font-medium
                                        text-gray-800
                                    ">
                                        Name
                                    </th>

                                    <th className="
                                        text-left
                                        px-3
                                        py-3
                                        text-[11px]
                                        font-medium
                                        text-gray-800
                                    ">
                                        Email
                                    </th>

                                    <th className="
                                        text-left
                                        px-3
                                        py-3
                                        text-[11px]
                                        font-medium
                                        text-gray-800
                                    ">
                                        Role
                                    </th>

                                    <th className="
                                        text-left
                                        px-3
                                        py-3
                                        text-[11px]
                                        font-medium
                                        text-gray-800
                                    ">
                                        Department
                                    </th>

                                    <th className="
                                        text-left
                                        px-3
                                        py-3
                                        text-[11px]
                                        font-medium
                                        text-gray-800
                                    ">
                                        Status
                                    </th>

                                </tr>

                            </thead>


                            {/* TABLE BODY */}

                            <tbody>

                                {teamMembers.map((member) => (

                                    <tr
                                        key={member.id}
                                        className="
                                            border-b
                                            border-gray-300
                                            hover:bg-gray-50
                                            transition
                                        "
                                    >


                                        {/* NAME */}

                                        <td className="
                                            px-3
                                            py-3
                                        ">

                                            <div className="
                                                flex
                                                items-center
                                                gap-2
                                            ">


                                                {/* AVATAR */}

                                                <div className={`
                                                    w-5
                                                    h-5
                                                    rounded-full
                                                    ${member.color}
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-[7px]
                                                    text-white
                                                    font-medium
                                                    shrink-0
                                                `}>
                                                    {member.avatar}
                                                </div>


                                                {/* NAME */}

                                                <span className="
                                                    text-[10px]
                                                    text-gray-800
                                                    whitespace-nowrap
                                                ">
                                                    {member.name}
                                                </span>


                                                {/* YOU */}

                                                {member.you && (

                                                    <span className="
                                                        px-1.5
                                                        py-0.5
                                                        rounded
                                                        bg-purple-100
                                                        text-purple-500
                                                        text-[7px]
                                                    ">
                                                        You
                                                    </span>

                                                )}

                                            </div>

                                        </td>


                                        {/* EMAIL */}

                                        <td className="
                                            px-3
                                            py-3
                                            text-[10px]
                                            text-gray-700
                                            whitespace-nowrap
                                        ">
                                            {member.email}
                                        </td>


                                        {/* ROLE */}

                                        <td className="
                                            px-3
                                            py-3
                                            text-[10px]
                                            text-gray-700
                                            whitespace-nowrap
                                        ">
                                            {member.role}
                                        </td>


                                        {/* DEPARTMENT */}

                                        <td className="
                                            px-3
                                            py-3
                                            text-[10px]
                                            text-gray-700
                                            whitespace-nowrap
                                        ">
                                            {member.department}
                                        </td>


                                        {/* STATUS */}

                                        <td className="px-3 py-3">

                                            <span className={`
                                                px-2
                                                py-1
                                                rounded
                                                text-[7px]
                                                font-medium
                                                ${
                                                    member.status === "Active"
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-red-100 text-red-500"
                                                }
                                            `}>
                                                {member.status}
                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>


                {/* =================================================
                    RIGHT SIDE
                ================================================= */}

                <div className="
                    flex
                    flex-col
                    gap-3
                ">


                    {/* =================================================
                        DEPARTMENTS
                    ================================================= */}

                    <div className="
                        bg-white
                        border
                        border-gray-300
                        rounded-lg
                        shadow-sm
                        overflow-hidden
                    ">


                        {/* HEADER */}

                        <div className="
                            h-[42px]
                            flex
                            items-center
                            justify-between
                            px-3
                            border-b
                            border-gray-300
                        ">

                            <h2 className="
                                text-[14px]
                                font-semibold
                                text-gray-800
                            ">
                                Departments
                            </h2>

                            <button className="
                                text-purple-500
                                text-[12px]
                                hover:text-purple-700
                            ">
                                Manage
                            </button>

                        </div>


                        {/* DEPARTMENT LIST */}

                        <div className="px-3">

                            {departments.map((department) => {

                                const DepartmentIcon = department.icon;

                                return (

                                    <div
                                        key={department.id}
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            py-2
                                            border-b
                                            border-gray-200
                                            last:border-b-0
                                        "
                                    >


                                        <div className="
                                            flex
                                            items-center
                                            gap-2
                                        ">

                                            <div className="
                                                w-5
                                                h-5
                                                bg-gray-200
                                                rounded
                                                flex
                                                items-center
                                                justify-center
                                            ">

                                                <DepartmentIcon
                                                    size={12}
                                                    className="text-gray-700"
                                                />

                                            </div>

                                            <span className="
                                                text-[10px]
                                                text-gray-700
                                            ">
                                                {department.name}
                                            </span>

                                        </div>


                                        <span className="
                                            text-[9px]
                                            text-gray-700
                                        ">
                                            {department.members} Members
                                        </span>

                                    </div>

                                );

                            })}

                        </div>

                    </div>


                    {/* =================================================
                        ORGANISATION SETTINGS
                    ================================================= */}

                    <div className="
                        bg-white
                        border
                        border-gray-300
                        rounded-lg
                        shadow-sm
                        overflow-hidden
                    ">


                        {/* HEADER */}

                        <div className="
                            h-[42px]
                            flex
                            items-center
                            justify-between
                            px-3
                            border-b
                            border-gray-300
                        ">

                            <h2 className="
                                text-[14px]
                                font-semibold
                                text-gray-800
                            ">
                                Organization Setting
                            </h2>

                            <button className="
                                text-purple-500
                                text-[12px]
                                hover:text-purple-700
                            ">
                                Manage
                            </button>

                        </div>


                        {/* SETTINGS */}

                        <div className="px-3">

                            {organisationSettings.map((setting) => {

                                const SettingIcon = setting.icon;

                                return (

                                    <button
                                        key={setting.id}
                                        className="
                                            w-full
                                            flex
                                            items-center
                                            justify-between
                                            py-2.5
                                            border-b
                                            border-gray-200
                                            last:border-b-0
                                            text-left
                                            hover:bg-gray-50
                                            transition
                                        "
                                    >

                                        <div className="
                                            flex
                                            items-center
                                            gap-2
                                        ">

                                            <SettingIcon
                                                size={17}
                                                className="text-gray-700"
                                            />

                                            <span className="
                                                text-[10px]
                                                text-gray-700
                                            ">
                                                {setting.name}
                                            </span>

                                        </div>


                                        <ChevronRight
                                            size={15}
                                            className="text-gray-700"
                                        />

                                    </button>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                ORGANISATION SUMMARY
            ===================================================== */}

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-3
                mt-3
            ">


                {/* DEPARTMENTS */}

                <div className="
                    border
                    border-gray-300
                    rounded-lg
                    p-4
                    bg-white
                    shadow-sm
                ">

                    <p className="
                        text-[10px]
                        text-gray-500
                    ">
                        Departments
                    </p>

                    <h2 className="
                        text-xl
                        font-semibold
                        mt-1
                        text-gray-900
                    ">
                        8
                    </h2>

                </div>


                {/* TEAM MEMBERS */}

                <div className="
                    border
                    border-gray-300
                    rounded-lg
                    p-4
                    bg-white
                    shadow-sm
                ">

                    <p className="
                        text-[10px]
                        text-gray-500
                    ">
                        Team Members
                    </p>

                    <h2 className="
                        text-xl
                        font-semibold
                        mt-1
                        text-gray-900
                    ">
                        65
                    </h2>

                </div>


                {/* ACTIVE PROJECTS */}

                <div className="
                    border
                    border-gray-300
                    rounded-lg
                    p-4
                    bg-white
                    shadow-sm
                ">

                    <p className="
                        text-[10px]
                        text-gray-500
                    ">
                        Active Projects
                    </p>

                    <h2 className="
                        text-xl
                        font-semibold
                        mt-1
                        text-gray-900
                    ">
                        118
                    </h2>

                </div>

            </div>

        </div>

    );
}


export default Organisation;
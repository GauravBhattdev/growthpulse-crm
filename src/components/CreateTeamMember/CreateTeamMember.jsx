import React, { useState } from "react";

import {
    X,
    ChevronDown
} from "lucide-react";


function CreateTeamMember({ onClose }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [team, setTeam] = useState("");
    const [status, setStatus] = useState("");


    return (

        <div
            className="
                fixed
                inset-0
                z-[110]
                pointer-events-none
            "
        >

            {/* =========================
                CREATE TEAM MEMBER PANEL
            ========================== */}

            <div
                className="
                    pointer-events-auto
                    absolute
                    top-10
                    right-0
                    w-full
                    sm:w-[400px]
                    h-[600px]
                    bg-white
                    text-black
                    shadow-2xl
                    flex
                    flex-col
                "
            >

                {/* =========================
                    HEADER
                ========================== */}

                <div
                    className="
                        px-6
                        pt-5
                        pb-4
                        shrink-0
                        border-b
                        border-gray-200
                    "
                >

                    <div
                        className="
                            flex
                            items-start
                            justify-between
                        "
                    >

                        <div>

                            <h2
                                className="
                                    text-[23px]
                                    font-semibold
                                "
                            >
                                Create Team Member
                            </h2>

                            <p
                                className="
                                    text-[13px]
                                    text-gray-500
                                    mt-1
                                "
                            >
                                Add a new member to your team
                            </p>

                        </div>


                        {/* Close */}

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                text-gray-700
                                hover:text-black
                                transition
                                cursor-pointer
                            "
                        >

                            <X size={24} />

                        </button>

                    </div>

                </div>


                {/* =========================
                    FORM
                ========================== */}

                <div
                    className="
                        flex-1
                        overflow-y-auto
                        px-6
                        py-5
                    "
                >

                    {/* Member Information */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            mb-5
                        "
                    >

                        <h3
                            className="
                                text-[13px]
                                font-semibold
                                whitespace-nowrap
                            "
                        >
                            Member Information
                        </h3>

                        <div className="h-px bg-gray-300 flex-1"></div>

                    </div>


                    {/* Name */}

                    <div className="mb-4">

                        <label
                            className="
                                block
                                text-[13px]
                                font-medium
                                mb-1.5
                            "
                        >
                            Member Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter member name"
                            className="
                                w-full
                                h-[36px]
                                border
                                border-gray-400
                                rounded
                                px-3
                                text-[12px]
                                outline-none
                                focus:border-purple-500
                            "
                        />

                    </div>


                    {/* Email */}

                    <div className="mb-4">

                        <label
                            className="
                                block
                                text-[13px]
                                font-medium
                                mb-1.5
                            "
                        >
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email address"
                            className="
                                w-full
                                h-[36px]
                                border
                                border-gray-400
                                rounded
                                px-3
                                text-[12px]
                                outline-none
                                focus:border-purple-500
                            "
                        />

                    </div>


                    {/* Role */}

                    <div className="mb-4">

                        <label
                            className="
                                block
                                text-[13px]
                                font-medium
                                mb-1.5
                            "
                        >
                            Role
                        </label>

                        <div className="relative">

                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="
                                    appearance-none
                                    w-full
                                    h-[36px]
                                    border
                                    border-gray-400
                                    rounded
                                    px-3
                                    pr-8
                                    text-[12px]
                                    text-gray-500
                                    bg-white
                                    outline-none
                                "
                            >

                                <option value="">
                                    Select Role
                                </option>

                                <option value="Manager">
                                    Manager
                                </option>

                                <option value="Executive">
                                    Executive
                                </option>

                                <option value="Designer">
                                    Designer
                                </option>

                                <option value="Developer">
                                    Developer
                                </option>

                            </select>

                            <ChevronDown
                                size={16}
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    pointer-events-none
                                "
                            />

                        </div>

                    </div>


                    {/* Team */}

                    <div className="mb-4">

                        <label
                            className="
                                block
                                text-[13px]
                                font-medium
                                mb-1.5
                            "
                        >
                            Team
                        </label>

                        <div className="relative">

                            <select
                                value={team}
                                onChange={(e) => setTeam(e.target.value)}
                                className="
                                    appearance-none
                                    w-full
                                    h-[36px]
                                    border
                                    border-gray-400
                                    rounded
                                    px-3
                                    pr-8
                                    text-[12px]
                                    text-gray-500
                                    bg-white
                                    outline-none
                                "
                            >

                                <option value="">
                                    Select Team
                                </option>

                                <option value="Sales Team">
                                    Sales Team
                                </option>

                                <option value="Marketing Team">
                                    Marketing Team
                                </option>

                                <option value="Design Team">
                                    Design Team
                                </option>

                                <option value="Support Team">
                                    Support Team
                                </option>

                                <option value="Development Team">
                                    Development Team
                                </option>

                            </select>

                            <ChevronDown
                                size={16}
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    pointer-events-none
                                "
                            />

                        </div>

                    </div>


                    {/* Status */}

                    <div className="mb-4">

                        <label
                            className="
                                block
                                text-[13px]
                                font-medium
                                mb-1.5
                            "
                        >
                            Status
                        </label>

                        <div className="relative">

                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="
                                    appearance-none
                                    w-full
                                    h-[36px]
                                    border
                                    border-gray-400
                                    rounded
                                    px-3
                                    pr-8
                                    text-[12px]
                                    text-gray-500
                                    bg-white
                                    outline-none
                                "
                            >

                                <option value="">
                                    Select Status
                                </option>

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Away">
                                    Away
                                </option>

                                <option value="Inactive">
                                    Inactive
                                </option>

                            </select>

                            <ChevronDown
                                size={16}
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    pointer-events-none
                                "
                            />

                        </div>

                    </div>

                </div>


                {/* =========================
                    FOOTER
                ========================== */}

                <div
                    className="
                        shrink-0
                        border-t
                        border-gray-300
                        bg-white
                        px-6
                        py-3
                        flex
                        justify-end
                        items-center
                        gap-2
                    "
                >

                    {/* Cancel */}

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            h-[32px]
                            px-4
                            border
                            border-gray-500
                            rounded
                            text-[12px]
                            text-gray-800
                            hover:bg-gray-100
                            transition
                        "
                    >
                        Cancel
                    </button>


                    {/* Create */}

                    <button
                        type="button"
                        className="
                            h-[32px]
                            px-4
                            bg-purple-600
                            hover:bg-purple-700
                            text-white
                            rounded
                            text-[12px]
                            font-medium
                            transition
                        "
                    >
                        Create Team Member
                    </button>

                </div>

            </div>

        </div>

    );

}


export default CreateTeamMember;
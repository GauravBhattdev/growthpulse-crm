import React, { useState } from "react";

import {
    X,
    ChevronDown,
    Megaphone
} from "lucide-react";


function CreateTeam({ onClose }) {

    const [teamName, setTeamName] = useState("");

    const [description, setDescription] = useState("");

    const [teamLeader, setTeamLeader] = useState("");

    const [department, setDepartment] = useState("");

    const [memberLimit, setMemberLimit] = useState("");

    const [visibility, setVisibility] = useState("");

    const [members, setMembers] = useState("");


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
                CREATE TEAM PANEL
            ========================== */}

            <div
                className="
                    pointer-events-auto
                    absolute
                    top-10
                    right-0
                    w-full
                    sm:w-[350px]
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
                        pb-3
                        shrink-0
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
                                    text-black
                                "
                            >
                                Create Team
                            </h2>

                            <p
                                className="
                                    text-[13px]
                                    text-gray-500
                                    mt-1
                                "
                            >
                                Add a new team to organize your work better
                            </p>

                        </div>


                        {/* Close Button */}

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                text-black
                                hover:text-gray-500
                                transition
                                cursor-pointer
                            "
                        >

                            <X size={24} />

                        </button>

                    </div>

                </div>


                {/* =========================
                    FORM CONTENT
                ========================== */}

                <div
                    className="
                        flex-1
                        overflow-y-auto
                        px-6
                        pb-6
                    "
                >

                    {/* =========================
                        TEAM INFORMATION
                    ========================== */}

                    <div className="mt-1">

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
                                Team Information
                            </h3>

                            <div className="h-px bg-gray-300 flex-1"></div>

                        </div>


                        {/* Team Name + Team Icon */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-[1fr_105px]
                                gap-4
                            "
                        >

                            {/* Team Name */}

                            <div>

                                <label
                                    className="
                                        block
                                        text-[13px]
                                        font-medium
                                        mb-1.5
                                    "
                                >
                                    Team Name
                                </label>

                                <input
                                    type="text"
                                    value={teamName}
                                    onChange={(e) =>
                                        setTeamName(e.target.value)
                                    }
                                    placeholder="Enter team name"
                                    className="
                                        w-full
                                        h-[34px]
                                        border
                                        border-gray-500
                                        rounded
                                        px-2
                                        text-[12px]
                                        outline-none
                                        focus:border-purple-500
                                    "
                                />

                            </div>


                            {/* Team Icon */}

                            <div>

                                <label
                                    className="
                                        block
                                        text-[13px]
                                        font-medium
                                        mb-1.5
                                    "
                                >
                                    Team Icon
                                </label>

                                <button
                                    type="button"
                                    className="
                                        w-full
                                        h-[40px]
                                        border
                                        border-gray-500
                                        rounded
                                        px-2
                                        flex
                                        items-center
                                        justify-between
                                        bg-white
                                    "
                                >

                                    <span
                                        className="
                                            w-7
                                            h-7
                                            rounded-full
                                            bg-purple-600
                                            flex
                                            items-center
                                            justify-center
                                            text-white
                                        "
                                    >

                                        <Megaphone size={15} />

                                    </span>


                                    <ChevronDown size={18} />

                                </button>

                            </div>

                        </div>


                        {/* Description */}

                        <div className="mt-4">

                            <label
                                className="
                                    block
                                    text-[13px]
                                    font-medium
                                    mb-1.5
                                "
                            >
                                Description
                            </label>

                            <div className="relative">

                                <textarea
                                    value={description}
                                    onChange={(e) => {

                                        if (e.target.value.length <= 150) {
                                            setDescription(e.target.value);
                                        }

                                    }}
                                    placeholder="Enter team description (optional)"
                                    className="
                                        w-full
                                        h-[66px]
                                        border
                                        border-gray-500
                                        rounded
                                        px-2
                                        py-2
                                        text-[12px]
                                        outline-none
                                        resize-none
                                        focus:border-purple-500
                                    "
                                />

                                <span
                                    className="
                                        absolute
                                        bottom-1.5
                                        right-2
                                        text-[11px]
                                        text-gray-500
                                    "
                                >
                                    {description.length}/150
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        TEAM SETTING
                    ========================== */}

                    <div className="mt-5">

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
                                Team Setting
                            </h3>

                            <div className="h-px bg-gray-300 flex-1"></div>

                        </div>


                        {/* Team Leader + Department */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-3
                            "
                        >

                            {/* Team Leader */}

                            <div>

                                <label
                                    className="
                                        block
                                        text-[13px]
                                        font-medium
                                        mb-1.5
                                    "
                                >
                                    Team Leader
                                </label>

                                <div className="relative">

                                    <select
                                        value={teamLeader}
                                        onChange={(e) =>
                                            setTeamLeader(e.target.value)
                                        }
                                        className="
                                            appearance-none
                                            w-full
                                            h-[34px]
                                            border
                                            border-gray-500
                                            rounded
                                            px-2
                                            pr-8
                                            text-[12px]
                                            text-gray-500
                                            bg-white
                                            outline-none
                                        "
                                    >

                                        <option value="">
                                            Enter team Leader
                                        </option>

                                        <option value="Admin">
                                            Admin
                                        </option>

                                        <option value="Manager">
                                            Manager
                                        </option>

                                    </select>

                                    <ChevronDown
                                        size={17}
                                        className="
                                            absolute
                                            right-2
                                            top-1/2
                                            -translate-y-1/2
                                            pointer-events-none
                                        "
                                    />

                                </div>

                            </div>


                            {/* Department */}

                            <div>

                                <label
                                    className="
                                        block
                                        text-[13px]
                                        font-medium
                                        mb-1.5
                                    "
                                >
                                    Department
                                </label>

                                <div className="relative">

                                    <select
                                        value={department}
                                        onChange={(e) =>
                                            setDepartment(e.target.value)
                                        }
                                        className="
                                            appearance-none
                                            w-full
                                            h-[34px]
                                            border
                                            border-gray-500
                                            rounded
                                            px-2
                                            pr-8
                                            text-[12px]
                                            text-gray-500
                                            bg-white
                                            outline-none
                                        "
                                    >

                                        <option value="">
                                            Select Department
                                        </option>

                                        <option value="Sales">
                                            Sales
                                        </option>

                                        <option value="Marketing">
                                            Marketing
                                        </option>

                                        <option value="Support">
                                            Support
                                        </option>

                                        <option value="Development">
                                            Development
                                        </option>

                                    </select>

                                    <ChevronDown
                                        size={17}
                                        className="
                                            absolute
                                            right-2
                                            top-1/2
                                            -translate-y-1/2
                                            pointer-events-none
                                        "
                                    />

                                </div>

                            </div>

                        </div>


                        {/* Member Limit + Visibility */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-3
                                mt-4
                            "
                        >

                            {/* Member Limit */}

                            <div>

                                <label
                                    className="
                                        block
                                        text-[13px]
                                        font-medium
                                        mb-1.5
                                    "
                                >
                                    Member Limit
                                </label>

                                <input
                                    type="number"
                                    value={memberLimit}
                                    onChange={(e) =>
                                        setMemberLimit(e.target.value)
                                    }
                                    placeholder="Enter member limit"
                                    className="
                                        w-full
                                        h-[34px]
                                        border
                                        border-gray-500
                                        rounded
                                        px-2
                                        text-[12px]
                                        outline-none
                                        focus:border-purple-500
                                    "
                                />

                                <p
                                    className="
                                        text-[9px]
                                        text-gray-500
                                        mt-1
                                    "
                                >
                                    Maximum number of members
                                </p>

                            </div>


                            {/* Team Visibility */}

                            <div>

                                <label
                                    className="
                                        block
                                        text-[13px]
                                        font-medium
                                        mb-1.5
                                    "
                                >
                                    Team Visibility
                                </label>

                                <div className="relative">

                                    <select
                                        value={visibility}
                                        onChange={(e) =>
                                            setVisibility(e.target.value)
                                        }
                                        className="
                                            appearance-none
                                            w-full
                                            h-[34px]
                                            border
                                            border-gray-500
                                            rounded
                                            px-2
                                            pr-8
                                            text-[12px]
                                            text-gray-500
                                            bg-white
                                            outline-none
                                        "
                                    >

                                        <option value="">
                                            Select Visibility
                                        </option>

                                        <option value="Public">
                                            Public
                                        </option>

                                        <option value="Private">
                                            Private
                                        </option>

                                    </select>

                                    <ChevronDown
                                        size={17}
                                        className="
                                            absolute
                                            right-2
                                            top-1/2
                                            -translate-y-1/2
                                            pointer-events-none
                                        "
                                    />

                                </div>

                                <p
                                    className="
                                        text-[9px]
                                        text-gray-500
                                        mt-1
                                    "
                                >
                                    Who can see this team
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        ADD MEMBERS
                    ========================== */}

                    <div className="mt-5">

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
                                Add Members (optional)
                            </h3>

                            <div className="h-px bg-gray-300 flex-1"></div>

                        </div>


                        <label
                            className="
                                block
                                text-[13px]
                                font-medium
                                mb-1.5
                            "
                        >
                            Add Members
                        </label>

                        <div className="relative">

                            <select
                                value={members}
                                onChange={(e) =>
                                    setMembers(e.target.value)
                                }
                                className="
                                    appearance-none
                                    w-full
                                    sm:w-[215px]
                                    h-[34px]
                                    border
                                    border-gray-500
                                    rounded
                                    px-2
                                    pr-8
                                    text-[12px]
                                    text-gray-500
                                    bg-white
                                    outline-none
                                "
                            >

                                <option value="">
                                    Search and select members
                                </option>

                                <option value="Member 1">
                                    Member 1
                                </option>

                                <option value="Member 2">
                                    Member 2
                                </option>

                                <option value="Member 3">
                                    Member 3
                                </option>

                            </select>

                            <ChevronDown
                                size={17}
                                className="
                                    absolute
                                    left-[190px]
                                    sm:left-[195px]
                                    top-1/2
                                    -translate-y-1/2
                                    pointer-events-none
                                "
                            />

                        </div>


                        <p
                            className="
                                text-[9px]
                                text-gray-500
                                mt-1
                            "
                        >
                            Maximum number of members
                        </p>

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
                            cursor-pointer
                        "
                    >
                        Cancel
                    </button>


                    {/* Create Team */}

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
                            cursor-pointer
                        "
                    >
                        Create Team
                    </button>

                </div>

            </div>

        </div>

    );

}


export default CreateTeam;
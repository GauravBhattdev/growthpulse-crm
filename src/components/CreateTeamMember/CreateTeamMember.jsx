import React, { useEffect, useRef, useState } from "react";

import {
    X,
    ChevronDown
} from "lucide-react";

import { toast } from "react-toastify";


function CreateTeamMember({ onClose }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [team, setTeam] = useState("");
    const [status, setStatus] = useState("");

    const panelRef = useRef(null);


    // =================================================
    // CLOSE ON OUTSIDE CLICK
    // =================================================

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                panelRef.current &&
                !panelRef.current.contains(event.target)
            ) {
                onClose();
            }

        };


        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [onClose]);


    // =================================================
    // CREATE
    // =================================================

    const handleCreate = () => {

        if (!name.trim()) {
            toast.error("Please enter member name.");
            return;
        }

        if (!email.trim()) {
            toast.error("Please enter email address.");
            return;
        }

        if (!role) {
            toast.error("Please select a role.");
            return;
        }

        if (!team) {
            toast.error("Please select a team.");
            return;
        }

        if (!status) {
            toast.error("Please select a status.");
            return;
        }

        toast.success(`Team member "${name}" created successfully!`);

        setTimeout(() => {
            onClose();
        }, 600);

    };


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
                ref={panelRef}

                className="
                    pointer-events-auto
                    absolute
                    top-10
                    right-0

                    w-full
                    sm:w-[400px]

                    h-[calc(100vh-2.5rem)]
                    sm:h-[600px]

                    bg-theme-surface
                    text-theme-text

                    border-l
                    border-theme-border

                    shadow-2xl

                    flex
                    flex-col

                    overflow-hidden

                    transition-colors
                    duration-300
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
                        border-theme-border-light
                    "
                >

                    <div className="flex items-start justify-between gap-3">

                        <div>

                            <h2 className="text-[22px] sm:text-[23px] font-semibold text-theme-text">
                                Create Team Member
                            </h2>

                            <p className="text-[12px] sm:text-[13px] text-theme-text-secondary mt-1">
                                Add a new member to your team
                            </p>

                        </div>


                        {/* Close */}

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                shrink-0
                                text-theme-text-secondary
                                hover:text-theme-text
                                transition
                                cursor-pointer
                            "
                            aria-label="Close"
                        >

                            <X size={22} />

                        </button>

                    </div>

                </div>


                {/* =========================
                    FORM
                ========================== */}

                <div className="flex-1 overflow-y-auto px-6 py-5">

                    {/* Member Information */}

                    <div className="flex items-center gap-2 mb-5">

                        <h3 className="text-[13px] font-semibold text-theme-text whitespace-nowrap">
                            Member Information
                        </h3>

                        <div className="h-px bg-theme-border-light flex-1" />

                    </div>


                    {/* Name */}

                    <div className="mb-4">

                        <label className="block text-[12px] sm:text-[13px] font-medium text-theme-text mb-1.5">
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
                                border-theme-border-light
                                rounded
                                px-3
                                text-[12px]
                                text-theme-text
                                bg-theme-surface
                                placeholder:text-theme-text-muted
                                outline-none
                                focus:border-primary
                                transition-colors
                            "
                        />

                    </div>


                    {/* Email */}

                    <div className="mb-4">

                        <label className="block text-[12px] sm:text-[13px] font-medium text-theme-text mb-1.5">
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
                                border-theme-border-light
                                rounded
                                px-3
                                text-[12px]
                                text-theme-text
                                bg-theme-surface
                                placeholder:text-theme-text-muted
                                outline-none
                                focus:border-primary
                                transition-colors
                            "
                        />

                    </div>


                    {/* Role */}

                    <div className="mb-4">

                        <label className="block text-[12px] sm:text-[13px] font-medium text-theme-text mb-1.5">
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
                                    border-theme-border-light
                                    rounded
                                    px-3
                                    pr-8
                                    text-[12px]
                                    text-theme-text
                                    bg-theme-surface
                                    outline-none
                                    focus:border-primary
                                    transition-colors
                                    cursor-pointer
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
                                    text-theme-text-secondary
                                    pointer-events-none
                                "
                            />

                        </div>

                    </div>


                    {/* Team */}

                    <div className="mb-4">

                        <label className="block text-[12px] sm:text-[13px] font-medium text-theme-text mb-1.5">
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
                                    border-theme-border-light
                                    rounded
                                    px-3
                                    pr-8
                                    text-[12px]
                                    text-theme-text
                                    bg-theme-surface
                                    outline-none
                                    focus:border-primary
                                    transition-colors
                                    cursor-pointer
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
                                    text-theme-text-secondary
                                    pointer-events-none
                                "
                            />

                        </div>

                    </div>


                    {/* Status */}

                    <div className="mb-4">

                        <label className="block text-[12px] sm:text-[13px] font-medium text-theme-text mb-1.5">
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
                                    border-theme-border-light
                                    rounded
                                    px-3
                                    pr-8
                                    text-[12px]
                                    text-theme-text
                                    bg-theme-surface
                                    outline-none
                                    focus:border-primary
                                    transition-colors
                                    cursor-pointer
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
                                    text-theme-text-secondary
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
                        border-theme-border-light
                        bg-theme-surface
                        px-6
                        py-3
                        flex
                        justify-end
                        items-center
                        gap-2
                        transition-colors
                        duration-300
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
                            border-theme-border-light
                            rounded
                            text-[12px]
                            text-theme-text
                            bg-theme-surface
                            hover:bg-theme-surface-secondary
                            transition
                            cursor-pointer
                        "
                    >
                        Cancel
                    </button>


                    {/* Create */}

                    <button
                        type="button"
                        onClick={handleCreate}
                        className="
                            h-[32px]
                            px-4
                            bg-primary
                            hover:bg-primaryHover
                            text-white
                            rounded
                            text-[12px]
                            font-medium
                            transition
                            cursor-pointer
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
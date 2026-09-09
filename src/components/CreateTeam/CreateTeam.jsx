import React, { useState } from "react";

import {
    X,
    Megaphone,
    ChevronDown
} from "lucide-react";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormSection from "./FormSection";

import {
    teamLeaderOptions,
    departmentOptions,
    visibilityOptions,
    memberOptions
} from "../../data/teamData";


function CreateTeam({ onClose }) {

    const [teamName, setTeamName] = useState("");
    const [description, setDescription] = useState("");
    const [teamLeader, setTeamLeader] = useState("");
    const [department, setDepartment] = useState("");
    const [memberLimit, setMemberLimit] = useState("");
    const [visibility, setVisibility] = useState("");
    const [members, setMembers] = useState("");


    return (

        <div className="
            fixed
            inset-0
            z-[110]
            pointer-events-none
        ">


            {/* =================================================
                CREATE TEAM PANEL
            ================================================= */}

            <div className="
                pointer-events-auto
                absolute
                top-10
                right-0
                w-full
                sm:w-[350px]
                h-[600px]
                bg-background
                text-textPrimary
                shadow-2xl
                flex
                flex-col
            ">


                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="
                    px-6
                    pt-5
                    pb-3
                    shrink-0
                ">

                    <div className="
                        flex
                        items-start
                        justify-between
                    ">

                        <div>

                            <h2 className="
                                text-[23px]
                                font-semibold
                                text-textPrimary
                            ">
                                Create Team
                            </h2>


                            <p className="
                                text-[13px]
                                text-textSecondary
                                mt-1
                            ">
                                Add a new team to organize your work better
                            </p>

                        </div>


                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                text-textPrimary
                                hover:text-textSecondary
                                transition
                                cursor-pointer
                            "
                        >
                            <X size={24} />
                        </button>

                    </div>

                </div>


                {/* =================================================
                    FORM CONTENT
                ================================================= */}

                <div className="
                    flex-1
                    overflow-y-auto
                    px-6
                    pb-6
                ">


                    {/* =================================================
                        TEAM INFORMATION
                    ================================================= */}

                    <FormSection title="Team Information">

                        <div className="
                            grid
                            grid-cols-1
                            sm:grid-cols-[1fr_105px]
                            gap-4
                        ">

                            <FormInput
                                label="Team Name"
                                value={teamName}
                                onChange={(e) =>
                                    setTeamName(e.target.value)
                                }
                                placeholder="Enter team name"
                            />


                            {/* TEAM ICON */}

                            <div>

                                <label className="
                                    block
                                    text-[13px]
                                    font-medium
                                    text-textPrimary
                                    mb-1.5
                                ">
                                    Team Icon
                                </label>


                                <button
                                    type="button"
                                    className="
                                        w-full
                                        h-[40px]
                                        border
                                        border-borderLight
                                        rounded
                                        px-2
                                        flex
                                        items-center
                                        justify-between
                                        bg-background
                                    "
                                >

                                    <span className="
                                        w-7
                                        h-7
                                        rounded-full
                                        bg-primary
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                    ">
                                        <Megaphone size={15} />
                                    </span>


                                    <ChevronDown
                                        size={18}
                                        className="text-textSecondary"
                                    />

                                </button>

                            </div>

                        </div>


                        {/* DESCRIPTION */}

                        <div className="mt-4">

                            <label className="
                                block
                                text-[13px]
                                font-medium
                                text-textPrimary
                                mb-1.5
                            ">
                                Description
                            </label>


                            <div className="relative">

                                <textarea
                                    value={description}
                                    onChange={(e) => {

                                        if (
                                            e.target.value.length <= 150
                                        ) {
                                            setDescription(
                                                e.target.value
                                            );
                                        }

                                    }}
                                    placeholder="Enter team description (optional)"
                                    className="
                                        w-full
                                        h-[66px]
                                        border
                                        border-borderLight
                                        rounded
                                        px-2
                                        py-2
                                        text-[12px]
                                        text-textPrimary
                                        outline-none
                                        resize-none
                                        focus:border-primary
                                    "
                                />


                                <span className="
                                    absolute
                                    bottom-1.5
                                    right-2
                                    text-[11px]
                                    text-textSecondary
                                ">
                                    {description.length}/150
                                </span>

                            </div>

                        </div>

                    </FormSection>


                    {/* =================================================
                        TEAM SETTINGS
                    ================================================= */}

                    <FormSection title="Team Setting">

                        <div className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-3
                        ">

                            <FormSelect
                                label="Team Leader"
                                value={teamLeader}
                                onChange={(e) =>
                                    setTeamLeader(e.target.value)
                                }
                                placeholder="Enter team Leader"
                                options={teamLeaderOptions}
                            />


                            <FormSelect
                                label="Department"
                                value={department}
                                onChange={(e) =>
                                    setDepartment(e.target.value)
                                }
                                placeholder="Select Department"
                                options={departmentOptions}
                            />

                        </div>


                        <div className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-3
                            mt-4
                        ">

                            <FormInput
                                label="Member Limit"
                                type="number"
                                value={memberLimit}
                                onChange={(e) =>
                                    setMemberLimit(e.target.value)
                                }
                                placeholder="Enter member limit"
                                helperText="Maximum number of members"
                            />


                            <FormSelect
                                label="Team Visibility"
                                value={visibility}
                                onChange={(e) =>
                                    setVisibility(e.target.value)
                                }
                                placeholder="Select Visibility"
                                options={visibilityOptions}
                                helperText="Who can see this team"
                            />

                        </div>

                    </FormSection>


                    {/* =================================================
                        ADD MEMBERS
                    ================================================= */}

                    <FormSection title="Add Members (optional)">

                        <FormSelect
                            label="Add Members"
                            value={members}
                            onChange={(e) =>
                                setMembers(e.target.value)
                            }
                            placeholder="Search and select members"
                            options={memberOptions}
                            width="w-full sm:w-[215px]"
                            helperText="Maximum number of members"
                        />

                    </FormSection>

                </div>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="
                    shrink-0
                    border-t
                    border-borderLight
                    bg-background
                    px-6
                    py-3
                    flex
                    justify-end
                    items-center
                    gap-2
                ">


                    {/* CANCEL */}

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            h-[32px]
                            px-4
                            border
                            border-borderLight
                            rounded
                            text-[12px]
                            text-textPrimary
                            hover:bg-gray-100
                            transition
                            cursor-pointer
                        "
                    >
                        Cancel
                    </button>


                    {/* CREATE TEAM */}

                    <button
                        type="button"
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
                        Create Team
                    </button>

                </div>

            </div>

        </div>
    );
}


export default CreateTeam;
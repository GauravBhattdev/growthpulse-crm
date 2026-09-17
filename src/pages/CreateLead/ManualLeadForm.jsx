import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ManualLeadForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        source: "",
        status: "New",
        leadOwner: "",
        industry: "",
        channel: "",
        tags: "",
        address: "",
        city: "",
        state: "",
        country: "",
        postalCode: ""
    });

    const [loading, setLoading] = useState(false);


    // ==============================
    // HANDLE INPUT
    // ==============================

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));

    };


    // ==============================
    // RESET
    // ==============================

    const handleReset = () => {

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            companyName: "",
            source: "",
            status: "New",
            leadOwner: "",
            industry: "",
            channel: "",
            tags: "",
            address: "",
            city: "",
            state: "",
            country: "",
            postalCode: ""
        });

    };


    // ==============================
    // CANCEL — back to Leads page
    // ==============================

    const handleCancel = () => {

        if (loading) {
            return;
        }

        navigate("/leads");

    };


    // ==============================
    // SUBMIT
    // ==============================

    const handleSubmit = (event) => {

        event.preventDefault();

        setLoading(true);

        console.log("Creating Lead:", formData);

        setTimeout(() => {

            setLoading(false);

            console.log("Created Lead:", formData);

            toast.success("Lead created successfully!");

        }, 1500);

    };


    // ==============================
    // COMMON INPUT STYLE
    // ==============================

    const inputClass = `
        w-full
        h-[34px]
        px-2.5
        border
        border-theme-border-light
        rounded
        shadow-sm
        text-[12px]
        text-theme-text
        bg-theme-surface
        placeholder:text-theme-text-muted
        outline-none
        focus:border-primary
    `;


    const labelClass = `
        block
        text-[12px]
        font-medium
        text-theme-text
        mb-1
    `;


    const selectClass = `
        w-full
        h-[34px]
        px-2.5
        border
        border-theme-border-light
        rounded
        shadow-sm
        text-[12px]
        text-theme-text
        outline-none
        bg-theme-surface
        focus:border-primary
    `;


    return (

        <form
            onSubmit={handleSubmit}
            className="
                w-full
                border
                border-theme-border-light
                rounded-[11px]
                bg-theme-surface
                overflow-hidden

                transition-colors
                duration-300
            "
        >

            {/* ==========================================
                FORM BODY
            ========================================== */}

            <div className="px-4 sm:px-4 pt-3 pb-4">

                {/* ==========================================
                    BASIC INFORMATION
                ========================================== */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mb-3
                    "
                >

                    <h2
                        className="
                            text-[16px]
                            font-semibold
                            text-primary
                        "
                    >
                        Basic Information
                    </h2>

                </div>


                {/* ==========================================
                    BASIC INFORMATION FIELDS
                ========================================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-x-9
                        gap-y-3
                    "
                >

                    {/* FIRST NAME */}

                    <div>

                        <label className={labelClass}>
                            First Name
                        </label>

                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter first name"
                            className={inputClass}
                        />

                    </div>


                    {/* LAST NAME */}

                    <div>

                        <label className={labelClass}>
                            Last Name
                        </label>

                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter last name"
                            className={inputClass}
                        />

                    </div>


                    {/* EMAIL */}

                    <div>

                        <label className={labelClass}>
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            className={inputClass}
                        />

                    </div>


                    {/* PHONE */}

                    <div>

                        <label className={labelClass}>
                            Phone Number
                        </label>

                        <div
                            className="
                                flex
                                w-full
                                h-[34px]
                                border
                                border-theme-border-light
                                rounded
                                overflow-hidden
                                shadow-sm
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-1
                                    px-2
                                    border-r
                                    border-theme-border-light
                                    bg-theme-surface-secondary
                                    text-[12px]
                                    text-theme-text
                                    whitespace-nowrap
                                "
                            >

                                🇮🇳

                                <span>
                                    +91
                                </span>

                                <span className="text-theme-text-secondary">
                                    ▾
                                </span>

                            </div>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter phone number"
                                className="
                                    flex-1
                                    min-w-0
                                    px-2
                                    text-[12px]
                                    text-theme-text
                                    bg-theme-surface
                                    placeholder:text-theme-text-muted
                                    outline-none
                                "
                            />

                        </div>

                    </div>


                    {/* COMPANY */}

                    <div>

                        <label className={labelClass}>
                            Company Name
                        </label>

                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Enter Company name"
                            className={inputClass}
                        />

                    </div>

                </div>


                {/* ==========================================
                    LEAD DETAILS
                ========================================== */}

                <h2
                    className="
                        text-[16px]
                        font-semibold
                        text-primary
                        mt-4
                        mb-3
                    "
                >
                    Lead Details
                </h2>


                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-x-9
                        gap-y-3
                    "
                >

                    {/* SOURCE */}

                    <div>

                        <label className={labelClass}>
                            Source
                        </label>

                        <select
                            name="source"
                            value={formData.source}
                            onChange={handleChange}
                            className={selectClass}
                        >

                            <option value="">
                                Select Source
                            </option>

                            <option value="Website">
                                Website
                            </option>

                            <option value="LinkedIn">
                                LinkedIn
                            </option>

                            <option value="Referral">
                                Referral
                            </option>

                            <option value="Cold Call">
                                Cold Call
                            </option>

                            <option value="Advertisement">
                                Advertisement
                            </option>

                        </select>

                    </div>


                    {/* STATUS */}

                    <div>

                        <label className={labelClass}>
                            Status
                        </label>

                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className={selectClass}
                        >

                            <option value="New">
                                New
                            </option>

                            <option value="Contacted">
                                Contacted
                            </option>

                            <option value="Qualified">
                                Qualified
                            </option>

                            <option value="Proposal">
                                Proposal
                            </option>

                            <option value="Closed">
                                Closed
                            </option>

                        </select>

                    </div>


                    {/* LEAD OWNER */}

                    <div>

                        <label className={labelClass}>
                            Lead Owner
                        </label>

                        <select
                            name="leadOwner"
                            value={formData.leadOwner}
                            onChange={handleChange}
                            className={selectClass}
                        >

                            <option value="">
                                Select lead owner
                            </option>

                            <option value="Him Mostins">
                                Him Mostins
                            </option>

                            <option value="Virele Netkatorie">
                                Virele Netkatorie
                            </option>

                            <option value="Linte Preddenbling">
                                Linte Preddenbling
                            </option>

                        </select>

                    </div>


                    {/* INDUSTRY */}

                    <div>

                        <label className={labelClass}>
                            Industry
                        </label>

                        <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className={selectClass}
                        >

                            <option value="">
                                Select Industry
                            </option>

                            <option value="Technology">
                                Technology
                            </option>

                            <option value="Finance">
                                Finance
                            </option>

                            <option value="Healthcare">
                                Healthcare
                            </option>

                            <option value="Education">
                                Education
                            </option>

                            <option value="Retail">
                                Retail
                            </option>

                            <option value="Construction">
                                Construction
                            </option>

                        </select>

                    </div>


                    {/* CHANNEL */}

                    <div>

                        <label className={labelClass}>
                            Channel
                        </label>

                        <input
                            type="text"
                            name="channel"
                            value={formData.channel}
                            onChange={handleChange}
                            placeholder="Enter channel"
                            className={inputClass}
                        />

                    </div>


                    {/* TAGS */}

                    <div>

                        <label className={labelClass}>
                            Tags
                        </label>

                        <input
                            type="text"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            placeholder="Enter tags"
                            className={inputClass}
                        />

                        <p
                            className="
                                text-[9px]
                                text-theme-text-secondary
                                mt-0.5
                            "
                        >
                            Press Enter to add multiple tags
                        </p>

                    </div>

                </div>


                {/* ==========================================
                    ADDRESS
                ========================================== */}

                <h2
                    className="
                        text-[16px]
                        font-semibold
                        text-primary
                        mt-4
                        mb-3
                    "
                >
                    Address
                </h2>


                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-x-9
                        gap-y-3
                    "
                >

                    {/* ADDRESS */}

                    <div>

                        <label className={labelClass}>
                            Address
                        </label>

                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter Address"
                            className="
                                w-full
                                h-[108px]
                                px-2.5
                                py-2
                                border
                                border-theme-border-light
                                rounded
                                shadow-sm
                                text-[12px]
                                text-theme-text
                                bg-theme-surface
                                placeholder:text-theme-text-muted
                                outline-none
                                resize-none
                                focus:border-primary
                            "
                        />

                    </div>


                    {/* CITY + COUNTRY */}

                    <div>

                        <label className={labelClass}>
                            City
                        </label>

                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter city"
                            className={inputClass}
                        />


                        <label
                            className="
                                block
                                text-[12px]
                                font-medium
                                text-theme-text
                                mt-2
                                mb-1
                            "
                        >
                            Country
                        </label>

                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className={selectClass}
                        >

                            <option value="">
                                Select Country
                            </option>

                            <option value="India">
                                India
                            </option>

                            <option value="United States">
                                United States
                            </option>

                            <option value="United Kingdom">
                                United Kingdom
                            </option>

                            <option value="Canada">
                                Canada
                            </option>

                            <option value="Australia">
                                Australia
                            </option>

                        </select>

                    </div>


                    {/* STATE + POSTAL CODE */}

                    <div>

                        <label className={labelClass}>
                            State
                        </label>

                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="Enter state"
                            className={inputClass}
                        />


                        <label
                            className="
                                block
                                text-[12px]
                                font-medium
                                text-theme-text
                                mt-2
                                mb-1
                            "
                        >
                            Postal Code
                        </label>

                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="Enter postal code"
                            className={inputClass}
                        />

                    </div>

                </div>

            </div>


            {/* ==========================================
                FOOTER
            ========================================== */}

            <div
                className="
                    shrink-0

                    border-t
                    border-theme-border-light

                    px-4
                    sm:px-5
                    py-3

                    flex
                    items-center
                    justify-between

                    gap-3

                    transition-colors
                    duration-300
                "
            >

                {/* CANCEL — LEFT */}

                <button
                    type="button"
                    onClick={handleCancel}
                    disabled={loading}
                    className="
                        h-[38px]
                        min-w-[90px]
                        px-4
                        sm:px-5
                        border
                        border-theme-border-light
                        rounded-md
                        bg-theme-surface
                        text-theme-text
                        text-xs
                        sm:text-sm
                        font-semibold
                        hover:bg-theme-surface-secondary
                        transition
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                        cursor-pointer
                    "
                >
                    Cancel
                </button>


                {/* RIGHT SIDE — RESET + CREATE */}

                <div className="flex items-center gap-2">

                    {/* RESET */}

                    <button
                        type="button"
                        onClick={handleReset}
                        disabled={loading}
                        className="
                            h-[38px]
                            px-4
                            sm:px-5
                            border
                            border-theme-border-light
                            rounded-md
                            bg-theme-surface
                            text-theme-text
                            text-xs
                            sm:text-sm
                            font-semibold
                            hover:bg-theme-surface-secondary
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                            cursor-pointer
                        "
                    >
                        Reset
                    </button>


                    {/* CREATE LEAD */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            h-[38px]
                            px-4
                            sm:px-5
                            bg-primary
                            text-white
                            rounded-md
                            text-xs
                            sm:text-sm
                            font-medium
                            hover:bg-primaryHover
                            transition
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                            flex
                            items-center
                            justify-center
                            gap-2
                            cursor-pointer
                        "
                    >

                        {loading ? (
                            <>
                                <Loader2
                                    size={14}
                                    className="animate-spin"
                                />
                                Creating...
                            </>
                        ) : (
                            "Create Lead"
                        )}

                    </button>

                </div>

            </div>

        </form>

    );

}

export default ManualLeadForm;
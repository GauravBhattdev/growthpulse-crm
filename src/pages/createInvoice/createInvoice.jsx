import React, { useState } from "react";

import {
    ArrowLeft,
    Trash2,
    Plus,
    Upload,
    Check,
    Mail,
    MessageCircle,
    Loader2
} from "lucide-react";

import { useNavigate } from "react-router-dom";


function CreateInvoice() {

    const navigate = useNavigate();


    // =========================
    // FORM DATA
    // =========================

    const [invoiceDetails, setInvoiceDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });


    const [clientDetails, setClientDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });


    // =========================
    // INVOICE ITEMS
    // =========================

    const [items, setItems] = useState([
        {
            id: 1,
            description: "",
            quantity: 1,
            price: 0,
            tax: 18
        }
    ]);


    // =========================
    // ADDITIONAL OPTIONS
    // =========================

    const [notes, setNotes] = useState("");

    const [discount, setDiscount] = useState(0);

    const [sendTo, setSendTo] = useState("email");

    const [file, setFile] = useState(null);

    const [loadingAction, setLoadingAction] = useState(null);


    // =========================
    // HANDLE INPUT
    // =========================

    const handleInvoiceChange = (e) => {

        const { name, value } = e.target;

        setInvoiceDetails({
            ...invoiceDetails,
            [name]: value
        });

    };


    const handleClientChange = (e) => {

        const { name, value } = e.target;

        setClientDetails({
            ...clientDetails,
            [name]: value
        });

    };


    // =========================
    // ITEM FUNCTIONS
    // =========================

    const updateItem = (id, field, value) => {

        setItems(
            items.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        [field]:
                            field === "quantity" ||
                            field === "price" ||
                            field === "tax"
                                ? Number(value)
                                : value
                    }
                    : item
            )
        );

    };


    const addItem = () => {

        setItems([
            ...items,
            {
                id: Date.now(),
                description: "",
                quantity: 1,
                price: 0,
                tax: 18
            }
        ]);

    };


    const removeItem = (id) => {

        if (items.length === 1) {
            return;
        }

        setItems(
            items.filter((item) => item.id !== id)
        );

    };


    // =========================
    // CALCULATIONS
    // =========================

    const subTotal = items.reduce(
        (total, item) =>
            total + item.quantity * item.price,
        0
    );


    const taxAmount = items.reduce(
        (total, item) =>
            total +
            (item.quantity *
                item.price *
                item.tax) /
                100,
        0
    );


    const totalAmount =
        subTotal -
        Number(discount || 0) +
        taxAmount;


    // =========================
    // FILE UPLOAD
    // =========================

    const handleFileChange = (e) => {

        if (e.target.files.length > 0) {

            setFile(e.target.files[0]);

        }

    };


    // =========================
    // SAVE FUNCTIONS
    // =========================

    const handleSave = (action) => {

        setLoadingAction(action);

        console.log("Saving Invoice:", {
            action,
            invoiceDetails,
            clientDetails,
            items,
            notes,
            discount,
            sendTo,
            file
        });

        setTimeout(() => {

            setLoadingAction(null);

            if (action === "draft") {

                alert("Invoice saved as draft.");

            }

            if (action === "preview") {

                alert("Invoice preview will open here.");

            }

            if (action === "send") {

                alert("Invoice sent successfully.");

            }

        }, 1500);

    };


    return (

        <div className="w-full bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-5 sm:py-7">


            {/* ================================================= */}
            {/* PAGE HEADER */}
            {/* ================================================= */}

            <div className="mb-6">

                <div className="flex items-center gap-3">

                    <button
                        onClick={() => navigate("/invoice")}
                        disabled={loadingAction !== null}
                        className="
                            flex
                            items-center
                            justify-center
                            w-9
                            h-9
                            rounded-md
                            border
                            border-gray-300
                            text-gray-600
                            hover:bg-gray-100
                            transition
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >

                        <ArrowLeft size={18} />

                    </button>


                    <div>

                        <h1 className="text-2xl sm:text-[27px] font-semibold text-[#111]">
                            Create Invoice
                        </h1>


                        {/* Breadcrumb */}

                        <div className="flex items-center gap-2 mt-1 text-sm">

                            <button
                                onClick={() => navigate("/invoice")}
                                disabled={loadingAction !== null}
                                className="
                                    text-[#8b3dff]
                                    hover:underline
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                "
                            >
                                Invoice
                            </button>

                            <span className="text-gray-500">
                                ›
                            </span>

                            <span className="text-gray-500">
                                Create Invoice
                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* ================================================= */}
            {/* MAIN CONTENT */}
            {/* ================================================= */}

            <div
                className="
                    border
                    border-gray-400
                    rounded-xl
                    p-4
                    sm:p-5
                    lg:p-6
                "
            >


                <div
                    className="
                        grid
                        grid-cols-1
                        xl:grid-cols-[minmax(0,1fr)_250px]
                        gap-6
                    "
                >


                    {/* ================================================= */}
                    {/* LEFT SIDE */}
                    {/* ================================================= */}

                    <div className="min-w-0">


                        {/* ================================================= */}
                        {/* INVOICE DETAILS */}
                        {/* ================================================= */}

                        <h2 className="text-xl font-semibold text-[#8b3dff] mb-5">
                            Invoice Details
                        </h2>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


                            {/* First Name */}

                            <div>

                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    name="firstName"
                                    value={invoiceDetails.firstName}
                                    onChange={handleInvoiceChange}
                                    placeholder="Enter first name"
                                    disabled={loadingAction !== null}
                                    className="
                                        w-full
                                        h-10
                                        border
                                        border-gray-300
                                        px-3
                                        text-xs
                                        outline-none
                                        focus:border-[#8b3dff]
                                        focus:ring-1
                                        focus:ring-[#8b3dff]
                                        transition
                                        disabled:bg-gray-100
                                    "
                                />

                            </div>


                            {/* Last Name */}

                            <div>

                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    name="lastName"
                                    value={invoiceDetails.lastName}
                                    onChange={handleInvoiceChange}
                                    placeholder="Enter last name"
                                    disabled={loadingAction !== null}
                                    className="
                                        w-full
                                        h-10
                                        border
                                        border-gray-300
                                        px-3
                                        text-xs
                                        outline-none
                                        focus:border-[#8b3dff]
                                        focus:ring-1
                                        focus:ring-[#8b3dff]
                                        transition
                                        disabled:bg-gray-100
                                    "
                                />

                            </div>


                            {/* Email */}

                            <div>

                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={invoiceDetails.email}
                                    onChange={handleInvoiceChange}
                                    placeholder="Enter email address"
                                    disabled={loadingAction !== null}
                                    className="
                                        w-full
                                        h-10
                                        border
                                        border-gray-300
                                        px-3
                                        text-xs
                                        outline-none
                                        focus:border-[#8b3dff]
                                        focus:ring-1
                                        focus:ring-[#8b3dff]
                                        transition
                                        disabled:bg-gray-100
                                    "
                                />

                            </div>


                            {/* Phone */}

                            <div>

                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={invoiceDetails.phone}
                                    onChange={handleInvoiceChange}
                                    placeholder="Enter phone number"
                                    disabled={loadingAction !== null}
                                    className="
                                        w-full
                                        h-10
                                        border
                                        border-gray-300
                                        px-3
                                        text-xs
                                        outline-none
                                        focus:border-[#8b3dff]
                                        focus:ring-1
                                        focus:ring-[#8b3dff]
                                        transition
                                        disabled:bg-gray-100
                                    "
                                />

                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* CLIENT DETAILS */}
                        {/* ================================================= */}

                        <h2 className="text-xl font-semibold text-[#8b3dff] mt-8 mb-5">
                            Client Details
                        </h2>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


                            {/* First Name */}

                            <div>

                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    name="firstName"
                                    value={clientDetails.firstName}
                                    onChange={handleClientChange}
                                    placeholder="Enter first name"
                                    disabled={loadingAction !== null}
                                    className="
                                        w-full
                                        h-10
                                        border
                                        border-gray-300
                                        px-3
                                        text-xs
                                        outline-none
                                        focus:border-[#8b3dff]
                                        focus:ring-1
                                        focus:ring-[#8b3dff]
                                        disabled:bg-gray-100
                                    "
                                />

                            </div>


                            {/* Last Name */}

                            <div>

                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    name="lastName"
                                    value={clientDetails.lastName}
                                    onChange={handleClientChange}
                                    placeholder="Enter last name"
                                    disabled={loadingAction !== null}
                                    className="
                                        w-full
                                        h-10
                                        border
                                        border-gray-300
                                        px-3
                                        text-xs
                                        outline-none
                                        focus:border-[#8b3dff]
                                        focus:ring-1
                                        focus:ring-[#8b3dff]
                                        disabled:bg-gray-100
                                    "
                                />

                            </div>


                            {/* Email */}

                            <div>

                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={clientDetails.email}
                                    onChange={handleClientChange}
                                    placeholder="Enter email address"
                                    disabled={loadingAction !== null}
                                    className="
                                        w-full
                                        h-10
                                        border
                                        border-gray-300
                                        px-3
                                        text-xs
                                        outline-none
                                        focus:border-[#8b3dff]
                                        focus:ring-1
                                        focus:ring-[#8b3dff]
                                        disabled:bg-gray-100
                                    "
                                />

                            </div>


                            {/* Phone */}

                            <div>

                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={clientDetails.phone}
                                    onChange={handleClientChange}
                                    placeholder="Enter phone number"
                                    disabled={loadingAction !== null}
                                    className="
                                        w-full
                                        h-10
                                        border
                                        border-gray-300
                                        px-3
                                        text-xs
                                        outline-none
                                        focus:border-[#8b3dff]
                                        focus:ring-1
                                        focus:ring-[#8b3dff]
                                        disabled:bg-gray-100
                                    "
                                />

                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* INVOICE ITEMS */}
                        {/* ================================================= */}

                        <h2 className="text-xl font-semibold text-[#8b3dff] mt-8 mb-4">
                            Invoice Items
                        </h2>


                        <div className="w-full overflow-x-auto">

                            <div className="min-w-[760px] border border-gray-300 rounded-md overflow-hidden">

                                <div
                                    className="
                                        grid
                                        grid-cols-[2fr_1fr_1.2fr_1fr_1fr_45px]
                                        bg-purple-100
                                        border-b
                                        border-gray-300
                                    "
                                >

                                    <div className="px-4 py-3 text-xs font-medium text-gray-800">
                                        Item/Description
                                    </div>

                                    <div className="px-3 py-3 text-xs font-medium text-gray-800">
                                        Quantity
                                    </div>

                                    <div className="px-3 py-3 text-xs font-medium text-gray-800">
                                        Unit Price (₹)
                                    </div>

                                    <div className="px-3 py-3 text-xs font-medium text-gray-800">
                                        Tax (%)
                                    </div>

                                    <div className="px-3 py-3 text-xs font-medium text-gray-800">
                                        Amount (₹)
                                    </div>

                                    <div></div>

                                </div>


                                {items.map((item) => {

                                    const amount =
                                        item.quantity *
                                        item.price;

                                    return (

                                        <div
                                            key={item.id}
                                            className="
                                                grid
                                                grid-cols-[2fr_1fr_1.2fr_1fr_1fr_45px]
                                                items-center
                                                border-b
                                                border-gray-200
                                                last:border-b-0
                                            "
                                        >

                                            <div className="p-3">

                                                <input
                                                    type="text"
                                                    value={item.description}
                                                    onChange={(e) =>
                                                        updateItem(
                                                            item.id,
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter item or service"
                                                    disabled={loadingAction !== null}
                                                    className="
                                                        w-full
                                                        h-9
                                                        border
                                                        border-gray-300
                                                        px-2
                                                        text-xs
                                                        outline-none
                                                        focus:border-[#8b3dff]
                                                        disabled:bg-gray-100
                                                    "
                                                />

                                            </div>


                                            <div className="p-3">

                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        updateItem(
                                                            item.id,
                                                            "quantity",
                                                            e.target.value
                                                        )
                                                    }
                                                    disabled={loadingAction !== null}
                                                    className="
                                                        w-full
                                                        h-9
                                                        border
                                                        border-gray-300
                                                        px-2
                                                        text-xs
                                                        outline-none
                                                        focus:border-[#8b3dff]
                                                        disabled:bg-gray-100
                                                    "
                                                />

                                            </div>


                                            <div className="p-3">

                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={item.price}
                                                    onChange={(e) =>
                                                        updateItem(
                                                            item.id,
                                                            "price",
                                                            e.target.value
                                                        )
                                                    }
                                                    disabled={loadingAction !== null}
                                                    className="
                                                        w-full
                                                        h-9
                                                        border
                                                        border-gray-300
                                                        px-2
                                                        text-xs
                                                        outline-none
                                                        focus:border-[#8b3dff]
                                                        disabled:bg-gray-100
                                                    "
                                                />

                                            </div>


                                            <div className="p-3">

                                                <select
                                                    value={item.tax}
                                                    onChange={(e) =>
                                                        updateItem(
                                                            item.id,
                                                            "tax",
                                                            e.target.value
                                                        )
                                                    }
                                                    disabled={loadingAction !== null}
                                                    className="
                                                        w-full
                                                        h-9
                                                        border
                                                        border-gray-300
                                                        px-2
                                                        text-xs
                                                        outline-none
                                                        bg-white
                                                        focus:border-[#8b3dff]
                                                        disabled:bg-gray-100
                                                    "
                                                >

                                                    <option value="0">
                                                        0% GST
                                                    </option>

                                                    <option value="5">
                                                        5% GST
                                                    </option>

                                                    <option value="12">
                                                        12% GST
                                                    </option>

                                                    <option value="18">
                                                        18% GST
                                                    </option>

                                                    <option value="28">
                                                        28% GST
                                                    </option>

                                                </select>

                                            </div>


                                            <div className="px-3 text-xs text-gray-500">

                                                ₹ {amount.toFixed(2)}

                                            </div>


                                            <div className="flex justify-center">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeItem(item.id)
                                                    }
                                                    disabled={loadingAction !== null}
                                                    className="
                                                        p-2
                                                        text-red-500
                                                        hover:bg-red-50
                                                        rounded
                                                        transition
                                                        disabled:opacity-50
                                                        disabled:cursor-not-allowed
                                                    "
                                                >

                                                    <Trash2 size={17} />

                                                </button>

                                            </div>

                                        </div>

                                    );

                                })}

                            </div>

                        </div>


                        {/* ADD ITEM */}

                        <button
                            type="button"
                            onClick={addItem}
                            disabled={loadingAction !== null}
                            className="
                                flex
                                items-center
                                gap-1
                                mt-3
                                px-3
                                py-1.5
                                border
                                border-[#8b3dff]
                                text-[#8b3dff]
                                text-xs
                                rounded-sm
                                hover:bg-purple-50
                                transition
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                            "
                        >

                            <Plus size={14} />

                            Add Item

                        </button>


                    </div>


                    {/* ================================================= */}
                    {/* RIGHT SIDE */}
                    {/* ================================================= */}

                    <div className="xl:border-l xl:border-gray-300 xl:pl-5">

                        <div className="border border-gray-300 shadow-sm">

                            <div className="p-3">

                                <h2 className="text-xl font-semibold text-[#8b3dff] mb-4">
                                    Summary
                                </h2>


                                <div className="flex justify-between text-xs mb-4">

                                    <span>
                                        Sub Total
                                    </span>

                                    <span>
                                        ₹ {subTotal.toFixed(2)}
                                    </span>

                                </div>


                                <div className="flex items-center justify-between text-xs mb-4">

                                    <span>
                                        Discount
                                    </span>

                                    <div className="flex items-center gap-2">

                                        <input
                                            type="number"
                                            min="0"
                                            value={discount}
                                            onChange={(e) =>
                                                setDiscount(
                                                    e.target.value
                                                )
                                            }
                                            disabled={loadingAction !== null}
                                            className="
                                                w-20
                                                h-7
                                                border
                                                border-gray-300
                                                px-2
                                                text-xs
                                                outline-none
                                                focus:border-[#8b3dff]
                                                disabled:bg-gray-100
                                            "
                                        />

                                        <span>
                                            ₹ {Number(discount || 0).toFixed(2)}
                                        </span>

                                    </div>

                                </div>


                                <div className="flex justify-between text-xs mb-5">

                                    <span>
                                        Tax
                                    </span>

                                    <span>
                                        ₹ {taxAmount.toFixed(2)}
                                    </span>

                                </div>


                                <div className="border-t border-gray-400 pt-3">

                                    <div className="flex justify-between items-center">

                                        <span className="font-semibold text-sm">
                                            Total Amount
                                        </span>

                                        <span className="text-lg font-semibold text-[#8b3dff]">
                                            ₹ {totalAmount.toFixed(2)}
                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* ADDITIONAL OPTIONS */}
                            {/* ================================================= */}

                            <div className="border-t border-gray-300 p-3">

                                <h2 className="text-xl font-semibold text-[#8b3dff] mb-5">
                                    Additional Options
                                </h2>


                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Notes (optional)
                                </label>

                                <div className="relative">

                                    <textarea
                                        value={notes}
                                        onChange={(e) =>
                                            setNotes(e.target.value)
                                        }
                                        maxLength={300}
                                        rows="4"
                                        placeholder="Add any or terms for this invoice"
                                        disabled={loadingAction !== null}
                                        className="
                                            w-full
                                            border
                                            border-gray-300
                                            p-2
                                            text-xs
                                            resize-none
                                            outline-none
                                            focus:border-[#8b3dff]
                                            disabled:bg-gray-100
                                        "
                                    />

                                    <span className="absolute bottom-2 right-2 text-[10px] text-gray-400">
                                        {notes.length}/300
                                    </span>

                                </div>


                                <label className="block text-xs font-medium text-gray-700 mt-5 mb-2">
                                    Attach Document (optional)
                                </label>


                                <label
                                    className={`
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        min-h-[105px]
                                        border
                                        border-gray-300
                                        cursor-pointer
                                        hover:bg-gray-50
                                        transition
                                        ${loadingAction !== null
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                        }
                                    `}
                                >

                                    <Upload
                                        size={20}
                                        className="text-gray-500 mb-2"
                                    />

                                    <span className="text-xs text-gray-600">
                                        Drag and drop file here
                                    </span>

                                    <span className="text-xs text-gray-500 my-2">
                                        or
                                    </span>

                                    <span
                                        className="
                                            border
                                            border-[#8b3dff]
                                            text-[#8b3dff]
                                            px-3
                                            py-1
                                            rounded
                                            text-xs
                                        "
                                    >
                                        Browse file
                                    </span>

                                    <span className="text-[10px] text-gray-400 mt-2">
                                        {file
                                            ? file.name
                                            : "(PDF, JPG, PNG - Max 5MB)"
                                        }
                                    </span>

                                    <input
                                        type="file"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        disabled={loadingAction !== null}
                                        className="hidden"
                                    />

                                </label>


                                <p className="text-xs font-medium text-gray-700 mt-5 mb-3">
                                    Send Invoice To
                                </p>


                                <div className="flex flex-wrap gap-4">

                                    <label className="flex items-center gap-2 text-xs cursor-pointer">

                                        <input
                                            type="radio"
                                            name="sendTo"
                                            value="email"
                                            checked={sendTo === "email"}
                                            onChange={(e) =>
                                                setSendTo(e.target.value)
                                            }
                                            disabled={loadingAction !== null}
                                            className="accent-[#8b3dff]"
                                        />

                                        <Mail size={14} />

                                        Email

                                    </label>


                                    <label className="flex items-center gap-2 text-xs cursor-pointer">

                                        <input
                                            type="radio"
                                            name="sendTo"
                                            value="whatsapp"
                                            checked={sendTo === "whatsapp"}
                                            onChange={(e) =>
                                                setSendTo(e.target.value)
                                            }
                                            disabled={loadingAction !== null}
                                            className="accent-[#8b3dff]"
                                        />

                                        <MessageCircle size={14} />

                                        WhatsApp

                                    </label>


                                    <label className="flex items-center gap-2 text-xs cursor-pointer">

                                        <input
                                            type="radio"
                                            name="sendTo"
                                            value="both"
                                            checked={sendTo === "both"}
                                            onChange={(e) =>
                                                setSendTo(e.target.value)
                                            }
                                            disabled={loadingAction !== null}
                                            className="accent-[#8b3dff]"
                                        />

                                        Both

                                    </label>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================================================= */}
                {/* BOTTOM BUTTONS */}
                {/* ================================================= */}

                <div
                    className="
                        flex
                        flex-col-reverse
                        sm:flex-row
                        justify-end
                        gap-3
                        mt-6
                    "
                >


                    {/* SAVE DRAFT */}

                    <button
                        type="button"
                        onClick={() => handleSave("draft")}
                        disabled={loadingAction !== null}
                        className="
                            w-full
                            sm:w-auto
                            px-6
                            py-3
                            border
                            border-gray-400
                            rounded-md
                            text-sm
                            font-medium
                            text-gray-700
                            hover:bg-gray-100
                            active:scale-[0.98]
                            transition
                            disabled:opacity-60
                            disabled:cursor-not-allowed
                        "
                    >

                        {loadingAction === "draft" ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2
                                    size={16}
                                    className="animate-spin"
                                />
                                Saving...
                            </span>
                        ) : (
                            "Save as Draft"
                        )}

                    </button>


                    {/* SAVE PREVIEW */}

                    <button
                        type="button"
                        onClick={() => handleSave("preview")}
                        disabled={loadingAction !== null}
                        className="
                            w-full
                            sm:w-auto
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-6
                            py-3
                            bg-[#8b3dff]
                            text-white
                            rounded-md
                            text-sm
                            font-medium
                            hover:bg-[#7830e6]
                            hover:shadow-lg
                            active:scale-[0.98]
                            transition-all
                            disabled:opacity-60
                            disabled:cursor-not-allowed
                        "
                    >

                        {loadingAction === "preview" ? (
                            <>
                                <Loader2
                                    size={16}
                                    className="animate-spin"
                                />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Check size={16} />
                                Save & Preview
                            </>
                        )}

                    </button>


                    {/* SAVE SEND */}

                    <button
                        type="button"
                        onClick={() => handleSave("send")}
                        disabled={loadingAction !== null}
                        className="
                            w-full
                            sm:w-auto
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-6
                            py-3
                            bg-[#171126]
                            text-white
                            rounded-md
                            text-sm
                            font-medium
                            hover:bg-[#241a3b]
                            hover:shadow-lg
                            active:scale-[0.98]
                            transition-all
                            disabled:opacity-60
                            disabled:cursor-not-allowed
                        "
                    >

                        {loadingAction === "send" ? (
                            <>
                                <Loader2
                                    size={16}
                                    className="animate-spin"
                                />
                                Sending...
                            </>
                        ) : (
                            "Save & Send"
                        )}

                    </button>

                </div>

            </div>

        </div>

    );

}


export default CreateInvoice;

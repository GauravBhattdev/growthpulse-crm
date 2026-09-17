import React, { useState } from "react";

import {
    X,
    CreditCard,
    Smartphone,
    Building2,
    Lock
} from "lucide-react";

import { toast } from "react-toastify";


// =====================================================
// BANKS LIST (dummy)
// =====================================================

const banks = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Yes Bank"
];


function PaymentPopup({
    paymentMethod,
    amount,
    onClose
}) {

    // =================================================
    // CARD STATE
    // =================================================

    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");


    // =================================================
    // UPI STATE
    // =================================================

    const [upiId, setUpiId] = useState("");


    // =================================================
    // NET BANKING STATE
    // =================================================

    const [selectedBank, setSelectedBank] = useState("");


    // =================================================
    // LOADING
    // =================================================

    const [processing, setProcessing] = useState(false);


    // =================================================
    // FORMAT CARD NUMBER (4-4-4-4)
    // =================================================

    const handleCardNumberChange = (e) => {

        let value = e.target.value.replace(/\D/g, "").slice(0, 16);

        value = value.replace(/(.{4})/g, "$1 ").trim();

        setCardNumber(value);

    };


    // =================================================
    // FORMAT EXPIRY (MM/YY)
    // =================================================

    const handleExpiryChange = (e) => {

        let value = e.target.value.replace(/\D/g, "").slice(0, 4);

        if (value.length > 2) {
            value = value.slice(0, 2) + "/" + value.slice(2);
        }

        setExpiry(value);

    };


    // =================================================
    // CVV ONLY DIGITS
    // =================================================

    const handleCvvChange = (e) => {

        const value = e.target.value.replace(/\D/g, "").slice(0, 4);

        setCvv(value);

    };


    // =================================================
    // SUBMIT
    // =================================================

    const handleSubmit = () => {

        if (paymentMethod === "card") {

            if (
                cardNumber.replace(/\s/g, "").length < 16 ||
                !cardName.trim() ||
                expiry.length < 5 ||
                cvv.length < 3
            ) {
                toast.error("Please fill in all card details correctly.");
                return;
            }

        }

        if (paymentMethod === "upi") {

            if (!upiId.trim() || !upiId.includes("@")) {
                toast.error("Please enter a valid UPI ID (e.g., name@bank).");
                return;
            }

        }

        if (paymentMethod === "netbanking") {

            if (!selectedBank) {
                toast.error("Please select a bank.");
                return;
            }

        }


        setProcessing(true);

        setTimeout(() => {

            setProcessing(false);

            toast.success(
                `Payment of ₹ ${amount.toLocaleString()} successful!`
            );

            onClose();

        }, 1800);

    };


    // =================================================
    // TITLE + ICON BY METHOD
    // =================================================

    const methodInfo = {
        card: {
            title: "Card Payment",
            icon: <CreditCard size={20} className="text-primary" />
        },
        upi: {
            title: "UPI Payment",
            icon: <Smartphone size={20} className="text-primary" />
        },
        netbanking: {
            title: "Net Banking",
            icon: <Building2 size={20} className="text-primary" />
        }
    };


    const info = methodInfo[paymentMethod] || methodInfo.card;


    return (

        <div
            className="
                fixed
                inset-0
                z-[150]
                flex
                items-center
                justify-center
                bg-black/50
                p-4

                pointer-events-auto
            "
        >

            <div
                className="
                    w-full
                    max-w-[440px]
                    max-h-[90vh]
                    overflow-y-auto

                    bg-theme-surface
                    border
                    border-theme-border-light
                    rounded-xl
                    shadow-2xl

                    transition-colors
                    duration-300
                "
            >

                {/* HEADER */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        px-5
                        py-4
                        border-b
                        border-theme-border-light
                    "
                >

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                w-10
                                h-10
                                rounded-full
                                bg-primary/15
                                flex
                                items-center
                                justify-center
                            "
                        >
                            {info.icon}
                        </div>


                        <div>

                            <h2 className="text-base font-semibold text-theme-text">
                                {info.title}
                            </h2>

                            <p className="text-[11px] text-theme-text-secondary mt-0.5">
                                Pay ₹ {amount.toLocaleString()}
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        disabled={processing}
                        className="
                            text-theme-text-secondary
                            hover:text-theme-text
                            transition
                            cursor-pointer
                            disabled:opacity-50
                        "
                    >
                        <X size={20} />
                    </button>

                </div>


                {/* BODY */}

                <div className="px-5 py-4">

                    {/* CARD FORM */}

                    {paymentMethod === "card" && (

                        <div className="flex flex-col gap-3">

                            <div>

                                <label className="block text-[11px] font-medium text-theme-text-secondary mb-1.5">
                                    Card Number
                                </label>

                                <input
                                    type="text"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    placeholder="1234 5678 9012 3456"
                                    disabled={processing}
                                    className="
                                        w-full h-[42px] px-3
                                        border border-theme-border-light
                                        rounded-md
                                        text-[13px] tracking-wider
                                        bg-theme-surface
                                        text-theme-text
                                        placeholder:text-theme-text-muted
                                        outline-none
                                        focus:border-primary
                                        disabled:opacity-60
                                    "
                                />

                            </div>


                            <div>

                                <label className="block text-[11px] font-medium text-theme-text-secondary mb-1.5">
                                    Cardholder Name
                                </label>

                                <input
                                    type="text"
                                    value={cardName}
                                    onChange={(e) => setCardName(e.target.value)}
                                    placeholder="Name on card"
                                    disabled={processing}
                                    className="
                                        w-full h-[42px] px-3
                                        border border-theme-border-light
                                        rounded-md
                                        text-[13px]
                                        bg-theme-surface
                                        text-theme-text
                                        placeholder:text-theme-text-muted
                                        outline-none
                                        focus:border-primary
                                        disabled:opacity-60
                                    "
                                />

                            </div>


                            <div className="grid grid-cols-2 gap-3">

                                <div>

                                    <label className="block text-[11px] font-medium text-theme-text-secondary mb-1.5">
                                        Expiry
                                    </label>

                                    <input
                                        type="text"
                                        value={expiry}
                                        onChange={handleExpiryChange}
                                        placeholder="MM/YY"
                                        disabled={processing}
                                        className="
                                            w-full h-[42px] px-3
                                            border border-theme-border-light
                                            rounded-md
                                            text-[13px]
                                            bg-theme-surface
                                            text-theme-text
                                            placeholder:text-theme-text-muted
                                            outline-none
                                            focus:border-primary
                                            disabled:opacity-60
                                        "
                                    />

                                </div>


                                <div>

                                    <label className="block text-[11px] font-medium text-theme-text-secondary mb-1.5">
                                        CVV
                                    </label>

                                    <input
                                        type="password"
                                        value={cvv}
                                        onChange={handleCvvChange}
                                        placeholder="•••"
                                        disabled={processing}
                                        className="
                                            w-full h-[42px] px-3
                                            border border-theme-border-light
                                            rounded-md
                                            text-[13px]
                                            bg-theme-surface
                                            text-theme-text
                                            placeholder:text-theme-text-muted
                                            outline-none
                                            focus:border-primary
                                            disabled:opacity-60
                                        "
                                    />

                                </div>

                            </div>

                        </div>

                    )}


                    {/* UPI FORM */}

                    {paymentMethod === "upi" && (

                        <div>

                            <label className="block text-[11px] font-medium text-theme-text-secondary mb-1.5">
                                UPI ID
                            </label>

                            <input
                                type="text"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                                placeholder="yourname@upi"
                                disabled={processing}
                                className="
                                    w-full h-[42px] px-3
                                    border border-theme-border-light
                                    rounded-md
                                    text-[13px]
                                    bg-theme-surface
                                    text-theme-text
                                    placeholder:text-theme-text-muted
                                    outline-none
                                    focus:border-primary
                                    disabled:opacity-60
                                "
                            />

                            <p className="text-[10px] text-theme-text-muted mt-2">
                                Enter your UPI ID (e.g., yourname@okhdfcbank)
                            </p>

                        </div>

                    )}


                    {/* NET BANKING FORM */}

                    {paymentMethod === "netbanking" && (

                        <div>

                            <label className="block text-[11px] font-medium text-theme-text-secondary mb-1.5">
                                Select Your Bank
                            </label>

                            <select
                                value={selectedBank}
                                onChange={(e) => setSelectedBank(e.target.value)}
                                disabled={processing}
                                className="
                                    w-full h-[42px] px-3
                                    border border-theme-border-light
                                    rounded-md
                                    text-[13px]
                                    bg-theme-surface
                                    text-theme-text
                                    outline-none
                                    focus:border-primary
                                    disabled:opacity-60
                                    cursor-pointer
                                "
                            >

                                <option value="">-- Choose a bank --</option>

                                {banks.map((bank) => (
                                    <option key={bank} value={bank}>
                                        {bank}
                                    </option>
                                ))}

                            </select>

                        </div>

                    )}


                    {/* SECURITY NOTE */}

                    <div
                        className="
                            flex items-start gap-2
                            mt-4 p-3
                            rounded-md
                            bg-theme-surface-secondary
                        "
                    >

                        <Lock
                            size={13}
                            className="text-green-500 shrink-0 mt-[1px]"
                        />

                        <p className="text-[10px] text-theme-text-secondary leading-relaxed">
                            Your payment information is encrypted and secure.
                            This is a demo — no real payment will be processed.
                        </p>

                    </div>

                </div>


                {/* FOOTER */}

                <div
                    className="
                        flex items-center justify-end gap-3
                        px-5 py-4
                        border-t border-theme-border-light
                    "
                >

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={processing}
                        className="
                            h-[40px] px-4
                            border border-theme-border-light
                            rounded-md
                            text-sm
                            text-theme-text
                            bg-theme-surface
                            hover:bg-theme-surface-secondary
                            transition
                            cursor-pointer
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >
                        Cancel
                    </button>


                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={processing}
                        className="
                            h-[40px] min-w-[140px] px-5
                            bg-primary hover:bg-primaryHover
                            text-white
                            rounded-md
                            text-sm font-medium
                            transition
                            cursor-pointer
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                            flex items-center justify-center gap-2
                        "
                    >

                        {processing ? (
                            <>
                                <span className="
                                    w-3.5 h-3.5
                                    border-2 border-white/30 border-t-white
                                    rounded-full
                                    animate-spin
                                " />
                                Processing...
                            </>
                        ) : (
                            `Pay ₹ ${amount.toLocaleString()}`
                        )}

                    </button>

                </div>

            </div>

        </div>

    );

}


export default PaymentPopup;
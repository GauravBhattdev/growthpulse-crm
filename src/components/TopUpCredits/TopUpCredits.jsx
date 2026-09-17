import React, { useEffect, useRef, useState } from "react";

import {
  X,
  Wallet
} from "lucide-react";

import { toast } from "react-toastify";

import PaymentPopup from "./PaymentPopup";


function TopUpCredits({ onClose }) {

  const currentCredits = 234;

  const [selectedCredits, setSelectedCredits] = useState(1000);

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const panelRef = useRef(null);


  // OPEN ANIMATION
  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20);

    return () => clearTimeout(timer);

  }, []);


  // CLOSE ANIMATION
  const handleClose = () => {

    if (isClosing) return;

    setIsClosing(true);

    setTimeout(() => {
      onClose();
    }, 500);

  };


  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (showPaymentPopup) return;

      if (
        panelRef.current &&
        !panelRef.current.contains(event.target)
      ) {
        handleClose();
      }

    };


    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosing, showPaymentPopup]);


  // PROCEED TO PAYMENT
  const handleProceed = () => {

    if (!selectedCredits || selectedCredits === 0) {
      toast.error("Please select a credit package first.");
      return;
    }

    setShowPaymentPopup(true);

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

      <div
        ref={panelRef}

        className={`
          pointer-events-auto
          absolute
          top-10
          right-0
          w-full
          sm:w-[400px]
          max-h-[calc(100vh-2.5rem)]
          bg-theme-surface
          border-l
          border-theme-border
          shadow-2xl
          text-theme-text
          overflow-y-auto
          overflow-x-hidden
          transform-gpu
          transition-all
          duration-500
          ease-out
          origin-bottom-right

          ${
            isClosing
              ? "translate-x-[100%] translate-y-[80px] scale-90 rotate-6 opacity-0"
              : isVisible
                ? "translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100"
                : "translate-x-[100%] translate-y-[80px] scale-90 rotate-6 opacity-0"
          }
        `}
      >

        {/* HEADER */}

        <div className="flex items-center justify-between px-4 sm:px-5 py-4 gap-3">

          <h2 className="text-base sm:text-lg font-semibold truncate">
            Add / Manage Credits
          </h2>

          <button
            type="button"
            onClick={handleClose}
            className="
              text-theme-text-secondary
              hover:text-theme-text
              transition
              cursor-pointer
              shrink-0
            "
          >
            <X size={22} />
          </button>

        </div>


        {/* CURRENT CREDITS */}

        <div className="px-4 sm:px-5">

          <div className="border border-theme-border rounded-md bg-theme-surface-secondary p-3 sm:p-4">

            <div className="flex items-center gap-3 sm:gap-4">

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shrink-0">

                <Wallet size={20} className="sm:hidden text-white" />
                <Wallet size={23} className="hidden sm:block text-white" />

              </div>

              <div className="min-w-0">

                <p className="text-xs sm:text-sm">Current Credits</p>

                <p className="text-xl sm:text-2xl font-bold mt-1">
                  {currentCredits.toLocaleString()}
                </p>

                <p className="text-[9px] text-theme-text-secondary mt-1">
                  Last updated: Today
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ADD CREDITS */}

        <div className="px-4 sm:px-5 pt-5">

          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Add Credits
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">

            {[500, 1000, 2500].map((amt) => (

              <button
                key={amt}
                type="button"
                onClick={() => setSelectedCredits(amt)}
                className={`
                  h-[78px] sm:h-[82px]
                  rounded-md border
                  ${selectedCredits === amt
                    ? "border-primary bg-primary/10"
                    : "border-theme-border bg-theme-surface-secondary"}
                  hover:border-primary
                  transition
                  cursor-pointer
                  flex flex-col items-center justify-center
                  min-w-0
                `}
              >

                <span className="text-sm font-semibold">
                  +{amt.toLocaleString()}
                </span>

                <span className="text-sm font-semibold">Credits</span>

                <span className="text-xs text-theme-text-secondary mt-1">
                  ₹ {amt.toLocaleString()}
                </span>

              </button>

            ))}


            <button
              type="button"
              onClick={() => setSelectedCredits(0)}
              className={`
                h-[78px] sm:h-[82px]
                rounded-md border
                ${selectedCredits === 0
                  ? "border-primary bg-primary/10"
                  : "border-theme-border bg-theme-surface-secondary"}
                hover:border-primary
                transition
                cursor-pointer
                flex flex-col items-center justify-center
                min-w-0
              `}
            >

              <span className="text-sm font-semibold">Custom</span>
              <span className="text-sm font-semibold">Amount</span>
              <span className="text-xs text-theme-text-secondary mt-1">Other</span>

            </button>

          </div>

        </div>


        {/* PAYMENT DETAILS */}

        <div className="px-4 sm:px-5 pt-5">

          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Payment Details
          </h3>

          <div>

            <label className="block text-sm mb-2">Amount</label>

            <div className="h-[40px] border border-theme-border rounded-md bg-theme-surface-secondary flex items-center px-3 sm:px-4 text-theme-text-secondary text-sm">
              ₹ {selectedCredits.toLocaleString()}
            </div>

          </div>


          <div className="pt-5">

            <p className="text-sm mb-4">Payment method</p>

            <div className="flex items-start gap-x-4 gap-y-3 flex-wrap">

              {["card", "upi", "netbanking"].map((method) => (

                <label
                  key={method}
                  className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer min-w-0"
                >

                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                    className="accent-primary shrink-0"
                  />

                  <span>
                    {method === "card" && "Credit / Debit Card"}
                    {method === "upi" && "UPI"}
                    {method === "netbanking" && "Net banking"}
                  </span>

                </label>

              ))}

            </div>

          </div>

        </div>


        {/* BOTTOM BUTTONS */}

        <div className="flex items-center gap-3 sm:gap-5 px-4 sm:px-5 py-5">

          <button
            type="button"
            onClick={handleClose}
            className="
              h-[40px]
              px-4 sm:px-5
              border border-theme-border
              rounded-md
              text-sm
              hover:bg-theme-surface-secondary
              transition
              cursor-pointer
              shrink-0
            "
          >
            Cancel
          </button>


          <button
            type="button"
            onClick={handleProceed}
            className="
              h-[40px]
              flex-1 min-w-0
              bg-primary hover:bg-primaryHover
              text-white
              rounded-md
              text-xs sm:text-sm font-medium
              transition
              cursor-pointer
              whitespace-nowrap
            "
          >
            Proceed to Payment
          </button>

        </div>

      </div>


      {/* PAYMENT POPUP */}

      {showPaymentPopup && (
        <PaymentPopup
          paymentMethod={paymentMethod}
          amount={selectedCredits || 0}
          onClose={() => {
            setShowPaymentPopup(false);
            handleClose();
          }}
        />
      )}

    </div>

  );

}


export default TopUpCredits;
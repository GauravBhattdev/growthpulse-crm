import React, { useEffect, useState } from "react";

import {
  X,
  Wallet
} from "lucide-react";


function TopUpCredits({ onClose }) {

  const currentCredits = 234;

  const [selectedCredits, setSelectedCredits] = useState(1000);

  const [paymentMethod, setPaymentMethod] = useState("card");

  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);


  // ==============================
  // OPEN ANIMATION
  // ==============================

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20);

    return () => clearTimeout(timer);

  }, []);


  // ==============================
  // CLOSE ANIMATION
  // ==============================

  const handleClose = () => {

    setIsClosing(true);

    setTimeout(() => {
      onClose();
    }, 500);

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

      {/* ==============================
          ADD / MANAGE CREDITS PANEL
      ============================== */}

      <div
        className={`
          pointer-events-auto

          absolute
          top-10
          right-0

          w-full
          sm:w-[400px]

          max-h-[calc(100vh-2.5rem)]

          bg-[#171126]
          border-l
          border-[#3d315d]
          shadow-2xl
          text-white

          overflow-y-auto
          overflow-x-hidden

          transform-gpu
          transition-all
          duration-500
          ease-out

          origin-bottom-right

          ${
            isClosing
              ? `
                translate-x-[100%]
                translate-y-[80px]
                scale-90
                rotate-6
                opacity-0
              `
              : isVisible
                ? `
                  translate-x-0
                  translate-y-0
                  scale-100
                  rotate-0
                  opacity-100
                `
                : `
                  translate-x-[100%]
                  translate-y-[80px]
                  scale-90
                  rotate-6
                  opacity-0
                `
          }
        `}
      >

        {/* ==============================
            HEADER
        ============================== */}

        <div
          className="
            flex
            items-center
            justify-between

            px-4
            sm:px-5

            py-4

            gap-3
          "
        >

          <h2
            className="
              text-base
              sm:text-lg
              font-semibold
              truncate
            "
          >
            Add / Manage Credits
          </h2>


          {/* Close */}

          <button
            type="button"
            onClick={handleClose}
            className="
              text-white
              hover:text-gray-300
              transition
              cursor-pointer
              shrink-0
            "
          >

            <X size={22} />

          </button>

        </div>


        {/* ==============================
            CURRENT CREDITS
        ============================== */}

        <div
          className="
            px-4
            sm:px-5
          "
        >

          <div
            className="
              border
              border-[#6c637d]
              rounded-md
              bg-[#262236]

              p-3
              sm:p-4
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
                sm:gap-4
              "
            >

              {/* Wallet */}

              <div
                className="
                  w-10
                  h-10
                  sm:w-12
                  sm:h-12

                  rounded-full
                  bg-purple-600

                  flex
                  items-center
                  justify-center

                  shrink-0
                "
              >

                <Wallet
                  size={20}
                  className="sm:hidden"
                />

                <Wallet
                  size={23}
                  className="hidden sm:block"
                />

              </div>


              {/* Credit Information */}

              <div className="min-w-0">

                <p
                  className="
                    text-xs
                    sm:text-sm
                  "
                >
                  Current Credits
                </p>

                <p
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    mt-1
                  "
                >
                  {currentCredits.toLocaleString()}
                </p>

                <p
                  className="
                    text-[9px]
                    text-gray-400
                    mt-1
                  "
                >
                  Last updated: Today
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ==============================
            ADD CREDITS
        ============================== */}

        <div
          className="
            px-4
            sm:px-5

            pt-5
          "
        >

          <h3
            className="
              text-base
              sm:text-lg

              font-semibold
              mb-4
            "
          >
            Add Credits
          </h3>


          {/* Credit Packages */}

          <div
            className="
              grid

              grid-cols-2
              sm:grid-cols-4

              gap-2
            "
          >

            {/* 500 Credits */}

            <button
              type="button"
              onClick={() => setSelectedCredits(500)}
              className={`
                h-[78px]
                sm:h-[82px]

                rounded-md
                border

                ${
                  selectedCredits === 500
                    ? "border-purple-500 bg-purple-500/10"
                    : "border-[#6c637d] bg-black"
                }

                hover:border-purple-400
                transition
                cursor-pointer

                flex
                flex-col
                items-center
                justify-center

                min-w-0
              `}
            >

              <span className="text-sm font-semibold">
                +500
              </span>

              <span className="text-sm font-semibold">
                Credits
              </span>

              <span className="text-xs text-gray-500 mt-1">
                ₹ 500
              </span>

            </button>


            {/* 1000 Credits */}

            <button
              type="button"
              onClick={() => setSelectedCredits(1000)}
              className={`
                h-[78px]
                sm:h-[82px]

                rounded-md
                border

                ${
                  selectedCredits === 1000
                    ? "border-purple-500 bg-purple-500/10"
                    : "border-[#6c637d] bg-black"
                }

                hover:border-purple-400
                transition
                cursor-pointer

                flex
                flex-col
                items-center
                justify-center

                min-w-0
              `}
            >

              <span className="text-sm font-semibold">
                +1,000
              </span>

              <span className="text-sm font-semibold">
                Credits
              </span>

              <span className="text-xs text-gray-500 mt-1">
                ₹ 1,000
              </span>

            </button>


            {/* 2500 Credits */}

            <button
              type="button"
              onClick={() => setSelectedCredits(2500)}
              className={`
                h-[78px]
                sm:h-[82px]

                rounded-md
                border

                ${
                  selectedCredits === 2500
                    ? "border-purple-500 bg-purple-500/10"
                    : "border-[#6c637d] bg-black"
                }

                hover:border-purple-400
                transition
                cursor-pointer

                flex
                flex-col
                items-center
                justify-center

                min-w-0
              `}
            >

              <span className="text-sm font-semibold">
                +2,500
              </span>

              <span className="text-sm font-semibold">
                Credits
              </span>

              <span className="text-xs text-gray-500 mt-1">
                ₹ 2,500
              </span>

            </button>


            {/* Custom */}

            <button
              type="button"
              onClick={() => setSelectedCredits(0)}
              className={`
                h-[78px]
                sm:h-[82px]

                rounded-md
                border

                ${
                  selectedCredits === 0
                    ? "border-purple-500 bg-purple-500/10"
                    : "border-[#6c637d] bg-black"
                }

                hover:border-purple-400
                transition
                cursor-pointer

                flex
                flex-col
                items-center
                justify-center

                min-w-0
              `}
            >

              <span className="text-sm font-semibold">
                Custom
              </span>

              <span className="text-sm font-semibold">
                Amount
              </span>

              <span className="text-xs text-gray-500 mt-1">
                Other
              </span>

            </button>

          </div>

        </div>


        {/* ==============================
            PAYMENT DETAILS
        ============================== */}

        <div
          className="
            px-4
            sm:px-5

            pt-5
          "
        >

          <h3
            className="
              text-base
              sm:text-lg

              font-semibold
              mb-4
            "
          >
            Payment Details
          </h3>


          {/* Amount */}

          <div>

            <label
              className="
                block
                text-sm
                mb-2
              "
            >
              Amount
            </label>

            <div
              className="
                h-[40px]

                border
                border-[#6c637d]
                rounded-md
                bg-black

                flex
                items-center

                px-3
                sm:px-4

                text-gray-400
                text-sm
              "
            >

              ₹ {selectedCredits.toLocaleString()}

            </div>

          </div>


          {/* Payment Method */}

          <div className="pt-5">

            <p
              className="
                text-sm
                mb-4
              "
            >
              Payment method
            </p>


            <div
              className="
                flex
                items-start

                gap-x-4
                gap-y-3

                flex-wrap
              "
            >

              {/* Card */}

              <label
                className="
                  flex
                  items-center
                  gap-2

                  text-xs
                  sm:text-sm

                  cursor-pointer

                  min-w-0
                "
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="accent-purple-600 shrink-0"
                />

                <span>
                  Credit / Debit Card
                </span>

              </label>


              {/* UPI */}

              <label
                className="
                  flex
                  items-center
                  gap-2

                  text-xs
                  sm:text-sm

                  cursor-pointer

                  min-w-0
                "
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                  className="accent-purple-600 shrink-0"
                />

                <span>
                  UPI
                </span>

              </label>


              {/* Net Banking */}

              <label
                className="
                  flex
                  items-center
                  gap-2

                  text-xs
                  sm:text-sm

                  cursor-pointer

                  min-w-0
                "
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="netbanking"
                  checked={paymentMethod === "netbanking"}
                  onChange={() => setPaymentMethod("netbanking")}
                  className="accent-purple-600 shrink-0"
                />

                <span>
                  Net banking
                </span>

              </label>

            </div>

          </div>

        </div>


        {/* ==============================
            BOTTOM BUTTONS
        ============================== */}

        <div
          className="
            flex
            items-center

            gap-3
            sm:gap-5

            px-4
            sm:px-5

            py-5
          "
        >

          {/* Cancel */}

          <button
            type="button"
            onClick={handleClose}
            className="
              h-[40px]

              px-4
              sm:px-5

              border
              border-[#8b8498]
              rounded-md

              text-sm

              hover:bg-[#262236]
              transition
              cursor-pointer

              shrink-0
            "
          >
            Cancel
          </button>


          {/* Proceed */}

          <button
            type="button"
            className="
              h-[40px]

              flex-1
              min-w-0

              bg-purple-600
              hover:bg-purple-700

              rounded-md

              text-xs
              sm:text-sm

              font-medium

              transition
              cursor-pointer

              whitespace-nowrap
            "
          >
            Proceed to Payment
          </button>

        </div>

      </div>

    </div>

  );

}


export default TopUpCredits;
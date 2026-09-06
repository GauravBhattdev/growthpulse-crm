import React, { useState } from "react";

import {
  X,
  Wallet
} from "lucide-react";


function TopUpCredits({ onClose }) {

  const currentCredits = 234;

  const [selectedCredits, setSelectedCredits] = useState(1000);

  const [paymentMethod, setPaymentMethod] = useState("card");


  return (

    <div
      className="
        fixed
        inset-0
        z-[110]
        pointer-events-none
      "
    >

      {/* Add / Manage Credits Panel */}

      <div
        className="
          pointer-events-auto
          absolute
          top-10
          right-0
          w-full
          sm:w-[400px]
          h-auto
          max-h-screen
          bg-[#171126]
          border-l
          border-[#3d315d]
          shadow-2xl
          text-white
          overflow-y-auto
        "
      >

        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            px-5
            py-4
          "
        >

          <h2
            className="
              text-lg
              font-semibold
            "
          >
            Add / Manage Credits
          </h2>


          {/* Close */}

          <button
            type="button"
            onClick={onClose}
            className="
              text-white
              hover:text-gray-300
              transition
              cursor-pointer
            "
          >

            <X size={22} />

          </button>

        </div>


        {/* Current Credits */}

        <div className="px-5">

          <div
            className="
              border
              border-[#6c637d]
              rounded-md
              bg-[#262236]
              p-4
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              {/* Wallet */}

              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-purple-600
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >

                <Wallet size={23} />

              </div>


              {/* Credit Information */}

              <div>

                <p className="text-sm">
                  Current Credits
                </p>

                <p
                  className="
                    text-2xl
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


        {/* Add Credits */}

        <div className="px-5 pt-5">

          <h3
            className="
              text-lg
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
              grid-cols-4
              gap-2
            "
          >

            {/* 500 Credits */}

            <button
              type="button"
              onClick={() => setSelectedCredits(500)}
              className={`
                h-[82px]
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
                h-[82px]
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
                h-[82px]
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
                h-[82px]
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


        {/* Payment Details */}

        <div className="px-5 pt-5">

          <h3
            className="
              text-lg
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
                px-4
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
                items-center
                gap-5
                flex-wrap
              "
            >

              {/* Card */}

              <label
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  cursor-pointer
                "
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="accent-purple-600"
                />

                Credit / Debit Card

              </label>


              {/* UPI */}

              <label
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  cursor-pointer
                "
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                  className="accent-purple-600"
                />

                UPI

              </label>


              {/* Net Banking */}

              <label
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  cursor-pointer
                "
              >

                <input
                  type="radio"
                  name="paymentMethod"
                  value="netbanking"
                  checked={paymentMethod === "netbanking"}
                  onChange={() => setPaymentMethod("netbanking")}
                  className="accent-purple-600"
                />

                Net banking

              </label>

            </div>

          </div>

        </div>


        {/* Bottom Buttons */}

        <div
          className="
            flex
            items-center
            gap-5
            px-5
            py-5
          "
        >

          {/* Cancel */}

          <button
            type="button"
            onClick={onClose}
            className="
              h-[40px]
              px-5
              border
              border-[#8b8498]
              rounded-md
              text-sm
              hover:bg-[#262236]
              transition
              cursor-pointer
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
              bg-purple-600
              hover:bg-purple-700
              rounded-md
              text-sm
              font-medium
              transition
              cursor-pointer
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
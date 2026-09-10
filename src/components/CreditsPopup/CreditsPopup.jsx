import React from "react";

import {
  X,
  Wallet,
  ArrowDownToLine,
  ArrowUpFromLine,
  RotateCcw,
  Info
} from "lucide-react";


function CreditsPopup({ onClose }) {

  const currentCredits = 234;

  return (

    <div
      className="
        fixed
        inset-0
        z-[100]
        pointer-events-none
      "
    >

      {/* Credits Panel */}

      <div
        className="
          pointer-events-auto
          absolute
          top-10
          right-0
          w-full
          sm:w-[420px]
          h-screen
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
            items-start
            justify-between
            px-4
            py-3
            border-b
            border-[#3d315d]
          "
        >

          <div>

            <h2
              className="
                text-base
                font-semibold
              "
            >
              Current Credits
            </h2>

            <p
              className="
                text-[11px]
                text-gray-400
                mt-1
              "
            >
              Overview of your credit balance and usage.
            </p>

          </div>


          {/* Close Button */}

          <button
            type="button"
            onClick={onClose}
            className="
              text-gray-300
              hover:text-white
              transition
              cursor-pointer
              p-1
            "
          >

            <X size={20} />

          </button>

        </div>


        {/* Current Credits Card */}

        <div className="px-4 pt-4">

          <div
            className="
              border
              border-[#6c637d]
              rounded-md
              bg-[#262236]
              p-3
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              {/* Wallet Icon */}

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-purple-600
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >

                <Wallet size={21} />

              </div>


              {/* Credits */}

              <div className="flex-1">

                <p className="text-xs">
                  Current Credits
                </p>

                <p
                  className="
                    text-xl
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


              {/* Credit Value */}

              <div
                className="
                  border-l
                  border-[#5b536d]
                  pl-3
                  text-right
                "
              >

                <p
                  className="
                    text-xs
                    text-gray-400
                    whitespace-nowrap
                  "
                >
                  1 Credit = ₹ 1
                </p>

                <p
                  className="
                    text-[8px]
                    text-gray-500
                    mt-1
                    whitespace-nowrap
                  "
                >
                  ( All prices include GST )
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Credit Breakdown */}

        <div className="px-4 pt-5">

          <h3
            className="
              text-xs
              font-medium
              mb-3
            "
          >
            Credit Breakdown
          </h3>


          <div
            className="
              grid
              grid-cols-3
              gap-2
            "
          >

            {/* Total Purchased */}

            <div
              className="
                border
                border-[#6c637d]
                rounded-md
                bg-[#211d31]
                p-2.5
              "
            >

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-green-600/30
                  flex
                  items-center
                  justify-center
                  mb-2
                "
              >

                <ArrowDownToLine
                  size={15}
                  className="text-green-400"
                />

              </div>

              <p className="text-[9px] text-gray-300">
                Total Purchased
              </p>

              <p className="text-xs font-semibold mt-1">
                500
              </p>

              <p className="text-[8px] text-gray-400 mt-1">
                Credits
              </p>

              <p className="text-base mt-1">
                ₹ 500
              </p>

            </div>


            {/* Total Used */}

            <div
              className="
                border
                border-[#6c637d]
                rounded-md
                bg-[#211d31]
                p-2.5
              "
            >

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-blue-600/30
                  flex
                  items-center
                  justify-center
                  mb-2
                "
              >

                <ArrowUpFromLine
                  size={15}
                  className="text-blue-400"
                />

              </div>

              <p className="text-[9px] text-gray-300">
                Total Used
              </p>

              <p className="text-xs font-semibold mt-1">
                266
              </p>

              <p className="text-[8px] text-gray-400 mt-1">
                Credits
              </p>

              <p className="text-base mt-1">
                ₹ 266
              </p>

            </div>


            {/* Total Remaining */}

            <div
              className="
                border
                border-[#6c637d]
                rounded-md
                bg-[#211d31]
                p-2.5
              "
            >

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-orange-600/30
                  flex
                  items-center
                  justify-center
                  mb-2
                "
              >

                <RotateCcw
                  size={15}
                  className="text-orange-400"
                />

              </div>

              <p className="text-[9px] text-gray-300">
                Total Remaining
              </p>

              <p className="text-xs font-semibold mt-1">
                {currentCredits.toLocaleString()}
              </p>

              <p className="text-[8px] text-gray-400 mt-1">
                Credits
              </p>

              <p className="text-base mt-1">
                ₹ {currentCredits.toLocaleString()}
              </p>

            </div>

          </div>

        </div>


        {/* Information */}

        <div className="px-4 pt-4">

          <div
            className="
              flex
              items-center
              gap-2
              text-gray-400
              text-[10px]
              pb-4
              border-b
              border-[#3d315d]
            "
          >

            <Info size={15} />

            <span>
              Credits never expire and can be used across all features.
            </span>

          </div>

        </div>


        {/* Recent Transactions */}

        <div className="px-4 pt-4">

          <h3
            className="
              text-xs
              font-medium
              mb-2
            "
          >
            Recent Transactions
          </h3>


          {/* Transaction 1 */}

          <div
            className="
              flex
              items-center
              gap-2
              py-3
              border-b
              border-[#3d315d]
            "
          >

            <div
              className="
                w-8
                h-8
                rounded-full
                bg-green-600/30
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <ArrowDownToLine
                size={15}
                className="text-green-400"
              />

            </div>


            <div className="flex-1 min-w-0">

              <p className="text-xs">
                Credits Added - Package
              </p>

              <p className="text-[9px] text-gray-400 mt-1">
                Today
              </p>

            </div>


            <div className="text-right">

              <p className="text-[10px] text-green-400">
                +250 Credits
              </p>

              <p className="text-[9px] text-gray-500 mt-1">
                Balance: {currentCredits}
              </p>

            </div>

          </div>


          {/* Transaction 2 */}

          <div
            className="
              flex
              items-center
              gap-2
              py-3
              border-b
              border-[#3d315d]
            "
          >

            <div
              className="
                w-8
                h-8
                rounded-full
                bg-orange-600/30
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <RotateCcw
                size={15}
                className="text-orange-400"
              />

            </div>


            <div className="flex-1 min-w-0">

              <p className="text-xs">
                Lead Export
              </p>

              <p className="text-[9px] text-gray-400 mt-1">
                Today
              </p>

            </div>


            <div className="text-right">

              <p className="text-[10px] text-orange-400">
                -10 Credits
              </p>

              <p className="text-[9px] text-gray-500 mt-1">
                Balance: {currentCredits}
              </p>

            </div>

          </div>


          {/* Transaction 3 */}

          <div
            className="
              flex
              items-center
              gap-2
              py-3
              border-b
              border-[#3d315d]
            "
          >

            <div
              className="
                w-8
                h-8
                rounded-full
                bg-orange-600/30
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <RotateCcw
                size={15}
                className="text-orange-400"
              />

            </div>


            <div className="flex-1 min-w-0">

              <p className="text-xs">
                Bulk Email
              </p>

              <p className="text-[9px] text-gray-400 mt-1">
                Yesterday
              </p>

            </div>


            <div className="text-right">

              <p className="text-[10px] text-orange-400">
                -25 Credits
              </p>

              <p className="text-[9px] text-gray-500 mt-1">
                Balance: {currentCredits}
              </p>

            </div>

          </div>


          {/* Transaction 4 */}

          <div
            className="
              flex
              items-center
              gap-2
              py-3
            "
          >

            <div
              className="
                w-8
                h-8
                rounded-full
                bg-green-600/30
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <ArrowDownToLine
                size={15}
                className="text-green-400"
              />

            </div>


            <div className="flex-1 min-w-0">

              <p className="text-xs">
                Credits Added - Package
              </p>

              <p className="text-[9px] text-gray-400 mt-1">
                2 days ago
              </p>

            </div>


            <div className="text-right">

              <p className="text-[10px] text-green-400">
                +250 Credits
              </p>

              <p className="text-[9px] text-gray-500 mt-1">
                Balance: {currentCredits}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}


export default CreditsPopup;
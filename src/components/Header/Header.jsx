import React from "react";

import {
  Bell,
  UserRound,
  ChevronDown,
  Plus
} from "lucide-react";


function Header() {

  return (

    <header
  className="
    min-h-[66px]
    bg-[#171126]
    flex
    items-center
    justify-between
    px-3
    sm:px-4
    md:px-5
    box-border
    gap-3
    sticky
    top-0
    z-50
  "
>

      {/* Right Side */}

      <div
        className="
          flex
          items-center
          gap-2
          sm:gap-4
          md:gap-6
          text-white
          min-w-0
          ml-auto
        "
      >

        {/* Bell Icon */}

        <Bell
          size={20}
          className="
            cursor-pointer
            shrink-0
            sm:w-[23px]
            sm:h-[23px]
          "
        />


        {/* Add Credits */}

        <button
          className="
            flex
            items-center
            justify-center
            gap-1
            sm:gap-2
            h-[34px]
            sm:h-[38px]
            px-2
            sm:px-4
            bg-[#4b397b]
            border
            border-[#695593]
            rounded-md
            text-white
            text-[11px]
            sm:text-sm
            font-medium
            hover:bg-[#5a468d]
            transition
            whitespace-nowrap
          "
        >

          <Plus
            size={15}
            className="sm:w-[17px] sm:h-[17px]"
          />

          <span>
            Add Credits
          </span>

        </button>


        {/* Credits */}

        <div
          className="
            text-[11px]
            sm:text-sm
            font-medium
            whitespace-nowrap
          "
        >

          Credits:

          <span className="ml-1 font-semibold">
            234
          </span>

        </div>


        {/* Admin Profile */}

        <div
          className="
            flex
            items-center
            gap-1
            sm:gap-[10px]
            text-white
            text-sm
            sm:text-base
            font-semibold
            cursor-pointer
            shrink-0
          "
        >

          {/* Profile Circle */}

          <div
            className="
              w-8
              h-8
              sm:w-10
              sm:h-10
              bg-white
              text-[#171126]
              rounded-full
              flex
              items-center
              justify-center
            "
          >

            <UserRound
              size={19}
              className="sm:w-[23px] sm:h-[23px]"
            />

          </div>


          {/* Admin Name */}

          <span className="hidden sm:inline">
            Admin
          </span>


          {/* Dropdown */}

          <ChevronDown
            size={17}
            className="sm:w-5 sm:h-5"
          />

        </div>

      </div>

    </header>

  );

}


export default Header;
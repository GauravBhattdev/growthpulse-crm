
import React, { useState } from "react";

import {
    Bell,
    UserRound,
    ChevronDown,
    Plus,
    Menu
} from "lucide-react";

import CreditsPopup from "../CreditsPopup/CreditsPopup";
import TopUpCredits from "../TopUpCredits/TopUpCredits";
import NotificationPopup from "../NotificationPopup/NotificationPopup";


function Header({ onMenuClick }) {

    const [showPopup, setShowPopup] = useState(null);


    return (

        <header
            className="
                relative

                min-h-[66px]
                w-full
                bg-[#171126]

                flex
                items-center
                justify-between

                px-2
                sm:px-3
                md:px-5

                box-border

                gap-2
                sm:gap-3

                sticky
                top-0
                z-30

              
            "
        >

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
                type="button"
                onClick={onMenuClick}
                className="
                    lg:hidden

                    flex
                    items-center
                    justify-center

                    w-9
                    h-9

                    rounded-md

                    text-white

                    hover:bg-[#2b1c43]

                    transition-colors

                    shrink-0
                "
                aria-label="Open menu"
            >

                <Menu size={23} />

            </button>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
                className="
                    flex
                    items-center

                    gap-2
                    sm:gap-3
                    md:gap-6

                    text-white

                    min-w-0

                    ml-auto
                "
            >

                {/* =================================================
                    BELL / NOTIFICATIONS
                ================================================= */}

                <button
                    type="button"
                    onClick={() => setShowPopup("notifications")}
                    className="
                        flex
                        items-center
                        justify-center

                        w-8
                        h-8

                        sm:w-9
                        sm:h-9

                        rounded-md

                        shrink-0

                        hover:bg-[#2b1c43]

                        transition-colors

                        cursor-pointer
                    "
                    aria-label="Notifications"
                >

                    <Bell
                        size={19}
                        className="sm:w-[22px] sm:h-[22px]"
                    />

                </button>


                {/* =================================================
                    ADD CREDITS
                ================================================= */}

                <button
                    type="button"
                    onClick={() => setShowPopup("topup")}
                    className="
                        flex
                        items-center
                        justify-center

                        gap-1
                        sm:gap-2

                        h-[32px]
                        sm:h-[38px]

                        px-2
                        sm:px-4

                        bg-[#4b397b]

                        border
                        border-[#695593]

                        rounded-md

                        text-white

                        text-[10px]
                        sm:text-sm

                        font-medium

                        hover:bg-[#5a468d]

                        transition

                        whitespace-nowrap

                        cursor-pointer

                        shrink-0
                    "
                >

                    <Plus
                        size={14}
                        className="sm:w-[17px] sm:h-[17px]"
                    />

                    <span>
                        Add Credits
                    </span>

                </button>


                {/* =================================================
                    CREDITS
                ================================================= */}

                <button
                    type="button"
                    onClick={() => setShowPopup("credits")}
                    className="
                        text-[10px]
                        sm:text-sm

                        font-medium

                        whitespace-nowrap

                        text-white

                        hover:text-purple-300

                        transition

                        cursor-pointer

                        shrink-0
                    "
                >

                    Credits:

                    <span className="ml-1 font-semibold">
                        234
                    </span>

                </button>


                {/* =================================================
                    ADMIN PROFILE
                ================================================= */}

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

                            shrink-0
                        "
                    >

                        <UserRound
                            size={18}
                            className="sm:w-[23px] sm:h-[23px]"
                        />

                    </div>


                    {/* Admin Text */}

                    <span className="hidden sm:inline">
                        Admin
                    </span>


                    {/* Dropdown */}

                    <ChevronDown
                        size={16}
                        className="sm:w-5 sm:h-5"
                    />

                </div>

            </div>


            {/* =================================================
                NOTIFICATION POPUP
            ================================================= */}

            {showPopup === "notifications" && (
                <NotificationPopup
                    onClose={() => setShowPopup(null)}
                />
            )}


            {/* =================================================
                CURRENT CREDITS POPUP
            ================================================= */}

            {showPopup === "credits" && (
                <CreditsPopup
                    onClose={() => setShowPopup(null)}
                />
            )}


            {/* =================================================
                ADD CREDITS POPUP
            ================================================= */}

            {showPopup === "topup" && (
                <TopUpCredits
                    onClose={() => setShowPopup(null)}
                />
            )}

        </header>

    );

}


export default Header;


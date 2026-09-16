import React, {
    useEffect,
    useRef,
    useState
} from "react";

import {
    Bell,
    Eye,
    UserRound,
    ChevronDown,
    Plus,
    Menu
} from "lucide-react";

import CreditsPopup from "../CreditsPopup/CreditsPopup";
import TopUpCredits from "../TopUpCredits/TopUpCredits";
import NotificationPopup from "../NotificationPopup/NotificationPopup";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";


function Header({
    onMenuClick,
    theme,
    setTheme
}) {

    // Controls notification / credits / topup popup
    const [showPopup, setShowPopup] =
        useState(null);


    // Controls profile dropdown
    const [showProfile, setShowProfile] =
        useState(false);


    // Reference for profile area
    const profileRef = useRef(null);


    /*
        =====================================================
        CLOSE PROFILE DROPDOWN WHEN CLICKING OUTSIDE
        =====================================================
    */

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                profileRef.current &&
                !profileRef.current.contains(
                    event.target
                )
            ) {

                setShowProfile(false);

            }

        };


        document.addEventListener(
            "mousedown",
            handleClickOutside
        );


        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);


    /*
        =====================================================
        PROFILE CLICK
        =====================================================
    */

    const handleProfileClick = () => {

        setShowProfile(
            (previous) => !previous
        );

    };


    /*
        =====================================================
        THEME TOGGLE
    =====================================================
    */

    const handleThemeToggle = () => {

        setTheme(
            theme === "dark"
                ? "light"
                : "dark"
        );

    };


    return (

        <header
            className="
               

                min-h-[66px]
                w-full

                bg-theme-surface

                

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

                transition-colors
                duration-300
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

                    text-theme

                    hover:bg-theme-surface-secondary

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

                    text-theme

                    min-w-0

                    ml-auto
                "
            >


                {/* =================================================
                    EYE / THEME BUTTON
                ================================================= */}

                <button
                    type="button"

                    onClick={handleThemeToggle}

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

                        text-theme

                        hover:bg-theme-surface-secondary

                        transition-all
                        duration-200

                        cursor-pointer

                        active:scale-95
                    "

                    aria-label={
                        theme === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }

                    title={
                        theme === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                >

                    <Eye
                        size={19}
                        className="
                            sm:w-[22px]
                            sm:h-[22px]

                            transition-transform
                            duration-300

                            hover:scale-110
                        "
                    />

                </button>


                {/* =================================================
                    BELL / NOTIFICATIONS
                ================================================= */}

                <button
                    type="button"

                    onClick={() => {

                        setShowPopup(
                            "notifications"
                        );

                        setShowProfile(false);

                    }}

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

                        text-theme

                        hover:bg-theme-surface-secondary

                        transition-colors

                        cursor-pointer
                    "

                    aria-label="Notifications"
                >

                    <Bell
                        size={19}
                        className="
                            sm:w-[22px]
                            sm:h-[22px]
                        "
                    />

                </button>


                {/* =================================================
                    ADD CREDITS
                ================================================= */}

                <button
                    type="button"

                    onClick={() => {

                        setShowPopup("topup");

                        setShowProfile(false);

                    }}

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
                        className="
                            sm:w-[17px]
                            sm:h-[17px]
                        "
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

                    onClick={() => {

                        setShowPopup("credits");

                        setShowProfile(false);

                    }}

                    className="
                        text-[10px]
                        sm:text-sm

                        font-medium

                        whitespace-nowrap

                        text-theme

                        hover:text-primary

                        transition

                        cursor-pointer

                        shrink-0
                    "
                >

                    Credits:

                    <span
                        className="
                            ml-1
                            font-semibold
                        "
                    >
                        234
                    </span>

                </button>


                {/* =================================================
                    ADMIN PROFILE
                ================================================= */}

                <div
                    ref={profileRef}

                    className="
                        relative
                        shrink-0
                    "
                >

                    <button
                        type="button"

                        onClick={handleProfileClick}

                        className="
                            flex
                            items-center

                            gap-1
                            sm:gap-[10px]

                            text-theme

                            text-sm
                            sm:text-base

                            font-semibold

                            cursor-pointer

                            rounded-md

                            px-1
                            sm:px-2

                            py-1

                            hover:bg-theme-surface-secondary

                            transition-colors
                        "

                        aria-label="Open profile menu"
                    >

                        {/* Profile Circle */}

                        <div
                            className="
                                w-8
                                h-8

                                sm:w-10
                                sm:h-10

                                bg-theme-surface-secondary

                                text-theme

                                rounded-full

                                flex
                                items-center
                                justify-center

                                shrink-0

                                border
                                border-theme-border
                            "
                        >

                            <UserRound
                                size={18}
                                className="
                                    sm:w-[23px]
                                    sm:h-[23px]
                                "
                            />

                        </div>


                        {/* Admin Text */}

                        <span
                            className="
                                hidden
                                sm:inline
                            "
                        >
                            Admin
                        </span>


                        {/* Dropdown Arrow */}

                        <ChevronDown
                            size={16}

                            className={`
                                sm:w-5
                                sm:h-5

                                transition-transform
                                duration-200

                                ${
                                    showProfile
                                        ? "rotate-180"
                                        : ""
                                }
                            `}
                        />

                    </button>


                    {/* =================================================
                        PROFILE DROPDOWN
                    ================================================= */}

                    {showProfile && (

                        <ProfileDropdown
                            onClose={() =>
                                setShowProfile(false)
                            }
                        />

                    )}

                </div>

            </div>


            {/* =================================================
                NOTIFICATION POPUP
            ================================================= */}

            {showPopup === "notifications" && (

                <NotificationPopup
                    onClose={() =>
                        setShowPopup(null)
                    }
                />

            )}


            {/* =================================================
                CURRENT CREDITS POPUP
            ================================================= */}

            {showPopup === "credits" && (

                <CreditsPopup
                    onClose={() =>
                        setShowPopup(null)
                    }
                />

            )}


            {/* =================================================
                ADD CREDITS POPUP
            ================================================= */}

            {showPopup === "topup" && (

                <TopUpCredits
                    onClose={() =>
                        setShowPopup(null)
                    }
                />

            )}

        </header>

    );

}


export default Header;


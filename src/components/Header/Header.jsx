import React, { useEffect, useRef, useState } from "react";

import {
    Bell,
    Moon,
    Sun,
    UserRound,
    ChevronDown,
    Plus,
    Menu,
} from "lucide-react";

import CreditsPopup from "../CreditsPopup/CreditsPopup";
import TopUpCredits from "../TopUpCredits/TopUpCredits";
import NotificationPopup from "../NotificationPopup/NotificationPopup";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";


function Header({
    onMenuClick,
    theme,
    setTheme,
}) {

    // Controls notification / credits / topup popup
    const [showPopup, setShowPopup] = useState(null);


    // Controls profile dropdown
    const [showProfile, setShowProfile] = useState(false);


    // Reference for profile area
    const profileRef = useRef(null);


    // =====================================================
    // CLOSE PROFILE DROPDOWN WHEN CLICKING OUTSIDE
    // =====================================================

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setShowProfile(false);
            }

        };


        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);


    // =====================================================
    // PROFILE CLICK
    // =====================================================

    const handleProfileClick = () => {
        setShowProfile((previous) => !previous);
    };


    // =====================================================
    // THEME TOGGLE
    // =====================================================

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };


    // =====================================================
    // COMBINED CREDITS BUTTON — MOBILE ONLY
    // Shows credits count + plus icon. Tapping opens the
    // Credits popup (info panel), not the top-up panel.
    // =====================================================

    const handleMobileCreditsClick = () => {
        setShowPopup("credits");
        setShowProfile(false);
    };


    return (

        <header
            className="
                

                min-h-[60px]
                sm:min-h-[66px]
                w-full

                bg-theme-surface

                flex
                items-center
                justify-between

                px-2
                sm:px-3
                md:px-5

                box-border

                gap-1
                sm:gap-2
                md:gap-4

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
                    w-9 h-9
                    rounded-md
                    text-theme
                    hover:bg-theme-surface-secondary
                    transition-colors
                    shrink-0
                    cursor-pointer
                "
                aria-label="Open menu"
            >
                <Menu size={22} />
            </button>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
                className="
                    flex
                    items-center

                    gap-1
                    sm:gap-2
                    md:gap-4

                    text-theme

                    min-w-0

                    ml-auto
                "
            >

                {/* THEME TOGGLE */}

                <button
                    type="button"
                    onClick={handleThemeToggle}
                    className="
                        flex
                        items-center
                        justify-center
                        w-8 h-8
                        sm:w-9 sm:h-9
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
                >
                    {theme === "dark" ? (
                        <Sun size={19} className="sm:w-[22px] sm:h-[22px]" />
                    ) : (
                        <Moon size={19} className="sm:w-[22px] sm:h-[22px]" />
                    )}
                </button>


                {/* BELL */}

                <button
                    type="button"
                    onClick={() => {
                        setShowPopup("notifications");
                        setShowProfile(false);
                    }}
                    className="
                        flex
                        items-center
                        justify-center
                        w-8 h-8
                        sm:w-9 sm:h-9
                        rounded-md
                        shrink-0
                        text-theme
                        hover:bg-theme-surface-secondary
                        transition-colors
                        cursor-pointer
                    "
                    aria-label="Notifications"
                >
                    <Bell size={19} className="sm:w-[22px] sm:h-[22px]" />
                </button>


                {/* =================================================
                    MOBILE: COMBINED CREDITS BUTTON
                    Shows "+ 234" — opens the Credits popup
                    Hidden on sm+
                ================================================= */}

                <button
                    type="button"
                    onClick={handleMobileCreditsClick}
                    className="
                        sm:hidden
                        flex
                        items-center
                        justify-center
                        gap-1

                        h-8
                        px-2

                        bg-primary/15
                        text-primary

                        border
                        border-primary/30

                        rounded-md

                        text-[11px]
                        font-semibold

                        whitespace-nowrap
                        cursor-pointer
                        shrink-0
                    "
                    aria-label="View Credits"
                >

                    <Plus size={13} />

                    234

                </button>


                {/* =================================================
                    DESKTOP / TABLET: ADD CREDITS BUTTON
                    Hidden on mobile (replaced by combined button)
                    Visible sm+
                ================================================= */}

                <button
                    type="button"
                    onClick={() => {
                        setShowPopup("topup");
                        setShowProfile(false);
                    }}
                    className="
                        hidden
                        sm:flex

                        items-center
                        justify-center

                        gap-2

                        h-[38px]
                        px-4

                        bg-[#4b397b]
                        border
                        border-[#695593]

                        rounded-md

                        text-white

                        text-sm
                        font-medium

                        hover:bg-[#5a468d]

                        transition

                        whitespace-nowrap

                        cursor-pointer

                        shrink-0
                    "
                    aria-label="Add Credits"
                >
                    <Plus size={17} />

                    <span>Add Credits</span>
                </button>


                {/* =================================================
                    DESKTOP / TABLET: CREDITS COUNT
                    Hidden on mobile, visible sm+
                ================================================= */}

                <button
                    type="button"
                    onClick={() => {
                        setShowPopup("credits");
                        setShowProfile(false);
                    }}
                    className="
                        hidden
                        sm:inline-flex
                        items-center

                        text-sm
                        font-medium

                        whitespace-nowrap

                        text-theme

                        hover:text-primary

                        transition

                        cursor-pointer

                        shrink-0
                    "
                    aria-label="View Credits"
                >
                    <span className="hidden md:inline">
                        Credits:
                    </span>

                    <span className="font-semibold md:ml-1">
                        234
                    </span>
                </button>


                {/* =================================================
                    ADMIN PROFILE
                ================================================= */}

                <div
                    ref={profileRef}
                    className="relative shrink-0"
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

                        <div
                            className="
                                w-8 h-8
                                sm:w-10 sm:h-10
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
                                className="sm:w-[23px] sm:h-[23px]"
                            />
                        </div>


                        <span className="hidden sm:inline">
                            Admin
                        </span>


                        <ChevronDown
                            size={16}
                            className={`
                                hidden
                                sm:block
                                sm:w-5
                                sm:h-5
                                transition-transform
                                duration-200
                                ${showProfile ? "rotate-180" : ""}
                            `}
                        />

                    </button>


                    {showProfile && (
                        <ProfileDropdown
                            onClose={() => setShowProfile(false)}
                        />
                    )}

                </div>

            </div>


            {/* =================================================
                POPUPS
            ================================================= */}

            {showPopup === "notifications" && (
                <NotificationPopup onClose={() => setShowPopup(null)} />
            )}

            {showPopup === "credits" && (
                <CreditsPopup onClose={() => setShowPopup(null)} />
            )}

            {showPopup === "topup" && (
                <TopUpCredits onClose={() => setShowPopup(null)} />
            )}

        </header>

    );

}


export default Header;
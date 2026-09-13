import React from "react";

import {
    UserRound,
    LogIn,
    UserPlus,
    LogOut
} from "lucide-react";


function ProfileDropdown({ onClose }) {

    // Login button
    const handleLogin = () => {
        console.log("Login clicked");
        onClose();
    };


    // Create Account button
    const handleCreateAccount = () => {
        console.log("Create Account clicked");
        onClose();
    };


    // Logout button
    const handleLogout = () => {
        console.log("Logout clicked");
        onClose();
    };


    return (

        <div
            className="
                absolute
                top-[58px]
                right-3
                sm:right-5

                w-[210px]
                sm:w-[230px]

                bg-white

                rounded-xl

                shadow-xl

                border
                border-gray-200

                overflow-hidden

                z-50

                animate-[profileDropdown_0.2s_ease-out]
            "
        >

            {/* =========================================
                PROFILE HEADER
            ========================================= */}

            <div
                className="
                    px-4
                    py-3

                    bg-[#171126]

                    text-white
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    {/* Profile Icon */}

                    <div
                        className="
                            w-10
                            h-10

                            rounded-full

                            bg-white

                            text-[#171126]

                            flex
                            items-center
                            justify-center

                            shrink-0
                        "
                    >

                        <UserRound size={21} />

                    </div>


                    {/* User Information */}

                    <div className="min-w-0">

                        <p
                            className="
                                text-sm
                                font-semibold
                            "
                        >
                            Admin
                        </p>

                        <p
                            className="
                                text-xs
                                text-gray-300

                                truncate
                            "
                        >
                            admin@growthpulse.com
                        </p>

                    </div>

                </div>

            </div>


            {/* =========================================
                MENU OPTIONS
            ========================================= */}

            <div className="py-2">


                {/* =====================================
                    PROFILE
                ===================================== */}

                <button
                    type="button"
                    onClick={onClose}
                    className="
                        w-full

                        flex
                        items-center
                        gap-3

                        px-4
                        py-2.5

                        text-sm
                        text-gray-700

                        hover:bg-gray-100

                        transition-colors

                        cursor-pointer
                    "
                >

                    <UserRound size={18} />

                    <span>
                        My Profile
                    </span>

                </button>


                {/* =====================================
                    LOGIN
                ===================================== */}

                <button
                    type="button"
                    onClick={handleLogin}
                    className="
                        w-full

                        flex
                        items-center
                        gap-3

                        px-4
                        py-2.5

                        text-sm
                        text-gray-700

                        hover:bg-gray-100

                        transition-colors

                        cursor-pointer
                    "
                >

                    <LogIn size={18} />

                    <span>
                        Login
                    </span>

                </button>


                {/* =====================================
                    CREATE ACCOUNT
                ===================================== */}

                <button
                    type="button"
                    onClick={handleCreateAccount}
                    className="
                        w-full

                        flex
                        items-center
                        gap-3

                        px-4
                        py-2.5

                        text-sm
                        text-gray-700

                        hover:bg-gray-100

                        transition-colors

                        cursor-pointer
                    "
                >

                    <UserPlus size={18} />

                    <span>
                        Create Account
                    </span>

                </button>


                {/* =====================================
                    DIVIDER
                ===================================== */}

                <div
                    className="
                        border-t
                        border-gray-200

                        my-1
                    "
                />


                {/* =====================================
                    LOGOUT
                ===================================== */}

                <button
                    type="button"
                    onClick={handleLogout}
                    className="
                        w-full

                        flex
                        items-center
                        gap-3

                        px-4
                        py-2.5

                        text-sm
                        text-red-600

                        hover:bg-red-50

                        transition-colors

                        cursor-pointer
                    "
                >

                    <LogOut size={18} />

                    <span>
                        Logout
                    </span>

                </button>

            </div>

        </div>

    );
}


export default ProfileDropdown;


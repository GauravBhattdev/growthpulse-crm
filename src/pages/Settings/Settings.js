import React from "react";

import {
    User,
    Bell,
    Lock,
    Palette,
    Globe,
    Shield,
    Save
} from "lucide-react";


function Settings() {

    return (

        <div className="w-full">

            {/* Header */}

            <div>

                <h1 className="text-[27px] font-semibold">
                    Settings
                </h1>

                <p className="mt-1 text-[13px] text-gray-600">
                    Manage your account preferences and application settings.
                </p>

            </div>


            <div className="grid grid-cols-12 gap-5 mt-5">


                {/* Settings Navigation */}

                <div
                    className="
                        col-span-3
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        p-3
                    "
                >

                    <button
                        className="
                            w-full
                            flex items-center
                            gap-3
                            px-4 py-3
                            rounded-md
                            bg-purple-100
                            text-purple-700
                            text-sm
                            text-left
                        "
                    >

                        <User size={17} />

                        Profile

                    </button>


                    <button
                        className="
                            w-full
                            flex items-center
                            gap-3
                            px-4 py-3
                            rounded-md
                            text-sm
                            text-left
                            mt-1
                            hover:bg-gray-100
                        "
                    >

                        <Bell size={17} />

                        Notifications

                    </button>


                    <button
                        className="
                            w-full
                            flex items-center
                            gap-3
                            px-4 py-3
                            rounded-md
                            text-sm
                            text-left
                            mt-1
                            hover:bg-gray-100
                        "
                    >

                        <Lock size={17} />

                        Security

                    </button>


                    <button
                        className="
                            w-full
                            flex items-center
                            gap-3
                            px-4 py-3
                            rounded-md
                            text-sm
                            text-left
                            mt-1
                            hover:bg-gray-100
                        "
                    >

                        <Palette size={17} />

                        Appearance

                    </button>


                    <button
                        className="
                            w-full
                            flex items-center
                            gap-3
                            px-4 py-3
                            rounded-md
                            text-sm
                            text-left
                            mt-1
                            hover:bg-gray-100
                        "
                    >

                        <Globe size={17} />

                        Language

                    </button>

                </div>


                {/* Profile Settings */}

                <div
                    className="
                        col-span-9
                        bg-white
                        border border-gray-300
                        rounded-lg
                        shadow-sm
                        p-6
                    "
                >

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                w-16 h-16
                                rounded-full
                                bg-purple-100
                                flex items-center
                                justify-center
                                text-purple-600
                            "
                        >

                            <User size={30} />

                        </div>


                        <div>

                            <h2 className="text-lg font-semibold">
                                Admin
                            </h2>

                            <p className="text-xs text-gray-500">
                                Administrator Account
                            </p>

                        </div>

                    </div>


                    {/* Form */}

                    <div className="grid grid-cols-2 gap-5 mt-7">


                        <div>

                            <label className="text-xs text-gray-600">
                                First Name
                            </label>

                            <input
                                type="text"
                                value="Admin"
                                readOnly
                                className="
                                    w-full
                                    mt-2
                                    border border-gray-300
                                    rounded-md
                                    px-3 py-2
                                    text-sm
                                    outline-none
                                "
                            />

                        </div>


                        <div>

                            <label className="text-xs text-gray-600">
                                Last Name
                            </label>

                            <input
                                type="text"
                                value="User"
                                readOnly
                                className="
                                    w-full
                                    mt-2
                                    border border-gray-300
                                    rounded-md
                                    px-3 py-2
                                    text-sm
                                    outline-none
                                "
                            />

                        </div>


                        <div>

                            <label className="text-xs text-gray-600">
                                Email Address
                            </label>

                            <input
                                type="email"
                                value="admin@growthpulse.com"
                                readOnly
                                className="
                                    w-full
                                    mt-2
                                    border border-gray-300
                                    rounded-md
                                    px-3 py-2
                                    text-sm
                                    outline-none
                                "
                            />

                        </div>


                        <div>

                            <label className="text-xs text-gray-600">
                                Phone Number
                            </label>

                            <input
                                type="text"
                                value="+91 98765 43210"
                                readOnly
                                className="
                                    w-full
                                    mt-2
                                    border border-gray-300
                                    rounded-md
                                    px-3 py-2
                                    text-sm
                                    outline-none
                                "
                            />

                        </div>

                    </div>


                    {/* Security */}

                    <div
                        className="
                            mt-7
                            border-t
                            pt-6
                        "
                    >

                        <div className="flex items-center gap-3">

                            <Shield
                                size={20}
                                className="text-green-500"
                            />

                            <div>

                                <h3 className="text-sm font-semibold">
                                    Account Security
                                </h3>

                                <p className="text-xs text-gray-500 mt-1">
                                    Your account is protected and secure.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="flex justify-end mt-7">

                        <button
                            className="
                                flex items-center gap-2
                                bg-[#4b397b]
                                text-white
                                px-5 py-2.5
                                rounded-md
                                text-sm
                                hover:bg-[#3f315f]
                            "
                        >

                            <Save size={16} />

                            Save Changes

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Settings;
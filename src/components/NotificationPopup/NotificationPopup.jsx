import React from "react";

import {
    X,
    Bell
} from "lucide-react";


function NotificationPopup({ onClose }) {

    return (

        <div
            className="
                absolute

                top-[58px]
                right-3

                w-[320px]

                bg-[#211936]

                border
                border-[#3b2d55]

                rounded-lg

                shadow-xl

                z-50
            "
        >

            {/* =================================================
                POPUP HEADER
            ================================================= */}

            <div
                className="
                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    border-b
                    border-[#3b2d55]
                "
            >

                {/* Notification Title */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <Bell
                        size={18}
                        className="text-white"
                    />

                    <h3
                        className="
                            text-white
                            text-sm
                            font-semibold
                        "
                    >
                        Notifications
                    </h3>

                </div>


                {/* Close Button */}

                <button
                    type="button"
                    onClick={onClose}
                    className="
                        flex
                        items-center
                        justify-center

                        w-7
                        h-7

                        rounded-md

                        text-gray-400

                        hover:bg-[#2b1c43]
                        hover:text-white

                        transition-colors
                    "
                    aria-label="Close notifications"
                >

                    <X size={18} />

                </button>

            </div>


            {/* =================================================
                NOTIFICATION CONTENT
            ================================================= */}

            <div
                className="
                    px-4
                    py-5
                "
            >

                <p
                    className="
                        text-sm
                        text-gray-300
                    "
                >
                    You have no new notifications.
                </p>

            </div>

        </div>

    );

}


export default NotificationPopup;

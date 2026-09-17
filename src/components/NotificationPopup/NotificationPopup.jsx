import React, { useEffect, useRef } from "react";

import {
    X,
    Bell
} from "lucide-react";


function NotificationPopup({ onClose }) {

    const popupRef = useRef(null);


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
    ===================================================== */

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                popupRef.current &&
                !popupRef.current.contains(event.target)
            ) {

                onClose();

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

    }, [onClose]);


    return (

        <div
            ref={popupRef}

            className="
                absolute

                top-[58px]
                right-3

                w-[320px]
                max-w-[calc(100vw-24px)]

                bg-theme-surface

                border
                border-theme-border

                rounded-lg

                shadow-xl

                z-50

                transition-colors
                duration-300
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
                    border-theme-border
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
                        className="text-theme-text"
                    />

                    <h3
                        className="
                            text-theme-text
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

                        text-theme-text-secondary

                        hover:bg-theme-surface-secondary
                        hover:text-theme-text

                        transition-colors

                        cursor-pointer
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
                        text-theme-text-secondary
                    "
                >
                    You have no new notifications.
                </p>

            </div>

        </div>

    );

}


export default NotificationPopup;
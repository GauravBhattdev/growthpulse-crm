import React from "react";

import { X } from "lucide-react";


function SuccessPopup({
    message,
    onClose
}) {

    return (

        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-black/40
                px-4
            "
        >

            <div
                className="
                    w-full
                    max-w-[400px]
                    rounded-xl
                    bg-theme-surface
                    border
                    border-theme-border
                    p-6
                    shadow-xl

                    transition-colors
                    duration-300
                "
            >

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-4
                    "
                >

                    <div>

                        <h3
                            className="
                                text-lg
                                font-semibold
                                text-theme-text
                            "
                        >
                            Success
                        </h3>


                        <p
                            className="
                                text-sm
                                text-theme-text-secondary
                                mt-2
                            "
                        >
                            {message}
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            text-theme-text-secondary
                            hover:text-theme-text
                            transition
                            cursor-pointer
                        "
                    >
                        <X size={20} />
                    </button>

                </div>


                <div
                    className="
                        flex
                        justify-end
                        mt-6
                    "
                >

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            px-5
                            py-2
                            bg-primary
                            text-white
                            text-sm
                            rounded-md
                            hover:bg-primaryHover
                            transition
                            cursor-pointer
                        "
                    >
                        OK
                    </button>

                </div>

            </div>

        </div>
    );
}


export default SuccessPopup;
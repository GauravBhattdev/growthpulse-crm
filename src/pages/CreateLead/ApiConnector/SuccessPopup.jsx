import React from "react";

import { X } from "lucide-react";


function SuccessPopup({
    message,
    onClose
}) {

    return (
        <div className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/40
            px-4
        ">

            <div className="
                w-full
                max-w-[400px]
                rounded-xl
                bg-white
                p-6
                shadow-xl
            ">

                <div className="
                    flex
                    items-start
                    justify-between
                    gap-4
                ">

                    <div>

                        <h3 className="
                            text-lg
                            font-semibold
                            text-gray-800
                        ">
                            Success
                        </h3>


                        <p className="
                            text-sm
                            text-gray-500
                            mt-2
                        ">
                            {message}
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            text-gray-500
                            hover:text-gray-800
                        "
                    >
                        <X size={20} />
                    </button>

                </div>


                <div className="
                    flex
                    justify-end
                    mt-6
                ">

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
import React from "react";

import {
    Check,
    Loader2
} from "lucide-react";


function ImportLeads({
    loading,
    onImport
}) {

    return (

        <div className="
            w-full
            min-w-0
            flex
            flex-col
            items-center
            justify-center
            text-center
            py-8
            sm:py-12
        ">

            {/* Success Icon */}

            <div className="
                w-16
                h-16
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                mb-5
            ">

                <Check
                    size={30}
                    className="text-green-600"
                />

            </div>


            {/* Heading */}

            <h2 className="
                text-lg
                sm:text-xl
                font-semibold
                text-gray-800
            ">
                Ready to Import
            </h2>


            {/* Description */}

            <p className="
                text-[11px]
                sm:text-xs
                text-gray-500
                mt-2
                max-w-[400px]
            ">
                Your file contains 23 valid leads ready to be imported.
            </p>


            {/* Import Button */}

            <button
                type="button"
                onClick={onImport}
                disabled={loading}
                className="
                    mt-5

                    px-5
                    sm:px-6

                    py-2.5

                    bg-[#8B3DF5]

                    text-white

                    text-xs

                    rounded-md

                    font-medium

                    hover:bg-[#7630D8]

                    transition

                    disabled:opacity-60
                    disabled:cursor-not-allowed

                    inline-flex
                    items-center
                    justify-center
                    gap-2
                "
            >

                {loading ? (

                    <>

                        <Loader2
                            size={14}
                            className="animate-spin"
                        />

                        Importing...

                    </>

                ) : (

                    "Import Leads"

                )}

            </button>

        </div>

    );

}


export default ImportLeads;
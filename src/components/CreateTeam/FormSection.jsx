import React from "react";


function FormSection({ title, children }) {

    return (
        <div className="mt-5">

            <div className="
                flex
                items-center
                gap-2
                mb-5
            ">

                <h3 className="
                    text-[13px]
                    font-semibold
                    text-textPrimary
                    whitespace-nowrap
                ">
                    {title}
                </h3>


                <div className="
                    h-px
                    bg-borderLight
                    flex-1
                " />

            </div>


            {children}

        </div>
    );
}


export default FormSection;
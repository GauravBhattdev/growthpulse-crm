import React from "react";

function Stepper({
    steps,
    currentStep,
    onStepClick
}) {

    return (
        <div className="
            w-full
            lg:w-[190px]
            xl:w-[210px]
            shrink-0
            border
            border-gray-300
            rounded-[8px]
            bg-white
            overflow-hidden
        ">

            <div className="relative h-full">

                {/* STEPS */}

                <div className="
                    relative
                    flex
                    flex-col
                ">

                    {steps.map((step, index) => {

                        const isActive =
                            currentStep === step.number;

                        const isCompleted =
                            currentStep > step.number;

                        const isLastStep =
                            index === steps.length - 1;

                        return (
                            <React.Fragment key={step.number}>

                                {/* STEP */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        onStepClick(step.number)
                                    }
                                    className={`
                                        relative
                                        flex
                                        items-center
                                        gap-3
                                        min-h-[76px]
                                        w-full
                                        px-2.5
                                        text-left
                                        transition-all
                                        duration-200

                                        ${
                                            isActive
                                                ? "bg-[#ead8fb]"
                                                : "bg-white"
                                        }
                                    `}
                                >

                                    {/* NUMBER */}

                                    <div
                                        className={`
                                            relative
                                            z-10
                                            w-[28px]
                                            h-[28px]
                                            shrink-0
                                            rounded-full
                                            flex
                                            items-center
                                            justify-center
                                            text-[11px]
                                            font-medium
                                            border

                                            ${
                                                isActive || isCompleted
                                                    ? "bg-primary border-primary text-white"
                                                    : "bg-gray-400 border-gray-400 text-white"
                                            }
                                        `}
                                    >
                                        {step.number}
                                    </div>


                                    {/* TEXT */}

                                    <div className="min-w-0">

                                        <p
                                            className={`
                                                text-[11px]
                                                font-semibold
                                                leading-[14px]

                                                ${
                                                    isActive
                                                        ? "text-primary"
                                                        : "text-gray-800"
                                                }
                                            `}
                                        >
                                            {step.title}
                                        </p>


                                        <p
                                            className={`
                                                text-[8px]
                                                leading-[11px]
                                                mt-0.5

                                                ${
                                                    isActive
                                                        ? "text-primary"
                                                        : "text-gray-500"
                                                }
                                            `}
                                        >
                                            {step.description}
                                        </p>

                                    </div>

                                </button>


                                {/* DOTTED CONNECTOR */}

                                {!isLastStep && (
                                    <div className="
                                        h-[18px]
                                        flex
                                        items-center
                                        pl-[21px]
                                        bg-white
                                    ">
                                        <div className="
                                            h-full
                                            border-l
                                            border-dotted
                                            border-gray-500
                                        " />
                                    </div>
                                )}

                            </React.Fragment>
                        );
                    })}

                </div>

            </div>

        </div>
    );
}


export default Stepper;
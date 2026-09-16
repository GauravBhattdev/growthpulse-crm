import React from "react";


const data = [
    { stage: "New",       leads: 320, color: "#8B3DF5", width: "100%" },
    { stage: "Contacted", leads: 280, color: "#0099FF", width: "88%"  },
    { stage: "Qualified", leads: 384, color: "#2DBB55", width: "76%"  },
    { stage: "Proposal",  leads: 264, color: "#FF7043", width: "64%"  },
    { stage: "Closed",    leads: 200, color: "#276B35", width: "52%"  }
];


function LeadPipeline() {

    return (

        <div className="w-full min-w-0 overflow-hidden">

            <div
                className="
                    w-full
                    min-h-[235px]
                    flex
                    items-center
                    justify-center
                    px-1
                    sm:px-2
                "
            >

                <div
                    className="
                        w-full
                        max-w-[330px]
                        flex
                        flex-col
                        items-center
                        gap-[8px]
                    "
                >

                    {data.map((item) => (

                        <div
                            key={item.stage}
                            className="
                                w-full
                                flex
                                items-center
                                justify-center
                                min-w-0
                            "
                        >

                            {/* Funnel Box */}

                            <div
                                className="
                                    h-[34px]
                                    flex
                                    items-center
                                    justify-center
                                    text-white
                                    text-[11px]
                                    sm:text-[12px]
                                    font-semibold
                                    shrink
                                    min-w-0
                                    overflow-hidden
                                "
                                style={{
                                    width: item.width,
                                    backgroundColor: item.color,
                                    clipPath:
                                        "polygon(0 0, 100% 0, 92% 100%, 8% 100%)"
                                }}
                            >
                                {item.stage}
                            </div>


                            {/* Lead Number */}

                            <span
                                className="
                                    w-[38px]
                                    sm:w-[42px]
                                    ml-2
                                    sm:ml-3
                                    text-[11px]
                                    sm:text-[12px]
                                    font-medium
                                    shrink-0
                                "
                                style={{ color: item.color }}
                            >
                                {item.leads}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}

export default LeadPipeline;
import React from "react";


const leads = [
    {
        id: 1,
        name: "Rahul Sharma",
        company: "TechCorp",
        status: "Qualified",
        time: "2m ago",
        avatar: "RS",
        color: "#42b883"
    },
    {
        id: 2,
        name: "Ankit Verma",
        company: "Nova Ltd",
        status: "Contacted",
        time: "10m ago",
        avatar: "AV",
        color: "#8b5cf6"
    },
    {
        id: 3,
        name: "Priya Singh",
        company: "DesignHub",
        status: "New",
        time: "20m ago",
        avatar: "PS",
        color: "#ef6545"
    },
    {
        id: 4,
        name: "Karan Joshi",
        company: "BuildX",
        status: "Proposal",
        time: "30m ago",
        avatar: "KJ",
        color: "#2196f3"
    },
    {
        id: 5,
        name: "Neha Mehta",
        company: "BrightSoft",
        status: "Closed",
        time: "1h ago",
        avatar: "NM",
        color: "#3b9b62"
    },
    {
        id: 6,
        name: "Amit Kapoor",
        company: "CloudWorks",
        status: "Qualified",
        time: "1h ago",
        avatar: "AK",
        color: "#f59e0b"
    },
    {
        id: 7,
        name: "Sneha Gupta",
        company: "PixelLabs",
        status: "Contacted",
        time: "2h ago",
        avatar: "SG",
        color: "#ec4899"
    },
    {
        id: 8,
        name: "Rohit Malhotra",
        company: "InnoTech",
        status: "New",
        time: "2h ago",
        avatar: "RM",
        color: "#06b6d4"
    },
    {
        id: 9,
        name: "Pooja Agarwal",
        company: "SoftEdge",
        status: "Proposal",
        time: "3h ago",
        avatar: "PA",
        color: "#a855f7"
    },
    {
        id: 10,
        name: "Vikas Rawat",
        company: "DataFlow",
        status: "Qualified",
        time: "4h ago",
        avatar: "VR",
        color: "#10b981"
    },
    {
        id: 11,
        name: "Simran Kaur",
        company: "NextGen",
        status: "Closed",
        time: "5h ago",
        avatar: "SK",
        color: "#f97316"
    }
];


function RecentLeads() {

    return (

        <div className="w-full min-w-0 overflow-hidden">

            {leads.map((lead) => (

                <div
                    key={lead.id}
                    className="
                        flex
                        items-center

                        h-[30px]
                        mb-[5px]

                        min-w-0

                        transition-colors
                        duration-300
                    "
                >

                    {/* Avatar */}

                    <div
                        className="
                            w-[17px]
                            h-[17px]

                            rounded-full

                            flex
                            items-center
                            justify-center

                            text-white
                            text-[7px]
                            font-semibold

                            shrink-0

                            mr-[9px]
                        "
                        style={{
                            backgroundColor: lead.color
                        }}
                    >
                        {lead.avatar}
                    </div>


                    {/* Name */}

                    <div
                        className="
                            w-[125px]

                            text-[11px]
                            text-theme-text

                            truncate
                        "
                    >
                        {lead.name}
                    </div>


                    {/* Company */}

                    <div
                        className="
                            w-[90px]

                            text-[11px]
                            text-theme-text

                            truncate
                        "
                    >
                        {lead.company}
                    </div>


                    {/* Status */}

                    <div
                        className={`
                            w-[52px]

                            px-[5px]
                            py-[3px]

                            rounded-[4px]

                            text-center
                            text-[8px]

                            shrink-0

                            ${
                                lead.status === "Qualified"
                                    ? "bg-[#d9f1dc] text-[#4d9b5b] dark:bg-green-500/10 dark:text-green-400"
                                    : lead.status === "Contacted"
                                    ? "bg-[#d8edfa] text-[#4594c2] dark:bg-blue-500/10 dark:text-blue-400"
                                    : lead.status === "New"
                                    ? "bg-[#eadcf8] text-[#8a5bc2] dark:bg-purple-500/10 dark:text-purple-400"
                                    : lead.status === "Proposal"
                                    ? "bg-[#fde4d5] text-[#df8652] dark:bg-orange-500/10 dark:text-orange-400"
                                    : "bg-[#dcefdc] text-[#57945d] dark:bg-emerald-500/10 dark:text-emerald-400"
                            }
                        `}
                    >
                        {lead.status}
                    </div>


                    {/* Time */}

                    <div
                        className="
                            ml-auto

                            text-[9px]
                            text-theme-text-secondary

                            whitespace-nowrap
                            shrink-0

                            pl-2
                        "
                    >
                        {lead.time}
                    </div>

                </div>

            ))}

        </div>

    );

}


export default RecentLeads;
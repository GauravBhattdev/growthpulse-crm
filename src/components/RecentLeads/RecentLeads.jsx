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
              text-white
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
              text-white
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

              ${lead.status === "Qualified"
                ? "bg-[#d9f1dc] text-[#4d9b5b]"
                : lead.status === "Contacted"
                  ? "bg-[#d8edfa] text-[#4594c2]"
                  : lead.status === "New"
                    ? "bg-[#eadcf8] text-[#8a5bc2]"
                    : lead.status === "Proposal"
                      ? "bg-[#fde4d5] text-[#df8652]"
                      : "bg-[#dcefdc] text-[#57945d]"
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
              text-[#A9A3B5]
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
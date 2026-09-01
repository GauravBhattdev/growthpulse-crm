import React from "react";

const activities = [
  {
    id: 1,
    text: "Him Mostins Call Rahul Sharma",
    time: "2m ago",
    avatar: "RS",
    color: "#42b883"
  },
  {
    id: 2,
    text: "Virele Netkorrie emailed Ankit Verma",
    time: "10m ago",
    avatar: "AV",
    color: "#8b5cf6"
  },
  {
    id: 3,
    text: "Linte Predending updated a lead",
    time: "20m ago",
    avatar: "PS",
    color: "#ef6545"
  },
  {
    id: 4,
    text: "New Lead Priya Singh Added",
    time: "30m ago",
    avatar: "KJ",
    color: "#2196f3"
  },
  {
    id: 5,
    text: "Invoice #INV-1024 Created",
    time: "1h ago",
    avatar: "NM",
    color: "#3b9b62"
  }
];

function RecentActivity() {
  return (
    <div className="w-full min-w-0 overflow-hidden">

      {activities.map((activity) => (

        <div
          key={activity.id}
          className="
            flex
            items-center
            py-3
            border-b
            border-[#3A3448]
            last:border-b-0
            min-w-0
          "
        >

          {/* Avatar */}

          <div
            className="
              w-9
              h-9
              rounded-full
              flex
              items-center
              justify-center
              text-white
              text-xs
              font-semibold
              shrink-0
              mr-3
            "
            style={{
              backgroundColor: activity.color
            }}
          >
            {activity.avatar}
          </div>


          {/* Activity Text */}

          <div
            className="
              flex-1
              min-w-0
              text-sm
              text-white
              truncate
            "
          >
            {activity.text}
          </div>


          {/* Time */}

          <div
            className="
              text-xs
              text-[#A9A3B5]
              ml-3
              whitespace-nowrap
              shrink-0
            "
          >
            {activity.time}
          </div>

        </div>

      ))}

    </div>
  );
}

export default RecentActivity;
import React from "react";

import {
    FileSpreadsheet,
    Webhook,
    Code2,
    MoreVertical
} from "lucide-react";


function ConnectorIcon({ icon }) {

    if (icon === "salesforce") {
        return (
            <div className="
                w-11
                h-11
                rounded-full
                bg-[#e8f7ff]
                flex
                items-center
                justify-center
            ">
                <span className="
                    text-[8px]
                    font-bold
                    text-[#00a1e0]
                ">
                    salesforce
                </span>
            </div>
        );
    }


    if (icon === "hubspot") {
        return (
            <div className="
                w-11
                h-11
                rounded-full
                bg-[#fff1ed]
                flex
                items-center
                justify-center
            ">
                <span className="
                    text-lg
                    font-bold
                    text-[#ff6542]
                ">
                    ●
                </span>
            </div>
        );
    }


    if (icon === "zoho") {
        return (
            <div className="
                w-11
                h-11
                rounded-lg
                bg-white
                flex
                items-center
                justify-center
            ">
                <span className="
                    text-[11px]
                    font-bold
                    text-[#246bff]
                ">
                    ZOHO
                </span>
            </div>
        );
    }


    if (icon === "pipedrive") {
        return (
            <div className="
                w-11
                h-11
                flex
                items-center
                justify-center
            ">
                <span className="
                    text-3xl
                    font-bold
                    text-black
                ">
                    p
                </span>
            </div>
        );
    }


    if (icon === "sheets") {
        return (
            <div className="
                w-11
                h-11
                rounded-md
                bg-green-50
                flex
                items-center
                justify-center
            ">
                <FileSpreadsheet
                    size={28}
                    className="text-green-600"
                />
            </div>
        );
    }


    if (icon === "excel") {
        return (
            <div className="
                w-11
                h-11
                rounded-md
                bg-green-50
                flex
                items-center
                justify-center
            ">
                <span className="
                    text-xl
                    font-bold
                    text-green-700
                ">
                    X
                </span>
            </div>
        );
    }


    if (icon === "webhook") {
        return (
            <div className="
                w-11
                h-11
                rounded-full
                bg-purple-50
                flex
                items-center
                justify-center
            ">
                <Webhook
                    size={27}
                    className="text-purple-600"
                />
            </div>
        );
    }


    if (icon === "api") {
        return (
            <div className="
                w-11
                h-11
                rounded-full
                bg-purple-50
                flex
                items-center
                justify-center
            ">
                <Code2
                    size={25}
                    className="text-purple-600"
                />
            </div>
        );
    }


    return (
        <div className="
            w-11
            h-11
            rounded-full
            bg-gray-100
            flex
            items-center
            justify-center
        ">
            <MoreVertical
                size={23}
                className="text-gray-700"
            />
        </div>
    );
}


export default ConnectorIcon;
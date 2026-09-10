import React from "react";

import {
    HelpCircle,
    MessageCircle,
    Mail,
    BookOpen,
    Search,
    ChevronRight,
    PhoneCall
} from "lucide-react";


function HelpSupport() {

    return (

        <div className="w-full">

            {/* Header */}

            <div>

                <h1 className="text-[27px] font-semibold">
                    Help & Support
                </h1>

                <p className="mt-1 text-[13px] text-gray-600">
                    Find answers, explore guides or contact our support team.
                </p>

            </div>


            {/* Search Area */}

            <div
                className="
                    mt-5
                    bg-[#4b397b]
                    rounded-lg
                    p-7
                    text-center
                "
            >

                <HelpCircle
                    size={35}
                    className="text-white mx-auto"
                />

                <h2 className="text-xl text-white font-semibold mt-3">
                    How can we help you?
                </h2>

                <p className="text-xs text-purple-100 mt-1">
                    Search our knowledge base for quick answers.
                </p>


                <div
                    className="
                        bg-white
                        rounded-md
                        h-11
                        max-w-xl
                        mx-auto
                        mt-5
                        flex items-center
                        px-3
                    "
                >

                    <Search
                        size={18}
                        className="text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search for articles, guides and answers..."
                        className="
                            ml-3
                            w-full
                            outline-none
                            text-sm
                        "
                    />

                </div>

            </div>


            {/* Support Options */}

            <div className="grid grid-cols-3 gap-5 mt-5">


                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        p-5
                        shadow-sm
                        hover:shadow-md
                        transition
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-purple-100
                            text-purple-600
                            flex items-center
                            justify-center
                        "
                    >

                        <BookOpen size={22} />

                    </div>

                    <h3 className="font-semibold mt-4">
                        Knowledge Base
                    </h3>

                    <p className="text-xs text-gray-500 mt-2">
                        Browse helpful articles and detailed guides.
                    </p>

                    <button
                        className="
                            flex items-center
                            gap-2
                            text-purple-600
                            text-xs
                            mt-4
                        "
                    >

                        Explore Articles

                        <ChevronRight size={14} />

                    </button>

                </div>


                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        p-5
                        shadow-sm
                        hover:shadow-md
                        transition
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-blue-100
                            text-blue-600
                            flex items-center
                            justify-center
                        "
                    >

                        <MessageCircle size={22} />

                    </div>

                    <h3 className="font-semibold mt-4">
                        Live Chat
                    </h3>

                    <p className="text-xs text-gray-500 mt-2">
                        Chat directly with our support team.
                    </p>

                    <button
                        className="
                            flex items-center
                            gap-2
                            text-purple-600
                            text-xs
                            mt-4
                        "
                    >

                        Start Chat

                        <ChevronRight size={14} />

                    </button>

                </div>


                <div
                    className="
                        bg-white
                        border border-gray-300
                        rounded-lg
                        p-5
                        shadow-sm
                        hover:shadow-md
                        transition
                    "
                >

                    <div
                        className="
                            w-11 h-11
                            rounded-full
                            bg-green-100
                            text-green-600
                            flex items-center
                            justify-center
                        "
                    >

                        <Mail size={22} />

                    </div>

                    <h3 className="font-semibold mt-4">
                        Email Support
                    </h3>

                    <p className="text-xs text-gray-500 mt-2">
                        Send us your question and we'll respond shortly.
                    </p>

                    <button
                        className="
                            flex items-center
                            gap-2
                            text-purple-600
                            text-xs
                            mt-4
                        "
                    >

                        Contact Support

                        <ChevronRight size={14} />

                    </button>

                </div>

            </div>


            {/* Contact Section */}

            <div
                className="
                    bg-white
                    border border-gray-300
                    rounded-lg
                    shadow-sm
                    mt-5
                    p-6
                "
            >

                <h2 className="text-lg font-semibold">
                    Still need help?
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                    Our support team is available to help you with any issue.
                </p>


                <div className="grid grid-cols-2 gap-5 mt-5">


                    <div
                        className="
                            border
                            rounded-lg
                            p-4
                            flex items-center
                            gap-4
                        "
                    >

                        <PhoneCall
                            size={22}
                            className="text-purple-600"
                        />

                        <div>

                            <p className="text-xs text-gray-500">
                                Phone Support
                            </p>

                            <p className="text-sm font-medium">
                                +91 1800 123 4567
                            </p>

                        </div>

                    </div>


                    <div
                        className="
                            border
                            rounded-lg
                            p-4
                            flex items-center
                            gap-4
                        "
                    >

                        <Mail
                            size={22}
                            className="text-purple-600"
                        />

                        <div>

                            <p className="text-xs text-gray-500">
                                Email
                            </p>

                            <p className="text-sm font-medium">
                                support@growthpulse.com
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default HelpSupport;
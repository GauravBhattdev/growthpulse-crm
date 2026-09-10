import React from "react";

import { useNavigate } from "react-router-dom";

import {
    ArrowLeft,
    Home,
    SearchX,
    CircleDot,
    Sparkles
} from "lucide-react";


function NotFound() {

    const navigate = useNavigate();


    return (

        <div className="
            min-h-screen
            bg-[#151026]
            flex
            items-center
            justify-center
            px-4
            relative
            overflow-hidden
        ">


            {/* ================= BACKGROUND DECORATION ================= */}

            <div className="
                absolute
                w-[450px]
                h-[450px]
                rounded-full
                bg-purple-600/10
                blur-3xl
                -top-32
                -left-32
            " />

            <div className="
                absolute
                w-[400px]
                h-[400px]
                rounded-full
                bg-purple-500/10
                blur-3xl
                -bottom-32
                -right-32
            " />


            {/* Decorative Circle */}

            <div className="
                absolute
                w-[520px]
                h-[520px]
                border
                border-purple-400/10
                rounded-full
            " />

            <div className="
                absolute
                w-[380px]
                h-[380px]
                border
                border-purple-400/10
                rounded-full
            " />


            {/* ================= MAIN CARD ================= */}

            <div className="
                relative
                z-10
                w-full
                max-w-xl
                text-center
                bg-white
                rounded-2xl
                p-7
                sm:p-10
                shadow-2xl
                border
                border-white/10
            ">


                {/* ================= TOP ICON ================= */}

                <div className="
                    flex
                    justify-center
                    mb-5
                ">

                    <div className="
                        relative
                        w-16
                        h-16
                        rounded-full
                        bg-purple-100
                        flex
                        items-center
                        justify-center
                        text-[#8b3df5]
                    ">

                        <SearchX size={30} />

                        <div className="
                            absolute
                            -top-1
                            -right-1
                            w-5
                            h-5
                            rounded-full
                            bg-[#8b3df5]
                            text-white
                            flex
                            items-center
                            justify-center
                        ">

                            <Sparkles size={11} />

                        </div>

                    </div>

                </div>


                {/* ================= 404 ================= */}

                <div className="
                    text-7xl
                    sm:text-8xl
                    font-extrabold
                    tracking-tight
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#8b3df5]
                    to-[#b46cff]
                    leading-none
                ">

                    404

                </div>


                {/* ================= TITLE ================= */}

                <h1 className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-gray-800
                    mt-5
                ">

                    Oops! Page Not Found

                </h1>


                {/* ================= DESCRIPTION ================= */}

                <p className="
                    text-sm
                    sm:text-[15px]
                    text-gray-500
                    mt-3
                    max-w-md
                    mx-auto
                    leading-6
                ">

                    The page you're looking for doesn't exist,
                    has been moved, or the link may be incorrect.

                </p>


                {/* ================= DECORATIVE MESSAGE ================= */}

                <div className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    mt-5
                    text-xs
                    text-gray-400
                ">

                    <CircleDot
                        size={12}
                        className="text-[#8b3df5]"
                    />

                    <span>
                        Don't worry, let's get you back on track.
                    </span>

                </div>


                {/* ================= BUTTONS ================= */}

                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-center
                    gap-3
                    mt-7
                ">


                    {/* GO BACK */}

                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="
                            group
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-6
                            py-2.5
                            border
                            border-gray-300
                            rounded-lg
                            bg-white
                            text-gray-800
                            text-sm
                            font-semibold
                            hover:bg-gray-50
                            hover:border-gray-400
                            transition-all
                            duration-200
                            active:scale-95
                        "
                    >

                        <ArrowLeft
                            size={16}
                            className="
                                group-hover:-translate-x-1
                                transition-transform
                            "
                        />

                        Go Back

                    </button>


                    {/* DASHBOARD */}

                    <button
                        type="button"
                        onClick={() => navigate("/dashboard")}
                        className="
                            group
                            flex
                            items-center
                            justify-center
                            gap-2
                            px-6
                            py-2.5
                            bg-[#8b3df5]
                            text-white
                            rounded-lg
                            text-sm
                            font-semibold
                            shadow-md
                            shadow-purple-500/20
                            hover:bg-[#7630d8]
                            hover:shadow-lg
                            hover:shadow-purple-500/30
                            transition-all
                            duration-200
                            active:scale-95
                        "
                    >

                        <Home
                            size={16}
                            className="
                                group-hover:scale-110
                                transition-transform
                            "
                        />

                        Go to Dashboard

                    </button>

                </div>


                {/* ================= FOOTER ================= */}

                <div className="
                    mt-8
                    pt-5
                    border-t
                    border-gray-100
                    text-[11px]
                    text-gray-400
                ">

                    GrowthPulse CRM

                    <span className="mx-2">
                        •
                    </span>

                    Something went wrong?

                    <span className="
                        text-[#8b3df5]
                        ml-1
                        cursor-pointer
                        hover:underline
                    ">
                        Try again
                    </span>

                </div>

            </div>

        </div>

    );

}


export default NotFound;
import React, { useEffect, useState } from "react";

import {
    Users,
    UserRound,
    Check,
    BriefcaseBusiness,
    TrendingUp
} from "lucide-react";

import StatCard from "../../components/StatCard/StatCard";
import DashboardBox from "../../components/DashboardBox/DashboardBox";
import LeadPipeline from "../../components/LeadPipeline/LeadPipeline";
import LeadsBySource from "../../components/LeadsBySource/LeadsBySource";
import RevenueChart from "../../components/RevenueChart/RevenueChart";
import RecentLeads from "../../components/RecentLeads/RecentLeads";
import RecentActivity from "../../components/RecentActivity/RecentActivity";

import Loader from "../../components/Loader/Loader";


function Dashboard() {

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);


    if (loading) {

        return (
            <div className="min-h-[calc(100vh-66px)] bg-theme-page flex items-center justify-center">
                <Loader text="Loading dashboard..." />
            </div>
        );

    }


    return (

        <div
            className="
                w-full
                min-h-[calc(100vh-66px)]

                bg-theme-page
                text-theme-text

                px-3
                sm:px-4
                lg:px-5

                py-3
                sm:py-4

                transition-colors
                duration-300
            "
        >

            {/* DASHBOARD HEADING */}

            <div>

                <h1 className="m-0 text-[22px] sm:text-[27px] font-semibold text-theme-text">
                    Dashboard
                </h1>

                <p className="mt-[5px] mb-[14px] sm:mb-[18px] text-[12px] sm:text-[13px] text-theme-text-secondary">
                    Welcome Back, Admin! Here's what's happening today.
                </p>

            </div>


            {/* STATISTICS CARDS */}

            <div
                className="
                    w-full
                    grid
                    grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-5
                    gap-3 sm:gap-4
                    items-stretch
                "
            >

                <StatCard
                    icon={<Users size={18} />}
                    title="Total Leads"
                    value="1,248"
                    percentage="12.5%"
                />

                <StatCard
                    icon={<UserRound size={18} />}
                    title="New Leads"
                    value="320"
                    percentage="8.4%"
                />

                <StatCard
                    icon={<Check size={18} />}
                    title="Qualified Leads"
                    value="348"
                    percentage="12.5%"
                />

                <StatCard
                    icon={<BriefcaseBusiness size={18} />}
                    title="Revenue"
                    value="₹ 8.45L"
                    percentage="18.6%"
                />

                <StatCard
                    icon={<TrendingUp size={18} />}
                    title="Conversion Lead"
                    value="31.4%"
                    percentage="4.8%"
                />

            </div>


            {/* CHARTS */}

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    xl:grid-cols-3
                    gap-4
                    mt-4
                "
            >

                <DashboardBox title="Lead Pipeline">
                    <LeadPipeline />
                </DashboardBox>

                <DashboardBox title="Leads by Source">
                    <LeadsBySource />
                </DashboardBox>

                <DashboardBox title="Revenue Overview">
                    <RevenueChart />
                </DashboardBox>

            </div>


            {/* RECENT SECTIONS */}

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-4
                    mt-4
                "
            >

                <DashboardBox title="Recent leads">
                    <RecentLeads />
                </DashboardBox>

                <DashboardBox title="Recent Activities">
                    <RecentActivity />
                </DashboardBox>

            </div>

        </div>

    );

}


export default Dashboard;
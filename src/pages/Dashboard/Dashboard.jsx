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

            <div className="
                min-h-screen
                bg-[#120d20]
                flex
                items-center
                justify-center
            ">

                <Loader text="Loading dashboard..." />

            </div>

        );

    }


    return (

        <div className="px-2 py-[18px] bg-[#120d20] min-h-screen">

            {/* Dashboard Heading */}

            <div>

                <h1 className="m-0 text-[27px] font-semibold text-white">
                    Dashboard
                </h1>

                <p className="mt-[5px] mb-[18px] text-[13px] text-[#D1CDD8]">
                    Welcome Back, Admin! Here's what's happening today.
                </p>

            </div>


            {/* Statistics Cards */}

            <div className="
                w-full
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-5
                gap-4
                items-stretch
            ">

                <StatCard
                    icon={<Users size={22} />}
                    title="Total Leads"
                    value="1,248"
                    percentage="12.5%"
                />

                <StatCard
                    icon={<UserRound size={22} />}
                    title="New Leads"
                    value="320"
                    percentage="8.4%"
                />

                <StatCard
                    icon={<Check size={22} />}
                    title="Qualified Leads"
                    value="348"
                    percentage="12.5%"
                />

                <StatCard
                    icon={<BriefcaseBusiness size={22} />}
                    title="Revenue"
                    value="₹ 8.45L"
                    percentage="18.6%"
                />

                <StatCard
                    icon={<TrendingUp size={22} />}
                    title="Conversion Lead"
                    value="31.4%"
                    percentage="4.8%"
                />

            </div>


            {/* Charts */}

            <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-3
                gap-4
                mt-[18px]
            ">

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


            {/* Recent Sections */}

            <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-4
                mt-[18px]
            ">

                <DashboardBox title="Recent leads">
                    <RecentLeads />
                </DashboardBox>

                <DashboardBox title="Recent Activity">
                    <RecentActivity />
                </DashboardBox>

            </div>

        </div>

    );

}

export default Dashboard;
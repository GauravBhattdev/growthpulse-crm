import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Teams from "./pages/Teams/Teams";
import TeamMember from "./pages/TeamMember/TeamMember";
import Leads from "./pages/Leads/Leads";
import Invoice from "./pages/Invoice/Invoice";
import CreateInvoice from "./pages/createInvoice/createInvoice";
import Billing from "./pages/Billing/Billing";
import SupportTickets from "./pages/SupportTickets/SupportTickets";
import Calling from "./pages/Calling/Calling";
import Organisation from "./pages/Organisation/Organisation";
import Settings from "./pages/Settings/Settings";
import HelpSupport from "./pages/HelpSupport/HelpSupport";
import CreateLead from "./pages/CreateLead/createLead";
import NotFound from "./pages/NotFound/NotFound";

// Layout
import MainLayout from "./components/MainLayout/MainLayout";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* ================= DEFAULT ================= */}

        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />


        {/* ================= DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />


        {/* ================= TEAMS ================= */}

        <Route
          path="/teams"
          element={
            <MainLayout>
              <Teams />
            </MainLayout>
          }
        />


        {/* ================= TEAM MEMBERS ================= */}

        <Route
          path="/team-member"
          element={
            <MainLayout>
              <TeamMember />
            </MainLayout>
          }
        />


        {/* ================= LEADS ================= */}

        <Route
          path="/leads"
          element={
            <MainLayout>
              <Leads />
            </MainLayout>
          }
        />


        {/* ================= INVOICES ================= */}

        <Route
          path="/invoice"
          element={
            <MainLayout>
              <Invoice />
            </MainLayout>
          }
        />


        {/* ================= CREATE INVOICE ================= */}

        <Route
          path="/create-invoice"
          element={
            <MainLayout>
              <CreateInvoice />
            </MainLayout>
          }
        />


        {/* ================= BILLING ================= */}

        <Route
          path="/billing"
          element={
            <MainLayout>
              <Billing />
            </MainLayout>
          }
        />


        {/* ================= SUPPORT TICKETS ================= */}

        <Route
          path="/support-tickets"
          element={
            <MainLayout>
              <SupportTickets />
            </MainLayout>
          }
        />


        {/* ================= CALLING ================= */}

        <Route
          path="/calling"
          element={
            <MainLayout>
              <Calling />
            </MainLayout>
          }
        />


        {/* ================= ORGANISATION ================= */}

        <Route
          path="/organisation"
          element={
            <MainLayout>
              <Organisation />
            </MainLayout>
          }
        />


        {/* ================= SETTINGS ================= */}

        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />


        {/* ================= HELP SUPPORT ================= */}

        <Route
          path="/help-support"
          element={
            <MainLayout>
              <HelpSupport />
            </MainLayout>
          }
        />


        {/* ================= CREATE LEAD ================= */}

        <Route
          path="/create-lead"
          element={
            <MainLayout>
              <CreateLead />
            </MainLayout>
          }
        />


        {/* ================= 404 PAGE ================= */}

        <Route
          path="*"
          element={
            <NotFound />
          }
        />


      </Routes>

    </BrowserRouter>

  );

}


export default App;
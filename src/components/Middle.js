import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminCreation } from "../pages/AdminCreation";
import { KeyManagement } from "../pages/KeyManagement";
import { DashBoard } from "../pages/DashBoard";
import { ThirtPartyManagement } from "../pages/ThirdPartyManagement";
import { ClientManagement } from "../pages/ClientManagement";
import { InvestorManagement } from "../pages/InvestorManagement";

export const Middle = () => {
  return (
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/admincreation" element={<AdminCreation />} />
          <Route path="/clientmanagement" element={<ClientManagement />} />
          <Route path="/investormanagement" element={<InvestorManagement />} />
          <Route path="/keymanagement" element={<KeyManagement />} />
          <Route path="/thirdpartymanagement" element={<ThirtPartyManagement />} />
        </Routes>
  );
};

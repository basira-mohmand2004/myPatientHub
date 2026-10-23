import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Appointment from "../pages/appointment/Appointment";
import Clinic from "../pages/clinic";
import Chat from "../pages/chat/Chat";
import Patients from "../pages/patients/Patients";
import Settings from "../pages/settings/Settings";
import MarketPlace from "../pages/marketPlace";
import PharmacyPlace from "../pages/pharmacy/PharmacyPlace";
import Layout from "../components/layouts/Layout";
import MyDependents from "../pages/myDependents";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/appointment"
          element={<Appointment />}
        />

        <Route
          path="/chat"
          element={<Chat />}
        />

        <Route
          path="/marketplace"
          element={
            <Layout>
              <MarketPlace />
            </Layout>
          }
        />

        <Route
          path="/pharmacy"
          element={
            <Layout>
              <PharmacyPlace />
            </Layout>
          }
        />

        <Route
          path="/findhospital"
          element={
            <Layout>
              <Clinic />
            </Layout>
          }
        />

        <Route
          path="/searchdoctor"
          element={
            <Layout>
              <Patients />
            </Layout>
          }
        />

        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

        <Route
          path="/dependents"
          element={
            <Layout>
              <MyDependents />
            </Layout>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
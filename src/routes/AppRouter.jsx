import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Appointment from "../pages/appointment/Appointment";
import Clinic from "../pages/clinic";
import Chat from "../pages/chat/Chat";
import Patients from "../pages/patients/Patients";
import FindDoctor from "../pages/patients/FindDoctor";
import DoctorProfileView from "../pages/patients/DoctorProfileView";
import DoctorResult from "../pages/patients/DoctorResult";
import AppointmentDetails from "../pages/patients/AppointmentDetails";
import AppointmentSuccess from "../pages/patients/AppointmentSuccess";
import PatientInformation from "../pages/patients/PatientInformation";
import Settings from "../pages/settings/Settings";
import MarketPlace from "../pages/marketPlace";
import PharmacyPlace from "../pages/pharmacy/PharmacyPlace";
import Layout from "../components/layouts/Layout";
import Layout2 from "../components/layouts/Layout2";
import MyDependents from "../pages/myDependents";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/chat" element={<Chat />} />

        <Route
          path="/marketplace"
          element={<Layout><MarketPlace /></Layout>}
        />
        <Route
          path="/pharmacy"
          element={<Layout><PharmacyPlace /></Layout>}
        />
        <Route
          path="/findhospital"
          element={<Layout><Clinic /></Layout>}
        />
       <Route
  path="/searchdoctor"
  element={<Patients />}
/>
        <Route
          path="/settings"
          element={<Layout><Settings /></Layout>}
        />
        <Route
          path="/dependents"
          element={<Layout><MyDependents /></Layout>}
        />

        {/* صفحات آزاده با یک سایدبار */}
        <Route
          path="/finddoctor"
          element={<Layout2 crumb="Find Doctor"><FindDoctor /></Layout2>}
        />
        <Route
          path="/doctor-results"
          element={<Layout2 crumb="Search Results"><DoctorResult /></Layout2>}
        />
        <Route
          path="/doctor/:id"
          element={<Layout2 crumb="Doctor Profile"><DoctorProfileView /></Layout2>}
        />
        <Route
          path="/appointment-details"
          element={<Layout2 crumb="Appointment Details"><AppointmentDetails /></Layout2>}
        />
        <Route
          path="/patient-information"
          element={<Layout2 crumb="Patient Information"><PatientInformation /></Layout2>}
        />
        <Route
          path="/appointment-success"
          element={<Layout2 crumb="Appointment Scheduled"><AppointmentSuccess /></Layout2>}
        />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
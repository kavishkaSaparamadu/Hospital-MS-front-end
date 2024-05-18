import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Home from "../pages/home";
import About from "../pages/about";
import Faqs from "../pages/faqs";
import Contact from "../pages/contact";
// import AdminLogin from "../Admin/adminLogin";
// import AdminLayout from "../components/layouts/AdminLayout";
import Dashboard from "../Admin/dashboard";
import DoctorDashboard from "../Doctor/doctorDashboard";
import ScheduleAppoment from "../Doctor/ScheduleAppoment";
import PateintList from "../Doctor/pateintList";
import DoctorLayout from "../components/layouts/doctorLayout";
import Channeling from "../pages/Channeling";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/userProfile";
import RegisterPateion from "../Admin/RegisterPateion";
import AdminAppointment from "../Admin/Appointment";
import PatientDashboard from "../Patient/PatientDashboard";
import PatientFeedback from "../Patient/PatientFeedback";
import PatientHistory from "../Patient/PatientHistory";
import PatientAppointment from "../Patient/PatientAppointment";
import Login from "../pages/Login/Login";
import PatientLayout from "../components/layouts/patientLayout";

const Routers = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chanelling" element={<Channeling />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Route>

      {/* <Route path="/admin/login" element={<AdminLogin />} />
      
        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} /> */}

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/registerPateion" element={<RegisterPateion />} />
        <Route path="/admin/appointment" element={<AdminAppointment />} />
     

      <Route path="/doctor" element={<DoctorLayout />}>
        <Route path="/doctor" element={<Navigate to="/doctor/dashboard" />} />

        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/schedule" element={<ScheduleAppoment />} />
        <Route path="/doctor/pateinlist" element={<PateintList />} />
      </Route>

      <Route path="/patient" element={<PatientLayout/>}></Route>
      <Route
        path="/patient"
        element={<Navigate to="/patient/patientDashboard" />}
      />

      <Route path="/patient/patientDashboard" element={<PatientDashboard />} />
      <Route path="/patient/appointment" element={<PatientAppointment />} />
      <Route path="/patient/feedback" element={<PatientFeedback />} />
      <Route path="/patient/history" element={<PatientHistory />} />
    </Routes>
  );
};

export default Routers;

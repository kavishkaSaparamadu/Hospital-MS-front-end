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
import Appointment from "../Doctor/Appointment";
import Finance from "../Doctor/Finance";
import Channeling from "../pages/Channeling";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/userProfile";
import RegisterPateion from "../Admin/RegisterPateion";
import AdminAppointment from "../Admin/Appointment";
import PatientDashboard from "../Patient/PatientDashboard";
import PatientFeedback from "../Patient/PatientFeedback";
import PatientHistory from "../Patient/PatientHistory";
import PatientAppointment from "../Patient/PatientAppointment";
import Login from "../pages/Login/Login"
import PharmacistDashboard from "../Pharmacist/Dashboard";
import PharmacistProfile from "../Pharmacist/profile";
import DoctorProfile from "../Doctor/Profile";
import PatientProfile from "../Patient/Profile";
import AdminProfile from "../Admin/profile";
import ApplyDoctor from "../Doctor/ApplyDoctor";
import AdminNotifications from "../Admin/AdminNotifications";
import DoctorNotifications from "../Doctor/doctorNotification";
import PatientNotifications from "../Patient/patientNotification";
import PharmacyNotifications from "../Pharmacist/PharmacryNotification";
// import PatientLayout from "../components/layouts/patientLayout";

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
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path ="/admin/notifications" element={<AdminNotifications/>} />
      

        <Route path="/doctor/doctorDashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/appointment" element={<Appointment/>} />
        <Route path="/Doctor/ApplyDoctor" element={<ApplyDoctor/>} />
        <Route path="/doctor/finance" element={<Finance />} />
        <Route path="/doctor/profile" element={<DoctorProfile/>} />
        <Route path="/doctor/notifications" element={<DoctorNotifications/>} />
      {/* <Route path="/patient" element={<PatientLayout />}></Route> */}
      {/* <Route
        path="/patient"
        element={<Navigate to="/patient/patientDashboard" />}
      /> */}

      <Route path="/patient/patientDashboard" element={<PatientDashboard />} />
      <Route path="/patient/appointment" element={<PatientAppointment />} />
      <Route path="/patient/feedback" element={<PatientFeedback />} />
      <Route path="/patient/history" element={<PatientHistory />} />
      <Route path="/patient/profile" element={<PatientProfile/>} />
      <Route path="/patient/notifications" element={<PatientNotifications/>} />

    <Route path="/pharmacist/Dashboard" element={<PharmacistDashboard/>} />
    <Route path="/pharmacist/profile" element={<PharmacistProfile/>} />
    <Route path="/pharmacist/notifications" element={< PharmacyNotifications/>} />

</Routes>
  );
};

export default Routers;

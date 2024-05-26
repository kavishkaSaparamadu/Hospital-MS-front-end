import React from "react";
import MainLayout from "../components/layouts/MainLayout";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/patient/patientDashboard" },
  { title: "PateintAppointments", path: "/patient/appointment" },
  { title: "Feedback", path: "/patient/feedback" },
  { title: "History", path: "/patient/history" },

];
const  PatientFeedback= () => {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        
      </MainLayout>
    </div>
  )
}

export default PatientFeedback
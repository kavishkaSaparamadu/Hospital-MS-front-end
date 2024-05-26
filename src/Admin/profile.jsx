import React from 'react'
import MainLayout from "../components/layouts/MainLayout";

const sideNavBarLinks = [
    { title: "Dashboard", path: "/Admin/dashboard" },
    { title: "Appointments", path: "/Admin/Appointment" },
    { title: "Patients", path: "/Admin/RegisterPateion" },
  ];
const profile = () => {
  return (
    <div>
         <MainLayout data={sideNavBarLinks}>
        
        </MainLayout>
    </div>
  )
}

export default profile
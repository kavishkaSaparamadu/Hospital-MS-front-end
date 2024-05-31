import React from 'react'
import MainLayout from "../components/layouts/MainLayout";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/Doctor/doctorDashboard" },
  { title: "Appointments", path: "/Doctor/Appointment" },
  { title: "Apply Doctor", path: "/Doctor/ApplyDoctor" },
  { title: "Finance", path: "/Doctor/Finance" },
  ];
  
const Finance = () => {
  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
      </MainLayout>
    </div>
  )
}

export default Finance
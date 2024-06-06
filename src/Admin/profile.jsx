import React from 'react'
import MainLayout from "../components/layouts/MainLayout";

const sideNavBarLinks = [
    { title: "Dashboard", path: "/admin/dashboard" },
    { title: "Appointments", path: "/admin/appointment" },
    { title: "Patients", path: "/admin/registerPatient" },
    { title: "Doctors", path: "/admin/registerDoctor" },

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
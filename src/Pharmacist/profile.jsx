import React from 'react'
import MainLayout from "../components/layouts/MainLayout";


const sideNavBarLinks = [
    { title: "Dashboard", path: "/pharmacist/dashboard" },
    { title: "Prescriptions", path: "/paharmacist/user/prescription" }, // Ensure the path is correct

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
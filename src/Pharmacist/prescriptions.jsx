import React from 'react'
import MainLayout from "../components/layouts/MainLayout";


const sideNavBarLinks = [
    { title: "Dashboard", path: "/pharmacist/Dashboard" },
    {title: " Prescriptions", path: "/paharmacist/user/prescriptions" },
];


function Prescription() {
  return (
    <div>
<MainLayout data={sideNavBarLinks}>
        ieoieuowee
        </MainLayout>

    </div>
  )
}

export default Prescription
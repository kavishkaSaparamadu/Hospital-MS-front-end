import React from 'react'
import MainLayout from "../components/layouts/MainLayout";


const sideNavBarLinks = [
    { title: "Dashboard", path: "/pharmacist/Dashboard" },
    {title: " Prescriptions", path: "/paharan/prescriptions" },
];


function Dashboard() {
  return (
    <div>
<MainLayout data={sideNavBarLinks}>
        
        </MainLayout>

    </div>
  )
}

export default Dashboard
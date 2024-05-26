import React from 'react'
import MainLayout from "../components/layouts/MainLayout";


const sideNavBarLinks = [
    { title: "Dashboard", path: "/pharmacist/Dashboard" },
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
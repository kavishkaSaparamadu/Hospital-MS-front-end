import React from 'react'
import Header from '../Header/Header'
import SideBAr from '../DoctorCoponent/SideBar/SideBAr'
import { Outlet } from 'react-router-dom'

const DoctorLayout = () => {
  return (
    <div>
        <Header/>
    <div>
    <SideBAr/>
    <Outlet/>
    </div>
    </div>
    
  )
}

export default DoctorLayout
import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import SideBar from '../patientComponent/sideBar/sideBar'

const PatientLayout = () => {
  return (
    <div>
        <Header/>
        <div style={{display:'flex'}}/>
      
    <div>
    <SideBar/>
    <Outlet/>
    </div>
    </div>
    
  )
}

export default PatientLayout
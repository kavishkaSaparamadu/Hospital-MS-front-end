import React from 'react'
import Header from '../Header/Header'
import SideNavBar from '../NavBar/SideNavBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        {/* <Header/> */}
        <div style={{display:'flex'}}>
          
          <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout
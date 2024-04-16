import React from 'react'
import Header from '../Header/Header'
import SideBar from '../adminComponents/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <Header/>
        <div>
          <SideBar/>
          <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout
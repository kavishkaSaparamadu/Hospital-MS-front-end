import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Home from '../pages/home'
import About from '../pages/about'
import Faqs from '../pages/faqs'
import Contact from '../pages/contact'
import AdminLogin from '../Admin/adminLogin'
import AdminLayout from '../components/layouts/AdminLayout'
import ManageAppoiment from '../Admin/manageAppoiment'
import Dashboard from '../Admin/dashboard'
import AddPetint from '../Admin/addPetint'
import ForgotPassword from '../pages/Login/FogetPassword'

const Routers = () => {
  return (
    <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Navigate to="/home" />}/>

                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faqs" element={<Faqs/>}/>
                <Route path="/contact" element={<Contact/>}/>   
                <Route path="/login" element={<ForgotPassword/>}/>
               
               
               
            </Route>

            <Route path="/admin/login" element={<AdminLogin/>}/>
            <Route path="/admin" element={<AdminLayout/>}>
            <Route path="/admin" element={<Navigate to="/admin/dashboard"/>}/>


            <Route path="/admin/dashboard" element={<Dashboard/>}/>
            <Route path="/admin/manageAppoiment" element={<ManageAppoiment/>}/>
            <Route path="/admin/addPetint" element={<AddPetint/>}/>
        

              </Route>


    </Routes>
  )
}

export default Routers
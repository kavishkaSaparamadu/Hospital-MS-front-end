import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Home from '../pages/home'
import About from '../pages/about'
import Faqs from '../pages/faqs'
import Contact from '../pages/contact'
import AdminLogin from '../Admin/adminLogin'
import AdminLayout from '../components/layouts/AdminLayout'
import Dashboard from '../Admin/dashboard'
import ForgotPassword from '../pages/Login/FogetPassword'
import DoctorDashboard from '../Doctor/doctorDashboard'
import ScheduleAppoment from '../Doctor/ScheduleAppoment'
import PateintList from '../Doctor/pateintList'
import DoctorLayout from '../components/layouts/doctorLayout'
import DoctorLogin from '../Doctor/DoctorLogin'
import Channeling from '../pages/Channeling'
import Register from '../pages/Register/Register'
import PateinLayout from '../components/layouts/pateinLayout'
import UserProfile from '../pages/userProfile'
import RegisterPateion from '../Admin/RegisterPateion'
import Appoiment from '../Admin/Appoiment'


const Routers = () => {
  return (
    <Routes>
            <Route path="/login" element={<PateinLayout/>}></Route>
            <Route path="/" element={<Navigate to="/login" />}/>
            <Route path="/" element={<Layout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/chanelling" element={<Channeling/>}/>
                <Route path="/faqs" element={<Faqs/>}/>
                <Route path="/contact" element={<Contact/>}/>   
                <Route path="/login" element={<ForgotPassword/>}/>
               <Route path="/register" element={<Register/>}/>  
               <Route path="/userProfile" element={<UserProfile/>}/>           

            </Route>

            <Route path="/admin/login" element={<AdminLogin/>}/>
            <Route path="/admin" element={<AdminLayout/>}>
            <Route path="/admin" element={<Navigate to="/admin/dashboard"/>}/>
        

            <Route path="/admin/dashboard" element={<Dashboard/>}/>
            <Route path="/admin/registerPateion" element={<RegisterPateion/>}/>
            <Route path="/admin/appoiment" element={<Appoiment/>}/>
        
              </Route>

             <Route path="/doctor/login" element={<DoctorLogin/>}/>
            <Route path="/doctor" element={<DoctorLayout/>}>
            <Route path="/doctor" element={<Navigate to="/doctor/dashboard"/>}/>

              <Route path="/doctor/dashboard" element={<DoctorDashboard/>}/>
            <Route path="/doctor/schedule" element={<ScheduleAppoment/>}/>
            <Route path="/doctor/pateinlist" element={<PateintList/>}/>
        

              </Route>

              



    </Routes>
  )
}

export default Routers
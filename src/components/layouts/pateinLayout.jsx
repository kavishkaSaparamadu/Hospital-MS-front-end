import React from 'react'
import { Outlet } from 'react-router-dom'
import FogetPassword from '../../pages/Login/FogetPassword'

const PateinLayout = () => {
  return (
    <div>
        
    <div>
    <FogetPassword/>
    <Outlet/>
    </div>
    </div>
    
  )
}

export default PateinLayout
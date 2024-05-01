import React from 'react'
import UserProfile from '../../pages/userProfile'
import { Outlet } from 'react-router-dom'

const UserProfileLayout = () => {
  return (
    <div>

<UserProfile/>
<Outlet/>

    </div>
  )
}

export default UserProfileLayout
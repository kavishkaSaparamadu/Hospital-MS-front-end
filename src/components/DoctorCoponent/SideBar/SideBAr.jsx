import React from 'react'
import { Link } from 'react-router-dom';
import icon from '../../../Images/homepage.png'
const SideBAr = () => {
  return (

    <div className="bg-gray-900 text-white h-screen w-64 flex flex-col justify-between">
    {/* Admin Profile Section */}
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Doctor Dashboard</h2>
      <div className="flex items-center space-x-4">
        <img
          src={icon} // Replace with your admin's profile image URL
          alt="Admin Profile"
          className="h-12 w-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">Doctor Name</h3>
          <p className="text-sm">Role: Doctor</p>
        </div>
      </div>
    </div>
    
    {/* Navigation Links */}
    <nav className="space-y-4">
      <a href ="/doctor/dashboard" className="block px-5 py-2 text-white hover:bg-gray-800">Dashboard</a>
      <a href="/admin/registerPateion" className= "block px-5 py-2 text-white hover:bg-gray-800">Schedule Appoiment </a>
      <a href ="/doctor/pateinlist" className="block px-5 py-2 text-white hover:bg-gray-800">Pateint List</a>
      </nav>
    
    {/* Logout Button */}
    <div className="p-4">
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full">Logout</button>
    </div>
  </div>

  );
}

export default SideBAr
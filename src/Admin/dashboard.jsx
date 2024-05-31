import React from "react";
import MainLayout from "../components/layouts/MainLayout";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/Admin/dashboard" },
    { title: "Appointments", path: "/Admin/Appointment" },
    { title: "Patients", path: "/Admin/RegisterPateion" },
  ];
const Dashboard = () => {
  return (
    <div>
      
      <MainLayout data={sideNavBarLinks}>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-950">Admin Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Patients Card */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-950 mb-2">Patients</h2>
            <p className="text-gray-700">Total Patients: 120</p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
          {/* Today's Appointments Card */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-950 mb-2">Today's Appointments</h2>
            <p className="text-gray-700">Total Appointments: 15</p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
          {/* Other Section Card */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-950 mb-2">Other Section</h2>
            <p className="text-gray-700">Details about other section</p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
  
      </MainLayout>
    </div>
  )
}

export default Dashboard
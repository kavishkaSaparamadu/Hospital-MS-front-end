import React from "react";
import MainLayout from "../components/layouts/MainLayout";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/patient/patientDashboard" },
  { title: "PateintAppointments", path: "/patient/appointment" },
  { title: "Feedback", path: "/patient/feedback" },
  { title: "History", path: "/patient/history" },

];
const  PatientDashboard = () => {
  
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-950">Patient Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Payment Details Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
            {/* Include payment details component here */}
            <p>Payment details component goes here...</p>
          </div>

          {/* Other Sections */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Other Section 1</h2>
            {/* Include other component here */}
            <p>Other component goes here...</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Other Section 2</h2>
            {/* Include other component here */}
            <p>Other component goes here...</p>
          </div>
        </div>
      </div>
      
      </MainLayout>
    </div>
  )
}
export default PatientDashboard
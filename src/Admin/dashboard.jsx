import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <div>
      <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Total Appointments</h3>
          <p className="text-3xl font-bold">250</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Total Patients</h3>
          <p className="text-3xl font-bold">150</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Total Doctors</h3>
          <p className="text-3xl font-bold">50</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold">$25,000</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
        <ul>
          <li className="flex items-center justify-between py-2 border-b">
            <span>Dr. Smith added a new appointment for John Doe</span>
          </li>
          <li className="flex items-center justify-between py-2 border-b">
            <span>Dr. Johnson updated patient records</span>
          </li>
          <li className="flex items-center justify-between py-2 border-b">
            <span>New patient registration: Jane Smith</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
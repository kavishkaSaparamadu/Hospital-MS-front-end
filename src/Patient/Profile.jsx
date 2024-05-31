import React, { useState } from 'react';
import MainLayout from "../components/layouts/MainLayout";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/patient/patientDashboard" },
  { title: "Appointments", path: "/patient/appointment" },
  { title: "Feedback", path: "/patient/feedback" },
  { title: "History", path: "/patient/history" },
];

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bloodGroup: '',
    age: '',
    currentMedications: '',
    otherChannelDoctors: '',
    allergies: '',
    otherConsiderations: '',
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Blood Group</option>
              {bloodGroups.map((group, index) => (
                <option key={index} value={group}>{group}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Current Medications</label>
            <input
              type="text"
              name="currentMedications"
              value={formData.currentMedications}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Other Channel Doctors</label>
            <input
              type="text"
              name="otherChannelDoctors"
              value={formData.otherChannelDoctors}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Allergies</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
         
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

export default Profile;

import React, { useState } from 'react';
import axios from 'axios';
import MainLayout from "../components/layouts/MainLayout";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/doctor/doctorDashboard" },
  { title: "Appointments", path: "/doctor/appointment" },
  { title: "Apply Doctor", path: "/Doctor/applyDoctor" },
  {title:"Prescription", path:"/doctor/prescriptions" },
  { title: "Finance", path: "/Doctor/Finance" },
];

const Prescription = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    allergies: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  const { patientName, doctorName, allergies, description } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/doc/prescription', {
        patientName,
        doctorName,
        allergies,
        description
      });

      console.log(res.data); // handle success response
      setMessage('Prescription Sent Successfully');
    } catch (err) {
      console.error(err.response.data); // handle error response
      setMessage('Something went wrong');
    }
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="min-h-screen flex items-center justify-center bg-dark-blue-900 p-6">
        <div className="bg-dark-blue-800 text-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-black">Prescription Form</h2>
          {message && <div className={message.includes('Success') ? 'text-green-500' : 'text-red-500'}>{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-black" htmlFor="patientName">Patient Name</label>
              <input
                className="w-full px-3 py-2 bg-dark-blue-700 text-black border border-dark-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="text"
                id="patientName"
                name="patientName"
                value={patientName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-black" htmlFor="doctorName">Doctor Name</label>
              <input
                className="w-full px-3 py-2 bg-dark-blue-700 text-black border border-dark-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="text"
                id="doctorName"
                name="doctorName"
                value={doctorName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-black" htmlFor="allergies">Allergies</label>
              <input
                className="w-full px-3 py-2 bg-dark-blue-700 text-black border border-dark-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="text"
                id="allergies"
                name="allergies"
                value={allergies}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-black" htmlFor="description">Description</label>
              <textarea
                className="w-full px-3 py-2 bg-dark-blue-700 text-black border border-dark-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                id="description"
                name="description"
                rows="4"
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              className="w-full py-2 bg-yellow-600 text-dark-blue-900 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Prescription;

import React, { useEffect, useState } from 'react';
import MainLayout from "../components/layouts/MainLayout";
import axios from 'axios';

const sideNavBarLinks = [
    { title: "Dashboard", path: "/pharmacist/dashboard" },
    { title: "Prescriptions", path: "/paharmacist/user/prescription" },
];

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doc/prescriptions');
      setPrescriptions(response.data);
    } catch (error) {
      console.error("Error fetching prescriptions:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/doc/prescriptions/${id}`);
      setPrescriptions(prescriptions.filter(prescription => prescription._id !== id));
    } catch (error) {
      console.error("Error deleting prescription:", error);
    }
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {prescriptions.map((prescription, index) => (
          <div key={prescription._id} className="bg-white shadow-lg rounded-md p-4">
            <h2 className="text-xl font-bold mb-2">Prescription {index + 1}</h2>
            <p><strong>Patient Name:</strong> {prescription.patientName}</p>
            <p><strong>Doctor Name:</strong> {prescription.doctorName}</p>
            <p><strong>Allergies:</strong> {prescription.allergies}</p>
            <p><strong>Description:</strong> {prescription.description}</p>
            <p><strong>Date:</strong> {new Date(prescription.createdAt).toLocaleDateString()}</p>
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => handleDelete(prescription._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Prescription;

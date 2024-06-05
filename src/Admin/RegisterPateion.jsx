import React, { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/Admin/dashboard" },
  { title: "Appointments", path: "/Admin/Appointment" },
  { title: "Patients", path: "/admin/registerPatient" },
  { title: "Doctors", path: "/admin/registerDoctor" },

];

const RegisterPatient = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch all patients when component mounts
    axios.get("http://localhost:5000/api/patients/profiles")
      .then(response => {
        // Set the patients state with the data received
        setPatients(response.data);
      })
      .catch(error => {
        console.error("Error fetching patients:", error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="py-12">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-blue-950">All Patients</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium bg-blue-950 text-cyan-50 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium bg-blue-950 text-cyan-50 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium bg-blue-950 text-cyan-50 uppercase tracking-wider">Blood Group</th>
                    <th className="px-6 py-3 text-left text-xs font-medium bg-blue-950 text-cyan-50 uppercase tracking-wider">Medicin Details</th>
                    <th className="px-6 py-3 text-left text-xs font-medium bg-blue-950 text-cyan-50 uppercase tracking-wider">Age</th>

                    {/* Add more headers for other patient details if needed */}
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {patients.map(patient => (
                    <tr key={patient._id}>
                      <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{patient.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{patient.bloodGroup}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{patient.currentMedications}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
                      {/* Add more td elements for other patient details if needed */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPatient;

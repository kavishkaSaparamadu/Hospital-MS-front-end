import React, { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/Admin/dashboard" },
  { title: "Appointments", path: "/Admin/Appointment" },
  { title: "Patients", path: "/admin/registerPatient" },
  { title: "Doctors", path: "/admin/registerDoctor" },

];

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/patient/appointments");
      setAppointments(response.data.appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">All Appointments</h2>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-2">Doctor Name</th>
                  <th className="px-4 py-2">Selected Date</th>
                  <th className="px-4 py-2">Patient Name</th>
                  <th className="px-4 py-2">User Diseases</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {appointments.map((appointment) => (
                  <tr key={appointment._id} className="border-b border-gray-200">
                    <td className="px-4 py-2">{appointment.doctorName}</td>
                    <td className="px-4 py-2">{appointment.selectedDate}</td>
                    <td className="px-4 py-2">{appointment.patientName}</td>
                    <td className="px-4 py-2">{appointment.userDiseases}</td>
                    <td className="px-4 py-2">{appointment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Appointment;

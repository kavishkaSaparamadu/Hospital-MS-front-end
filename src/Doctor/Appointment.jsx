import React, { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";
import moment from 'moment';
import 'tailwindcss/tailwind.css';

const sideNavBarLinks = [
  { title: "Dashboard", path: "/doctor/doctorDashboard" },
  { title: "Appointments", path: "/doctor/appointment" },
  { title: "Apply Doctor", path: "/Doctor/applyDoctor" },
  { title: "Prescription", path: "/doctor/prescriptions" },
  { title: "Finance", path: "/doctor/finance" },
];

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [approvedAppointments, setApprovedAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchAppointments();
    fetchApprovedAppointments();
    fetchPatientDetails();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/patient/appointments");
      if (response.data.success) {
        setAppointments(response.data.appointments);
      } else {
        console.error("Failed to fetch appointments:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
    setLoading(false);
  };

  const fetchApprovedAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/patient/appointments/approved");
      if (response.data.success) {
        setApprovedAppointments(response.data.approvedAppointments);
      } else {
        console.error("Failed to fetch approved appointments:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching approved appointments:", error);
    }
    setLoading(false);
  };

  const fetchPatientDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/patients/profiles");
      if (response.data.success) {
        setPatients(response.data.patients);
      } else {
        console.error("Failed to fetch Patients:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching Patients:", error);
    }
    setLoading(false);
  };

  const handleApprove = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/patient/appointment/approve/${id}`);
      fetchAppointments();
      fetchApprovedAppointments();
    } catch (error) {
      console.error("Failed to approve appointment:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/patient/appointment/reject/${id}`);
      fetchAppointments();
      fetchApprovedAppointments();
    } catch (error) {
      console.error("Failed to reject appointment:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/patient/appoiments/${id}`);
      setAppointments(appointments.filter((appointment) => appointment._id !== id));
      setApprovedAppointments(approvedAppointments.filter((appointment) => appointment._id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Doctor Dashboard</h1>
        {loading ? (
          <p>Loading appointments...</p>
        ) : (
          <>
            <div className="overflow-x-auto mb-8">
              <h2 className="text-xl font-semibold mb-4">Pending Appointments</h2>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Selected Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Diseases
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <button
                            onClick={() => {
                              // fetchPatientDetails(appointment.patientId);
                            }}
                          >
                            {appointment.patientName}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{moment(appointment.selectedDate).format("YYYY-MM-DD")}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.userDiseases}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                        <button
                          onClick={() => handleApprove(appointment._id)}
                          className="bg-green-500 text-white px-2 py-1 rounded-md"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(appointment._id)}
                          className="bg-red-500 text-white px-2 py-1 rounded-md"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleDelete(appointment._id)}
                          className="bg-yellow-500 text-white px-2 py-1 rounded-md"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Selected Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Diseases
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {approvedAppointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <button
                            onClick={() => {
                              // fetchPatientDetails(appointment.patientId);
                            }}
                            className="text-blue-500 underline"
                          >
                            {appointment.patientName}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{moment(appointment.selectedDate).format("YYYY-MM-DD")}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.userDiseases}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {patients.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">All Patient Details</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Blood Group
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Medications
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Other Channel Doctors
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Allergies
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patients.map((patient) => (
                    <tr key={patient._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{patient.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{patient.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{patient.bloodGroup}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{patient.age}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{patient.currentMedications}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{patient.otherChannelDoctors}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{patient.allergies}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default DoctorDashboard;

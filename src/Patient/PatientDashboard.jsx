import React, { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { TEChart } from "tw-elements-react";
import axios from "axios";

const sideNavBarLinks = [
  { title: 'Dashboard', path: '/patient/patientDashboard' },
  { title: "Appointments", path: "/patient/appointment" },
  { title: "Feedback", path: "/patient/feedback" },
  { title: "History", path: "/patient/history" },
];

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    fetchAppointments();
    fetchPaymentDetails();
    fetchPatientDetails();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/patient/appointments");
      if (response.data.success && Array.isArray(response.data.appointments)) {
        setAppointments(response.data.appointments);
        setTotalAppointments(response.data.appointments.length);
      } else {
        console.error("Error fetching appointments: Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const fetchPaymentDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/patient/payments");
      if (response.data.success && Array.isArray(response.data.payments)) {
        setPaymentDetails(response.data.payments);
      } else {
        console.error("Error fetching payment details: Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching payment details:", error);
    }
  };

  const fetchPatientDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/patient/profiles");
      if (response.data.success) {
        setPatientDetails(response.data.patient);
      } else {
        console.error("Error fetching patient details: Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching patient details:", error);
    }
  };

  const appointmentsChartData = {
    labels: appointments.map(app => new Date(app.date).toLocaleDateString()),
    datasets: [
      {
        label: "Appointments",
        data: appointments.map(app => app.count),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-950">Patient Dashboard</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Patient Details Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Patient Details</h2>
              {patientDetails ? (
                <div>
                  <p><strong>Name:</strong> {patientDetails.name}</p>
                  <p><strong>Email:</strong> {patientDetails.email}</p>
                  <p><strong>Phone:</strong> {patientDetails.phone}</p>
                  <p><strong>Address:</strong> {patientDetails.address}</p>
                </div>
              ) : (
                <p>Loading patient details...</p>
              )}
            </div>

            {/* Payment Details Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
              {paymentDetails.length > 0 ? (
                <ul>
                  {paymentDetails.map((payment, index) => (
                    <li key={index}>
                      {payment.date}: ${payment.amount}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No payment details available.</p>
              )}
            </div>

            {/* Total Appointments Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Total Appointments</h2>
              <p className="text-gray-700">Total Appointments: {totalAppointments}</p>
            </div>

            {/* Chart Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Appointments Chart</h2>
              <TEChart type="bar" data={appointmentsChartData} />
            </div>

            {/* Other Sections */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Hsitory</h2>
              <p>Other component goes here...</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Channeling</h2>
              <p></p>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default PatientDashboard;

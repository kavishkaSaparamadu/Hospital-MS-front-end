import React, { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard" },
  { title: "Appointments", path: "/admin/appointment" },
  { title: "Patients", path: "/admin/registerPatient" },
  { title: "Doctors", path: "/admin/registerDoctor" },
];

const Dashboard = () => {
  const [patientsCount, setPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [appointmentsCount, setAppointmentsCount] = useState(0);

  useEffect(() => {
    fetchPatientsCount();
    fetchDoctorsCount();
    fetchAppointmentsCount();
  }, []);

  const fetchPatientsCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patients/profiles');
      setPatientsCount(response.data.length);
    } catch (error) {
      console.error("Error fetching patients count:", error);
    }
  };

  const fetchDoctorsCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doctor/applys');
      console.log("Doctors response data:", response.data);
      if (response.data.success) {
        setDoctorsCount(response.data.doctors.length);
      } else {
        console.error("Error fetching doctors count: success false");
      }
    } catch (error) {
      console.error("Error fetching doctors count:", error);
    }
  };

  const fetchAppointmentsCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patient/appointments');
      console.log("Appointments response data:", response.data);
      if (response.data.success) {
        setAppointmentsCount(response.data.appointments.length);
      } else {
        console.error("Error fetching appointments count: success false");
      }
    } catch (error) {
      console.error("Error fetching appointments count:", error);
    }
  };

  const patientsData = {
    labels: ['Patients'],
    datasets: [
      {
        label: 'Patients',
        data: [patientsCount],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const doctorsData = {
    labels: ['Doctors'],
    datasets: [
      {
        label: 'Doctors',
        data: [doctorsCount],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const appointmentsData = {
    labels: ['Appointments'],
    datasets: [
      {
        label: 'Appointments',
        data: [appointmentsCount],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Counts',
      },
    },
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-950">Admin Dashboard</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Patients Card */}
            <div className="p-6 bg-yellow-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-white mb-2">Patients</h2>
              <p className="text-white">Total Patients: {patientsCount}</p>
            </div>
            {/* Doctors Card */}
            <div className="p-6 bg-green-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-white mb-2">Doctors</h2>
              <p className="text-white">Total Doctors: {doctorsCount}</p>
            </div>
            {/* Appointments Card */}
            <div className="p-6 bg-red-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-white mb-2">Appointments</h2>
              <p className="text-white">Total Appointments: {appointmentsCount}</p>
            </div>
          </div>
          {/* Charts */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Patients Chart */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Bar data={patientsData} options={{ ...options, plugins: { ...options.plugins, title: { display: true, text: 'Patients Count' } } }} />
            </div>
            {/* Doctors Chart */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Bar data={doctorsData} options={{ ...options, plugins: { ...options.plugins, title: { display: true, text: 'Doctors Count' } } }} />
            </div>
            {/* Appointments Chart */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Bar data={appointmentsData} options={{ ...options, plugins: { ...options.plugins, title: { display: true, text: 'Appointments Count' } } }} />
            </div>
          </div>
        </div>
        {/* Additional components or charts can be added here */}
      </MainLayout>
    </div>
  );
};

export default Dashboard;

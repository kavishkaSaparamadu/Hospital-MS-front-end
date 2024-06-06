import React, { useState, useEffect } from 'react';
import MainLayout from "../components/layouts/MainLayout";
import axios from 'axios';
import { TEChart } from "tw-elements-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,LineChart} from 'recharts';



const sideNavBarLinks = [
    { title: "Dashboard", path: "/doctor/doctorDashboard" },
    { title: "Appointments", path: "/doctor/appointment" },
    { title: "Apply Doctor", path: "/doctor/applyDoctor" },
    { title: "Prescription", path: "/doctor/prescriptions" },
    { title: "Medical Guidance", path: "/doctor/medicalGuidance" },
  ]
const DoctorDashboard = () => {
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [todaysAppointments, setTodaysAppointments] = useState(0);
  const [averageAppointments, setAverageAppointments] = useState(0);
  const [totalPrescriptions, setTotalPrescriptions] = useState(0);
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState(0);

  useEffect(() => {
    fetchAppointments();
    fetchPrescriptions();
    fetchMonthlyIncome();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patient/appointments');
      const appointments = response.data.appointments;

      // Calculate total appointments
      const totalAppointmentsCount = appointments.length;
      setTotalAppointments(totalAppointmentsCount);

      // Calculate today's appointments
      const today = new Date();
      const todayAppointments = appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.selectedDate);
        return appointmentDate.toDateString() === today.toDateString();
      });
      setTodaysAppointments(todayAppointments.length);

      // Calculate average appointments
      const totalConfirmedAppointments = appointments.filter(appointment => appointment.status === 'confirmed').length;
      const averageAppointmentsCount = totalAppointmentsCount > 0 ? totalConfirmedAppointments / totalAppointmentsCount : 0;
      setAverageAppointments(averageAppointmentsCount);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchPrescriptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doc/prescriptions');
      const prescriptions = response.data;

      // Set total prescriptions
      setTotalPrescriptions(prescriptions.length);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    }
  };

  const fetchMonthlyIncome = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/finance/monthly-income');
      const monthlyIncome = response.data.totalIncome;

      // Set total monthly income
      setTotalMonthlyIncome(monthlyIncome);
    } catch (error) {
      console.error('Error fetching monthly income:', error);
    }
  };

  // Define colors based on the statistics
  const totalAppointmentsColor = 'darkblue';
  const todaysAppointmentsColor = 'red';
  const averageAppointmentsColor = 'purple';
  const totalPrescriptionsColor = 'green';

  const chartData = [
    { name: "Total Appointments", value: totalAppointments },
    { name: "Today's Appointments", value: todaysAppointments },
    { name: "Total Prescriptions", value: totalPrescriptions }
  ];

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ flex: 1, textAlign: 'center', backgroundColor: totalAppointmentsColor, padding: '20px', borderRadius: '4px' ,margin: '0 20px'}}>
            <h3 style={{ color: 'white' }}>Total Appointments</h3>
            <p style={{ color: 'white', fontSize: '24px' }}>{totalAppointments}</p>
          </div>
          <div style={{ flex: 1, textAlign: 'center', backgroundColor: todaysAppointmentsColor, padding: '20px', borderRadius: '5px', margin: '0 20px' }}>
            <h3 style={{ color: 'white' }}>Today's Appointments</h3>
            <p style={{ color: 'white', fontSize: '24px' }}>{todaysAppointments}</p>
          </div>
          <div style={{ flex: 1, textAlign: 'center', backgroundColor: averageAppointmentsColor, padding: '20px', borderRadius: '4px',margin: '0 20px' }}>
            <h3 style={{ color: 'white' }}>Average Appointments</h3>
            <p style={{ color: 'white', fontSize: '24px' }}>{(averageAppointments * 100).toFixed(2)}%</p>
          </div>
          <div style={{ flex: 1, textAlign: 'center', backgroundColor: totalPrescriptionsColor, padding: '20px', borderRadius: '4px' ,margin: '0 20px'}}>
            <h3 style={{ color: 'white' }}>Total Prescriptions</h3>
            <p style={{ color: 'white', fontSize: '24px' }}>{totalPrescriptions}</p>
          </div>
        </div>
        <br/>
        <br/>
        
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1 }}>
            <TEChart type="bar" data={chartData} title="Appointments Overview" />
          </div>
       <div>
                    <br/>
          </div>
          <div style={{ flex: 1 }}>
            <BarChart width={400} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
            <br/>
            <br/>
            <br/>
            <div className=" text-3xl font-semibold leading-7 text-gray-900 bg-yellow-500">
              <h1>Total Monthly Income</h1>
              <p >{totalMonthlyIncome}</p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <TEChart type="bar" data={chartData} title="Appointments Overview" />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default DoctorDashboard;

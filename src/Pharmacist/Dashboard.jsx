import React, { useEffect, useState } from 'react';
import MainLayout from "../components/layouts/MainLayout";
import axios from 'axios';
import { TEChart } from "tw-elements-react";

const sideNavBarLinks = [
    { title: "Dashboard", path: "/pharmacist/dashboard" },
    { title: "Prescriptions", path: "/paharmacist/user/prescription" },
];

const Dashboard = () => {
  const [prescriptionsCount, setPrescriptionsCount] = useState(0);

  useEffect(() => {
    fetchPrescriptionsCount();
  }, []);

  const fetchPrescriptionsCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doc/prescriptions');
      setPrescriptionsCount(response.data.length);
    } catch (error) {
      console.error("Error fetching prescriptions count:", error);
    }
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="flex justify-between">
          <div className="bg-blue-950 text-white shadow-lg rounded-md p-2 w-1/2">
            <h2 className="text-3xl font-bold mb-1 text-center">Total Prescriptions<br/><br/><br/></h2>
            <p className="text-4xl font-semibold text-center">Today {prescriptionsCount} +</p>
          </div>
          <div className="bg-white shadow-lg rounded-md p-10 w-1/2">
            <TEChart
              type="bar"
              data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [{
                  label: 'Monthly Prescriptions',
                  data: [50, 70, 90, 80, 100, 120],
                  backgroundColor: 'rgba(54, 162, 235, 0.5)',
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1,
                }],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/Admin/dashboard" },
  { title: "Appointments", path: "/Admin/Appointment" },
  { title: "Users", path: "/Admin/RegisterPateion" },
];

const RegisterPateion = () => {
  const [activeTab, setActiveTab] = useState("patients");
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/patients");
      if (response.data.success) {
        setPatients(response.data.patients);
      } else {
        console.error("Failed to fetch patients:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="flex flex-col gap-10 mt-[4rem] ml-[5rem]">
        <div class="inline-flex">
          <button
            className={`${
              activeTab === "patients"
                ? "bg-yellow-600 text-black drop-shadow-md border-black border-2"
                : "bg-white"
            } w-[10rem] hover:bg-orange hover:text-black font-bold hover:border-black py-2 px-4 rounded-l`}
            onClick={() => setActiveTab("patients")}
          >
            Patients
          </button>
          <button
            className={`${
              activeTab === "doctors"
                ? "bg-orange text-black drop-shadow-md border-black border-2"
                : "bg-gray"
            } w-[10rem] hover:bg-orange  hover:text-black font-bold hover:border-black py-2 px-4 rounded-r`}
            onClick={() => setActiveTab("doctors")}
          >
            Doctors
          </button>
        </div>
        {/* -------------------------- Patients details-------------------------------------------- */}
        {activeTab === "patients" && (
          <div className="w-fill h-[45rem] p-8 bg-[#FDF6F6]">
            <h1 className="font-bold text-2xl">Patient Details</h1>
            <table className="w-full border-separate border-spacing-y-2 mt-4  ">
              <thead className="bg-yellow-600 border-2 text-xl">
                <tr className="">
                  <th className="px-4 py-4 text-left">ID</th>
                  <th className="px-4 py-4 text-left">Name</th>
                  <th className="px-4 py-4 text-left">Gender</th>
                  <th className="px-4 py-4 text-left">Address</th>
                  <th className="px-4 py-4 text-left">Disease</th>
                  <th className="px-4 py-4 text-left">Email</th>
                </tr>
              </thead>

              <tbody className="">
                {patients.map((patient) => (
                  <tr
                    key={patient._id}
                    className="bg-blue-200 bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                  >
                    <td className="text-left px-4 py-4">{patient._id}</td>
                    <td className="text-left px-4 py-4">{patient.name}</td>
                    <td className="text-left px-4 py-4">{patient.gender}</td>
                    <td className="text-left px-4 py-4">{patient.address}</td>
                    <td className="text-left px-4 py-4">{patient.disease}</td>
                    <td className="text-left px-4 py-4">{patient.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* -------------------------end patient data----------------------------- */}
      </div>
    </MainLayout>
  );
};

export default RegisterPateion;

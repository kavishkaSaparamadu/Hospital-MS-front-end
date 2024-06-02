import React, { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const sideNavBarLinks = [
    { title: "Dashboard", path: "/Admin/dashboard" },
    { title: "Appointments", path: "/Admin/Appointment" },
    { title: "Patients", path: "/Admin/RegisterPateion" },
];

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("patients");
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Fetch patients and doctors data when component mounts
        fetchPatients();
        fetchDoctors();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/user/patients");
            setPatients(response.data);
        } catch (error) {
            console.error("Error fetching patients:", error);
        }
    };

    const fetchDoctors = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/user/doctors");
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <MainLayout data={sideNavBarLinks}>
            <div className="flex flex-col gap-10 mt-[4rem] ml-[5rem]">
                <div className="inline-flex">
                    <button
                        className={`${
                            activeTab === "patients"
                                ? "bg-yellow-600 text-black drop-shadow-md border-black border-2"
                                : "bg-white"
                        } w-[10rem] hover:bg-orange hover:text-black font-bold hover:border-black py-2 px-4 rounded-l`}
                        onClick={() => handleTabChange("patients")}
                    >
                        Patients
                    </button>
                    <button
                        className={`${
                            activeTab === "doctors"
                                ? "bg-orange text-black drop-shadow-md border-black border-2"
                                : "bg-gray"
                        } w-[10rem] hover:bg-orange hover:text-black font-bold hover:border-black py-2 px-4 rounded-r`}
                        onClick={() => handleTabChange("doctors")}
                    >
                        Doctors
                    </button>
                </div>

                {activeTab === "patients" && (
                    <div className="w-fill h-[45rem] p-8 bg-[#FDF6F6]">
                        <h1 className="font-bold text-2xl">Patient Details</h1>
                        {/* Render patient table here */}
                    </div>
                )}

                {activeTab === "doctors" && (
                    <div className="w-fill h-[45rem] p-8 bg-[#FDF6F6]">
                        <h1 className="font-bold text-2xl">Doctor Details</h1>
                        {/* Render doctor table here */}
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default AdminDashboard;

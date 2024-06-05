import React, { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard" },
  { title: "Appointments", path: "/admin/appointment" },
  { title: "Patients", path: "/admin/registerPatient" },
  { title: "Doctors", path: "/admin/registerDoctor" },
];

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/doctor/applys");
      if (response.data.success) {
        setDoctors(response.data.doctors);
      } else {
        setError("Failed to fetch doctors");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setError("Failed to fetch doctors");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="flex flex-col gap-10 mt-4 ml-5">
        <div className="w-full h-auto p-8 bg-blue-900 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl text-white mb-4">List of Doctors</h1>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-white">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-900">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="px-4 py-2">First Name</th>
                    <th className="px-4 py-2">Last Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone Number</th>
                    <th className="px-4 py-2">Address</th>
                    <th className="px-4 py-2">Specialization</th>
                    <th className="px-4 py-2">Experience</th>
                    <th className="px-4 py-2">Consultation Fee</th>
                    <th className="px-4 py-2">Timings</th>
                    <th className="px-4 py-2">Available Days</th>
                  </tr>
                </thead>
                <tbody className="bg-blue-200 text-blue-900">
                  {doctors.map((doctor) => (
                    <tr key={doctor._id}>
                      <td className="px-4 py-2">{doctor.firstName}</td>
                      <td className="px-4 py-2">{doctor.lastName}</td>
                      <td className="px-4 py-2">{doctor.email}</td>
                      <td className="px-4 py-2">{doctor.phoneNumber}</td>
                      <td className="px-4 py-2">{doctor.address}</td>
                      <td className="px-4 py-2">{doctor.specialization}</td>
                      <td className="px-4 py-2">{doctor.experience}</td>
                      <td className="px-4 py-2">{doctor.feePerConsultation}</td>
                      <td className="px-4 py-2">{doctor.timings}</td>
                      <td className="px-4 py-2">{doctor.availableDays.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default DoctorsList;

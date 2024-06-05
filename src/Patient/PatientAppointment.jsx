import React, { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";
import moment from 'moment';
import 'tailwindcss/tailwind.css';

const sideNavBarLinks = [
  { title: 'Dashboard', path: '/patient/patientDashboard' },
  { title: "Appointments", path: "/patient/appointment" },
  { title: "Feedback", path: "/patient/feedback" },
  { title: "History", path: "/patient/history" },
];

const PatientAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);
  const [userDiseases, setUserDiseases] = useState("");
  const userName = localStorage.getItem("userName");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchDoctors();
    fetchConfirmedAppointments(userId);
    fetchRejectedAppointments(userId);
  }, [userId]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/doctor/applys");
      if (response.data.success) {
        setDoctors(response.data.doctors);
      } else {
        console.error("Failed to fetch doctors:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const fetchConfirmedAppointments = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/patient/appointments/approved/${id}`);
      if (response.data.success) {
        setConfirmedAppointments(response.data.confirmedAppointments);
      } else {
        console.error("Failed to fetch confirmed appointments:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching confirmed appointments:", error);
    }
  };

  const fetchRejectedAppointments = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/patient/appointments/rejected/${id}`);
      if (response.data.success) {
        setRejectedAppointments(response.data.rejectedAppointments);
      } else {
        console.error("Failed to fetch rejected appointments:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching rejected appointments:", error);
    }
  };

  const handleDoctorChange = (event) => {
    const value = event.target.value;
    const doctor = doctors.find((doc) => doc._id === value);
    setSelectedDoctor(doctor);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCreateAppointment = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/patient/appointment", {
        doctorName: `${selectedDoctor.firstName} ${selectedDoctor.lastName}`,
        selectedDate,
        patientName: userName,
        userDiseases,
      });
      if (response.data.success) {
        console.log("Appointment created successfully");
        setSelectedDoctor(null);
        setSelectedDate(null);
        setUserDiseases("");
        fetchConfirmedAppointments(userId); // Refresh appointments
      } else {
        console.error("Failed to create appointment:", response.data.message);
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
    setLoading(false);
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Select Doctor</h1>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              onChange={handleDoctorChange}
              value={selectedDoctor ? selectedDoctor._id : ''}
            >
              <option value="" disabled>Select Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.firstName} {doctor.lastName} - {doctor.specialization}
                </option>
              ))}
            </select>
            {selectedDoctor && (
              <div className="mt-4 p-4 bg-yellow-700 text-white rounded-lg shadow-md">
                <h1 className="name text-blue-950 text-2xl text-center font-extrabold">Dr.{selectedDoctor.firstName} Details <br/></h1><br/>
                <p><strong>Name      :   </strong> {selectedDoctor.firstName} {selectedDoctor.lastName}</p> <br/> 
                <p><strong>Email      :    </strong> {selectedDoctor.email}</p> <br/> 
                <p><strong>Phone Number   :   </strong> {selectedDoctor.phoneNumber}</p> <br/> 
                <p><strong>Address  :</strong> {selectedDoctor.address}</p> <br/> <br/>
                <p><strong>Specialization  :</strong> {selectedDoctor.specialization}</p> <br/> 
                <p><strong>Experience  : </strong> {selectedDoctor.experience}</p>  <br/>
                <p><strong>Fee Per Consultation   :   </strong> {selectedDoctor.feePerConsultation}</p> <br/> 
                <p>
                  <strong>Timings:</strong>{" "} <br/> 
                  {selectedDoctor.timings && selectedDoctor.timings.length > 0 ? (
                    selectedDoctor.timings.map((timing, index) => (
                      <span key={timing}>{moment(timing).format("HH:mm")}{index < selectedDoctor.timings.length - 1 && ', '}</span>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p>
                  <strong>Available Days:</strong>{" "} <br/> 
                  {selectedDoctor.availableDays ? selectedDoctor.availableDays.join(", ") : "N/A"}
                </p>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-4">Select Date</h1>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              disabled={!selectedDoctor}
              onChange={handleDateChange}
              value={selectedDate || ''}
              min={moment().format('YYYY-MM-DD')}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter diseases (if any)"
              value={userDiseases}
              onChange={(e) => setUserDiseases(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="w-full px-4 py-2 bg-yellow-700 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={handleCreateAppointment}
              disabled={!selectedDoctor || !selectedDate || loading}
            >
              {loading ? "Creating Appointment..." : "Add Appointment"}
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Confirmed Appointments</h2>
          {confirmedAppointments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Doctor Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Selected Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Diseases
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {confirmedAppointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.doctorName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.patientName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{moment(appointment.selectedDate).format("YYYY-MM-DD")}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{moment(appointment.selectedDate).format("HH:mm")}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.userDiseases}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-block h-4 w-4 rounded-full mr-1 ${appointment.status === "approved" ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        {appointment.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No confirmed appointments available.</p>
          )}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Rejected Appointments</h2>
          {rejectedAppointments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Doctor Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Selected Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Diseases
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rejectedAppointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.doctorName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.patientName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{moment(appointment.selectedDate).format("YYYY-MM-DD")}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{moment(appointment.selectedDate).format("HH:mm")}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.userDiseases}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-block h-4 w-4 rounded-full bg-red-500 mr-1"></span>
                        {appointment.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No rejected appointments available.</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default PatientAppointment;

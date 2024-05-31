import React, { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";
import moment from 'moment';
import 'tailwindcss/tailwind.css';

const sideNavBarLinks = [
  { title: "Dashboard", path: "/patient/patientDashboard" },
  { title: "Appointments", path: "/patient/appointment" },
  { title: "Feedback", path: "/patient/feedback" },
  { title: "History", path: "/patient/history" },
];

const PatientAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/doctor");
      if (response.data.success) {
        setDoctors(response.data.doctors);
      } else {
        console.error("Failed to fetch doctors:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleDoctorChange = (event) => {
    const value = event.target.value;
    const doctor = doctors.find((doc) => doc._id === value);
    setSelectedDoctor(doctor);
    setAvailableDates(doctor ? doctor.availableDates : []);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCreateAppointment = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/patient/appointments", {
        doctorName: `${selectedDoctor.firstName} ${selectedDoctor.lastName}`,
        selectedDate,
        patientName: "John Doe" // Replace with actual patient name or user name from profile
      });
      if (response.data.success) {
        console.log("Appointment created successfully");
        setSelectedDoctor(null);
        setSelectedDate(null);
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
              <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <p><strong>Name:</strong> {selectedDoctor.firstName} {selectedDoctor.lastName}</p>
                <p><strong>Email:</strong> {selectedDoctor.email}</p>
                <p><strong>Phone Number:</strong> {selectedDoctor.phoneNumber}</p>
                <p><strong>Address:</strong> {selectedDoctor.address}</p>
                <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
                <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
                <p><strong>Fee Per Consultation:</strong> {selectedDoctor.feePerConsultation}</p>
                <p>
                  <strong>Timings:</strong>{" "}
                  {selectedDoctor.timings.map((timing, index) => {
                    const time = moment(timing).format("HH:mm");
                    const nextTime = moment(selectedDoctor.timings[index + 1]).format("HH:mm");
                    return index === selectedDoctor.timings.length - 1 ? (
                      <span key={timing}>{time}</span>
                    ) : (
                      <span key={timing}>{`${time} - ${nextTime}, `}</span>
                    );
                  })}
                </p>
                <p>
                  <strong>Available Days:</strong>{" "}
                  {selectedDoctor.availableDays ? selectedDoctor.availableDays.join(", ") : ""}
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
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onClick={handleCreateAppointment}
            disabled={!selectedDoctor || !selectedDate || loading}
          >
            {loading ? "Creating Appointment..." : "Add Appointment"}
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default PatientAppointment;

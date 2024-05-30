import React, { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Select, Row, Col, Button, DatePicker } from "antd";
import axios from "axios";
import moment from 'moment';

const { Option } = Select;

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

  const handleDoctorChange = (value) => {
    const doctor = doctors.find((doc) => doc._id === value);
    setSelectedDoctor(doctor);
    // Set available dates for the selected doctor, or initialize with an empty array if no doctor is selected
    setAvailableDates(doctor ? doctor.availableDates : []);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
        // Reset selected doctor and date after appointment creation
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
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <h1>Select Doctor</h1>
          <Select
            style={{ width: 200 }}
            placeholder="Select Doctor"
            onChange={handleDoctorChange}
            value={selectedDoctor ? selectedDoctor._id : null}
          >
            {doctors.map((doctor) => (
              <Option key={doctor._id} value={doctor._id}>
                {doctor.firstName} {doctor.lastName} - {doctor.specialization}
              </Option>
            ))}
          </Select>
          {selectedDoctor && (
            <div>
              <p>Name: {selectedDoctor.firstName} {selectedDoctor.lastName}</p>
              <p>Email: {selectedDoctor.email}</p>
              <p>Phone Number: {selectedDoctor.phoneNumber}</p>
              <p>Address: {selectedDoctor.address}</p>
              <p>Specialization: {selectedDoctor.specialization}</p>
              <p>Experience: {selectedDoctor.experience}</p>
              <p>Fee Per Consultation: {selectedDoctor.feePerConsultation}</p>
              <p>
                Timings:{" "}
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
                Available Days:{" "}
                {selectedDoctor.availableDays ? selectedDoctor.availableDays.join(", ") : ""}
              </p>
            </div>
          )}
        </Col>
        <Col span={12}>
          <h1>Select Date</h1>
          <DatePicker
            style={{ width: 200 }}
            disabled={!selectedDoctor} // Disable DatePicker until a doctor is selected
            onChange={handleDateChange}
            disabledDate={(current) => current && current < moment().startOf('day')}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button
            type="primary"
            onClick={handleCreateAppointment}
            disabled={!selectedDoctor || !selectedDate || loading}
          >
            {loading ? "Creating Appointment..." : "Add Appointment"}
          </Button>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default PatientAppointment;

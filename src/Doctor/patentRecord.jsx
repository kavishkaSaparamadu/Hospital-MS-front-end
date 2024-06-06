import React from 'react';
import { Form, Input, Button, message } from "antd";
import { FaChartLine, FaCalendarAlt, FaStethoscope, FaNotesMedical, FaBook, FaMoneyBill } from 'react-icons/fa';
import axios from "axios";
import MainLayout from '../components/layouts/MainLayout'; // Import MainLayout

const sideNavBarLinks = [
    { title: "Dashboard", path: "/doctor/doctorDashboard" },
    { title: "Appointments", path: "/doctor/appointment" },
    { title: "Apply Doctor", path: "/doctor/applyDoctor" },
    { title: "Prescription", path: "/doctor/prescriptions" },
    { title: "Medical Guidance", path: "/doctor/medicalGuidance"},
];

const PatientRecord = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:5000/api/guide/line', values);
            console.log('Server response:', response.data);
            // Display success message
            message.success('Form submitted successfully');
            // Optionally, you can reset the form
            form.resetFields();
        } catch (error) {
            console.error('Error submitting form:', error);
            // Display error message
            message.error('Failed to submit form. Please try again.');
        }
    };

    return (
        <div>
      <MainLayout data={sideNavBarLinks}>
            <div className="bg-blue-900 text-white p-8">
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <h1 className="text-2xl mb-4 text-white">Medical Guidance Form</h1>

                    {/* Patient Information Section */}
                    <div className="mb-6">
                        <h2 className="text-lg mb-2 text-white">Patient Information</h2>
                        <Form.Item label="Patient Name" name="patientName" rules={[{ required: true }]}>
                            <Input className="rounded-lg" />
                        </Form.Item>
                        <Form.Item label="Patient Age" name="patientAge" rules={[{ required: true }]}>
                            <Input type="number" className="rounded-lg" />
                        </Form.Item>
                        {/* Add more fields for patient information as needed */}
                    </div>

                    {/* Medical Guidance Section */}
                    <div className="mb-6">
                        <h2 className="text-lg mb-2 text-white">Medical Guidance</h2>
                        <Form.Item label="Diagnosis" name="diagnosis" rules={[{ required: true }]}>
                            <Input.TextArea rows={4} className="rounded-lg" />
                        </Form.Item>
                        {/* Add more fields for treatment plan, expected outcomes, follow-up instructions, etc. */}
                    </div>

                    {/* Doctor Information Section */}
                    <div className="mb-6">
                        <h2 className="text-lg mb-2 text-white">Doctor Information</h2>
                        <Form.Item label="Doctor Name" name="doctorName" rules={[{ required: true }]}>
                            <Input className="rounded-lg" />
                        </Form.Item>
                        {/* Add more fields for doctor contact information, date, etc. */}
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </MainLayout>
        </div>
    );
}

export default PatientRecord;

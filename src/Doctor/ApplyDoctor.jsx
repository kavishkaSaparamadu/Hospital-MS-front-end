import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MainLayout from "../components/layouts/MainLayout";
import { Col, Row, Button, Form, Card, TimePicker, Checkbox, Input } from "antd";
import axios from "axios";
import toast from 'react-hot-toast';



const sideNavBarLinks = [
    { title: "Dashboard", path: "/doctor/doctorDashboard"  },
    { title: "Appointments", path: "/doctor/appointment" },
    { title: "Apply Doctor", path: "/doctor/applyDoctor" },
    { title: "Prescription", path: "/doctor/prescriptions"},
    { title: "Medical Guidance", path: "/doctor/medicalGuidance"},
  ]

const ApplyDoctor = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await axios.post('http://localhost:5000/api/doctor/apply', values);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData(values); // Save the form data
        setIsEditMode(false); // Disable edit mode
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting doctor application:', error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <Card
        className="apply-doctor-card bg-gray-100"
        title={<h1 className="page-title">Apply Doctor Details</h1>}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          initialValues={formData}
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Details
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="First Name"
                      disabled={!isEditMode}
                    />
                  </Form.Item>
                </div>
                <div className="sm:col-span-3">
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Last Name"
                      disabled={!isEditMode}
                    />
                  </Form.Item>
                </div>
                <div className="sm:col-span-3">
                  <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Phone Number"
                      disabled={!isEditMode}
                    />
                  </Form.Item>
                </div>
                <div className="sm:col-span-3">
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input
                      type="email"
                      placeholder="Email"
                      disabled={!isEditMode}
                    />
                  </Form.Item>
                </div>
                <div className="col-span-full">
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                      { required: true, message: "Please input your address!" },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Address"
                      disabled={!isEditMode}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Professional Details
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Form.Item
                    label="Specialization"
                    name="specialization"
                    rules={[
                      {
                        required: true,
                        message: "Please input your specialization!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Specialization"
                      disabled={!isEditMode}
                    />
                  </Form.Item>
                </div>
                <div className="sm:col-span-3">
                  <Form.Item
                    label="Experience"
                    name="experience"
                    rules={[
                      {
                        required: true,
                        message: "Please input your experience!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Experience"
                      disabled={!isEditMode}
                    />
                  </Form.Item>
                </div>
                <div className="sm:col-span-3">
                  <Form.Item
                    label="Fee Per Consultation"
                    name="feePerConsultation"
                    rules={[
                      {
                        required: true,
                        message: "Please input your fee per consultation!",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="Fee Per Consultation"
                      disabled={!isEditMode}
                    />
                  </Form.Item>
                </div>
                <div className="sm:col-span-2">
                  <Form.Item
                    label="Timing"
                    name="timings"
                    rules={[
                      {
                        required: true,
                        message: "Please input your available timings!",
                      },
                    ]}
                  >
                    <TimePicker.RangePicker className="ant-picker" disabled={!isEditMode} />
                  </Form.Item>
                </div>
                <div className="col-span-full">
                  <Form.Item
                    label="Available Days"
                    name="availableDays"
                    rules={[
                      {
                        required: true,
                        message: "Please select your available days!",
                      },
                    ]}
                  >
                    <Checkbox.Group disabled={!isEditMode}>
                      <Checkbox value="Monday">Monday</Checkbox>
                      <Checkbox value="Tuesday">Tuesday</Checkbox>
                      <Checkbox value="Wednesday">Wednesday</Checkbox>
                      <Checkbox value="Thursday">Thursday</Checkbox>
                      <Checkbox value="Friday">Friday</Checkbox>
                      <Checkbox value="Saturday">Saturday</Checkbox>
                      <Checkbox value="Sunday">Sunday</Checkbox>
                    </Checkbox.Group>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            {!isEditMode ? (
              <Button
                type="default"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={handleEdit}
              >
                Edit
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </Button>
            )}
          </div>
        </Form>
      </Card>
    </MainLayout>
  );
};

export default ApplyDoctor;

import React from 'react';
import { Form, Input, Select, Radio, Button } from "antd";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const { Option } = Select;

function Register() {

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', values);

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='authentication'>
      <div className='authentication-form card p-3'>
        <h1 className='card-title'>Welcome to Family Care Dispensary</h1>
        <Form layout='vertical' onFinish={onFinish}>
          
          <Form.Item label='Custom ID' name='customId' rules={[{ required: true, message: 'Please input your custom ID!' }]}>
            <Input placeholder='Custom ID' />
          </Form.Item>
          
          <Form.Item label='Role' name='role' rules={[{ required: true, message: 'Please select your role!' }]}>
            <Select placeholder='Select a role'>
              <Option value='patient'>Patient</Option>
              <Option value='doctor'>Doctor</Option>
            </Select>
          </Form.Item>
          
          <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input placeholder='Name' />
          </Form.Item>
          
          <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please input a valid email!' }]}>
            <Input placeholder='Email' />
          </Form.Item>
          
          <Form.Item label='Address' name='address' rules={[{ required: true, message: 'Please input your address!' }]}>
            <Input placeholder='Address' />
          </Form.Item>
          
          <Form.Item label='Gender' name='gender' rules={[{ required: true, message: 'Please select your gender!' }]}>
            <Radio.Group>
              <Radio value='male'>Male</Radio>
              <Radio value='female'>Female</Radio>
              <Radio value='other'>Other</Radio>
            </Radio.Group>
          </Form.Item>
          
          <Form.Item label='Age' name='age' rules={[{ required: true, message: 'Please input your age!' }]}>
            <Input type='number' placeholder='Age' />
          </Form.Item>

          <Form.Item label='Password' name='Password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input placeholder='Password' type='password' />
          </Form.Item>
          
          <Form.Item>
            <Button className='primary-button mt-2' htmlType='submit'>Register</Button>    
          </Form.Item>

          <Link to='/login' className='anchor mt-2'> CLICK HERE TO LOGIN </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;

























{/*import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [userRole, setUserRole] = useState("patient"); // Default user role set to "patient"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (name === "") {
      toast.error(<div> 😡 Name is required</div>);
    } else if (age === "") {
      toast.error(<div> 😡 Age is required</div>);
    } else if (gender === "") {
      toast.error(<div> 😡 Gender is required</div>);
    } else if (address === "") {
      toast.error(<div> 😡 Address is required</div>);
    } else if (email === "") {
      toast.error(<div> 😡 Email is required</div>);
    } else if (!email.includes("@")) {
      toast.error(<div> 😡 Email is invalid</div>);
    } else if (password === "") {
      toast.error(<div> 😡 Password is required</div>);
    } else if (password.length < 6) {
      toast.error(<div> 😡 Password must be at least 6 characters</div>);
    } else {
      // Proceed with form submission if all fields are valid
      sendData();
    }
  };

  const sendData = () => {
    const newUser = {
      name,
      age,
      gender,
      address,
      userRole, // Changed disease to userRole
      email,
      password,
    };

    // Send data to server using axios or fetch
    axios
      .post("http://localhost:5000/user/register", newUser, {
        // Changed endpoint to "user/add"
        withCredentials: true,
      })
      .then(() => {
        toast.success(<div> 😊 Registration Successful!</div>);
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
        toast.error(<div> 😡 Error registering user</div>);
      });
  };

  return (
    <div className="bg-{image-re} min-h-screen flex justify-center items-center">
      <div className="bg-blue-200 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4 text-center font-semibold">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* User Role Dropdown */}
         {/* <div className="mb-4">
            <label
              htmlFor="userRole"
              className="block text-sm font-medium text-gray-700"
            >
              User Role
            </label>
            <select
              id="userRole"
              name="userRole"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          {/* Rest of the form fields */}
          {/* Name */}
          {/*<div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Age */}
          {/*<div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Gender */}
          {/*<div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Address */}
          {/*<div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Email */}
         {/* <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Password */}
         {/*} <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Submit Button */}
          {/*<div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
*/}
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [userRole, setUserRole] = useState("");
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
    } else if (userRole === "") {
      toast.error(<div> 😡 Disease is required</div>);
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
    const newPateint = {
      name,
      age,
      gender,
      address,
      userRole,
      email,
      password,
    };

    // Send data to server using axios or fetch
    axios
      .post("http://localhost:5000/pateint/add", newPateint, {
        withCredentials: true,
      })
      .then(() => {
        toast.success(<div> 😊 Registration Successful!</div>);
        navigate('/login');
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
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input 
              type="number" 
              id="age" 
              name="age" 
              value={age} 
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <input 
              type="text" 
              id="gender" 
              name="gender" 
              value={gender} 
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
            />
          </div>
          <div className="mb-4">
  <label htmlFor="userRole" className="block text-sm font-medium text-gray-700">
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

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password"  
              name="password"  
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
            />
          </div>
          <div className="text-center">
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

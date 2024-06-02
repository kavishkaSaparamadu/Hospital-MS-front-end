import React, { useState } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import Avatar from '../Images/profileAvtar.png'; // Import your avatar image
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios'; // Import axios
import toast from 'react-hot-toast';

const sideNavBarLinks = [
  { title: 'Dashboard', path: '/patient/patientDashboard' },
  { title: 'Appointments', path: '/patient/appointment' },
  { title: 'Feedback', path: '/patient/feedback' },
  { title: 'History', path: '/patient/history' },
];

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bloodGroup: '',
    age: '',
    currentMedications: '',
    otherChannelDoctors: '',
    allergies: '',
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/patients/profile', formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setIsEditMode(false); // Disable edit mode
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting patient profile:', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDeleteImage = () => {
    setSelectedFile(null);
  };

  return (
  
    <MainLayout data={sideNavBarLinks}>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <div className="md:mx-[5rem] text-4xl font-bold">
            <h1>Your Profile</h1>
          </div>
          <div className="bg-[#D9D9D9] md:mx-[5rem] md:my-[5rem] lg:w-[256px] lg:h-[256px] rounded-2xl border-black border-2 md:m-3 justify-center items-center">
            <div className="flex flex-col gap-2">
              <div className="relative w-[175px] h-[175px] rounded-full overflow-hidden my-[1rem] mx-[3.5rem]">
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    className="w-full h-full object-cover"
                    alt="user"
                  />
                ) : (
                  <img
                    src={Avatar}
                    className="w-full h-full object-center"
                    alt="User Placeholder"
                  />
                )}
                <div className="absolute top-0 right-0">
                  <button
                    onClick={handleDeleteImage}
                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <div className="group inline-flex items-center justify-center bg-orange border-black border-2 rounded-xl p-1 transition-all hover:bg-[#ff7f00] transform hover:scale-110">
                  <label htmlFor="fileInput">
                    <input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <FaRegEdit style={{ fontSize: '25px' }} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 max-w-2xl mx-auto p-6 bg-gray-400 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Blood Group</option>
                  {bloodGroups.map((group, index) => (
                    <option key={index} value={group}>{group}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Current Medications</label>
                <input
                  type="text"
                  name="currentMedications"
                  value={formData.currentMedications}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Other Channel Doctors</label>
                <input
                  type="text"
                  name="otherChannelDoctors"
                  value={formData.otherChannelDoctors}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Allergies</label>
                <input
                  type="text"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-blue-950 transition duration-200"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;

import React, { useState, useEffect } from "react";
import { FaHome, FaBus, FaUsers, FaRegEdit, FaTrash } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import userDefault from "../Images/avetar.png";


function UserProfile() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  // Original values before editing
  const [originalName, setOriginalName] = useState(name);
  const [originalAddress, setOriginalAddress] = useState(address);
  const [originalEmail, setOriginalEmail] = useState(email);
  const [originalContact, setOriginalContact] = useState(contact);

  // Separate isEditing states for each field
  const [nameEditing, setNameEditing] = useState(false);
  const [addressEditing, setAddressEditing] = useState(false);
  const [emailEditing, setEmailEditing] = useState(false);
  const [contactEditing, setContactEditing] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [changePasswordSuccess, setChangePasswordSuccess] = useState(false);
  const userId = localStorage.getItem("userId");
  console.log("userId from localStorage:", userId);

  useEffect(() => {
    async function viewDetails() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/supAgent/supAgentProfile/viewDetails/${userId}`
        );
        if (!response.ok) {
          throw new Error(" Nework response was not ok");
        }
        const data = await response.json();
        if (data.length > 0) {
          const user = data[0]; // Assuming you want the first user if there are multiple
  
          // Populate the fields from the API response
          setName(user.user_name);
          setEmail(user.user_email);
          setContact(user.contact_number || ""); // Use an empty string if 'contact_number' is null
          setAddress(user.address || ""); // Use an empty string if 'address' is null
  
          // Set the original values
          setOriginalName(user.user_name);
          setOriginalEmail(user.user_email);
          setOriginalContact(user.contact_number || ""); // Use an empty string if 'contact_number' is null
          setOriginalAddress(user.address || ""); // Use an empty string if 'address' is null
        }
      } catch (error) {
        console.error(" Error fetching driver details", error);
      }
    }
    viewDetails();
  },[userId]);

  useEffect(() => {
    if (confirmNewPassword === newPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  }, [newPassword, confirmNewPassword]);

  const handleChangePassword = () => {
    // Implement your password change logic here
    // Make API calls or perform authentication logic
    // Ensure that newPassword matches confirmNewPassword
    if (newPassword === confirmNewPassword) {
      // Password change logic
      // ...

      // Reset state values after successful password change
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setPasswordsMatch(false);
      setChangePasswordSuccess(true);
    } else {
      setChangePasswordSuccess(false);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDeleteImage = () => {
    if (selectedFile) {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete the image?"
      );
      if (shouldDelete) {
        // Perform the image deletion logic here
        setSelectedFile(null); // Clear the selected file after deletion
      }
    }
  };
  // ------------edit------------//
  const handleEditName = () => {
    setNameEditing(true);
  };
  const handleEditAddress = () => {
    setAddressEditing(true);
  };
  const handleEditEmail = () => {
    setEmailEditing(true);
  };
  const handleEditContact = () => {
    setContactEditing(true);
  };

  // ----------------save----------//
  const handleNameSave = () => {
    if (name.trim() === "") {
      setName(name);
    } else {
      setNameEditing(false);
      setOriginalName(name);
    }
  };

  const handleEmailSave = () => {
    if (email.trim() === "") {
      setEmail(email);
    } else {
      setEmailEditing(false);
      setOriginalEmail(email);
    }
  };

  const handleContactSave = () => {
    if (contact.trim() === "") {
      setContact(contact);
    } else {
      setContactEditing(false);
      setOriginalContact(contact);
    }
  };

  const handleAddressSave = () => {
    if (address.trim() === "") {
      setAddress(address);
    } else {
      setAddressEditing(false);
      setOriginalAddress(address);
    }
  };

  // ----------------cancel-----------//
  const handleNameCancel = () => {
    setNameEditing(false);
    setName(originalName); // Reset to the original name
  };

  const handleEmailCancel = () => {
    setEmailEditing(false);
    setEmail(originalEmail); // Reset to the original email
  };

  const handleContactCancel = () => {
    setContactEditing(false);
    setContact(originalContact); // Reset to the original contact
  };

  const handleAddressCancel = () => {
    setAddressEditing(false);
    setAddress(originalAddress); // Reset to the original address
  };

  return (
    <div>
      
        {/* -----------Sup_agent profile tab------- */}
        <div className="grid grid-cols-3  gap-3 ">
          {/* ---------profile picture----------- */}
          <div className="col-span-1">
            <div className="md:mx-[5rem] text-4xl font-bold">
              <h1>Your Profile</h1>
            </div>
            <div className=" bg-[#D9D9D9]  md:mx-[5rem] md:my-[5rem] lg:w-[256px] lg:h-[256px] rounded-2xl border-black border-2 md:m-3 justify-center items-center">
              <div className="flex flex-col gap-2 ">
                <div className="relative w-[175px] h-[175px] rounded-full overflow-hidden my-[1rem] mx-[3.5rem]">
                  {selectedFile ? (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      className="w-full h-full object-cover"
                      alt="user"
                    />
                  ) : (
                    <img
                      src={userDefault}
                      className="w-full h-full object-center"
                      alt="User Placeholder"
                    />
                  )}
                </div>
                <div className="flex flex-row gap-[5rem] justify-center">
                  <div className="group inline-flex items-center justify-center bg-orange border-black border-2 rounded-xl p-1 transition-all hover:bg-[#ff7f00] transform hover:scale-110">
                    <label htmlFor="fileInput">
                      <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <FaRegEdit style={{ fontSize: "25px" }} />
                    </label>
                  </div>
                  <div
                    className={`group inline-flex items-center justify-center border-black border-2 rounded-xl p-1 transition-all ${
                      selectedFile
                        ? " bg-orange hover:bg-[#ff7f00] transform hover:scale-110"
                        : ""
                    }`}
                    onClick={handleDeleteImage}
                  >
                    <FaTrash style={{ fontSize: "25px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------- */}

          {/* -----------profile details-------------- */}
          <div className="col-span-1 w-full  gap-5">
            <div className="bg-blue-500 w-full mt-10  p-5">
              <div className="text-2xl font-semibold pb-2">Profile Details</div>
              <div className="bg-[#EEEEEE]  w-full h-full p-5">
                <div className="flex flex-col gap-5">
                  <div>
                    <h1 className="mx-5">Name</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      {nameEditing ? (
                        <input
                          type="text"
                          className="px-5 w-full h-full bg-[#D9D9D9] border rounded "
                          value={name}
                          onChange={handleNameChange}
                        />
                      ) : (
                        <div className="font-semibold px-5">{name}
                        {console.log('name:', name)}
                        </div>
                        
                      )}
                      {nameEditing ? (
                        <div className="flex flex-row mx-1 gap-2">
                          <button
                            onClick={handleNameCancel}
                            className="bg-[#EEEEEE] text-black rounded p-2 w-20 hover:bg-[#CCCCCC] transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleNameSave}
                            className="bg-orange text-white rounded p-2 w-20 hover:bg-[#ff7f00] transition-colors mr-2"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleEditName}
                            className="bg-[#EEEEEE] text-black rounded p-2 mr-5 hover:bg-[#CCCCCC]  transition-colors"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h1 className="mx-5">Email</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      {emailEditing ? (
                        <input
                          type="text"
                          className="px-5 w-full h-full bg-[#D9D9D9] border rounded"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      ) : (
                        <div className="font-semibold px-5">{email}</div>
                      )}
                      {emailEditing ? (
                        <div className="flex flex-row mx-1 gap-2">
                          <button
                            onClick={handleEmailCancel}
                            className="bg-[#EEEEEE] text-black rounded p-2 w-20 hover:bg-[#CCCCCC] transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleEmailSave}
                            className="bg-orange text-white rounded p-2 w-20 hover:bg-[#ff7f00] transition-colors mr-2"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleEditEmail}
                            className="bg-[#EEEEEE] text-black rounded p-2 mr-5 hover:bg-[#CCCCCC]  transition-colors"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h1 className="mx-5">Contact Number</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      {contactEditing ? (
                        <input
                          type="text"
                          className="px-5 w-full h-full bg-[#D9D9D9] border rounded"
                          value={contact}
                          onChange={handleContactChange}
                        />
                      ) : (
                        <div className="font-semibold px-5">{contact}</div>
                      )}
                      {contactEditing ? (
                        <div className="flex flex-row mx-1 gap-2">
                          <button
                            onClick={handleContactCancel}
                            className="bg-[#EEEEEE] text-black rounded p-2 w-20 hover:bg-[#CCCCCC] transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleContactSave}
                            className="bg-orange text-white rounded p-2 w-20 hover:bg-[#ff7f00] transition-colors mr-2"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleEditContact}
                            className="bg-[#EEEEEE] text-black rounded p-2 mr-5 hover:bg-[#CCCCCC]  transition-colors"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h1 className="mx-5">Address</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      {addressEditing ? (
                        <input
                          type="text"
                          className="px-5 w-full h-full bg-[#D9D9D9] border rounded"
                          value={address}
                          onChange={handleAddressChange}
                        />
                      ) : (
                        <div className="font-semibold px-5">{address}</div>
                      )}
                      {addressEditing ? (
                        <div className="flex flex-row mx-1 gap-2">
                          <button
                            onClick={handleAddressCancel}
                            className="bg-[#EEEEEE] text-black rounded p-2 w-20 hover:bg-[#CCCCCC] transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleAddressSave}
                            className="bg-orange text-white rounded p-2 w-20 hover:bg-[#ff7f00] transition-colors mr-2"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleEditAddress}
                            className="bg-[#EEEEEE] text-black rounded p-2 mr-5 hover:bg-[#CCCCCC]  transition-colors"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -------------login password--------------- */}
          <div className="col-span-1  w-full h-[41rem] gap-5 ">
            <div className="bg-blue-500 w-full mt-10  p-5">
              <div className="text-2xl font-semibold pb-2">Change Password</div>
              <div className="bg-[#EEEEEE]  w-full h-full p-5">
                <div className="flex flex-col gap-5">
                  <div>
                    <h1 className="mx-5">Current Password</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      <input
                        type="password"
                        className="px-5 w-full h-full bg-[#D9D9D9] border rounded "
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="mx-5">New Password</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      <input
                        type="password"
                        className="px-5 w-full h-full bg-[#D9D9D9] border rounded "
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="mx-5">Confirm New Password</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      <input
                        type="password"
                        // className="px-5 w-full h-full bg-[#D9D9D9] border rounded "
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className="px-5 w-full h-full bg-[#D9D9D9] border rounded"
                      />
                      {!passwordsMatch &&
                        confirmNewPassword !== "" &&
                        newPassword !== "" && (
                          <p className="text-red-500 text-sm ml-2">
                            Passwords do not match
                          </p>
                        )}
                      {passwordsMatch && confirmNewPassword !== "" && (
                        <p className="text-green-500 text-sm ml-2">
                          Passwords match
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      className={`px-4 py-2 rounded bg-orange text-white ${
                        passwordsMatch && newPassword !== ""
                          ? ""
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={handleChangePassword}
                      disabled={!passwordsMatch || newPassword === ""}
                    >
                      Change Password
                    </button>
                    {changePasswordSuccess &&
                      newPassword === "" &&
                      confirmNewPassword === "" && (
                        <p className="text-green-500 mt-2">
                          Password changed successfully!
                        </p>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------ */}
        </div>
    
    </div>
  );
}

export default UserProfile;

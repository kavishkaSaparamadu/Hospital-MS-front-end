// import React from 'react'
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";



const RegisterPateion = () => {
  
    const [activeTab, setActiveTab] = useState("patients");
    const [patientData, setPatientData] = useState([]);
    const [doctorData, setDoctorData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
  
    useEffect(() => {
      async function viewPatientDetails() {
        try {
          const response = await fetch(
            `http://localhost:5000/pateint/patients`
          );
          if (!response.ok) {
            throw new Error(" Nework response was not ok");
          }
          const data = await response.json();
          setPatientData(data);
        } catch (error) {
          console.error(" Error fetching patients' details" , error);
        }
      }
      viewPatientDetails();
    });
  
    useEffect(() => {
      async function viewDoctorDetails() {
        try {
          const response = await fetch(
            `http://localhost:5000/pateint/patients`
          );
          if (!response.ok) {
            throw new Error(" Nework response was not ok");
          }
          const data = await response.json();
          setDoctorData(data);
        } catch (error) {
          console.error(" Error fetching vehicle details" , error);
        }
      }
      viewDoctorDetails();
    });
  
    const handleRowClick = (rowData) => {
      setSelectedRow(rowData);
    };
    const handleClosePopup = () => {
      setSelectedRow(null);
    };
    return (
      <div>
        {/* <MainLayout data={sideNavBarLinks}> */}
          <div className="flex flex-col gap-10 mt-[4rem] ml-[5rem]">
            <div class="inline-flex">
              <button
                className={`${
                  activeTab === "patients"
                    ? "bg-blue-700 text-black drop-shadow-md border-black border-2"
                    : "bg-white"
                } w-[10rem] hover:bg-orange hover:text-black font-bold hover:border-black py-2 px-4 rounded-l`}
                onClick={() => setActiveTab("patients")}
              >
                Patients
              </button>
              <button
                className={`${
                  activeTab === "doctors"
                    ? "bg-orange text-black drop-shadow-md border-black border-2"
                    : "bg-gray"
                } w-[10rem] hover:bg-orange  hover:text-black font-bold hover:border-black py-2 px-4 rounded-r`}
                onClick={() => setActiveTab("doctors")}
              >
                Doctors
              </button>
            </div>
            {/* -------------------------- Patients details-------------------------------------------- */}
            {activeTab === "patients" && (
              <div className="w-fill h-[45rem] p-8 bg-[#FDF6F6]">
                <h1 className="font-bold text-2xl">Patient Details</h1>
  
                {/* Search Bar */}
                {/* <div>
                  <div className="grid justify-items-end w-3/4 ">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        className=" bg-transparent px-5 py-2 border-2 border-gray rounded-full  outline-none pr-10 placeholder-black placeholder-opacity-75 focus:border-orange"
                        placeholder="Search Drivers..."
                        name="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pt-4">
                        <svg className="h-8 w-8" viewBox="0 0 20 20">
                          <FaSearch />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div> */}
                {/* -------------- */}
  
                <table className="w-full border-separate border-spacing-y-2 mt-4  ">
                  <thead className="bg-blue-500 border-2 text-xl">
                    <tr className="">
                      <th className="px-4 py-4 text-left">ID</th>
                      <th className="px-4 py-4 text-left">Name</th>
                      <th className="px-4 py-4 text-left">Gender</th>
                      <th className="px-4 py-4 text-left">Address</th>
                      <th className="px-4 py-4 text-left">Disease</th>
                      <th className="px-4 py-4 text-left">Email</th>

                    </tr>
                  </thead>
  
                  <tbody className="">
                    {patientData
                    // .filter((patient) =>
                    // patient.user_name.toLowerCase().includes(searchQuery.toLowerCase()) 
                    // )
                    .map((patient) => (
                      <tr
                        key={patient._id}
                        className="bg-blue-200 bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                        onClick={() => handleRowClick(patient)}
                      >
                        <td className="text-left px-4 py-4">{patient._id}</td>
                        <td className="text-left px-4 py-4">{patient.name}</td>
                        <td className="text-left px-4 py-4">{patient.gender}</td>
                        <td className="text-left px-4 py-4">{patient.address}</td>
                        <td className="text-left px-4 py-4">{patient.disease}</td>
                        <td className="text-left px-4 py-4">{patient.email}</td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {/* ---------------end driver details--------------- */}
  
            {/*------------------------------vehicle Details ----------------------------------*/}
  
            {activeTab === "vehicles" && (
              <div className="w-fill h-[45rem] p-8 bg-[#FDF6F6]">
                <h1 className="font-bold text-2xl">Vehicle Details</h1>
                {/* Search Bar */}
                <div>
                  <div className="grid justify-items-end w-3/4 ">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        className=" bg-transparent px-5 py-2 border-2 border-slate-500 rounded-full  outline-none pr-10 placeholder-black placeholder-opacity-75 focus:border-orange"
                        placeholder="Search Vehicles..."
                        name="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pt-4">
                        <svg className="h-8 w-8" viewBox="0 0 20 20">
                          <FaSearch/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                {/* -------------- */}
  
                {/* <table className="w-full border-separate border-spacing-y-2 mt-4  ">
                  <thead className="bg-[#999999] border-2 text-xl">
                    <tr className="">
                      <th className="px-4 py-4 text-left">ID</th>
                      <th className="px-4 py-4 text-left">Vehicle Number</th>
                      <th className="px-4 py-4 text-left">Driver's Name</th>
                      <th className="px-4 py-4 text-left">Driver's Contact</th>
                      <th className="px-4 py-4 text-left">Starting Location</th>
                    </tr>
                  </thead>
  
                  <tbody className="">
                    {vehicleData
                    .filter((vehicle) =>
                    vehicle.vehicle_no
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                    .map((vehicle) => (
                      <tr
                        key={vehicle.vehicle_id}
                        className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                        onClick={() => handleRowClick(vehicle)}
                      >
                        <td className="text-left px-4 py-4">{vehicle.vehicle_id}</td>
                        <td className="text-left px-4 py-4">{vehicle.vehicle_no}</td>
                        <td className="text-left px-4 py-4">
                          {vehicle.driver[0].user_name}
                        </td>
                        <td className="text-left px-4 py-4">{vehicle.driver[0].contact_number}</td>
                        <td className="text-left px-4 py-4">
                          {vehicle.sLocation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
              </div>
            )}
            {/* -------------------------end vehicle data----------------------------- */}
          </div>
          </div>
       )   
        
                              
}


export default RegisterPateion
import React, { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const sideNavBarLinks = [
  { title: 'Dashboard', path: '/patient/patientDashboard' },
  { title: "Appointments", path: "/patient/appointment" },
  { title: "Feedback", path: "/patient/feedback" },
  { title: "History", path: "/patient/history" },
];

const PatientHistory = () => {
  const [medicalGuides, setMedicalGuides] = useState([]);

  useEffect(() => {
    const fetchMedicalGuides = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/guide/guid/line');
        console.log('Fetched data:', response.data.data);  // Ensure you log the correct data
        setMedicalGuides(response.data.data);
      } catch (error) {
        console.error('Error fetching medical reports:', error);
        setMedicalGuides([]);
      }
    };

    fetchMedicalGuides();
  }, []);

  const downloadPDF = () => {
    const input = document.getElementById('reportContent');
    html2canvas(input)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("medical_report.pdf");
      })
      .catch(error => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Medical Report</h1>
      <div className="flex justify-center">
        <div id="reportContent" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(medicalGuides) && medicalGuides.length > 0 ? (
            medicalGuides.map((guide, index) => (
              <div key={index} className="bg-white text-blue-950 p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-lg font-semibold mb-4">Medical Report</h2>
                <p className="text-black">Patient Name: {guide.patientName}</p>
                <p className="text-black">Age: {guide.patientAge}</p>
                <p className="text-black">Diagnosis: {guide.diagnosis}</p>
                <p className="text-black">Doctor: {guide.doctorName}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No medical reports available.</p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={downloadPDF}
          className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
    </MainLayout>
  );
};

export default PatientHistory;

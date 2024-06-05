import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";

const Chatbot = () => {
  useEffect(() => {
    // Inject Botpress script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Inject Botpress config script
    const script2 = document.createElement("script");
    script2.src = "https://mediafiles.botpress.cloud/a5247ea6-7983-4939-a5ff-639c2b576496/webchat/config.js";
    script2.defer = true;
    document.body.appendChild(script2);

    // Clean up the scripts on component unmount
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // This component does not render any visible elements
};

const sideNavBarLinks = [
  { title: 'Dashboard', path: '/patient/patientDashboard' },
  { title: "Appointments", path: "/patient/appointment" },
  { title: "Feedback", path: "/patient/feedback" },
  { title: "History", path: "/patient/history" },
];

const PatientFeedback = () => {
  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Patient Feedback</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Feedback</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              placeholder="Your feedback"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
      <Chatbot />
    </MainLayout>
  );
};

export default PatientFeedback;

import React from "react";
import MainLayout from "../components/layouts/MainLayout";

// Placeholder for Chatbot component
const Chatbot = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white border rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Message</h2>
      <p className="text-sm text-gray-600">How can I help you today?</p>
      {/* Implement chatbot logic here */}
    </div>
  );
};

const sideNavBarLinks = [
  { title: "Dashboard", path: "/patient/patientDashboard" },
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
              className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

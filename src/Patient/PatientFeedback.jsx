import React, { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";
import Rating from "react-rating-stars-component";

const sideNavBarLinks = [
  { title: 'Dashboard', path: '/patient/patientDashboard' },
  { title: "Appointments", path: "/patient/appointment" },
  { title: "Feedback", path: "/patient/feedback" },
  { title: "History", path: "/patient/history" },
];

const PatientFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackStatus, setFeedbackStatus] = useState({
    success: null,
    message: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/feedback/feedback");
        setFeedbacks(response.data.feedbacks);
      } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/feedback/feedback", formData);
      setFeedbackStatus({
        success: true,
        message: response.data.message
      });
      // Clear form fields after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setFeedbackStatus({
        success: false,
        message: error.response ? error.response.data.message : "Failed to submit feedback"
      });
    }
  };

  return (
    <MainLayout data={sideNavBarLinks}>
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Patient Feedback</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Feedback</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Your feedback"
                required
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
          {feedbackStatus.message && (
            <div className={`mt-4 ${feedbackStatus.success ? 'text-green-500' : 'text-red-500'}`}>
              {feedbackStatus.message}
            </div>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">Send Feedback</h1>
          <div className="space-y-4">
            {feedbacks.map(feedback => (
              <div key={feedback._id} className="p-4 border border-gray-300 rounded-md shadow-sm">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{feedback.name}</h2>
                  <Rating
                    count={5}
                    value={feedback.rating || 0}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
                <p className="text-sm text-gray-600">{feedback.email}</p>
                <p className="mt-2">{feedback.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PatientFeedback;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faqs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* FAQs Section (Left Side) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up" // Add AOS effect to the whole FAQ section
        className="w-full lg:w-1/2 bg-blue-200 p-6 rounded-lg shadow-md mb-4 mr-4"
      >
        <h1 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4" data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-2">Q: What are your hospital's visiting hours?</h2>
          <p className="text-gray-700">A: Our hospital's visiting hours are from 9:00 AM to 8:00 PM every day.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-semibold mb-2">Q: Do you accept insurance?</h2>
          <p className="text-gray-700">A: Yes, we accept a wide range of insurance plans. Please contact our billing department for more information.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xl font-semibold mb-2">Q: How do I schedule an appointment?</h2>
          <p className="text-gray-700">A: You can schedule an appointment by calling our reception desk or using our online appointment booking system.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold mb-2">Q: What medical services do you offer?</h2>
          <p className="text-gray-700">A: We offer a wide range of medical services including general medicine, surgery, pediatrics, obstetrics, and more. Please visit our services page for a complete list.</p>
        </div>
      </motion.div>

      {/* Feedback Section (Right Side) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up" // Add AOS effect to the whole feedback section
        className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md mb-4"
      >
        <h2 className="text-3xl font-semibold mb-4">User Feedback</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">Feedback:</label>
            <textarea id="feedback" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Faqs;

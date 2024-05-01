import React from 'react';
import { motion } from 'framer-motion';

const Faqs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Q: What are your hospital's visiting hours?</h2>
          <p className="text-gray-700">A: Our hospital's visiting hours are from 9:00 AM to 8:00 PM every day.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Q: Do you accept insurance?</h2>
          <p className="text-gray-700">A: Yes, we accept a wide range of insurance plans. Please contact our billing department for more information.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Q: How do I schedule an appointment?</h2>
          <p className="text-gray-700">A: You can schedule an appointment by calling our reception desk or using our online appointment booking system.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Q: What medical services do you offer?</h2>
          <p className="text-gray-700">A: We offer a wide range of medical services including general medicine, surgery, pediatrics, obstetrics, and more. Please visit our services page for a complete list.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Faqs;

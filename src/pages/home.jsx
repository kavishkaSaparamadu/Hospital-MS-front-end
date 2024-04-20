import React from 'react';

function Home() {
  return (
    <div>
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* About Our Hospital */}
      <div className="bg-white text-black p-11 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">About Our Hospital</h2>
        <p>
          Your brief description about your hospital goes here...
        </p>
      </div>

      {/* Work Hours */}
      <div className="bg-white text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Work Hours</h2>
        <p>
          Display your hospital's work hours here.
        </p>
      </div>

      {/* Emergency Hours */}
      <div className="bg-white text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Emergency Hours</h2>
        <p>
          Provide information about your hospital's emergency hours here.
        </p>
      </div>

      {/* Hospital Service */}
      <div className="bg-white text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Hospital Services</h2>
        <p>
        We offer a wide range of medical services including primary care, specialized treatments, diagnostic services, and surgical procedures. Our goal is to meet all of your healthcare needs under one roof.        </p>
      </div>
  </div>
  </div>
            
  );
}

export default Home 

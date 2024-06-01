import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });

    // Load Google Maps API script
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    googleMapScript.async = true;
    window.initMap = initMap;
    document.body.appendChild(googleMapScript);

    // Initialize Google Map
    function initMap() {
      const mapContainer = document.getElementById('map');
      const mapOptions = {
        center: { lat: 40.712776, lng: -74.005974 }, // New York City coordinates
        zoom: 12,
      };
      const map = new window.google.maps.Map(mapContainer, mapOptions);

      // Add marker
      const marker = new window.google.maps.Marker({
        position: { lat: 40.712776, lng: -74.005974 }, // New York City coordinates
        map: map,
        title: 'Our Location',
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-200 p-6 rounded-lg shadow-md" data-aos="fade-right">
        <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
        <p>Address: 123 Main Street</p>
        <p>City: New York</p>
        <p>Country: USA</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-md" data-aos="fade-left">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              data-aos="fade-up"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="4"
              data-aos="fade-up"
              data-aos-delay="200"
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Google Map */}
      <div id="map" className="w-full h-screen"></div>
    </div>
  );
}

export default Contact;

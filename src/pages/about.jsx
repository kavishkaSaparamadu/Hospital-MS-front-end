import React from "react";
import MissionImage from '../Images/vision.png'; // Replace '../Images/mission.jpg' with the correct path to your mission image
import VisionImage from '../Images/vision.png'; // Replace '../Images/vision.jpg' with the correct path to your vision image

function About() {
  return (
    <div>
         <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto"></div>
        {/* Mission Section */}
        <section className="my-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-700">
              {/* Enter your mission description here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <img src={MissionImage} alt="Mission" className="min-w-96 max-h-96 aspect-square mr-6" />
            <img src={VisionImage} alt="Vision" className="min-w-96 max-h-96 aspect-square mr-6" />
            </div>
        
        </section>


        {/* Vision Section */}
        
        <section className="my-8">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <div className="flex items-center justify-center">
            <img src={VisionImage} alt="Vision" className="min-w-96 max-h-96 aspect-square mr-9" />
            <p className="text-lg text-gray-700">
              {/* Enter your vision description here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
          </div>
        </section>
      </div>
    </div>
   

  );
}

export default About;

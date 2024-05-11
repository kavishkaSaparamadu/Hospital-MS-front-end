import React from "react";
import MissionImage from '../Images/vision.png'; // Replace '../Images/mission.jpg' with the correct path to your mission image
import VisionImage from '../Images/newviso.png';
//import HeaderVideo from '../Images/video.mp4'
 
//<video src={HeaderVideo} muted autoPlay loop type ="video/mp4" width="95%" height="500" id="vdoAbout" />

function About() {
  return (

   
    <div>
 <div>
    <div className='parallax-container'>
   <div className='parallax-video w-screen'>
   
   
  </div> 
 
         <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto"></div>
        {/* Mission Section */}
        <section className="my-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-700">
            "Our mission is to provide high-quality, compassionate healthcare services to our patients, utilizing the latest medical advancements and best practices. We are dedicated to fostering a culture of continuous improvement, empowering our staff, and serving as a trusted healthcare partner in promoting the well-being of our community."







              {/* Enter your mission description here */}
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
            To be the leading healthcare provider in our community, delivering exceptional patient-centered care, innovative treatments, and promoting wellness for all."
              {/* Enter your vision description here */}
            </p>
          </div>
          
        </section>
      
      </div>
    </div>
   
    
</div>
</div>

  );
}

export default About;

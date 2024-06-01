import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import MissionImage from '../Images/Asiri2photo.png'; // Replace with the correct path to your mission image
import VisionImage from '../Images/newviso.png';
function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can set a global animation duration
    });
  }, []);

  return (
    <div>
      <div class="text-center p-8 bg-white">
    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={MissionImage} alt="gem" class="inline-block rounded " data-aos="fade-left"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h1 class="font-bold mt-8 text-3xl md:mt-0 sm:text-5xl">
              Our Mission            </h1>
            <p class="sm:text-lg mt-6 bg-slate-300"data-aos="fade-right" >
            "Our mission is to provide high-quality, compassionate healthcare services to our patients, utilizing the latest medical advancements and best practices. We are dedicated to fostering a culture of continuous improvement, empowering our staff, and serving as a trusted healthcare partner in promoting the well-being of our community."

            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 ">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={VisionImage} alt="project members" class="inline-block rounded shadow-lg border border-merino-400" data-aos="fade-left"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-5xl">
                Our Vission            </h3>
            <p class="sm:text-lg mt-6 bg-slate-300"data-aos="fade-right">
            "To be the leading healthcare provider in our community, delivering exceptional patient-centered care, innovative treatments, and promoting wellness for all."

            </p>
        </div>
    </div>
    <div>
   
  </div>
        </div>
    </div>

    


      
          
        
      
  
  );
}

export default About;

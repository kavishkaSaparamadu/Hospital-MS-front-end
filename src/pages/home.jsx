import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import lab from "../Images/lab.png";
import pa from "../Images/pharmcy.png";
import roo from "../Images/room.png";
import sta from "../Images/staff.png";
import den from "../Images/dental.png";
import cli from "../Images/clinic.png";
import weH from "../Images/we.png";
import header from "../Images/newHeader.png";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from "react-router-dom";
import whywe from "../Images/AsiriPhoto.png";
import qu from '../Images/qualitydata.png'
function Home() {
  useEffect(()=> {
    AOS.init({
      duration: 1000, // Set animation duration
    });
  },[])

  const getData = async () => {
    try {
      const response = await axios.post('/api/user//get-user-info-by-id',{}, {
        headers: {
          Authorization : 'Bearer' + localStorage.getItem('token'),
        },
      });
      console.log(response.data);
    } catch(errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    
    <div>
      <div class="relative h-screen w-full" data-aos="fade-down">
    <img src={header} alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-none"/>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="absolute inset-0  p-9 m-4 flex flex-col place-items-start justify-center">
        <h1 class="text-7xl text-white font-bold" data-aos="fade-">Family Care Dispensary</h1>
        <p class="text-xl text-white mt-4" data-aos="fade-right" >We Care About Your Health <br/></p>
       <br/>
       <Link to="/login">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-9 rounded-full focus:outline-none focus:shadow-outline animate-bounce" data-aos="fade-up" >
        
          Make Your Appominet    
              </button>
              </Link>

    </div>
    </div>
    
      <div className="parallax-container">
        <div className="parallax-video w-screen">
         
        </div>
        <div className="mask" style={{ backgroundColor: "ButtonHighlight" }}></div>
      </div>

      <div>
        <div className="bg-blue-300 min-h-3.5 flex justify-center items-center">
          <h1 className="text-black font-bold text-4xl">
            FAMILY CARE DISPANSRY
            <br />
            <br />
          </h1>
          <h2 className="text-black text-2xl">We Care About Your Health</h2>
        </div>
        <br />
        <br />

        <section data-aos="fade-up">
          <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-100 text-black p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">About Our Hospital</h2>
              <p className="text-justify">
                Family care Hospital is an incorporated institute under the
                company act No 17 of 1982.
                <br /> Established for providing medical care with the formal
                approval of the Ministry of Health (Registered no PS/PH 226). We
                pride ourselves on being available when you need us most. With
                our 24-hour OPD treatment, including poya day, you can receive
                urgent care and medical attention around the clock.
              </p>
            </div>

            <div className="bg-blue-100 text-black p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Work Hours</h2>
              <p className="text-justify">
                <h1 className="font-extrabold"> Regular Shifts:</h1>
                <br />
                <h2 className="font-semibold"> Day Shift:</h2> 7:00 AM or 8:00
                AM and ends around 3:00 PM or 4:00 PM.
                <br />
                <br />
                <h2 className="font-semibold"> Evening Shift:</h2> 3:00 PM or
                4:00 PM and ends around 11:00 PM or midnight.
                <br />
                <br />
                <h2 className="font-semibold"> Night Shift:</h2> 11:00 PM or
                midnight and ends at around 7:00 AM.
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>

            <div className="bg-blue-100 text-black p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Emergency Contact</h2>
              <p>
                070 299 1777
                <br />
                familycaremedics@gmail.com <br />
                657, Family Care Hospital, Kandy Road, Kelaniya, Sri Lanka.
              </p>
            </div>

            <div className="bg-blue-100 text-black p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Hospital Services</h2>
              <p className="text-justify">
                We offer a wide range of medical services including primary
                care, specialized treatments, diagnostic services, and surgical
                procedures. Our goal is to meet all of your healthcare needs
                under one roof.{" "}
              </p>
            </div>
          </div>
        </section>

        <div data-aos="fade-up">
          <div className="parallax-container">
            <div className="parallax-image w-screen">
              <img src={weH} alt="We Care" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
            <h2
                class="text-3xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl" data-aos="fade-left">
                WHY PATIENTS <br/>
                <span class="font-bold text-blue-500"data-aos="fade-right" >CHOOSE US</span>
                <span class="text-xl font-semibold rounded-full text-blueGray-500"></span>
            </h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" data-aos="fade-up">
            Family Care Health employs, consults, and partners with the most dedicated, skilled, and experienced healthcare professionals to offer some of the country’s most advanced, evidence based clinical programmes for treating complex diseases, through our Centres of Excellence. We have a sound record for offering outstanding outcomes.
                <br/><br/>
          Family Care Health also offers treatment for increasingly common lifestyle-based diseases, preventive healthcare, and the most complete menu of diagnostic tests.
            <br/><br/>
          All Family Care Health Dispensary have international accreditation.            </p>
            <div class="mt-5 sm:flex md:mt-8">
                <div class="rounded-md shadow"data-aos="fade-down"><a href="/chanelling"
                        class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                       Channelling 
                    </a></div>
                
            </div>
        </div>
    </div>
   
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div class="relative w-full p-3 rounded  md:p-8">
            <div class="rounded-lg bg-white text-black w-full"data-aos="fade-left">
                <img src={whywe}/>
            </div>
        </div>
    </div>
</div>
<div className="imge" data-aos="fade-down">
      <img src ={qu}></img>
    </div>

        <section>
          <div data-aos="fade-up">
            <div className="bg-white min-h-3.5 flex justify-center items-center">
              <h1 className="text-black font-bold text-4xl">What we have</h1>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
          <br />
          <br />
          <br />

          <Container>
            <Row>
              <Col xs={10} md={4}>
                <Image src={lab} rounded data-aos="fade-down" />
              </Col>
              <Col xs={10} md={4}>
                <Image src={pa} rounded data-aos="fade-left" />
              </Col>
              <Col xs={10} md={4}>
                <Image src={roo} rounded data-aos="fade-right" />
                <br />
                <br />
              </Col>
              <br />
              <br />
              <Col xs={10} md={4}>
                <Image src={sta} rounded data-aos="fade-up" />
              </Col>
              <Col xs={10} md={4}>
                <div className="bg-blue-200 text-black p-6 rounded-lg shadow-md" data-aos="fade-up">
                  <h2 className="text-2xl font-semibold text-center mb-4">
                    SERVICES
                  </h2>
                  <ul className="text-center">
                    <li>Lab</li>
                    <li>Pharmacy</li>
                    <li>Room</li>
                    <li>Friendly Staff</li>
                    <li>Dental Lab</li>
                  </ul>
                </div>
              </Col>
              <Col xs={10} md={4}>
                <Image src={den} rounded data-aos="fade-down" />
              </Col>

            </Row>
          </Container>

          <br />
          <br />
          <div className="parallax-container">
            <div className="parallax-video w-screen">
              <img src={cli} data-aos="fade-down"></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


export default Home;

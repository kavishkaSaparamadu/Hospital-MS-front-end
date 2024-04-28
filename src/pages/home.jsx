import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import lab from '../Images/lab.png';
import pa from '../Images/pharmcy.png';
import roo from '../Images/room.png';
import sta from '../Images/staff.png';
import den from '../Images/dental.png';
import cli from '../Images/clinic.png';
import weH from '../Images/we.png'
import header from '../Images/headr.png';

function Home() {
  return (

  <div>
    <div className='parallax-container'>
  <div className='parallax-video w-screen'>
   
    <img src={header}></img>
  </div>
  <div className='mask' style={{ backgroundColor: 'ButtonHighlight' }}>  
  </div>
</div>

<div>
      <div className="bg-blue-300 min-h-3.5 flex justify-center items-center">
      {/* Styled h1 element */}
      <h1 className="text-black font-bold text-4xl">FAMILY CARE DISPANSRY
      <br/>
      <br/>
      </h1>
      <h2 className="text-black text-2xl">We Care About Your Health</h2>
      </div>
<br/>
<br/>

<section>
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* About Our Hospital */}
      <div className="bg-blue-100 text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">About Our Hospital</h2>
        <p className= "text-justify">
        Family care Hospital is an incorporated institute under the company act No 17 of 1982.<br/> Established for provide medical care with the formal approval of ministry of Health (Registered no PS/PH 226).
<br/>

We pride ourselves on being available when you need us most. With our 24-hour OPD treatment, including poya day, you can receive urgent care and medical attention around the clock.
        </p>
      </div>

      {/* Work Hours */}
      <div className="bg-blue-100 text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Work Hours</h2>
        <p className='text-justify'>
          <h1 className= "font-extrabold"> Regular Shifts:</h1><br/>
     
<h2 className= "font-semibold">  Day Shift:</h2> 7:00 AM or 8:00 AM and ends around 3:00 PM or 4:00 PM.<br/><br/>
<h2 className= "font-semibold">  Evening Shift:</h2>  3:00 PM or 4:00 PM and ends around 11:00 PM or midnight.<br/><br/>
<h2 className= "font-semibold"> Night Shift:</h2>  11:00 PM or midnight and ends at around 7:00 AM.<br/><br/>
<br/><br/>
        </p>
      </div>

      {/* Emergency Hours */}
      <div className="bg-blue-100 text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Emergency Contact</h2>
        <p>
        070 299 1777<br/>

familycaremedics@gmail.com <br/>

657,
Family Care Hospital,
Kandy Road,
Kelaniya,
Sri Lanka.
        </p>
      </div>

      {/* Hospital Service */}
      <div className="bg-blue-100 text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Hospital Services</h2>
        <p className= "text-justify">
        We offer a wide range of medical services including primary care, specialized treatments, diagnostic services, and surgical procedures. Our goal is to meet all of your healthcare needs under one roof. </p>    
      </div>
      </div>
      </section>
      
     <div className='parallax-container'>
  <div className='parallax-image w-screen'>
    <img src={weH}></img>
  </div>
  </div>
<br/>
<br/>
<br/>

      <section>
      <div>
      <div className="bg-white min-h-3.5 flex justify-center items-center">
      {/* Styled h1 element */}
      <h1 className="text-black font-bold text-4xl">What we have</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
          </div>
          </div>
          <br/>
          <br/>
          <br/>


          

      <Container className="animate-pulse">
      <Row>
        <Col xs={10} md={4}>
          <Image src={lab} rounded />
        </Col>
        <Col xs={10} md={4}>
          <Image src={pa} rounded />
        </Col>
        <Col xs={10} md={4}>
          <Image src={roo} rounded /> <br/> <br/>
        </Col>
        <br/> <br/>
        <Col xs={10} md={4}>
          <Image src={sta} rounded />
        </Col>

        <Col xs={10} md={4}>
      {/* About Our Hospital */}
      <div className="bg-blue-200 text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">SERVISES</h2>
         
          <ul className=  " text-center ">
              <ol>Lab</ol>
              <li>Parmacy</li>
              <li>Room</li>
              <li>Friendly Staff</li>
              <ol>Dental Lab</ol>
          </ul>
          </div>
        </Col>
        <Col xs={10} md={4}>
          <Image src={den} rounded />
        </Col>
</Row>
        </Container>

<br/>
<br/>
<div className='parallax-container'>
  <div className='parallax-video w-screen'>
   
    <img src={cli}></img>
  </div>
  </div>
</section>
</div>
</div>
  );
}

export default Home 

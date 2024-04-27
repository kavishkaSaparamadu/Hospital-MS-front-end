import React from 'react';
import HeaderMv from '../Images/video.mp4'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import viso from '../Images/vision.png';

function Home() {
  return (

  <div>
    <div className='parallax-container'>
  <div className='parallax-img'>
    <div className='mb-auto'></div>
    <video src={HeaderMv} muted autoPlay loop type ="video/mp4"/>
  </div>
  <div className='mask' style={{ backgroundColor: 'ButtonHighlight' }}>  
  </div>
</div>

<section>
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
      </section>

      <section>


 <div className="bg-sky-200 min-h-3.5 flex justify-center items-center">
      {/* Styled h1 element */}
      <h1 className="text-black text-4xl">What we have</h1>
      <br/>
      <br/>
      <br/>
          </div>
      <Container>
      <Row>
        <Col xs={10} md={4}>
          <Image src={viso} rounded />
        </Col>
        <Col xs={10} md={4}>
          <Image src={viso} roundedCircle />
        </Col>
        <Col xs={10} md={4}>
          <Image src={viso} thumbnail />
        </Col>
      </Row>
    </Container>
</section>
</div>
  );
}

export default Home 

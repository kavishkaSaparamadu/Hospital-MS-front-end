import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Headerimage from '../../Images/headr.png'

const Header = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/faqs">FAQS</Nav.Link>
          <Nav.Link href="/contact">Countact Us</Nav.Link>
          
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
          <Nav.Link href="/fogetPassword">Login</Nav.Link>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
     
  <div>
      <div className= 'w-auto h-auto rounded-full mr-4' style={{animationDuration: '3s' }}/>
      <img src={Headerimage} alt="header image" />
      <div className='mask' style={{ backgroundColor: 'lightblue' }}>
        <div className='flex justify-center items-center h-full'>
          <div className='text-blue-600'>
            <h1 className='mb-3 text-4xl'>Family Care Dispensary</h1>
            <h4 className='mb-3 text-lg'>We care About Your Health</h4>
          </div>
        </div>
      </div>
    </div>
  

  
        </div>       
       
        
        )
}

export default Header
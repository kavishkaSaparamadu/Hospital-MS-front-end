import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center bg-black text-white">
    <div className="container p-4">
      <section className="mb-4">
        <button className="bg-white text-black rounded-full p-2 m-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button className="bg-white text-black rounded-full p-2 m-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button className="bg-white text-black rounded-full p-2 m-1">
          <i className="fab fa-google"></i>
        </button>

        <button className="bg-white text-black rounded-full p-2 m-1">
          <i className="fab fa-instagram"></i>
        </button>

        <button className="bg-white text-black rounded-full p-2 m-1">
          <i className="fab fa-linkedin-in"></i>
        </button>

        <button className="bg-white text-black rounded-full p-2 m-1">
          <i className="fab fa-github"></i>
        </button>
      </section>

      <section className="">
        <form action="">
          <div className="flex justify-center">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>

            </div>
        </form>
      </section>

      <section className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h2 className="text-uppercase">Links</h2>
            <ul className="list-none">
              <li>
                <a href="/home" className="text-white">Home</a>
              </li>
              <li>
                <a href="/about" className="text-white">About Us</a>
              </li>
              <li>
                <a href="/faqs" className="text-white">FAQS</a>
              </li>
              <li>
                <a href="/contact" className="text-white">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-uppercase">Contact Detais</h4>
            <ul className="list-none">
              <li>
                <h5 className="text-white">Address:42/2 Kadawatha,Ganemulla</h5>
              </li>
              <li>
                <h5 className="text-white">Email:familyCare@gmal.com</h5>
              </li>
              <li>
                <h5 className="text-white">phone:0112335236</h5>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-uppercase">Produce</h5>
            <ul className="list-none">
            <li>
                <h5 className="text-white">Doctor checking</h5>
              </li> 
              <li>
                <h5 className="text-white">Pharmacy</h5>
              </li>
              <li>
                <h5 className="text-white">Lab</h5>
              </li>
            </ul>
            
          </div>
          <div>
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-none">
              <li>
                <a href="#" className="text-white">Link 1</a>
              </li>
              <li>
                <a href="#" className="text-white">Link 2</a>
              </li>
              <li>
                <a href="#" className="text-white">Link 3</a>
              </li>
              <li>
                <a href="#" className="text-white">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2020 Copyright:
      </div>
    </footer>
  )
}
    
  

export default Footer
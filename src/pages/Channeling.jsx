import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Anur from '../Images/drAnur.png';
import chathu from '../Images/drChaturanga.png';
import pancha from '../Images/panchali.png';
import era from '../Images/drRanga.png';
import rath from '../Images/rathnayake.png';
import mis from '../Images/misel.png';
import login from '../pages/Login/Login';

const Channeling = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="bg-blue-100 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SingleDoctor
            image={Anur}
            DoctorName="Dr. Anuradhu Perera"
            Specialty="Cardiologist"
            Experience="10 years"
            btnHref="/login"
            aosEffect="fade-up"
          />
          <SingleDoctor
            image={chathu}
            DoctorName="Dr. Chathuranga Alwis"
            Specialty="Pediatrician"
            Experience="8 years"
            btnHref="/login"
            aosEffect="fade-up"
          />
          <SingleDoctor
            image={mis}
            DoctorName="Dr. Michael Johnson"
            Specialty="Dermatologist"
            Experience="12 years"
            btnHref="/login"
            aosEffect="fade-up"
          />
          <SingleDoctor
            image={pancha}
            DoctorName="Dr. Panchali Dias"
            Specialty="Dentist"
            Experience="8 years"
            btnHref="/login"
            aosEffect="fade-up"
          />
          <SingleDoctor
            image={era}
            DoctorName="Dr. Eranga Wijesinghe"
            Specialty="Urology"
            Experience="12 years"
            btnHref="/login"
            aosEffect="fade-up"
          />
          <SingleDoctor
            image={rath}
            DoctorName="Dr. Asela Rathnayake"
            Specialty="Neurology"
            Experience="8 years"
            btnHref="/login"
            aosEffect="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default Channeling;

const SingleDoctor = ({
  image,
  DoctorName,
  Specialty,
  Experience,
  btnHref,
  aosEffect,
}) => {
  return (
    <div
      className="mb-10 overflow-hidden rounded-lg bg-white shadow-lg duration-300 hover:shadow-xl dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
      data-aos={aosEffect}
    >
      <img src={image} alt={DoctorName} className="w-full" />
      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a
            href={btnHref ? btnHref : ""}
            className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {DoctorName}
          </a>
        </h3>
        <p className="mb-1 text-base leading-relaxed text-body-color dark:text-dark-6">
          {Specialty}
        </p>
        <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
          {Experience} of experience
        </p>
        <a
          href={btnHref ? btnHref : <login />}
          className="bg-blue-300 inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition ease-out hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
        >
          Appoiment
        </a>
      </div>
    </div>
  );
};

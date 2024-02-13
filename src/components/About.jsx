import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className="text-justify lg:text-start" style={{textAlign: "justify"}}>
        Dr. Siva Teja Jetty, MD MSBA, founded Princeton Aesthetics, a part of Princeton Medical & Aesthetics Center in Princeton Junction, New Jersey. Offering comprehensive healthcare services, Dr. Jetty is a Board Certified Internal Medicine Physician with extensive experience as a Hospitalist and Teaching Physician at RWJ Barnabas Health and Virtua Health.
        </p>
        <p className="text-justify lg:text-start" style={{textAlign: "justify"}}>
        Princeton Aesthetics focuses on providing personalized primary care and advanced medical aesthetic services under one roof. Dr. Jetty is dedicated to partnering with her patients in their health and well-being, offering traditional primary care alongside tailored med-concierge services.
        </p>
        <p className="text-justify lg:text-start" style={{textAlign: "justify"}}>
        She specializes in advanced non-invasive aesthetic treatments such as body sculpting, facial rejuvenation, and various procedures to enhance skin, body, and hair appearance without surgery.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;

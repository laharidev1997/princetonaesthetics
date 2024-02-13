import React from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-3xl font-bold leading-tight">
          "Princeton Aesthetics: Where Beauty Meets Elegance."
        </h1>
        <p className="text-justify mb-5">
        We strive to provide all of our patients with a personalized aesthetics plan specifically tailored to the individual. Discover our luxurious office, where elegance and premier professionalism merge seamlessly. What are you waiting for? Call our office today to begin your journey into profound beauty.
        </p>
        <div className="mt-5 mb-5 flex flex-wrap items-center justify-center lg:justify-start">
          <a href="https://www.instagram.com/princetondoc/" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 lg:mb-0 inline-block hover:cursor-pointer" ><FaInstagram size={30} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 lg:mb-0 inline-block hover:cursor-pointer"><FaLinkedin size={30} /></a>
          <a href="https://www.facebook.com/PrincetonAesthetics/" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 lg:mb-0 inline-block hover:cursor-pointer"><FaFacebook size={30} /></a>
          <a href="https://twitter.com/PrincetonDoctor" target="_blank" rel="noopener noreferrer" className="mr-4 mb-2 lg:mb-0 inline-block hover:cursor-pointer"><FaTwitter size={30} /></a>
          <a href="mailto:example@example.com" className="mb-2 lg:mb-0 inline-block hover:cursor-pointer"><HiOutlineMail size={30} /></a>
        </div>

        <Link to="services" smooth={true} duration={500}>
          <Button title="See Services" />
        </Link>
      </div>
    </div>
  );
};

export default Home;

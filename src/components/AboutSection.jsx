"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShieldAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const AboutSection = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    // <section
    //   ref={inViewRef}
    //   className="about-section  py-20 px-4 md:px-10 flex flex-col bg-[url('/home-about-us-bg.png')] bg-cover bg-center  lg:flex-row items-center justify-center  relative"
    //   style={{
    //     backgroundImage: "url('/home-about-us-bg.png')",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "101% 120% ",
    //     backgroundPosition: "cover center",
    //   }}
    // >
    //   {/* Left Side (Text) */}
    //   <div
    //     className={`w-full  md:w-1/2 px-4 text-center md:text-left transform transition-all duration-1000 ease-in-out  ${
    //       inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
    //     }`}
    //   >
    //     <h2 className="text-3xl text-white sm:text-4xl text-center items-center  font-bold mb-6">
    //       About Us
    //     </h2>
    //     <p className="text-lg text-white sm:text-xl mb-4">
    //       We are a creative team that loves bringing ideas to life through
    //       design, development, and digital solutions. Our mission is to help
    //       brands grow, evolve, and succeed by creating impactful digital
    //       experiences.
    //     </p>
    //     <p className="text-lg sm:text-xl text-white mb-4">
    //       Our passionate team thrives on collaboration and innovation. With
    //       experience in design, marketing, and development, we create tailored
    //       solutions that drive measurable results.
    //     </p>

    //     {/* Icons Section */}
    //     <div className="flex justify-around text-white mt-8 gap-6 text-center">
    //       {/* Licensed Company Icon */}
    //       <div className="flex flex-col items-center">
    //         <FontAwesomeIcon
    //           icon={faCheckCircle}
    //           className="text-red-500 text-3xl mb-2"
    //         />
    //         <p className="text-sm">Licensed Company</p>
    //       </div>

    //       {/* Quality Assurance Icon */}
    //       <div className="flex flex-col items-center">
    //         <FontAwesomeIcon
    //           icon={faShieldAlt}
    //           className="text-red-500 text-3xl mb-2"
    //         />
    //         <p className="text-sm">Quality Assurance</p>
    //       </div>

    //       {/* 24-Hour Service Icon */}
    //       <div className="flex flex-col items-center">
    //         <FontAwesomeIcon
    //           icon={faClock}
    //           className="text-red-500 text-3xl mb-2"
    //         />
    //         <p className="text-sm">24-Hour Service</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Right Side (Image with Bounce Animation) */}
    //   <div
    //     className={`w-full md:w-1/2 mt-8 md:mt-0 transform transition-all duration-1000 ease-in-out ${
    //       inView ? "opacity-100 animate-bounce-in" : "opacity-0 translate-x-20"
    //     }`}
    //     style={{ maxWidth: "500px" }} // Ensure container size is also set to max-width of 500px
    //   >
    //     <Image
    //       src="/home-about-us (1).jpg"
    //       alt="About Us Image"
    //       width={500} // The width is now controlled by Image component
    //       height={500} // The height is also controlled
    //       className="w-full h-full object-cover rounded-lg shadow-lg"
    //     />
    //   </div>
    // </section>
    <section
      ref={inViewRef}
      className="about-section py-16 px-4 md:px-10 flex flex-col lg:flex-row items-center justify-center relative bg-black"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/home-about-us-bg.png')",
        }}
      ></div>

      {/* Left Side (Text) */}
      <div
        className={`w-full lg:w-1/2 z-10 px-4 text-center lg:text-left transform transition-all duration-1000 ease-in-out ${
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
          About Us
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white mb-4 leading-relaxed">
          We are a creative team that loves bringing ideas to life through
          design, development, and digital solutions. Our mission is to help
          brands grow, evolve, and succeed by creating impactful digital
          experiences.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-white mb-6 leading-relaxed">
          Our passionate team thrives on collaboration and innovation. With
          experience in design, marketing, and development, we create tailored
          solutions that drive measurable results.
        </p>

        {/* Icons Section */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 text-white">
          {/* Licensed Company */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-4xl mb-2"
            />
            <p className="text-sm sm:text-base">Licensed Company</p>
          </div>

          {/* Quality Assurance */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-red-500 text-4xl mb-2"
            />
            <p className="text-sm sm:text-base">Quality Assurance</p>
          </div>

          {/* 24-Hour Service */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-red-500 text-4xl mb-2"
            />
            <p className="text-sm sm:text-base">24-Hour Service</p>
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div
        className={`w-full lg:w-1/2 z-10 mt-8 lg:mt-0 transform transition-all duration-1000 ease-in-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Image
          src="/home-about-us (1).jpg"
          alt="About Us Image"
          width={500}
          height={500}
          className="w-full h-auto max-w-sm mx-auto lg:max-w-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;

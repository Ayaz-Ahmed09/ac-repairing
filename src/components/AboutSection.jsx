"use client";
import React from "react";
import { useInView } from "react-intersection-observer"; // Using Intersection Observer
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShieldAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons"; // Font Awesome Icons
import Image from "next/image";

const AboutSection = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false, // Allow repeated triggering on each scroll
    threshold: 0.5, // Trigger the animation when 50% of the section is in view
  });

  return (
    <section
      ref={inViewRef}
      className="about-section  py-20 px-4 md:px-10 flex items-center justify-center lg:bg-[url(/about.jpeg)] bg-center bg-cover flex-col md:flex-row"
    >
      {/* Left Side (Text) */}
      <div
        className={`w-full lg:pb-80 md:w-1/2 px-4 text-center md:text-left transform transition-all duration-1000 ease-in-out  ${
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg sm:text-xl mb-4">
          We are a creative team that loves bringing ideas to life through
          design, development, and digital solutions. Our mission is to help
          brands grow, evolve, and succeed by creating impactful digital
          experiences.
        </p>
        <p className="text-lg sm:text-xl mb-4">
          Our passionate team thrives on collaboration and innovation. With
          experience in design, marketing, and development, we create tailored
          solutions that drive measurable results.
        </p>

        {/* Icons Section */}
        <div className="flex justify-around mt-8 text-center">
          {/* Licensed Company Icon */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-3xl mb-2"
            />
            <p className="text-sm">Licensed Company</p>
          </div>

          {/* Quality Assurance Icon */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-red-500 text-3xl mb-2"
            />
            <p className="text-sm">Quality Assurance</p>
          </div>

          {/* 24-Hour Service Icon */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-red-500 text-3xl mb-2"
            />
            <p className="text-sm">24-Hour Service</p>
          </div>
        </div>
      </div>

      {/* Right Side (Image with Bounce Animation) */}
      <div
        className={`w-full md:w-1/2 mt-8 md:mt-0 transform transition-all duration-1000 ease-in-out ${
          inView ? "opacity-100 animate-bounce-in" : "opacity-0 translate-x-20"
        }`}
      >
        <Image
          src="/aboutus.png"
          alt="About Us Image"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;

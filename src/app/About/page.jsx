"use client";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTools,
  faClock,
  faShieldAlt,
  faHandshake,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="relative w-full min-h-screen bg-cover bg-center text-white mt-16"
      style={{
        backgroundImage: "url('/testing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black overlay for opacity effect
      }}
    >
      <div className="flex flex-col justify-center items-center px-4 text-center py-20">
        {/* Header Section */}
        <h1 className="text-5xl font-bold text-red-600 mb-6">About Us</h1>
        <p className="text-lg max-w-4xl leading-relaxed mb-12">
          Welcome to <span className="font-bold">Supreme AC Repair</span>, your
          trusted partner for all your AC maintenance and repair needs. With
          over a decade of experience, we specialize in keeping your cooling
          systems running efficiently, providing comfort and reliability for
          your home or business.
        </p>

        {/* Why Choose Us Section */}
        <h2 className="text-4xl font-bold text-red-600 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Licensed & Insured */}
          <div className="bg-black p-6 rounded-lg shadow-lg hover:border-2 hover:border-red-600 hover:scale-105 transform transition duration-300">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="font-bold text-xl">Licensed & Insured</h3>
            <p className="text-white">
              Fully licensed and insured, offering reliable and secure services
              for your peace of mind.
            </p>
          </div>

          {/* Expert Technicians */}
          <div className="bg-black p-6 rounded-lg shadow-lg hover:border-2 hover:border-red-600 hover:scale-105 transform transition duration-300">
            <FontAwesomeIcon
              icon={faTools}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="font-bold text-xl">Expert Technicians</h3>
            <p className="text-gray-300">
              Our team of skilled professionals delivers top-notch solutions for
              all AC-related issues.
            </p>
          </div>

          {/* 24/7 Emergency Support */}
          <div className="bg-black p-6 rounded-lg shadow-lg hover:border-2 hover:border-red-600 hover:scale-105 transform transition duration-300">
            <FontAwesomeIcon
              icon={faClock}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="font-bold text-xl">24/7 Emergency Support</h3>
            <p className="text-white">
              Always ready to respond to your urgent AC repair needs anytime.
            </p>
          </div>

          {/* Quality Assurance */}
          <div className="bg-black p-6 rounded-lg shadow-lg hover:scale-105 hover:border-2 hover:border-red-600 transform transition duration-300">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="font-bold text-xl">Quality Assurance</h3>
            <p className="text-white">
              Using premium parts and delivering top-tier service for long-term
              reliability.
            </p>
          </div>

          {/* Affordable Pricing */}
          <div className="bg-black p-6 rounded-lg shadow-lg hover:border-2 hover:border-red-600 hover:scale-105 transform transition duration-300">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="font-bold text-xl">Affordable Pricing</h3>
            <p className="text-white">
              Transparent and competitive pricing without sacrificing quality.
            </p>
          </div>

          {/* Custom Solutions */}
          <div className="bg-black p-6 rounded-lg shadow-lg hover:border-2 hover:border-red-600 hover:scale-105 transform transition duration-300">
            <FontAwesomeIcon
              icon={faCogs}
              className="text-red-600 text-4xl mb-4"
            />
            <h3 className="font-bold text-xl">Custom Solutions</h3>
            <p className="text-white">
              Tailored services to meet your unique cooling system requirements.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-xl text-white mb-6">
            Experience exceptional service and commitment to quality with
            Supreme AC Repair. Let us keep you cool and comfortable.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-black transition duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;

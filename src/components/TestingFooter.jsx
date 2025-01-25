"use client";
import React, { useState } from "react";
import "./Testing.css";

const Footer = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX, y: clientY });
  };

  return (
    <footer
      className="relative bg-black text-white py-12 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Mouse tracking gradient */}
      <div
        className="absolute inset-0 pointer-events-none gradient-overlay"
        style={{
          "--x": `${cursorPosition.x}px`,
          "--y": `${cursorPosition.y}px`,
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-center space-y-6">
        <h2 className="text-4xl font-bold text-red-500 font-quicksand">
          Precision Meets Art
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Experience top-notch AC repairs with innovative design and service.
        </p>
        <div className="flex justify-center space-x-8 mt-6">
          <a
            href="#"
            className="text-red-500 hover:text-white transition duration-300"
          >
            <i className="fab fa-facebook-f text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-red-500 hover:text-white transition duration-300"
          >
            <i className="fab fa-twitter text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-red-500 hover:text-white transition duration-300"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-red-500 hover:text-white transition duration-300"
          >
            <i className="fab fa-linkedin-in text-3xl"></i>
          </a>
        </div>
        <p className="text-sm font-light mt-6">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShieldAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const DAboutSection = ({
  title,
  description1,
  description2,
  icons = [],
  image,
}) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  return (
    <section
      ref={inViewRef}
      className="about-section py-20 px-4 md:px-10 flex items-center justify-center flex-col md:flex-row bg-[url('/footer.jpeg')] bg-cover bg-center"
    >
      {/* Left Side (Text) */}
      <div
        className={`w-full md:w-1/2 lg:ml-16 px-4 text-white md:text-left transform transition-all duration-1000 ease-in-out ${
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl text-center font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg text-center sm:text-xl mb-4">{description1}</p>
        <p className="text-lg text-center sm:text-xl mb-4">{description2}</p>

        {/* Icons Section */}
        {/* <div className="flex justify-around mt-16 lg:mr-20 text-center gap-6">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={icon.icon}
                className="text-red-500 text-2xl mb-2"
              />
              <p className="text-sm">{icon.label}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Right Side (Image with Bounce Animation) */}
      <div
        className={`w-full md:w-1/2  mt-8 md:mt-0 transform transition-all duration-1000 ease-in-out ${
          inView ? "opacity-100 animate-bounce-in" : "opacity-0 translate-x-20"
        }`}
      >
        <Image
          src={image}
          alt="About Us Image"
          width={1000} // Decrease the width
          height={1000} // Decrease the height
          className="w-[500px] h-[500px] lg:ml-20 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default DAboutSection;

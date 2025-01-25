"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faThumbsUp,
  faShieldAlt,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons"; // Necessary icons

const DWhyChooseUs = ({ title, description }) => {
  return (
    <section className="why-choose-us py-16 px-4 md:px-10 bg-black text-white">
      <div className="container mx-auto text-center">
        {/* Dynamic Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-red-500">
          {title}
        </h2>

        {/* Dynamic Description */}
        <p className="text-lg sm:text-xl mb-12">{description}</p>

        {/* Static Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Icon 1: Professional Service */}
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faTools}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
            <p>
              Expert technicians provide high-quality repairs and installations
              for all AC brands.
            </p>
          </div>

          {/* Icon 2: Satisfaction Guaranteed */}
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Satisfaction Guaranteed
            </h3>
            <p>
              We ensure customer satisfaction with every service, backed by
              positive reviews and repeat clients.
            </p>
          </div>

          {/* Icon 3: Quality Parts */}
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Quality Parts</h3>
            <p>
              We use only top-quality parts to ensure durability and optimal
              performance of your AC system.
            </p>
          </div>

          {/* Icon 4: 24/7 Customer Support */}
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              24/7 Customer Support
            </h3>
            <p>
              Our dedicated team is available 24/7 to assist you with emergency
              repairs or inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DWhyChooseUs;

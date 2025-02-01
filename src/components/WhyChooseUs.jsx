"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faThumbsUp,
  faShieldAlt,
  faHeadset,
  faHandshake, // New icon for Customer-Focused
  faMapMarkerAlt, // New icon for Citywide Service (font-awesome icon)
  faDollarSign, // New icon for Affordable Pricing
  faCheckCircle, // New icon for Customer-Focused (duplicate)
} from "@fortawesome/free-solid-svg-icons"; // Necessary icons

const WhyChooseUs = () => {
  return (
    <section className=" py-16 px-4 md:px-10 bg-black text-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-red-500">
          Why Choose Us For Air Condition Services
        </h3>
        <p className="text-lg sm:text-xl mb-12">
          We are the trusted choice for all types and brands AC repair,
          installation, and maintenance in Dubai. We only use genuine, durable
          parts in all our services, ensuring your AC performs reliably in
          Dubai’s heat. Backed by a warranty, our commitment to quality
          guarantees your comfort and peace of mind. Choose us for reliable,
          top-notch AC services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Icon 1: Professional Service */}
          <div className="flex flex-col items-center text-center ">
            <FontAwesomeIcon
              icon={faTools}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
            <p>
              Our highly trained professionals handle all AC systems with
              expertise
            </p>
          </div>

          {/* Icon 2: Satisfaction Guaranteed */}
          <div className="flex flex-col items-center text-center ">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Satisfaction Guaranteed
            </h3>
            <p>Confidence in our services with warranty coverage.</p>
          </div>

          {/* Icon 3: Quality Parts */}
          <div className="flex flex-col items-center text-center ">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Quality Parts</h3>
            <p>
              We use durable, high-quality parts for efficient and long-lasting
              performance.
            </p>
          </div>

          {/* Icon 4: 24/7 Customer Support */}
          <div className="flex flex-col items-center text-center ">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              24/7 Customer Support
            </h3>
            <p>Fast, reliable assistance whenever you need it.</p>
          </div>

          {/* Icon 5: Customer-Focused */}
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Customer-Focused</h3>
            <p>
              We prioritize our customers by offering personalized services to
              meet their unique needs.
            </p>
          </div>

          {/* Icon 6: Citywide Service */}
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Citywide Service</h3>
            <p>
              Our services are available across the city, ensuring we can assist
              you no matter where you are.
            </p>
          </div>

          {/* Icon 7: Affordable Pricing */}
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p>Transparent, competitive rates with no hidden fees</p>
          </div>

          {/* Icon 8: Customer-Focused (Duplicate) */}
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Customer-Centered</h3>
            <p>
              Choose us for professional, affordable, and reliable AC services.
              We’re here to keep your space cool and comfortable, no matter the
              weather!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

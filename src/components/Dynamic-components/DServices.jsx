"use client";
import React from "react";
import Cards from "../Card";
// The dynamic Services component that accepts data as a prop
const Services = ({ services }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold font-quicksand text-center mb-8 mt-2 ">
        Our Services
      </h2>
      <div
        id="services"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
      >
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <Cards
              title={service.name}
              description={service.description}
              viewDetailLink={service.link}
              image={service.image}
              callNowLink={service.callNowLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

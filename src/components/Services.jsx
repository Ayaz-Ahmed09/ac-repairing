"use client";
import React, { useEffect } from "react";
import Cards from "./Card";
import "./animations.css";
const Services = () => {
  const services = [
    {
      name: "Split AC Services",
      description:
        "We offer high-quality AC repairs for all brands, providing fast and efficient solutions.",
      link: "/split-ac",
      image: "/main services/split-ac.jpeg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Central AC Services",
      description:
        "Ensure smooth operation year-round with our regular AC maintenance services.",
      link: "/central-ac",
      image:
        "/main services/central-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+1 234 567 892",
    },
    {
      name: "Window AC Services",
      description:
        "Quick and professional installation of your new AC unit, ensuring perfect performance.",
      link: "/window-ac",
      image:
        "/main services/window-ac-reparing-and-installing-home-services-.jpg",
      callNowLink: "+1 234 567 891",
    },

    {
      name: "Portable AC Services",
      description:
        "Fast and reliable emergency AC repair services to get your system back in action.",
      link: "/portable-ac",
      image:
        "/main services/portable-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+1 234 567 893",
    },
    {
      name: "Chiller AC Services",
      description:
        "Fast and reliable emergency AC repair services to get your system back in action.",
      link: "/chiller-ac",
      image:
        "/main services/chillar-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+1 234 567 893",
    },
    {
      name: "Cassette AC Services",
      description:
        "Fast and reliable emergency AC repair services to get your system back in action.",
      link: "/cassette-ac",
      image:
        "/main services/cassete-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+1 234 567 893",
    },
    {
      name: "VRF/VRV AC Services",
      description:
        "Fast and reliable emergency AC repair services to get your system back in action.",
      link: "/vrf-vrv-ac",
      image: "/main services/vrf-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+1 234 567 893",
    },

    {
      name: "Ice Machine Services",
      description:
        "Fast and reliable emergency AC repair services to get your system back in action.",
      link: "/ice-machine-services",
      image: "/main services/ice-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+1 234 567 893",
    },
    {
      name: "Duct Cleaning & Repairing",
      description:
        "Fast and reliable emergency AC repair services to get your system back in action.",
      link: "/duct-cleaning",
      image:
        "/main services/duct-cleaningac-reparing-and-installing-home-services (1).jpg",
      callNowLink: "+1 234 567 893",
    },
    {
      name: "Smart Thermostat Installation",
      description:
        "Fast and reliable emergency AC repair services to get your system back in action.",
      link: "/thermostat-installation",
      image:
        "/main services/smart-thermostate-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+1 234 567 893",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-right");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section>
      <h1 className="text-3xl text-white font-bold font-quicksand text-center mb-8 mt-6 ">
        Our Services
      </h1>
      <div
        id="services"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-4 "
      >
        {services.map((service, index) => (
          <div key={index} className="service-card font-quicksand">
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

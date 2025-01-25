"use client";
import React from "react";
import DHeroSection from "@/components/Dynamic-components/DHeroSection";
import DServices from "@/components/Dynamic-components/DServices";
import DAboutSection from "@/components/Dynamic-components/DAboutus";
import CounterCard from "@/components/sub-components/CounterCard"; // Import the Dynamic About Section
import {
  faCheckCircle,
  faShieldAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import DWhyChooseUs from "@/components/Dynamic-components/DWhyChooseUs";

const page = () => {
  const splitAcServices = [
    {
      name: "Split AC Installation",
      description: "Professional installation of Split AC systems.",
      link: "/split-ac/installation",
      image: "/images/split-ac-installation.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Split AC Repair",
      description: "Quick and efficient repair for Split AC systems.",
      link: "/split-ac/repair",
      image: "/images/split-ac-repair.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Split AC Cleaning",
      description: "Quick and efficient repair for Split AC systems.",
      link: "/split-ac/repair",
      image: "/images/split-ac-repair.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Split AC Performance Optimization",
      description: "Quick and efficient repair for Split AC systems.",
      link: "/split-ac/repair",
      image: "/images/split-ac-repair.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Split Leak Check",
      description: "Quick and efficient repair for Split AC systems.",
      link: "/split-ac/repair",
      image: "/images/split-ac-repair.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Split Leak Check",
      description: "Quick and efficient repair for Split AC systems.",
      link: "/split-ac/repair",
      image: "/images/split-ac-repair.jpg",
      callNowLink: "+1 234 567 891",
    },
  ];

  const aboutData = {
    title: "About Our Split AC Services",
    description1:
      "We are experts in Split AC services, offering installation, maintenance, and repair solutions.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/split-ac/split-ac-about-installing-and-reparing.jpg", // Path to image
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <DHeroSection
        image="/split-ac/split-ac-banner (2).png"
        heading="Best Split AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DServices services={splitAcServices} />

      {/* Dynamic About Section */}
      <DAboutSection
        title={aboutData.title}
        description1={aboutData.description1}
        description2={aboutData.description2}
        icons={aboutData.icons}
        image={aboutData.image}
      />

      {/* Counter Cards */}
      <div className="bg-red-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-10">
        <CounterCard
          targetValue={100}
          label="Satisfied Clients"
          unit="k"
          backgroundColor="black"
          textColor="white"
        />
        <CounterCard
          targetValue={30}
          label="Services Offered"
          unit="+"
          backgroundColor="red"
          textColor="white"
        />
        <CounterCard
          targetValue={25}
          label="Years of Experience"
          unit="+"
          backgroundColor="black"
          textColor="white"
        />
      </div>
      <DWhyChooseUs
        title="Why Choose Us for Residential Repairs?"
        description="Our residential AC repair services ensure your home stays cool and comfortable with minimal hassle."
      />
    </div>
  );
};

export default page;

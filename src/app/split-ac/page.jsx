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
import ContactUs from "@/components/ContactUs";

const page = () => {
  const splitAcServices = [
    {
      name: "Installation",
      description: "Professional installation of Split AC systems.",
      // link: "/split-ac/installation",
      image: "/split-ac/Split ac installation.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Compressor Repair",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/split-ac/comprossor.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Condenser Coil Cleaning",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/split-ac/condensor-coil.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Thermostat Replacement",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/split-ac/thermostat.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Gas Leak Check & Recharge",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/split-ac/gas-check.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Air Quality Improvement",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/split-ac/Airquality.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Evaporator Coil Cleaning",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/split-ac/Split ac evaporator cleaning.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Fan Motor Repair & Replacement",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/split-ac/FanMotorrepair.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Sensor Repair and Replacement",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/split-ac/sensorsrepair.jpg",
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
    image: "/split-ac/about.jpg", // Path to image
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
      <div className="bg-gradient-to-r from-black via-red-600 to-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-10">
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
      <ContactUs />
    </div>
  );
};

export default page;

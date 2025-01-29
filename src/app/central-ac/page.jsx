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
  const CentralAcServices = [
    {
      name: "Installation",
      description: "Professional installation of Central AC systems.",
      // link: "/split-ac/installation",
      image: "/central-ac/central ac installation.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Compressor Repair",
      description: "Quick and efficient repair for Central AC systems.",
      // link: "/split-ac/repair",
      image: "/central-ac/central ac compressor repair.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Condenser Coil Cleaning",
      description: "Quick and efficient repair for Central AC systems.",
      // link: "/split-ac/repair",
      image: "/central-ac/central ac condesoor coil clean.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Thermostat Replacement",
      description: "Quick and efficient repair for Central AC systems.",
      // link: "/split-ac/repair",
      image: "/central-ac/central ac thermostat.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Blower Fan",
      description: "Quick and efficient repair for Central AC systems.",
      // link: "/split-ac/repair",
      image: "/central-ac/central ac blower motor.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Air Quality Improvement",
      description: "Quick and efficient repair for  Central AC systems.",
      // link: "/split-ac/repair",
      image: "/central-ac/central ac air qualitypsd.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Evaporator Coil Cleaning",
      description: "Quick and efficient repair for Central AC systems.",
      // link: "/split-ac/repair",
      image: "/central-ac/central evaporator coil cleaning.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Air Handler/Furnace",
      description: "Quick and efficient repair for Central AC systems.",
      // link: "/split-ac/repair",
      image: "/central-ac/central ac air furnance.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Ductwork",
      description: "Quick and efficient repair for Central AC systems.",
      // link: "/split-ac/repair",
      image: "/central-ac/central ac duckt 2.jpg",
      callNowLink: "+1 234 567 891",
    },
  ];

  const aboutData = {
    title: "About Our Central AC Services",
    description1:
      "We are experts in Central AC services, offering installation, maintenance, and repair solutions.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/central-ac/central-ac-about-us.jpg", // Path to image
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <DHeroSection
        image="/central-ac/central-banners.png"
        heading="Best Central AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DServices services={CentralAcServices} />

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
        title="Why Choose Us ?"
        description="Our residential AC repair services ensure your home stays cool and comfortable with minimal hassle."
      />
      <ContactUs />
    </div>
  );
};

export default page;

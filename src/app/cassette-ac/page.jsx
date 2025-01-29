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
  const CassetteAcServices = [
    {
      name: "Installation",
      description: "Professional installation of Split AC systems.",
      // link: "/split-ac/installation",
      image: "/cassette-ac/cassete ac installation.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Airflow Adjustment ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/cassette-ac/chiller ac air flow.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Drip Tray & Condensation Check",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/cassette-ac/deep-tray.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Refrigerant Level Check",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/cassette-ac/gas-check.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Component Repairs",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/cassette-ac/compounent.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Air Filter Replacement",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/cassette-ac/chiller ac air filter replacement.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Drain Line Clearing ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/chiller-ac/performance.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Unit Replacement ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/cassette-ac/cassete ac unit rplacement.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Leak & Refrigerant Issues ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/cassette-ac/leaks.jpg",
      callNowLink: "+1 234 567 891",
    },
  ];

  const aboutData = {
    title: "About Our Cassette AC Services",
    description1:
      "We are experts in Cassette AC services, offering installation, maintenance, and repair solutions.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/cassette-ac/about-us-cassete-ac.jpg", // Path to image
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <DHeroSection
        image="/cassette-ac/ac banners casste.png"
        heading="Best Chiller AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DServices services={CassetteAcServices} />

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

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
  const PortableAcServices = [
    {
      name: "Installation",
      description: "Professional installation of Split AC systems.",
      // link: "/split-ac/installation",
      image: "/portable-ac/install.png",
      callNowLink: "+1 234 567 890",
    },
    // {
    //   name: "",
    //   description: "Quick and efficient repair for Split AC systems.",
    //   link: "/split-ac/repair",
    //   image: "/images/split-ac-repair.jpg",
    //   callNowLink: "+1 234 567 891",
    // },
    {
      name: " Coil & Vent Cleaning ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/portable-ac/cleaning.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: " Drainage & Water Tank Maintenance ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/portable-ac/water.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Filter Cleaning/Replacement",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/portable-ac/coil.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Component Repairs",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/portable-ac/comp.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Refrigerant Refilling (if applicable)",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/portable-ac/gas.jpg",
      callNowLink: "+1 234 567 891",
    },
  ];

  const aboutData = {
    title: "About Our Portable AC Services",
    description1:
      "We are experts in Portable AC services, offering installation, maintenance, and repair solutions.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" },
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/portable-ac/about.jpg",
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <DHeroSection
        image="/portable-ac/portable ac banners.png"
        heading="Best Portable AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DServices services={PortableAcServices} />

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

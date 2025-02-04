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
import Testimonial from "@/components/Testimonial";
import DynamicSection from "@/components/DynamicSection";
const page = () => {
  const CassetteAcServices = [
    {
      name: "Installation",
      description:
        "Our expert team provides professional cassette AC installation, ensuring optimal placement and efficient cooling for your space.",
      image: "/cassette-ac/cassete ac installation.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Cooling Issues Diagnosis and Repair",
      description:
        "Identifying and fixing problems like insufficient cooling, warm air, or inconsistent temperature due to issues with the compressor, refrigerant, or electrical components.",
      image: "/cassette-ac/cassete ac cooling issues.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Drip Tray & Condensation Check",
      description: "Inspecting and cleaning drip trays to prevent water leaks.",
      image: "/cassette-ac/deep-tray.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Refrigerant Level Check",
      description:
        "Ensuring proper refrigerant levels for efficient performance.",
      image: "/cassette-ac/gas-check.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Component Repairs",
      description:
        "Repairing and replacing faulty AC components for reliability.",
      image: "/cassette-ac/compounent.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Air Filter Replacement",
      description:
        "Cleaning or replacing clogged filters to improve airflow, efficiency, and air quality.",
      image: "/cassette-ac/chiller ac air filter replacement.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Drain Line Clearing",
      description:
        "Ensuring proper water drainage by inspecting and clearing any blockages in the drain lines to prevent water leakage and mold growth.",
      image: "/chiller-ac/performance.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Compressor Repair and Replacement",
      description:
        "Fixing or replacing the compressor if it’s not functioning correctly, as it is critical to the AC’s cooling process.",
      image: "/cassette-ac/cassete ac compressor repair (1).jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Leak & Refrigerant Issues",
      description:
        "Identifying refrigerant leaks and refilling the system to ensure optimal cooling performance.",
      image: "/cassette-ac/leaks.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Coil Cleaning and Maintenance",
      description:
        "Cleaning the evaporator and condenser coils to prevent dirt buildup, which can reduce cooling efficiency and cause system damage.",
      image: "/cassette-ac/cassete ac coil cleaning.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Electrical Component Repairs",
      description:
        " Inspecting and repairing electrical parts like wiring, circuit boards, and thermostats to maintain safe and reliable operation.",
      image: "/cassette-ac/cassete ac Unit Reinstallation and Realignment.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Thermostat Calibration and Repair",
      description:
        " Adjusting or repairing the thermostat to ensure accurate temperature regulation and efficient operation.",
      image: "/cassette-ac/cassete ac thermostate repair.jpg",
      callNowLink: "+971543888004",
    },
  ];

  const aboutData = {
    title: "Top-Notch Cassette AC Maintenance & Installation Services",
    description1:
      "Maintain a comfortable and trendy environment in Dubai with our expert cassette AC repair and installation services. We ensure smooth, long-lasting performance by using only premium, genuine parts. Trust us for reliable, energy-efficient cooling, backed by a warranty on all our work.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/cassette-ac/about-us-cassete-ac.jpg", // Path to image
  };
  const whyChooseUsData = {
    heading: " Why Choose Us For Cassette AC Services",
    description:
      "We offer the best quality services, with customer satisfaction being our top priority.",
    iconDescriptions: [
      "Our highly trained specialists are equipped to work on all types of cassette AC systems with utmost precision.",
      "We offer clear, competitive pricing with no hidden fees or extra charges.  ",
      "Citywide Service",
      "We take pride in our attention to detail, ensuring your cassette AC operates at its highest efficiency.",
      "Our prompt and dependable emergency services ensure your cassette AC is up and running in no time.",
      "Our work is backed by a warranty, giving you peace of mind in our commitment to quality.",
      "We only use robust, premium-grade parts designed specifically for cassette AC units",
      "We provide customized solutions designed to meet your specific comfort and satisfaction needs.",
    ],
  };
  const homeContent = {
    heading: "Cassette AC Repair & Installation Services in Dubai",
    description:
      "For the ultimate in comfort and style, a well-functioning cassette AC system is a must in Dubai’s heat. Whether you need repairs or a new installation, our skilled technicians are here to provide fast, reliable service, ensuring your space remains cool throughout the year.",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Quality Work",
      "24/7 Cassette Ac Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <title>
        Professional Services Of Cassette AC Repair & Installation in Dubai
      </title>
      {/* Hero Section */}
      <DHeroSection
        image="/cassette-ac/ac banners casste.png"
        heading="Best Cassette AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
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
      <div className="bg-gradient-to-r from-black via-red-600 to-black grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 px-4 py-10">
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
        heading={whyChooseUsData.heading}
        description={whyChooseUsData.description}
        iconDescriptions={whyChooseUsData.iconDescriptions}
      />
      <Testimonial page="Cassettepage" />
      <ContactUs />
    </div>
  );
};

export default page;

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
import DynamicSection from "@/components/DynamicSection";
import Testimonial from "@/components/Testimonial";

const page = () => {
  const ThermoServices = [
    {
      name: "Nest (By Google)",
      description:
        "Professional installation and setup of Nest smart thermostats. Enjoy energy savings, remote control, and seamless integration with your smart home ecosystem.",
      // link: "/split-ac/installation",
      image: "/thermo/smart thermostate nest.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Ecobee",
      description:
        "Expert installation and configuration of Ecobee smart thermostats. Optimize your home's energy efficiency with room sensors and smart scheduling features.",
      // link: "/split-ac/repair",
      image: "/thermo/smart thermostate ecobee.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "HoneyWell Home (Resideo)",
      description:
        "Professional installation and support for HoneyWell Home smart thermostats. Experience reliable performance, intuitive controls, and energy-saving features.",
      // link: "/split-ac/repair",
      image: "/thermo/smart thermostate honeywell.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Mysa",
      description:
        "Specialized installation of Mysa smart thermostats for high-voltage systems. Enjoy precise temperature control and energy efficiency for your heating and cooling needs.",
      // link: "/split-ac/repair",
      image: "/thermo/smart thermostate mysa.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Tado",
      description:
        "Professional setup of Tado smart thermostats. Enhance your home's comfort with geofencing, smart scheduling, and energy-saving features.",
      // link: "/split-ac/repair",
      image: "/thermo/smart thermostate tado.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Lux",
      description:
        "Expert installation of Lux smart thermostats. Enjoy simple, reliable, and energy-efficient temperature control for your home.",
      // link: "/split-ac/repair",
      image: "/thermo/smart thermostate lux.jpg",
      callNowLink: "+971543888004",
    },
  ];

  const aboutData = {
    title: "About Our Thermostat Services",
    description1:
      "We are experts in Portable AC services, offering installation, maintenance, and repair solutions.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" },
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/thermo/smart-thermostate-about-us.jpg",
  };
  const whyChooseUsData = {
    heading: "Why Choose Us?",
    description:
      "We offer the best quality services, with customer satisfaction being our top priority.",
    iconDescriptions: [
      "Quality Workmanship",
      "Affordable Pricing",
      "Citywide Service",
      "Customer-Focused",
      "Quick Response",
      "Expert Technicians",
      "Emergancy service",
      "Reliable Service",
    ],
  };
  const homeContent = {
    heading: "ThermoState AC Repair & Installation Service in Dubai",
    description:
      "For the ultimate in comfort and style, a well-functioning Thermostat system is a must in Dubai’s heat. Whether you need repairs or a new installation, our skilled technicians are here to provide fast, reliable service, ensuring your space remains cool throughout the year.",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Quality Work",
      "24/7 Thermostat Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <DHeroSection
        image="/thermo/ac banners smart thermostate.png"
        heading="Best Thermostat Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
      />
      <DServices services={ThermoServices} />

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
        heading={whyChooseUsData.heading}
        description={whyChooseUsData.description}
        iconDescriptions={whyChooseUsData.iconDescriptions}
      />
      <Testimonial page="thermopage" />
      <ContactUs />
    </div>
  );
};

export default page;

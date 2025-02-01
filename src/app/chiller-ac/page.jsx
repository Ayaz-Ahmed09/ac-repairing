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
  const ChillerAcServices = [
    {
      name: "Installation",
      description:
        "Offering installation of new chiller systems or replacing outdated models with more efficient units.",
      image: "/chiller-ac/chiller ac installaition.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Chiller Cleaning & Inspection",
      description:
        "Offering installation of new chiller systems or replacing outdated models with more efficient units.",
      image: "/chiller-ac/cleaning.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Check Refrigerant Levels",
      description:
        " Identifying leaks in the refrigerant lines and recharging the system with the right type and amount of refrigerant.",
      image: "/chiller-ac/chiller ac refrigent.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Refrigerant Leak Repair",
      description: "Detecting and repairing leaks to prevent refrigerant loss.",
      image: "/chiller-ac/leak-check.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Compressor Replacement or Repair",
      description:
        "Addressing issues with the compressor, which is crucial for cooling, to ensure proper functioning.",
      image: "/chiller-ac/chiller ac compressor.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Condenser and Evaporator Coil Cleaning",
      description:
        " Cleaning coils to ensure efficient heat exchange and prevent the buildup of dirt or debris that can reduce performance.",
      image: "/chiller-ac/chiller ac coil.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Water Treatment & Filtration",
      description:
        " Ensuring that the water used in the system is properly treated and filtered to prevent scaling or corrosion.",
      image: "/chiller-ac/chiller ac water treatment.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Replacing Components",
      description:
        "Upgrading or replacing faulty components for better efficiency.",
      image: "/chiller-ac/chiller ac components replacing.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Retrofit for Improved Performance",
      description:
        "Testing the overall system to identify performance issues and optimizing settings for maximum efficiency.",
      image: "/chiller-ac/chiller ac testing and optimization.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Pump & Valve Maintenance",
      description:
        " Inspecting and repairing pumps, expansion valves, and other components that regulate the flow of water or refrigerant within the system.",
      image: "/chiller-ac/chiller ac pump and valve.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Load & Capacity Checks",
      description: "Ensuring the chiller meets cooling demands efficiently.",
      image: "/chiller-ac/chiller ac load check.jpg",
      callNowLink: "+971569096124",
    },
  ];
  const homeContent = {
    heading: "Chiller AC Repair & Installation Services in Dubai",
    description:
      "Experience the difference of a perfectly functioning chiller AC system. Our skilled technicians provide expert repair and installation services to keep your Dubai business cool and comfortable.",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Quality Work",
      "24/7 Chiller Ac Service",
    ],
  };
  const aboutData = {
    title: "Top-Notch Chiller AC Maintenance & Installation Services",
    description1:
      "A reliable chiller system is key to maintaining your business’s comfort. Our professional team delivers expert repairs and seamless installations using only top-tier parts and adhering to best industry standards. We handle everything from cooling issues to unit installation, ensuring efficiency, performance, and energy savings.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/chiller-ac/chiller ac about us.jpg", // Path to image
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
      "Fast Delivery",
      "Reliable Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <title>Top-Notch Chiller AC Repair & Installation Service in Dubai</title>
      {/* Hero Section */}
      <DHeroSection
        image="/chiller-ac/chiller ac banners.png"
        heading="Best Chiller AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
      />
      <DServices services={ChillerAcServices} />

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
        heading={whyChooseUsData.heading}
        description={whyChooseUsData.description}
        iconDescriptions={whyChooseUsData.iconDescriptions}
      />
      <Testimonial page="chillerpage" />
      <ContactUs />
    </div>
  );
};

export default page;

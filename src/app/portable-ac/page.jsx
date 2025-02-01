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
  const PortableAcServices = [
    {
      name: "Installation",
      description:
        "Expert repair and installation for portable AC units in Dubai, ensuring efficient and long-lasting cooling solutions.",
      image: "/portable-ac/install.png",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Coil & Vent Cleaning",
      description:
        "Thorough cleaning of coils and vents to maintain airflow efficiencyCleaning the coils and vents of your portable AC improves airflow, boosts efficiency, and prevents overheating.",
      image: "/portable-ac/cleaning.jpg",
      callNowLink: "+971569096124",
    },

    {
      name: "Cooling Issue Diagnosis & Repair",
      description:
        "Fixing problems like inadequate cooling or warm air blowing due to refrigerant leaks or compressor issues.",
      image: "/portable-ac/cooling.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Filter Cleaning & Replacement",
      description:
        "Cleaning or replacing the air filter to improve airflow and air quality.",
      image: "/portable-ac/coil.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Thermostat Replacement",
      description:
        "Fixing inaccurate temperature readings or malfunctioning thermostats that affect cooling performance.",
      image: "/portable-ac/thermo.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Refrigerant Refill & Leak Repair",
      description:
        "Checking for refrigerant leaks and refilling the refrigerant to ensure optimal cooling.",
      image: "/portable-ac/gas.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Compressor Repair/Replacement",
      description:
        "Fixing or replacing a damaged compressor that’s preventing the AC from cooling properly.",
      image: "/portable-ac/comprossor.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Fan Motor Repair/Replacement",
      description:
        "Addressing fan issues such as strange noises, low airflow, or fan failure.",
      image: "/portable-ac/fanmotor.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Component Repairs",
      description:
        "We provide expert repairs for all components of your portable AC to ensure it runs efficiently and reliably.",
      image: "/portable-ac/comp.jpg",
      callNowLink: "+971569096124",
    },
  ];

  const aboutData = {
    title: " Top-Notch Portable AC Maintenance & Installation Services",
    description1:
      "We know how important a properly functioning portable AC is to your comfort. Our professional team offers high-quality repairs and installations, ensuring smooth operation with only the best parts. From fixing cooling issues and odd noises to selecting and installing the perfect unit, we guarantee your AC runs at its best, saving energy and keeping your space cool.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" },
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/portable-ac/about.jpg",
  };
  const whyChooseUsData = {
    heading: "Why Choose Us For Portable AC Services",
    description:
      "Ensure a cool, comfortable space in Dubai with our expert portable AC services. We use only the best, authentic parts for long-lasting performance and trouble-free operation. Plus, with our service warranty, you can count on us for dependable and efficient cooling solutions.",
    iconDescriptions: [
      "Our highly trained technicians are equipped to handle all types of portable AC systems with precision and expertise.",
      "We offer clear, competitive pricing with no hidden fees or surprises.",
      "Our fast and dependable emergency service ensures your portable AC is up and running in no time.",
      "We pay close attention to every detail to ensure your portable AC performs at its best.",
      "Our fast and dependable emergency service ensures your portable AC is up and running in no time.",
      "We only use top-grade, durable parts that are specifically designed for portable AC units.",
      "We help reduce your energy costs while maintaining optimal cooling for your space.",
      "Reliable Service",
    ],
  };
  const homeContent = {
    heading: "Portable AC Repair & Installation in Dubai",
    description:
      "A portable AC is the perfect solution for Dubai’s heat, giving you flexible and efficient cooling in small areas. Whether your unit needs fixing or you’re planning a new purchase, our skilled team ensures smooth installation and reliable repairs to keep your home or office comfortable.",
    bulletPoints: [
      "Registered Company",
      "Cost-Effective Solutions",
      " Guaranteed Best Work",
      "24-Hour Portable Ac Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <title>
        Top-Notch Portable AC Repair & Installation Service in Dubai
      </title>
      {/* Hero Section */}
      <DHeroSection
        image="/portable-ac/portable ac banners.png"
        heading="Best Portable AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
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
        heading={whyChooseUsData.heading}
        description={whyChooseUsData.description}
        iconDescriptions={whyChooseUsData.iconDescriptions}
      />
      <Testimonial page="portablepage" />
      <ContactUs />
    </div>
  );
};

export default page;

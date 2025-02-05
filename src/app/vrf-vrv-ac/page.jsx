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
  const vrfAcServices = [
    {
      name: "Installation",
      description:
        "Trust our experienced team to install your VRV/VRF AC system, ensuring seamless setup and maximum efficiency.",
      image: "/vrf-vrv/installtion-vrf.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Cooling Performance Diagnosis and Repair",
      description:
        "Identifying and fixing issues related to insufficient cooling, temperature inconsistencies, or system malfunctions that affect the overall performance of the VRV/VRF system.",
      image: "/vrf-vrv/vrf-vrv coolinf issues.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Cleaning Indoor & Outdoor Units",
      description: "Thorough cleaning of VRF units for optimal performance.",
      image: "/vrf-vrv/cleaning-vrf.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Refrigerant Leak Repair",
      description:
        "Detecting and repairing refrigerant leaks, ensuring your system is properly charged to restore optimal cooling performance and prevent future damage.",
      image: "/vrf-vrv/leak.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Compressor & Fan Repair",
      description:
        "Diagnosing and repairing compressor issues that may result in cooling failure or poor system efficiency, or replacing the compressor when necessary.",
      image: "/vrf-vrv/fan-motor.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "System Expansion",
      description: "Adding new units to expand your VRF system capacity.",
      image: "/vrf-vrv/expension.png",
      callNowLink: "+971543888004",
    },
    {
      name: "Error Code Interpretation",
      description: "Diagnosing and troubleshooting VRF system error codes.",
      image: "/vrf-vrv/error-check.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Refrigerant Loss or Compressor Failure",
      description: "Fixing refrigerant loss issues and compressor failures.",
      image: "/vrf-vrv/Refrigerant Loss or Compressor Failure.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Faulty Wiring and Electrical Repairs",
      description:
        "Troubleshooting and repairing any electrical issues such as faulty wiring, circuit boards, or connections that could cause system failures or malfunctions.",
      image: "/vrf-vrv/load.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Sensor and Thermostat Repairs",
      description:
        "Fixing or replacing malfunctioning temperature sensors and thermostats to ensure precise temperature regulation and system efficiency.",
      image: "/vrf-vrv/vrf-vrv sensors and thermostate.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Fan Coil Unit Troubleshooting",
      description:
        "Addressing problems with individual fan coil units, such as poor airflow, unusual noises, or malfunctioning components that affect comfort in different areas of the building.",
      image: "/vrf-vrv/1738399702467.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Control Panel and System Reset",
      description:
        "Resolving issues with the control panel, including error codes, system lockouts, or improper settings that prevent the VRV/VRF system from operating correctly.",
      image: "/vrf-vrv/24hr.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Drainage System Check and Repair",
      description:
        "Inspecting and repairing drainage lines to ensure proper water flow and prevent leaks or mold buildup in the system.",
      image: "/vrf-vrv/water.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Airflow and Ductwork Inspection",
      description:
        "Ensuring proper airflow and inspecting ducts for blockages, leaks, or damage that may impair the system’s efficiency.",
      image: "/vrf-vrv/airflow.jpg",
      callNowLink: "+971543888004",
    },
  ];
  const whyChooseUsData = {
    heading: " Why Choose Us For VRF/VRV AC Services?",
    description:
      "Keep your space cool and energy-efficient with our expert VRF/VRV AC repair and installation services in Dubai. We only use authentic, high-quality parts to ensure smooth performance and durability. Our services are backed by a warranty, so you can rely on us for dependable and efficient cooling.",
    iconDescriptions: [
      "Our skilled technicians are equipped with the training and expertise to handle all kinds of VRF/VRV AC systems with accuracy",
      "We offer honest, competitive pricing with no hidden fees or surprises.",
      "Providing fast and reliable AC services across the entire city.",
      "We focus on detail and excellence to ensure your VRF/VRV AC operates at its highest potential.",
      "Get fast, dependable emergency service to restore your VRF/VRV AC quickly, no matter the time.",
      "We back our services with a warranty, giving you confidence in the quality and longevity of our work.",
      "Our solutions are tailored to meet your needs, ensuring your utmost comfort and satisfaction.",
      "We use only robust, premium-quality parts that are specifically designed for VRF/VRV AC systems.",
    ],
  };
  const aboutData = {
    title: "VRF/VRV AC Maintenance & Premium Installation Services",
    description1:
      "We know how crucial it is to have a fully functional VRF/VRV AC system. Our skilled team offers high-quality repair and installation services, using top-tier parts and industry best practices. Whether it’s solving cooling issues, fixing strange noises, or installing a new system, we ensure everything works efficiently and with optimal energy usage.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/vrf-vrv/vrv-vrf about us.jpg", // Path to image
  };
  const homeContent = {
    heading: "VRF/VRV AC Repair & Installation Service in Dubai",
    description:
      "For the ultimate in comfort and style, a well-functioning Vrf/Vrv AC system is a must in Dubai’s heat. Whether you need repairs or a new installation, our skilled technicians are here to provide fast, reliable service, ensuring your space remains cool throughout the year.",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Quality Work",
      "24/7 Vrf/vrv Ac Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <title>Professional VRF/VRV AC Repair & Installation in Dubai</title>
      {/* Hero Section */}
      <DHeroSection
        image="/vrf-vrv/vrf - vrv ac banners.png"
        heading="Best Vrf/Vrv AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
      />
      <DServices services={vrfAcServices} />

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
      <Testimonial page="vrfvrvpage" />
      <ContactUs />
    </div>
  );
};

export default page;

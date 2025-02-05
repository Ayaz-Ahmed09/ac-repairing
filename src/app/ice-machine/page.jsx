import React from "react";
import DHeroSection from "@/components/Dynamic-components/DHeroSection";
import DServices from "@/components/Dynamic-components/DServices";
import DAboutSection from "@/components/Dynamic-components/DAboutus";
import CounterCard from "@/components/sub-components/CounterCard";
import {
  faCheckCircle,
  faShieldAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import DWhyChooseUs from "@/components/Dynamic-components/DWhyChooseUs";
import ContactUs from "@/components/ContactUs";
import Testimonial from "@/components/Testimonial";
import DynamicSection from "@/components/DynamicSection";

const page = () => {
  const IceMachineServices = [
    {
      name: "Installation & Setup",
      description:
        "Professional installation and setup of ice machines, ensuring optimal performance and seamless integration into your facility. Our experts handle everything from placement to configuration.",
      image: "/ice-machine/ice machine installing.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Cleaning & Sanitization",
      description:
        "Thorough cleaning and sanitization of ice machines to maintain hygiene, prevent contamination, and ensure safe ice production for your business.",
      image: "/ice-machine/ice machine cleaning.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Filter Replacement",
      description:
        "Timely replacement of water filters to improve water quality, enhance ice production, and extend the lifespan of your ice machine.",
      image: "/ice-machine/ice-mechine.png",
      callNowLink: "+971543888004",
    },
    {
      name: "Compressor & Condenser Repair",
      description:
        "Expert repair and maintenance of compressors and condensers to restore cooling efficiency and prevent costly breakdowns.",
      image: "/ice-machine/compressor and coil ice machine.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Water Line & Drainage Maintenance",
      description:
        "Comprehensive maintenance of water lines and drainage systems to ensure proper water flow, prevent leaks, and avoid operational disruptions.",
      image: "/ice-machine/ice machine water leakage.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Air Filter Replacement",
      description:
        "Replacement of air filters to improve airflow, enhance machine efficiency, and maintain consistent ice production.",
      image: "/ice-machine/ice machine air filter.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Ice Production Issues",
      description:
        "Diagnosis and repair of issues affecting ice production, including low output, slow freezing, or irregular ice size, to restore optimal performance.",
      image: "/ice-machine/ice production.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Electrical & Sensor Repairs",
      description:
        "Repair and calibration of electrical components and sensors to ensure accurate operation and prevent malfunctions.",
      image: "/ice-machine/ice machine electric.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Preventive Maintenance Contracts",
      description:
        "Customized maintenance plans to keep your ice machine in top condition, reduce downtime, and extend its lifespan through regular inspections and servicing.",
      image: "/ice-machine/contracts.png",
      callNowLink: "+971543888004",
    },
  ];
  const aboutData = {
    title: "Professional Ice Machine Maintenance Services",
    description1:
      "Your business depends on a reliable ice machine. Our professional team provides expert repair services, using premium parts and industry best practices. We specialize in fixing problems like poor ice production, water leaks, and unusual noises, resolving them quickly and effectively.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/ice-machine/about-us-ice-maker.jpg", // Path to image
  };
  const whyChooseUsData = {
    heading: "Why Choose Us For Ice Machine Repair Services?",
    description:
      "Keep your business cool and efficient with our professional ice machine repair services in Dubai. We only use premium, genuine parts to ensure reliable performance and extended longevity. Our services are backed by a warranty for peace of mind.",
    iconDescriptions: [
      "Our skilled technicians are trained to handle all types of ice machines with precision.",
      "Transparent, competitive rates with no hidden charges.",
      "Providing fast and reliable AC services across the entire city.",
      "Tailored solutions to meet the specific needs of your business.",
      "Need fast and reliable ice machine service? Our team offers quick response times to ensure your equipment is up and running in no time.",
      "We focus on accuracy and detail to ensure your ice machine operates at peak performance.",
      "Fast and reliable emergency service to get your ice machine back up and running quickly.",
      "Our services come with a warranty for your peace of mind.",
    ],
  };
  const homeContent = {
    heading: "Expert Ice Machine Repair Services in Dubai",
    description:
      "In the fast-paced environment of Dubai, a reliable ice machine is crucial for many businesses. Whether it's a restaurant, hotel, or any other establishment that requires ice, a malfunctioning machine can significantly impact operations. Our skilled technicians are here to provide fast and professional ice machine repair services, ensuring your business stays running smoothly.",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Quality Work",
      "24/7 Ice Machine Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <title>Professional Ice Machine Repair Service in Dubai</title>
      {/* Hero Section */}
      <DHeroSection
        image="/ice-machine/ice making machine banner (1).png"
        heading="Best Ice Machine Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
      />
      <DServices services={IceMachineServices} />

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
      <Testimonial page="icepage" />
      <ContactUs />
    </div>
  );
};

export default page;

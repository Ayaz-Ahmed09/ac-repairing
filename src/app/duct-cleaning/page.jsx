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
  const DuctCleaningServices = [
    {
      name: "Cleaning",
      description:
        "Thorough cleaning of your ductwork system to remove dust, allergens, mold, and other contaminants, improving indoor air quality.",
      // link: "/split-ac/installation",
      image: "/duct/duct ac cleaning service.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Inspection",
      description:
        " Comprehensive inspection of your ductwork system to identify any potential issues, such as leaks or blockages.",
      // link: "/split-ac/repair",
      image: "/duct/duct inspection.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Sanitization",
      description:
        "Specialized cleaning and sanitization of ductwork to eliminate bacteria and other harmful microorganisms.",
      // link: "/split-ac/repair",
      image: "/duct/duct senatization.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Leakage repair",
      description:
        "Sealing of any leaks or gaps in your ductwork system to improve energy efficiency and prevent air loss.",
      // link: "/split-ac/repair",
      image: "/duct/duct water leakage repair.jpg",
      callNowLink: "+971543888004",
    },
  ];

  const aboutData = {
    title: " Professional Duct Cleaning Services in Dubai",
    description1:
      "We know how crucial clean air is for your health. Our skilled team offers high-quality duct cleaning services, utilizing advanced equipment and methods to remove contaminants and ensure your air is fresh and healthy.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/duct-cleaning/about us.jpg", // Path to image
  };
  const whyChooseUsData = {
    heading: "Why Choose Us For Duct Cleaning Services?",
    description:
      "Breathe easier with our professional duct cleaning services in Dubai. We use specialized equipment and eco-friendly cleaning solutions to ensure thorough cleaning and removal of contaminants.",
    iconDescriptions: [
      "Our skilled technicians are trained and equipped to handle all types of duct cleaning projects.",
      "Transparent and competitive rates with no hidden charges.",
      "Citywide Service",
      "Our services come with a warranty for your peace of mind.",
      "Quick Response",
      "We focus on thoroughness and attention to detail to ensure a clean and healthy indoor environment.",
      "Emergancy service",
      "We use safe and environmentally friendly cleaning solutions.",
    ],
  };
  const homeContent = {
    heading: "Expert Duct Cleaning Services in Dubai",
    description:
      "Maintaining clean air ducts is essential in Dubai's dusty environment. Dust, mold, and allergens can clog your ducts, impacting the air you breathe. Our skilled technicians offer professional cleaning services to ensure healthier air for your family.",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Expert Technicians",
      "24/7 Duct Cleaning Service",
    ],
  };

  return (
    <div className="overflow-x-hidden">
      <title>Professional Duct Cleaning Services in Dubai</title>
      {/* Hero Section */}
      <DHeroSection
        image="/duct/ac duct banner.png"
        heading="Best Duct Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
      />
      <DServices services={DuctCleaningServices} />

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
      <Testimonial page="ductpage" />
      <ContactUs />
    </div>
  );
};

export default page;

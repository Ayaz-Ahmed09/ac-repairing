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
        "Breathe easy with our professional duct cleaning service, designed to improve air quality and the efficiency of your HVAC system.",
      // link: "/split-ac/installation",
      image: "/duct/duct ac cleaning service.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Inspection",
      description:
        "Uncover hidden issues with our expert duct inspection service, ensuring your HVAC system runs smoothly and efficiently.",
      // link: "/split-ac/repair",
      image: "/duct/duct inspection.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Sanitization",
      description:
        "Experience fresher air and improved system efficiency with our expert duct sanitization, eliminating harmful contaminants from your HVAC system",
      // link: "/split-ac/repair",
      image: "/duct/duct senatization.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Leakage repair",
      description:
        "Restore your comfort with expert duct repair services that eliminate leaks, ensuring your HVAC system runs efficiently and effectively",
      // link: "/split-ac/repair",
      image: "/duct/duct water leakage repair.jpg",
      callNowLink: "+971569096124",
    },
  ];

  const aboutData = {
    title: "About Our Duct Cleaning AC Services",
    description1:
      "We are experts in Chiller AC services, offering installation, maintenance, and repair solutions.",
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
  const homeContent = {
    heading: "Duct Cleaning Services in Dubai",
    description:
      "Breathe easy with our professional duct cleaning services in Dubai. Our experienced team ensures your air ducts are thoroughly cleaned, improving air quality and efficiency while reducing energy costs. Keep your home or office environment healthy and comfortable with our top-notch duct cleaning solutions.",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Expert Technicians",
      "24/7 Duct Cleaning Service",
    ],
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <DHeroSection
        image="/duct-cleaning/ac duct banner.png"
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

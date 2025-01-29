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
  const vrfAcServices = [
    {
      name: "Installation",
      description: "Professional installation of Split AC systems.",
      // link: "/split-ac/installation",
      image: "/vrf-vrv/installtion.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Cleaning Indoor & Outdoor Units ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/vrf-vrv psd.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Drainage System Check",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/cleaning.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "System Calibration",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/system.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Refrigerant Leak Repair",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/leak.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Compressor & Fan Repair",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/repair.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Replacing or Retrofitting Units ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/unit.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "System Expansion  ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/systemexpension.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Error Code Interpretation ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/error.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Refrigerant Loss or Compressor Failure  ",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/failur.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "Load & Capacity Balancing",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/load.jpg",
      callNowLink: "+1 234 567 891",
    },
    {
      name: "24/7 Emergency Repairs",
      description: "Quick and efficient repair for Split AC systems.",
      // link: "/split-ac/repair",
      image: "/vrf-vrv/24hr.jpg",
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
    image: "/vrf-vrv/vrv-vrf about us.jpg", // Path to image
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <DHeroSection
        image="/vrf-vrv/vrf - vrv ac banners.png"
        heading="Best Vrf/Vrv AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
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
        title="Why Choose Us for Residential Repairs?"
        description="Our residential AC repair services ensure your home stays cool and comfortable with minimal hassle."
      />
      <ContactUs />
    </div>
  );
};

export default page;

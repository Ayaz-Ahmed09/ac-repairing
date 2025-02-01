import React from "react";
import DHeroSection from "@/components/Dynamic-components/DHeroSection";
import DServices from "@/components/Dynamic-components/DServices";
import DAboutSection from "@/components/Dynamic-components/DAboutus";
import CounterCard from "@/components/sub-components/CounterCard"; // Import the Dynamic About Section
import {
  faCheckCircle,
  faShieldAlt,
  faClock,

  // faShieldAlt,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import DWhyChooseUs from "@/components/Dynamic-components/DWhyChooseUs";
import ContactUs from "@/components/ContactUs";
import DynamicSection from "@/components/DynamicSection";
import Testimonial from "@/components/Testimonial";
const page = () => {
  const CentralAcServices = [
    {
      name: "Installation",
      description:
        "Offering high-quality repair and installation for central air conditioning units in Dubai, ensuring maximum comfort and performance throughout your home or office",
      image: "/central-ac/central ac installation.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Compressor Repair",
      description:
        " Specialized compressor repair services for central AC systems, ensuring optimal cooling and system longevity in your home or office.",
      image: "/central-ac/central ac compressor repair.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Condenser Coil Cleaning",
      description:
        "Professional cleaning of condenser coils for central AC units, improving cooling efficiency and extending system lifespan.",
      image: "/central-ac/central ac condesoor coil clean.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Thermostat Replacement",
      description:
        "Upgrade your central AC with a new thermostat, improving accuracy and boosting overall system performance.",
      image: "/central-ac/central ac thermostat.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Blower Fan",
      description:
        "Fast and effective repair or replacement of blower fans in central AC systems, restoring proper air circulation and maintaining comfort",
      image: "/central-ac/central ac blower motor.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Air Quality Improvement",
      description:
        " Expert services to enhance the air quality of your central AC system, reducing allergens, dust, and pollutants for better indoor air",
      image: "/central-ac/central ac air qualitypsd.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Evaporator Coil Cleaning",
      description:
        "Cleaning of the evaporator coils in your Central AC system to enhance cooling efficiency and prevent ice buildup.",
      image: "/central-ac/central evaporator coil cleaning.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Air Handler/Furnace",
      description:
        " Ensure optimal heating and cooling performance with expert services for your central AC system’s air handler and furnace components",
      image: "/central-ac/central ac air furnance.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Duct Cleaning",
      description:
        "Expert cleaning of ducts in your central AC unit, ensuring better air circulation and reducing allergens for a healthier indoor environment",
      image: "/central-ac/central ac duckt 2.jpg",
      callNowLink: "+971569096124",
    },
  ];

  const aboutData = {
    title: " Professional Central AC Maintenance & Installation Services",
    description1:
      "A functional central AC system is key to comfort, and we’re here to ensure it works perfectly. Our skilled team specializes in central AC repairs and installations, using top-notch components and following industry best practices. From fixing cooling problems and unusual noises to installing a new system, we handle everything efficiently. We also make sure new installations are sized correctly, installed properly, and tested thoroughly for maximum efficiency.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/central-ac/central-ac-about-us.jpg", // Path to image
  };
  const whyChooseUsData = {
    heading:
      "Keep your home or office cool in Dubai with our skilled central AC repair and installation services. We use only top-quality, genuine parts to ensure seamless operation and lasting results. With a warranty on our services, you can trust us for reliable and effective cooling solutions.?",
    description:
      "We offer the best quality services, with customer satisfaction being our top priority.",
    iconDescriptions: [
      "Our expert technicians are trained to handle all brands central AC systems with precision",
      " Affordable rates with no hidden charges, making our services accessible to all.",
      "Quick and efficient service to ensure your AC is up and running in no time",
      "Tailored solutions to meet the unique cooling needs of your home or office.",
      "ast and reliable emergency services to get your central AC back up and running",
      "Expert Technicians",
      "Fast Delivery",
      "Our services come with reliable warranty coverage for your peace of mind",
    ],
  };
  const homeContent = {
    heading: "Central AC Repair, Cleaning & Installation Services in Dubai",
    description:
      "In Dubai's hot climate, a well-functioning central AC system is essential for a comfortable living environment. Whether you need to repair an existing system or are planning a new installation, our skilled technicians are here to provide fast and professional services, keeping your home cool and comfortable all year round.",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Quality Work",
      "24-Hour AC Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <title>
        Professional Central AC Repair & Installation Service in Dubai
      </title>
      {/* Hero Section */}
      <DHeroSection
        image="/central-ac/central-banners.png"
        heading="Best Central AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
      />
      <DServices services={CentralAcServices} />

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
      <Testimonial page="centralpage" />
      <ContactUs />
    </div>
  );
};

export default page;

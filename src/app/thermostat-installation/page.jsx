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
    title: "Essential Thermostat Services for Optimal AC Performance",
    description1:
      "Installing a thermostat improves temperature control, ensuring efficient operation of your central AC system and reducing energy costs. It helps maintain a consistent indoor climate, prevents overworking the AC, and extends its lifespan. Modern smart thermostats offer additional benefits like remote control and scheduling, further enhancing energy efficiency. Overall, a thermostat installation promotes comfort, saves money, and boosts the longevity of your cooling system.",
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
    heading: " Why Choose Us For Thermostat Installation Services?",
    description:
      "Ensure optimal control of your central AC system with our expert thermostat installation services. We only use top-quality, genuine parts to ensure flawless installation and long-lasting results. Our professional team is dedicated to providing reliable and efficient cooling solutions for your space.",
    iconDescriptions: [
      "Our technicians are fully trained to install all types of thermostats with precision and care.",
      "Enjoy affordable rates with no hidden fees, making our services accessible to everyone.",
      "Providing fast and reliable AC services across the entire city.",
      "We tailor our solutions to meet the specific needs of your home or office, ensuring the best possible comfort",
      "Fast and efficient service to address your needs without delay.",
      "We focus on the details to guarantee proper installation and enhanced performance of your thermostat.",
      " We provide fast, reliable emergency installation services to ensure your thermostat works properly at all times.",
      "We use only high-quality thermostats that are compatible with your central AC system for maximum efficiency.",
    ],
  };
  const homeContent = {
    heading: "Thermostat Installation Services in Dubai",
    description:
      "Looking for reliable thermostat installation in Dubai? Experience ultimate comfort in your Dubai home with a professionally installed thermostat.  Our team will handle the installation quickly and efficiently, so you can enjoy the perfect indoor climate.",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Quality Work",
      "24-Hour Thermostat Installation Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <title> Professional Thermostat Installation Service in Dubai</title>
      {/* Hero Section */}
      <DHeroSection
        image="/thermo/thermo banner.png"
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

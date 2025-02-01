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

const splitpage = () => {
  const splitAcServices = [
    {
      name: "Installation",
      description:
        "Expert repair and installation for split or wall-mounted AC units in Dubai, providing efficient and long-lasting cooling solutions.",
      // link: "/split-ac/installation",
      image: "/split-ac/Split ac installation.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Compressor Repair",
      description:
        "Fast and efficient compressor repair services in Dubai, getting your AC back to optimal performance with expert care.",
      // link: "/split-ac/repair",
      image: "/split-ac/split ac compressor repair.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Condenser Coil Cleaning",
      description:
        "Thorough condenser coil cleaning in Dubai, removing dirt and debris for optimal AC performance and reduced energy costs.",
      // link: "/split-ac/repair",
      image: "/split-ac/Split ac condensor coils cleaning.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Thermostat Replacement",
      description:
        "Fast and efficient thermostat replacement in Dubai, providing you with the latest technology for optimal climate control.",
      // link: "/split-ac/repair",
      image: "/split-ac/Split ac thermostate replacement.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Gas Leak Check & Recharge",
      description:
        "Quick and effective gas leak check and recharge services in Dubai, keeping your AC running at its best with optimal refrigerant levels.",
      // link: "/split-ac/repair",
      image: "/split-ac/Split ac gas.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Air Quality Improvement",
      description:
        "Split AC air quality enhancement in Dubai, offering cleaner air and a healthier atmosphere for your home or off.",
      // link: "/split-ac/repair",
      image: "/split-ac/Split ac air quality.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Evaporator Coil Cleaning",
      description:
        "Efficient evaporator coil cleaning services in Dubai, helping your AC run smoothly and reducing energy consumption.",
      // link: "/split-ac/repair",
      image: "/split-ac/Split ac evaporator cleaning.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Fan Motor Repair & Replacement",
      description:
        "Split Ac's fan motor repair and replacement in Dubai, delivering long-lasting solutions to keep your AC functioning properly.",
      // link: "/split-ac/repair",
      image: "/split-ac/FanMotorrepair.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Sensor Repair and Replacement",
      description:
        "Split ac sensor repair and replacement services in Dubai, optimizing your AC’s performance with precise temperature control.",
      // link: "/split-ac/repair",
      image: "/split-ac/sensorsrepair.jpg",
      callNowLink: "+971569096124",
    },
  ];

  const aboutData = {
    title:
      "Top-Notch Split Or Wall-Mounted AC Maintenance & Installation Services",
    description1:
      "When your split or wall-mounted AC isn’t working properly, it can be frustrating, but we’re here to make things easy. Our expert team provides top-quality Split Ac repairs and installation services, using only the best parts. Whether your AC has a Gas Leak Check & Recharge, Fan Motor Repair & Replacement, a compressor problem, Evaporator & Condenser Coil Cleaning, or a thermostat issue, we diagnose and fix it with precision. For new installations, we ensure proper unit selection, safe wiring, and detailed testing to guarantee long-lasting performance and efficient cooling.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    // icons: [
    //   { icon: faCheckCircle, label: "Certified Technicians" }, // Pass the icon reference directly
    //   { icon: faShieldAlt, label: "Quality Service" },
    //   { icon: faClock, label: "24/7 Support" },
    // ],
    image: "/split-ac/about.jpg", // Path to image
  };
  const whyChooseUsData = {
    heading: "Why Choose Us For Split & Wall-Mounted AC Services?",
    description:
      "Stay cool in Dubai’s heat with our expert split AC repair and installation services. We use only genuine, high-quality parts to ensure smooth operation and long-term performance. With a warranty on our services, you can trust us for reliable and efficient cooling solutions.",
    iconDescriptions: [
      "Our highly trained professionals specialize in all brands split and wall-mounted AC systems",
      "Clear, competitive rates with no unexpected charges",
      "Our Split Ac maintenance & Installation service available across dubai",
      "Tailored solutions to ensure your comfort and satisfaction",
      "Immediate and trustworthy service whenever you call",
      "We focus on accuracy and detail to ensure your split AC performs optimally",
      "Quick and efficient service to ensure your AC is up and running in no time",
      "Our services come with reliable warranty coverage for your peace of mind",
    ],
  };
  const homeContent = {
    heading: "Expert Split AC Repair & Installation Services near you in Dubai",
    description:
      "In Dubai's hot weather, a properly working split or wall-mounted AC is necessary for comfort. If your unit needs fixing or you're planning a new setup, our skilled technicians are here to provide fast and professional AC services, keeping your space cool all year round",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Quality Work",
      "24-Hour AC Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <title>
        Professional Split AC Repair & Installation in Dubai | Air Conditioner
        Services Near You
      </title>
      <DHeroSection
        image="/split-ac/split-ac-banner (2).png"
        heading="Best Split AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
      />
      <DServices services={splitAcServices} />

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
      <Testimonial page="splitpage" />
      <ContactUs />
    </div>
  );
};

export default splitpage;

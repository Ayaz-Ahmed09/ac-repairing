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
  const WindowAcServices = [
    {
      name: "Installation",
      description:
        "Expert repair and installation for window AC units in Dubai, ensuring efficient and long-lasting cooling solutions..",
      image: "/window-ac/installtion.jpg",
      callNowLink: "+1 234 567 890",
    },
    {
      name: "Filter Cleaning/Replacement",
      description:
        "Fast and efficient compressor repair services for window AC units, ensuring optimal cooling and system longevity in your home or office.",
      image: "/window-ac/filter.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Condenser Coil Cleaning",
      description:
        "Professional cleaning of condenser coils for window AC units, improving cooling efficiency and extending system lifespan.",
      image: "/window-ac/coil.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Drainage Check",
      description:
        "Checking your window AC’s drainage system prevents water leaks, ensures proper moisture removal, and maintains optimal cooling performance",
      image: "/window-ac/window ac water leakage.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Seal Inspection",
      description:
        "Inspecting the seal around your window AC ensures there are no gaps, preventing cool air from escaping and improving energy efficiency.",
      image: "/window-ac/window ac seal.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Cooling Issues",
      description:
        "If your window AC isn't cooling properly, it could be due to a dirty filter, low refrigerant levels, or a faulty compressor, requiring prompt inspection and repair.",
      image: "/window-ac/window ac cooling isssues.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Fan Issues",
      description:
        "Fan issues in your window AC, such as unusual noises or lack of airflow, could be caused by a clogged fan, motor problems, or electrical malfunctions, and should be addressed by a professional.",
      image: "/window-ac/window ac fan issues.jpg",
      callNowLink: "+971569096124",
    },

    {
      name: "Gas Leak Check & Recharge",
      description:
        "Quick and effective detection and repair of refrigerant leaks, ensuring optimal cooling efficiency.",
      image: "/window-ac/window ac low refrigent.jpg",
      callNowLink: "+971569096124",
    },
  ];
  const whyChooseUsData = {
    heading: " Why Choose Us For Window AC Services?",
    description:
      "Keep your home cool and comfortable with our expert window AC services in Dubai. We use top-quality parts to ensure long-lasting performance, and with our service warranty, you get peace of mind knowing your cooling system is in safe hands.",
    iconDescriptions: [
      "Our skilled technicians are trained to service all window AC brands with precision and care",
      "Transparent and competitive rates with no hidden fees.",
      "Citywide Service",
      "We customize our services to meet your comfort and satisfaction.",
      "Our 24/7 emergency service ensures your AC gets fixed fast",
      "We pay attention to every detail to keep your AC running at its best",
      "Our work is backed by a warranty for your peace of mind.y",
      "We use durable, high-performance parts designed for window AC units",
    ],
  };
  const aboutData = {
    title: "Professional Window AC Maintenance & Installation Services",
    description1:
      "Your window AC should work flawlessly, and our skilled technicians make sure it does! Whether it's repairs for poor cooling and strange noises or installing a brand-new unit, we do it all with precision. We also help you choose the right model, install it properly, and test it for peak performance and energy efficiency.",
    description2:
      "Our skilled team ensures high-quality service, timely completion, and customer satisfaction.",
    icons: [
      { icon: faCheckCircle, label: "Certified Technicians" },
      { icon: faShieldAlt, label: "Quality Service" },
      { icon: faClock, label: "24/7 Support" },
    ],
    image: "/window-ac/about.jpg",
  };
  const homeContent = {
    heading: "Window AC Repairing & Installation Services in Dubai",
    description:
      "o A properly working window AC is key to staying comfortable in Dubai’s hot weather. If your unit needs repairs or you’re thinking of installing a new one, our expert team is ready to provide quick and hassle-free service, ensuring your home stays cool no matter the season.",
    bulletPoints: [
      " Licensed Company",
      " Reasonable Rates",
      "Guaranteed Top Quality Work",
      "24-Hour Window Ac Services",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <title>
        Professional Window AC Repair & Installation Service in Dubai
      </title>
      {/* Hero Section */}
      <DHeroSection
        image="/window-ac/window ac banners.png"
        heading="Best Window AC Services"
        subheading="We provide the best solutions for your needs."
        buttonText="Contact Us"
        buttonLink="#contact-us"
      />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
      />
      <DServices services={WindowAcServices} />

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
      <Testimonial page="page" />
      <ContactUs />
    </div>
  );
};

export default page;

import React from "react";
import Cards from "./Card";
import "./animations.css";
const Services = () => {
  const services = [
    {
      name: "Split AC Services",
      description:
        "Get expert split AC repair and installation services in Dubai, ensuring optimal cooling and comfort all year round.",
      link: "/split-ac",
      image: "/main services/split-ac.jpeg",
      hoverImg: "/split.png",
      // hoverImg: "/testingimg.webp",
      callNowLink: "+971543888004",
    },
    {
      name: "Central AC Services",
      description:
        "Reliable central AC repair and installation services in Dubai, designed to keep your home or office cool and efficient.",
      link: "/central-ac",
      image:
        "/main services/central-ac-reparing-and-installing-home-services.jpg",
      hoverImg: "/central2.png",
      callNowLink: "+971543888004",
    },
    {
      name: "Window AC Services",
      description:
        "Professional window AC repair and installation services in Dubai, providing efficient cooling solutions for your space.",
      link: "/window-ac",
      image:
        "/main services/window-ac-reparing-and-installing-home-services-.jpg",
      callNowLink: "+971543888004",
    },

    {
      name: "Portable AC Services",
      description:
        "Expert portable AC repair and installation services in Dubai, delivering convenient and effective cooling for any space.",
      link: "/portable-ac",
      image:
        "/main services/portable-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Chiller AC Services",
      description:
        "rusted chiller AC repair and installation services in Dubai, ensuring reliable and efficient cooling for large-scale systems.",
      link: "/chiller-ac",
      image:
        "/main services/chillar-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Cassette AC Services",
      description:
        "Efficient cassette AC repair and installation services in Dubai, helping maintain a comfortable environment in both residential and commercial spaces.",
      link: "/cassette-ac",
      image:
        "/main services/cassete-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "VRF/VRV AC Services",
      description:
        "Specialized VRF/VRV AC repair and installation services in Dubai, offering energy-efficient cooling for large buildings and commercial spaces.",
      link: "/vrf-vrv-ac",
      image: "/main services/vrf-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+971543888004",
    },

    {
      name: "Ice Machine Services",
      description:
        "Fast and dependable ice machine repair and installation in Dubai, ensuring your equipment operates at peak performance.",
      link: "/ice-machine",
      image: "/main services/ice-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Duct Cleaning",
      description:
        "Affordable and thorough duct cleaning services in Dubai, ensuring your ventilation system is clear and your air stays fresh and clean.",
      link: "/duct-cleaning",
      image:
        "/main services/duct-cleaningac-reparing-and-installing-home-services (1).jpg",
      callNowLink: "+971543888004",
    },
    {
      name: "Smart Thermostat Installation",
      description:
        " Reliable smart thermostat installation in Dubai, offering seamless integration for greater control and efficiency in your HVAC system.",
      link: "/thermostat-installation",
      image:
        "/main services/smart-thermostate-ac-reparing-and-installing-home-services.jpg",
      callNowLink: "+971543888004",
    },
  ];

  // useEffect(() => {
  //   const cards = document.querySelectorAll(".service-card");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("slide-in-right");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5, // Trigger when 50% of the element is in view
  //     }
  //   );

  //   cards.forEach((card) => observer.observe(card));

  //   return () => {
  //     cards.forEach((card) => observer.unobserve(card));
  //   };
  // }, []);

  return (
    <section>
      <h2 className="text-3xl text-white font-bold font-quicksand text-center mb-8 mt-6 ">
        Our Air Conditioner Repairing & Installation Service
      </h2>
      <div
        id="services"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-4 "
      >
        {services.map((service, index) => (
          <div key={index} className="service-card font-quicksand">
            <Cards
              title={service.name}
              description={service.description}
              viewDetailLink={service.link}
              image={service.image}
              callNowLink={service.callNowLink}
              hoverImg={service.hoverImg}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import CounterBanner from "@/components/CounterBannerMain";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import DynamicSection from "@/components/DynamicSection";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  const homeContent = {
    heading: "Expert AC Repair & Installation Services near you in Dubai",
    description:
      "When it comes to staying cool in Dubai’s scorching heat, a well-functioning air conditioner is a must. Whether you need air conditioner repair, aircon installation, or routine maintenance, our team of certified technicians is here to help. We specialize in providing top-notch AC services near you, ensuring your home or office stays comfortable all year round",
    bulletPoints: [
      "Licensed Company",
      "Affordable Pricing",
      "Quality Work",
      "24-Hour AC Service",
    ],
  };
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>
          Professional AC Repair & Installation in Dubai | Air Conditioner
          Services Near You
        </title>
      </Head>
      <HeroSection />
      <DynamicSection
        heading={homeContent.heading}
        description={homeContent.description}
        bulletPoints={homeContent.bulletPoints}
      />
      <Services />
      <AboutSection />
      <CounterBanner />
      <WhyChooseUs />
      <Testimonial page="Home" />
      <ContactUs />
    </div>
  );
}

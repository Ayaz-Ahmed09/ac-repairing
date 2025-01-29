import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import CounterBanner from "@/components/CounterBannerMain";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Services />
      <AboutSection />
      <CounterBanner />
      <WhyChooseUs />
      <ContactUs />
    </div>
  );
}

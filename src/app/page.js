import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
// import CounterBannerMain from "@/components/CounterBanner";
import CounterBanner from "@/components/CounterBannerMain";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import TestingFooter from "@/components/TestingFooter";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* <Navbar /> */}
      <HeroSection />
      <Services />
      <AboutSection />
      <CounterBanner />
      <WhyChooseUs />
      <ContactUs />
      {/* <Footer /> */}
      {/* <TestingFooter /> */}
    </div>
  );
}

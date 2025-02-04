import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[600px] flex flex-col lg:flex-row bg-gradient-to-b from-red-600/10 via-black/35 to-red-600/50 items-center justify-center bg-black text-white px-4 sm:px-8 relative pt-[120px] sm:pt-0">
      {/* Left Side - Image */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <Image
          src="/AC reparing and installing services main.png" // Replace with your image path
          alt="AC repairing and installing services"
          width={800} // Larger width for bigger screens
          height={500} // Adjust height as needed
          className="w-full h-auto  rounded-lg"
          priority
        />
      </div>

      {/* Right Side - Text and Button */}
      <div className="w-full sm:w-1/2 h-full flex flex-col items-center lg:items-center justify-center text-center lg:text-left px-4 sm:px-8 mt-4 sm:mt-0">
        <div>
          <p className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">
            Welcome to Our Website!
          </p>
          <p className="text-base sm:text-lg md:text-2xl mb-8">
            Your journey starts here
          </p>
          {/* Optional Button */}
          <Link
            href="#services"
            className="bg-red-600 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-red-800 transition duration-300"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

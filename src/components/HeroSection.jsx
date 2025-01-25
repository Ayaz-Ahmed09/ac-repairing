import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full h-[600px] flex flex-col bg-gradient-to-b from-red-600/10 via-black/35 to-red-600/50 sm:flex-row items-center justify-center bg-black text-white px-4 sm:px-8 relative pt-[120px] sm:pt-0 md:flex-col lg:flex-row">
      {/* Left Side - Image */}
      <div className="w-full h-[500px] sm:h-auto lg:pt-[100px] lg:pb- sm:w-1/2 md:w-3/4 md:mt-16">
        <img
          src="/AC reparing&installing services.png" // Replace with your image path
          alt="AC reparing&installing services"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Text and Button */}
      <div className="w-full sm:w-1/2 h-full font-quicksand md:w-full md:flex-col flex flex-col items-center  justify-center text-center sm:text-left px-4 sm:px-8 mt-4 sm:mt-0">
        <div className="text-center items-center">
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

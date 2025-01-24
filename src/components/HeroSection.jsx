import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="w-full h-[600px] flex flex-col bg-gradient-to-b from-red-600/10 via-black/35  to-red-600/50 sm:flex-row items-center justify-center bg-black text-white px-4 sm:px-8 relative pt-[120px] sm:pt-0"
      // style={{
      //   borderRadius: "0 30% 30% 0",
      // }}
    >
      {/* Left Side - Image */}
      <div className="w-full h-[500px] sm:h-auto lg:pt-[100px] lg:pb- sm:w-1/2 ">
        <img
          src="/AC reparing and installing services.png" // Replace with your image path
          alt="Hero Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Text and Button */}
      <div className="w-full sm:w-1/2 h-full flex flex-col items-center sm:items-start justify-center text-center sm:text-left px-4 sm:px-8 mt-4 sm:mt-0">
        <p className="text-3xl sm:text-4xl lg:ml-[200px] md:text-4xl font-bold mb-4">
          Welcome to Our Website!
        </p>
        <p className="text-base sm:text-lg lg:ml-[300px] md:text-2xl mb-8">
          Your journey starts here
        </p>
        {/* Optional Button */}
        <Link
          href="#services"
          className="bg-red-600 text-white lg:ml-[350px] py-2 px-6 rounded-full text-lg font-medium hover:bg-gray-200 transition duration-300"
        >
          Explore Services
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

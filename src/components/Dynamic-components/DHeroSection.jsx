import Button from "../sub-components/Button";
import Image from "next/image";
const HeroSection = ({
  image,
  heading,
  subheading,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="w-full min-h-[600px] flex flex-col md:flex-col lg:flex-row bg-gradient-to-b from-red-600/10 via-black/35 to-red-600/50 sm:flex-row items-center justify-center bg-black text-white px-4 sm:px-8 relative pt-[120px] sm:pt-0">
      {/* Left Side - Image */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <Image
          src={image}
          alt="Hero Image"
          width={500} // Adjust as needed
          height={500} // Adjust as needed
          className="w-full h-auto max-w-[500px] sm:max-w-full object-contain rounded-lg"
          priority // Ensures fast loading for above-the-fold images
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full sm:w-1/2 h-full lg:ml-12 flex flex-col items-center lg:items-center justify-center text-center px-4 sm:px-8 mt-4 sm:mt-0">
        <p className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">
          {heading}
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:ml-8">
          {subheading}
        </p>

        <Button
          name={buttonText || "Call Now"}
          className="bg-red-600 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-red-800 transition duration-300"
        />
      </div>
    </section>
  );
};

export default HeroSection;

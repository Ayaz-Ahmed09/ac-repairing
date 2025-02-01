import Button from "../sub-components/Button";

const HeroSection = ({
  image,
  heading,
  subheading,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="w-full h-[600px] flex flex-col md:flex-col lg:flex-row bg-gradient-to-b from-red-600/10 via-black/35  to-red-600/50 sm:flex-row items-center justify-center bg-black text-white px-4 sm:px-8 relative pt-[120px] sm:pt-0">
      {/* Left Side - Image */}
      <div className="w-full h-[500px] sm:h-auto lg:pt-[100px]  sm:w-1/2 sm:h-full">
        <img
          src={image}
          alt="Hero Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full sm:w-1/2 h-full lg:ml-12 flex flex-col items-center  justify-center text-center sm:text-left px-4 sm:px-8 mt-4 sm:mt-0">
        <p className="text-3xl sm:text-4xl md:text-4xl text-center font-bold mb-4">
          {heading}
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:ml-8">
          {subheading}
        </p>

        <Button
          name={"Call Now"}
          className="bg-red-600 text-white py-2   rounded-full text-lg font-medium hover:bg-red-800 transition duration-300"
        />
      </div>
    </section>
  );
};

export default HeroSection;

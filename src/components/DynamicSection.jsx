const SeoContent = ({ heading, description, bulletPoints }) => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-red-600 sm:text-4xl">
          {heading}
        </h1>
        <p className="mt-6 text-lg text-white text-center sm:text-xl">
          {description}
        </p>

        {/* Bullet Points List - Grid Layout for Responsiveness */}
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-lg text-white list-disc pl-6 sm:text-xl">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-red-600">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Logos with Bullet Points - Grid Layout for Responsiveness */}
        {/* <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-20 mt-6 text-white">
          
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-4xl mb-2"
            />
            <p className="text-sm sm:text-base">Licensed Company</p>
          </div>

         
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-red-500 text-4xl mb-2"
            />
            <p className="text-sm sm:text-base">Quality Assurance</p>
          </div>

         
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-red-500 text-4xl mb-2"
            />
            <p className="text-sm sm:text-base">24-Hour Service</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SeoContent;

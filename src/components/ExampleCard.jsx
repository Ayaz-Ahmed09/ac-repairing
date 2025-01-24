import React from "react";

const ExampleCard = ({
  image,
  title,
  description,
  onBookClick,
  onViewDetailsClick,
}) => {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      {/* Image at the top */}
      <div className="w-full h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content Section (Service name, description, and buttons) */}
      <div className="relative p-4 text-white rounded-b-lg">
        <div className="relative z-10">
          {/* Service Name (Title) */}
          <h3 className="text-3xl font-extrabold text-shadow-lg mb-4">
            {title}
          </h3>
          {/* Service Description */}
          <p className="text-xl font-semibold text-shadow-md text-center mb-4">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 z-20">
            <button
              onClick={onBookClick}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Book Now
            </button>
            <button
              onClick={onViewDetailsClick}
              className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-white hover:text-black"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Hover Effect (Color filling from bottom with reduced opacity and slower speed) */}
        <div className="absolute bottom-0 left-0 w-full h-0 bg-red-600 group-hover:h-3/4 transition-all duration-1000 ease-in-out group-hover:opacity-30 z-0"></div>
      </div>
    </div>
  );
};

export default ExampleCard;

"use client";
import Link from "next/link";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Cards = ({
  title,
  description,
  viewDetailLink,
  image,
  callNowLink,
  hoverImg,
}) => {
  const handleCallNow = () => {
    window.location.href = `tel:${callNowLink}`;
  };
  // const [img, setImg] = useState(image);
  return (
    <div
      // onMouseEnter={() => setImg(hoverImg)}
      // onMouseLeave={() => setImg(image)}
      className="relative font-quicksand flex flex-col lg:flex-row p-6 bg-black text-white rounded-lg shadow-lg overflow-hidden max-w-full mx-auto h-full group"
    >
      {/* Image Section */}
      <img
        // src={img}
        src={image}
        alt={title}
        // loading="eager"
        className="w-full h-auto object-cover rounded-lg mb-4 lg:mb-0 lg:w-1/3 lg:mr-6"
      />

      {/* Content Section */}
      <div className="flex flex-col justify-between w-full lg:w-2/3 h-full z-10 relative">
        <h2 className="text-xl font-bold font-quicksand mb-2">{title}</h2>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>

        <div className="flex flex-col sm:flex-row justify-between font-quicksand items-center space-y-3 sm:space-y-0">
          {/* Conditional Rendering for View Details */}
          {viewDetailLink ? (
            <Link
              href={viewDetailLink}
              className="text-red-600 hover:underline hover:text-white w-full sm:w-auto text-center sm:text-left"
            >
              View Details
            </Link>
          ) : null}
          {/* Call Now Button */}
          <button
            onClick={handleCallNow}
            className="bg-red-600 text-white px-4 font-quicksand py-2 rounded hover:bg-black w-full sm:w-auto text-center sm:text-left z-20"
          >
            Call Now
          </button>
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
    </div>
  );
};

export default Cards;

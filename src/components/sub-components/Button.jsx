"use client";
import { useEffect, useState } from "react";
const Button = ({ name }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // Add pulse animation when the component is mounted
    const timer = setTimeout(() => {
      setPulse(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+971569096124";
  };

  return (
    <div className="flex justify-center ">
      <button
        onClick={handleCall}
        className={`bg-red-600 text-white md:px-10  px-6 rounded-xl mb-2 font-quicksand py-2  transition-all duration-300 ease-in-out hover:bg-red-800 hover:text-white 
          ${pulse ? "animate-pulse" : ""} 
          hover:scale-105 hover:shadow-xl`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;

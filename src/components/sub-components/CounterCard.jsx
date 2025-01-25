"use client";
import React from "react";
import { useInView } from "react-intersection-observer"; // For scroll animation
import CountUp from "react-countup"; // For counting animation

const CounterCard = ({
  targetValue,
  label,
  unit,
  backgroundColor,
  textColor,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center justify-center p-6 rounded-lg opacity-0 transition-opacity duration-1000 ease-in-out ${
        inView ? "opacity-100 animate-fade-in" : ""
      }`}
      style={{
        backgroundColor: backgroundColor || "red", // Default background color
        color: textColor || "white", // Default text color
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
      <div className="relative z-10 text-center">
        <h3 className="text-2xl sm:text-4xl font-bold">{label}</h3>
        <h4 className="text-4xl sm:text-5xl font-extrabold mt-2">
          <CountUp start={0} end={targetValue} duration={3} separator="," />{" "}
          {unit}
        </h4>
      </div>
    </div>
  );
};

export default CounterCard;

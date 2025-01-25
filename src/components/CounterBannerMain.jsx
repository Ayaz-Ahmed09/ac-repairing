import React from "react";
import CounterCard from "./sub-components/CounterCard"; // Adjust the import path if needed

const CounterBanner = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-black via-red-600 to-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Clients Counter */}
        <CounterCard
          targetValue={150}
          label="Satisfied Clients"
          unit="k"
          backgroundColor="black"
          textColor="white"
        />

        {/* Services Counter */}
        <CounterCard
          targetValue={30}
          label="Services Offered"
          unit="+"
          backgroundColor="red"
          textColor="white"
        />

        {/* Experience Counter */}
        <CounterCard
          targetValue={25}
          label="Years of Experience"
          unit="+"
          backgroundColor="black"
          textColor="white"
        />
      </div>
    </section>
  );
};

export default CounterBanner;

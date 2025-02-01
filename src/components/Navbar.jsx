import Image from "next/image";
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full h-[120px] sm:h-[70px] lg:h-[65px]  fixed top-0 shadow-lg shadow-white/15 bg-[#14000017] backdrop-blur-md z-50">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between m-auto px-4 md:px-10">
        {/* Logo Section */}
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center justify-start "
        >
          {/* Logo - visible on mobile with smaller size */}
          <Image
            src="/aclogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin mt-2 "
          />
          {/* Title text - visible only on larger screens */}
          {/* <span className="font-bold md:mr-2 font-quicksand text-gray-300 hidden sm:block">
            Ac-Repairing
          </span> */}
        </Link>

        {/* Navigation Links */}
        <div className="w-full md:w-[500px] h-full flex flex-row items-center justify-between md:mr-20 mt-2 md:mt-0 ">
          <div className="flex items-center justify-between w-full h-auto border border-red-600 bg-[#4e14145e] px-4 py-2 rounded-full  text-gray-200">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <Link href="/About" className="cursor-pointer">
              About Us
            </Link>
            <Link href="/Contact-us" className="cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Social Icons (uncomment and add if needed) */}
        <div className="flex flex-row gap-5 mt-2 md:mt-0">
          {/* Uncomment this section if you want to display social icons */}
          {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

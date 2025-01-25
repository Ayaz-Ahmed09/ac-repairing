import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-64 h-64 bg-red-500 opacity-20 blur-2xl rounded-full absolute top-8 left-1/4"></div>
        <div className="w-48 h-48 bg-red-700 opacity-10 blur-xl rounded-full absolute bottom-8 right-1/3"></div>
      </div>
      <div className="container mx-auto text-center space-y-8 relative z-10">
        <div className="flex justify-center">
          <Image
            src="/aclogo.png"
            alt="Logo"
            width={250}
            height={250}
            className="text-center "
          />
        </div>
        <h2 className="text-4xl font-bold text-red-500 font-quicksand">
          Elegance in Every Detail
        </h2>
        <p className="text-lg font-light max-w-2xl mx-auto">
          We ensure comfort and style go hand in hand, delivering premium AC
          repair services that stand out.
        </p>
        {/* <div className="flex justify-center space-x-8 mt-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-white transition duration-300"
          >
            <i className="fab fa-facebook-f text-3xl"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-white transition duration-300"
          >
            <i className="fab fa-twitter text-3xl"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-white transition duration-300"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-white transition duration-300"
          >
            <i className="fab fa-linkedin-in text-3xl"></i>
          </a>
        </div> */}
        <p className="text-sm font-light mt-8">
          © {new Date().getFullYear()} Supreme Ac Repairing. Crafted with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

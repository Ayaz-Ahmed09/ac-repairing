import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col z-10 space-y-4">
      {/* WhatsApp Button */}
      <Link href="https://wa.me/971543888004" target="_blank">
        <div className="flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-200 ease-in-out">
          <FaWhatsapp className="text-2xl" />
        </div>
      </Link>

      {/* Call Now Button */}
      <Link href="tel:+971543888004">
        <div className="flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition duration-200 ease-in-out">
          <FaPhoneAlt className="text-2xl" />
        </div>
      </Link>
    </div>
  );
};

export default FloatingButtons;

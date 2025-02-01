import {
  FaHammer,
  FaDollarSign,
  FaMapMarkerAlt,
  FaUser,
  FaThumbtack,
  FaTools,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

const DWhyChooseUs = ({ heading, description, iconDescriptions }) => {
  // Check if iconDescriptions is provided and has the expected number of items
  if (!iconDescriptions || iconDescriptions.length !== 8) {
    console.error(
      "Error: iconDescriptions must be an array with exactly 8 items."
    );
    return null; // Or you could display a fallback message or UI here
  }

  // Static icons mapped to their corresponding descriptions
  const icons = [
    { icon: <FaHammer />, description: iconDescriptions[0] },
    { icon: <FaDollarSign />, description: iconDescriptions[1] },
    { icon: <FaMapMarkerAlt />, description: iconDescriptions[2] },
    { icon: <FaUser />, description: iconDescriptions[3] },
    { icon: <FaThumbtack />, description: iconDescriptions[4] },
    { icon: <FaTools />, description: iconDescriptions[5] },
    { icon: <FaTruck />, description: iconDescriptions[6] },
    { icon: <FaShieldAlt />, description: iconDescriptions[7] },
  ];

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-white sm:text-xl">{description}</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center text-white">
              <div className="text-red-600 text-4xl mb-2">
                {icon.icon} {/* Static Icon */}
              </div>
              <p className="text-sm sm:text-base">{icon.description}</p>{" "}
              {/* Dynamic Description */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DWhyChooseUs;

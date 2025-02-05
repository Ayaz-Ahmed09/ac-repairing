"use client";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Importing the icons

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open the modal after form submission
    setIsModalOpen(true);
    setIsSubmitted(true); // Mark form as submitted

    // Reset the form fields
    e.target.reset();
  };

  return (
    <section className="w-full py-16 bg-black text-white px-4 sm:px-8 bg-[url('/contact-us.jpeg')] bg-center bg-cover">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-red-600">
          Contact Us
        </h3>

        {/* Cards for Contact Number and Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-red-600/30 p-8 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-semibold text-white mb-4">
              <FaPhoneAlt className="inline-block mr-2 text-white" /> Call Us
            </h4>
            {/* <p className="text-lg text-white">
              For immediate assistance, call us at:
            </p> */}
            <p className="text-2xl font-bold text-white">+971543888004</p>
          </div>
          <div className="bg-red-600/30 p-8 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-semibold text-white mb-4">
              <FaMapMarkerAlt className="inline-block mr-2 text-white" /> Visit
              Us
            </h4>
            {/* <p className="text-lg text-white">Our office is located at:</p> */}
            <p className="text-2xl font-bold text-white">
              WHP2-Block-A Commercial, Dubai
            </p>
          </div>
        </div>

        {/* Show form only if not submitted */}
        {!isSubmitted ? (
          <div className="bg-red-600/30 p-8 rounded-lg shadow-lg">
            <p className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-white">
              Send Us a Message
            </p>
            <form
              action="https://formspree.io/f/xvgzrdvy"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-lg font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="px-4 py-3 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="px-4 py-3 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <label htmlFor="message" className="text-lg font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="px-4 py-3 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                ></textarea>
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-black transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Show the thank you message after submission
          <div className="text-center p-8 bg-red-600/30 rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Thank You for Reaching Out!
            </h3>
            <p className="text-lg text-white mb-4">
              We have received your message and will respond within 24 hours.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-red-600 p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center">
              Thank you for reaching out!
            </h2>
            <p className="text-center mt-4">
              We have received your message and will respond within 24 hours.
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-black text-white py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;

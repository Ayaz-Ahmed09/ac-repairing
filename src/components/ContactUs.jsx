import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <section className="w-full py-16 bg-black text-white px-4 sm:px-8 bg-[url('/contact-us.jpeg')]  bg-center bg-cover">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-red-600">
          Contact Us
        </h2>

        {/* Contact Cards */}
        <div className="text-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Number 1 */}
          <div className="bg-red-600 bg-opacity-50 p-6 rounded-lg shadow-lg flex items-center justify-center  text-center space-x-4">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-white text-3xl"
            />
            <div>
              <h3 className="text-xl font-semibold">Call Us Now</h3>
              <p className="text-lg">+1 234 567 890</p>
            </div>
          </div>

          {/* Contact Number 2 */}
          <div className="bg-red-600 p-6 bg-opacity-50 rounded-lg shadow-lg flex items-center text-center justify-center space-x-4">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-white text-3xl"
            />
            <div>
              <h3 className="text-xl font-semibold">Call Us Now</h3>
              <p className="text-lg">+971569096124</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-red-600 p-6 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center text-center space-x-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-white text-3xl"
            />
            <div>
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p className="text-lg">123 AC Street, City, State, 12345</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-red-600/30 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-white">
            Send Us a Message
          </h3>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree ID
            method="POST"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Formspree will look for this name
                  className="px-4 py-3 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" // Formspree will look for this name
                  className="px-4 py-3 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col mt-6">
              <label htmlFor="message" className="text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message" // Formspree will look for this name
                rows="4"
                className="px-4 py-3 rounded-lg bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
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
      </div>
    </section>
  );
};

export default ContactUs;

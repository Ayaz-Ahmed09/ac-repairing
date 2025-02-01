const ContactPage = () => {
  return (
    <main
      className="relative w-full min-h-screen bg-cover bg-center text-white mt-20"
      style={{
        backgroundImage: "url('/contact-us.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-60 w-full min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-5xl font-bold text-red-600 mb-10">Contact Us</h1>
        <p className="text-gray-300 text-lg mb-12 text-center max-w-2xl">
          We are here to assist you 24/7! Reach out to us for AC repairs,
          maintenance, or inquiries. Let us keep you cool and comfortable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Address Card */}
          <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-red-600/30 hover:border-2 hover:border-red-600 transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-600 w-8 h-8 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>

            <h3 className="text-xl font-semibold mb-2">Our Office</h3>
            <p className="text-gray-300 mb-3">
              WHP2-Block-A Commercial, Dubai, UAE
            </p>
            <a
              href="https://www.google.com/maps?q=WHP2-Block-A+Commercial,+Dubai,+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-red-600/30 hover:border-2 hover:border-red-600 transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-600 w-8 h-8 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.093 15.093 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.38 2.33.59 3.57.59.55 0 1 .45 1 1v3.68c0 .55-.45 1-1 1C12.42 22 2 11.58 2 4c0-.55.45-1 1-1h3.68c.55 0 1 .45 1 1 0 1.24.2 2.45.59 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
            </svg>

            <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
            <a
              href="tel:+971569096124"
              className="text-gray-300 hover:underline"
            >
              +971-569096124
            </a>
            <p className="text-gray-400 text-sm mt-1">Available 24 Hours</p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-red-600/30 hover:border-2 hover:border-red-600 transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-600 w-8 h-8 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm-8 7l-8-5v10h16V8l-8 5z" />
            </svg>

            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <a
              href="mailto:thesuprememaintenance@gmail.com"
              className="text-gray-300 hover:underline"
            >
              thesuprememaintenance@gmail.com
            </a>
            <p className="text-gray-400 text-sm mt-1">
              We aim to respond within 24 hours.
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-red-600/30 hover:border-2 hover:border-red-600 transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-600 w-8 h-8 mb-4"
              fill="currentColor"
              viewBox="0 0 20 24"
            >
              <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10c-1.63 0-3.17-.39-4.56-1.11L2 22l1.11-5.44A9.96 9.96 0 012 12c0-5.52 4.48-10 10-10zm.15 16c2.51 0 4.85-1.16 6.36-3.14 1.17-1.51 1.45-3.45.84-5.2-.12-.36-.43-.6-.8-.6h-1.45c-.52 0-.99.34-1.13.83-.32 1.15-.9 2.15-1.66 2.92-.76.76-1.76 1.34-2.92 1.66-.48.14-.83.61-.83 1.13v1.45c0 .37.24.68.6.8.58.2 1.18.29 1.79.29z" />
            </svg>

            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/971569096124"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline"
            >
              Message Us on WhatsApp
            </a>
            <p className="text-gray-400 text-sm mt-1">
              For quick replies and assistance.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            How Can We Help?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether it’s emergency repairs, installations, or routine
            maintenance, our expert team is ready to assist you. Don’t
            hesitate—contact us today for prompt, reliable service.
          </p>
          <a
            href="/"
            className="bg-red-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-black/50 hover:border-2 hover:border-white transition-all"
          >
            Return to Home Page
          </a>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

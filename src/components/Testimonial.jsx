"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar, FaRegStar } from "react-icons/fa";
import testimonialsData from "@/data/testimonial";
import "./swiper-custom.css";
const Testimonial = ({ page }) => {
  const testimonialsForPage = testimonialsData[page] || [];

  return (
    <section className="py-16 px-4 text-white bg-gradient-to-tr from-red-300/20 via-black/20 to-red-600/20">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
        What Our Customers Say
      </h2>

      {testimonialsForPage.length === 0 ? (
        <p className="text-center text-gray-400">No testimonials available.</p>
      ) : (
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="max-w-3xl mx-auto"
        >
          {testimonialsForPage.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-6 bg-[url('/t2.jpg')] bg-center  rounded-sm shadow-lg text-center">
                <FaQuoteLeft className="text-3xl text-white mb-4" />
                <p className="text-lg px-6 text-white lg:text-2xl font-bold">
                  "{review.message}"
                </p>
                <p className="text-sm mt-2 text-white lg:text-xl font-semibold mb-2">
                  - {review.name} -
                </p>
                <div className="flex mt-2 mb-2">
                  {[...Array(5)].map((_, i) =>
                    i < review.rating ? (
                      <FaStar key={i} className="text-black text-xl" />
                    ) : (
                      <FaRegStar key={i} className="text-white/40 text-xl" />
                    )
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Testimonial;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import testimonialsData from "@/data/testimonial";
import "./swiper-custom.css";

const Testimonial = ({ page }) => {
  const testimonialsForPage = testimonialsData[page] || [];

  return (
    <section className="py-16 px-4 text-white bg-gradient-to-tr from-red-300/20 via-black/20 to-red-600/20">
      <h3 className="text-3xl font-bold text-center text-red-600 mb-8">
        What <span className="text-yellow-400/80">Our Customers</span> Say
      </h3>

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
              <div className="relative flex flex-col items-center p-6 bg-[url('/t2.jpg')] bg-center bg-cover rounded-sm shadow-lg text-center">
                {/* Red Overlay */}
                <div className="absolute inset-0 bg-red-600/50 rounded-sm"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <FaQuoteLeft className="text-3xl text-yellow-400/50 mb-4" />
                  <p className="text-lg px-6 text-white lg:text-2xl font-bold">
                    "{review.message}"
                  </p>
                  <p className="text-sm mt-2 text-white lg:text-xl font-semibold mb-2">
                    - {review.name} -
                  </p>

                  {/* Star Rating */}
                  <div className="flex mt-2 mb-2">
                    {[...Array(5)].map((_, i) => {
                      const starValue = i + 1;
                      return review.rating >= starValue ? (
                        <FaStar key={i} className="text-yellow-400 text-xl" />
                      ) : review.rating >= starValue - 0.5 ? (
                        <FaStarHalfAlt
                          key={i}
                          className="text-yellow-400 text-xl"
                        />
                      ) : (
                        <FaRegStar key={i} className="text-gray-400 text-xl" />
                      );
                    })}
                  </div>
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

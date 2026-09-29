"use client";
import React from "react";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    title: "Sales assistant",
    description: `Anyone searching knows how hard it is to find a position that aligns with your goals. They connected me with the perfect job.`,
  },
  {
    title: "Billing analyst",
    description: `Robert Half was able to get the person we needed to do the project in less than a week.`,
  },
  {
    title: "Software Engineer",
    description: `The team at Robert Half was incredibly supportive and helped me find a role that matched my skills perfectly.`,
  },
  {
    title: "Project Manager",
    description: `I was impressed with how quickly they understood my needs and found me a great opportunity.`,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
    <div className="index-section relative">
      <h2 className="hxl  px-6  text-center text-heading font-secondary font-normal mb-8">
        Explore testimonials{" "}
      </h2>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2,
            },
            1536: {
              slidesPerView: 2,
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="!pb-16 testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="h-full min-h-48 bg-blueish p-4 px-6 rounded-[30px] !flex flex-col justify-evenly items-start"
            >

              <div className="text-base mb-4 min-h-18">
                "{testimonial.description}"
              </div>
              <p className="font-medium text-lg">{testimonial.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;

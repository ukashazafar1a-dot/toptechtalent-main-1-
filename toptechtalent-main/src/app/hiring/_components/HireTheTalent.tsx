"use client";
import React, { useRef } from "react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const services = [
  {
    title: "Know how much to pay",
    description: `Attract and retain talent with our Salary Guide.`,
    link: "Search Salaries",
  },
  {
    title: "What jobs are in demand?",
    description: `Discover the latest data for 450-plus positions.`,
    link: "Demand for Skilled Talent",
  },
  {
    title: "Navigate tech skills gaps",
    description: `Discover strategies for building a comprehensive tech team to support business priorities.`,
    link: "Tech Skills Gaps",
  },
  {
    title: "Multigenerational Workforce Report",
    description: `Learn how to better recruit, motivate and retain today's professionals at every age and stage of their careers.`,
    link: "Multigenerational Workforce",
  },
];

const HireTheTalent = () => {
  const swiperRef = useRef<any>(null);
  return (
    <div className="index-section relative">
      <h2 className="hxl px-6 text-center text-heading font-secondary font-normal">
        Hire the talent you need
      </h2>
      <div className="w-full px-4 sm:px-6 lg:px-8 ">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={24}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={"auto"}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          centeredSlides={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="!pb-8 htt-slider"
        >
          {services.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#EBEBEB] p-4 px-6 rounded-[30px]">
                <div className="flex items-center justify-between lg:gap-3 flex-col lg:flex-row gap-6 ">
                  <div className="content-wrapper basis-full lg:basis-3/4">
                    <h3 className="h2 mb-4">{testimonial.title}</h3>
                    <div className="text-base mb-4">
                      {testimonial.description}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-subheading font-medium transition-colors duration-200"
                    >
                      <span>{testimonial?.link}</span>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path
                          d="M6.45825 15.5H24.5416M24.5416 15.5L15.4999 6.45837M24.5416 15.5L15.4999 24.5417"
                          stroke="#00A2D4"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="image-wrapper basis-full md:basis-1/4">
                    <Image
                      src={"/assets/group-32.png"}
                      alt=""
                      width={360}
                      height={360}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-end gap-3 py-3">
          <button onClick={() => swiperRef.current?.slidePrev()}
            className={`prev-btn ${swiperRef?.current?.index === 0 ? "opacity-50" : ""}`}>
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
            >
              <path
                d="M37.4999 23.3335L23.3333 37.5002M23.3333 37.5002L37.4999 51.6668M23.3333 37.5002H51.6666M72.9166 37.5002C72.9166 57.0602 57.06 72.9168 37.4999 72.9168C17.9398 72.9168 2.08325 57.0602 2.08325 37.5002C2.08325 17.9401 17.9398 2.0835 37.4999 2.0835C57.06 2.0835 72.9166 17.9401 72.9166 37.5002Z"
                stroke="#F12C92"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} 
          className={`next-btn ${swiperRef?.current?.isEnd ? "opacity-50" : ""}`}>
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
            >
              <path
                d="M37.4999 51.6668L51.6666 37.5002M51.6666 37.5002L37.4999 23.3335M51.6666 37.5002H23.3333M72.9166 37.5002C72.9166 57.0602 57.06 72.9168 37.4999 72.9168C17.9398 72.9168 2.08325 57.0602 2.08325 37.5002C2.08325 17.9401 17.9398 2.0835 37.4999 2.0835C57.06 2.0835 72.9166 17.9401 72.9166 37.5002Z"
                stroke="#F12C92"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireTheTalent;

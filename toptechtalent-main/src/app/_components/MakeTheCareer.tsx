import Image from "next/image";
import React from "react";
const lists = [
  "Get instant job recommendations tailored to your skills and goals",
  "Gain exposure to a range of companies and job types: fully remote, hybrid or on-site, and contract or permanent",
  "Access competitive pay, benefits, and free online training and development",
];
const MakeTheCareer = () => {
  return (
    <section className="section-hero-banner index-section !pb-0 relative w-full">
      <div className="min-h-screen overflow-hidden relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="925"
          viewBox="0 0 1920 925"
          fill="none"
          className="absolute bottom-0 right-0 w-full z-1 max-w-full h-full object-cover"
        >
          <path
            d="M0 452.496C432.753 -8.99691 1876.08 0.0127228 1920 0.0127228V902.476L0 925V452.496Z"
            fill="#FFC4F8"
          />
        </svg>
        <svg
          width="441"
          height="238"
          viewBox="0 0 441 238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-20 left-90 z-0 w-48 hidden lg:block"
        >
          <rect
            x="3.5"
            y="3.5"
            width="434"
            height="231"
            rx="115.5"
            stroke="#2B3EA5"
            strokeWidth="7"
          />
        </svg>
        
        <div className="page-width">
          <div className="relative z-2 w-full md:pt-16 md:pb-8  max-w-screen-xl mx-auto">
            <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-12">
              <div className="basis-full lg:basis-auto max-w-[570px] relative">
                <Image
                  src="/assets/mtc-banner.png"
                  alt="hero-banner"
                  width={600}
                  height={420}
                  className="block max-w-full object-cover"
                />
              </div>
              <div className="basis-full lg:basis-1/2">
                <div className="text-white lg:text-end">
                  <h1 className="h1 text-heading mb-8 md:mb-16 w-full">
                    Make the career move you want
                  </h1>
                </div>
                <div className="text-black">
                  {lists.map((item, index) => {
                    return (
                      <div
                        className="flex items-center justify-start gap-3 md:gap-4 mb-12"
                        key={index}
                      >
                        <div className="w-6 h-6 md:w-7 md:h-7 bg-primary rounded-full p-1 flex items-center justify-center">
                          <svg
                            width="25"
                            height="17"
                            viewBox="0 0 25 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                          >
                            <path
                              d="M22.1666 2L8.87498 14.8333L2.83331 9"
                              stroke="#F3F3F3"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base md:text-lg font-primary leading-normal">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeTheCareer;

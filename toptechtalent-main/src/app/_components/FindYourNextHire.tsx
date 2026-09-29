import Image from "next/image";
import React from "react";

const lists = [
  "Preview recruiter-assessed and AI-matched candidates",
  "Book a consultation with one of our recruiters to discuss your hiring needs",
  "Get dedicated expert support at every step of the way",
];

const FindYourNextHire = () => {
  return (
    <section className="section-hero-banner relative">
      <div className="h-fit overflow-hidden bg-no-repeat relative bg-gradient-to-r from-[#13042e] via-[#3f005d] to-[#240150]">
        <Image
          src="/assets/fynh.png"
          alt="hero-banner"
          width={1920}
          height={780}
          className="absolute lg:static inset-0 z-0 object-cover object-center block max-w-full w-full h-full"
        />
        <div className="index-section page-width relative lg:absolute w-full inset-0 z-2">
          <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-12 h-full max-w-screen-xl mx-auto">
            <div className="basis-full lg:basis-auto max-w-[570px]">
              <Image
                src="/assets/fynh-banner.png"
                alt="hero-banner"
                width={600}
                height={420}
                className="block max-w-full object-cover"
              />
            </div>
            <div className="basis-full lg:basis-1/2 mt-16 md:mt-0">
              <div className="">
                <h1 className="hxl text-heading">Find Your Next Hire</h1>
              </div>
              <div className="text-white">
                {lists.map((item, index) => {
                  return (
                    <div
                      className="flex items-center justify-start gap-3 md:gap-4 not-[:last-child]:mb-6 md:mb-12"
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
        <Image
          src="/assets/fynh-b.png"
          alt="Bottom banner"
          width={600}
          height={420}
          className="absolute -bottom-16 right-0 z-0"
        />
      </div>
    </section>
  );
};

export default FindYourNextHire;

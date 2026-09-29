import Image from "next/image";
import Link from "next/link";
import React from "react";
const lists = [
  "Develop a clear vision and strategy",
  "Enhance business performance with critical technologies and processes",
  "Implement a plan or manage operations",
];
const ConsultingSection = () => {
  return (
    <section className="section-consulting index-section relative">
      <div className="block relative pb-34 md:pb-46 page-width">
        <Image
              src="/assets/cs-pattern.png"
              alt="hero-banner"
              width={900}
              height={600}
              className="block max-w-full object-cover absolute bottom-0 right-20"
            />
        <div className="w-full flex justify-between flex-col-reverse lg:flex-row-reverse gap-12 z-2 h-full max-w-screen-lg mx-auto py-8 lg:py-16">
          <div className="basis-full lg:basis-auto max-w-[570px] relative">
            <Image
              src="/assets/cs-banner.png"
              alt="hero-banner"
              width={400}
              height={280}
              className="block max-w-full object-cover"
            />
          </div>
          <div className="basis-full lg:basis-1/2">
            <div className="text-white mb-12">
              <h1 className="text-3xl md:text-5xl mb-6 text-heading leading-tight">Consulting solutions to drive business impact</h1>
            </div>
            <div className="text-black">
              {lists.map((item, index) => {
                return (
                  <div
                    className="flex items-center justify-start gap-3 md:gap-4 mb-6 md:mb-12"
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
            <div className="flex items-center justify-start gap-3 md:gap-4 flex-wrap">
                <Link href={'#'} className="btn btn--full md:w-fit">Find your consulting solution</Link>
                <Link href={'#'} className="btn btn--full md:w-fit">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;

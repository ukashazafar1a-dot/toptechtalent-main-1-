import Image from "next/image";
import Link from "next/link";
import React from "react";
const lists = [
  "Achieve long-term, strategic transformation",
  "Drive immediate business results",
  "Run day-to-day operations with managed solutions",
];
const GlobalExpertise = () => {
  return (
    <section className="section-hero-banner section--index relative w-full pt-8">
      <div className="min-h-fit overflow-hidden relative w-full">
        <svg
          width="1945"
          height="962"
          viewBox="0 0 1945 962"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[101%] h-auto lg:-ml-3 lg:-me-3 absolute lg:static bottom-0 right-0 z-0"
        >
          <rect
            x="-3.5"
            y="3.5"
            width="430.592"
            height="231"
            rx="115.5"
            transform="matrix(-1 0 0 1 1627.36 188.546)"
            stroke="#2B3EA5"
            strokeWidth="7"
          />
          <path
            d="M1938.84 457.828C1497.15 -3.39977 44.2126 24.7373 -3.16492e-05 25.3161L11.7689 938.413L1945 935.9L1938.84 457.828Z"
            fill="#99ABFF"
          />
        </svg>

        <div className="relative lg:absolute lg:bottom-0 lg:right-0 lg:left-0 z-2 w-full p-4 lg:pt-16 lg:pb-16 lg:px-16 max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-12">
            <div className="basis-full lg:basis-1/2">
              <div className="text-black lg:text-white mb-6">
                <h1 className="h1 mb-6 w-full">
                  Get global consulting expertise{" "}
                </h1>
                <div>
                  {`Need help managing a workforce, solving complex challenges or transforming your business? Access deep consulting expertise from Protiviti that seamlessly blends with our talent network for a flexible, custom-built solution:`}
                </div>
              </div>
              <div className="text-black">
                {lists.map((item, index) => {
                  return (
                    <div
                      className="flex items-center justify-start gap-3 md:gap-4 mb-12"
                      key={index}
                    >
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-tertiary rounded-full p-1 flex items-center justify-center">
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
                            stroke="#ffffff"
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
              <div className="flex items-center justify-start">
                <Link href={'/hiring'} className="btn btn--tertiary">Learn more</Link>
              </div>
            </div>
            <div className="basis-full lg:basis-auto max-w-[570px] relative">
              <Image
                src="/assets/mtc-banner.png"
                alt="hero-banner"
                width={600}
                height={420}
                className="block max-w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExpertise;

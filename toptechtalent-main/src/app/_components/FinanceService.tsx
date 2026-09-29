import Image from "next/image";
import React from "react";

const jobsTitles = [
  "Controller",
  "Internal auditor",
  "Senior accountant",
  "Accounts payable/receivable specialist",
  "Senior financial analyst",
  "Bookkeeper",
];
const isEven = (num: number) => {
  return num % 2 === 0;
};

const FinanceService = () => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-start my-6 relative min-h-[600px] flex-col lg:flex-row gap-8">
        <div className="basis-full md:basis-4/5 relative z-1">
          <div className="max-w-xl me-auto mb-8 md:mb-16">
            <p className="text-lg md:text-xl">{`From accountants to CFOs, we’ll bring you top candidates with in-demand skills and experience and help manage the hiring process for you.`}</p>
          </div>
          <h3 className="text-left text-heading h2 mb-6">
            Trending job titles
          </h3>
          <div className="flex lg:items-start xl:items-center justify-start flex-wrap gap-y-3 md:gap-y-8 w-full xl:flex-row lg:flex-col mb-8">
            {jobsTitles.map((title, index) => (
              <span
                key={index}
                className={`underline text-base md:text-xl lg:text-2xl text-subheading basis-full ${
                  isEven(index) ? "lg:basis-1/2 xl:basis-2/5 " : "lg:basis-1/2"
                }`}
              >
                {title}
              </span>
            ))}
          </div>
          <p className="self-end mt-auto text-sm md:text-base">
            <span>
              Learn more about our Accounting and Finance hiring solutions
            </span>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 inline ms-3"
            >
              <path
                d="M6.45825 15.5H24.5416M24.5416 15.5L15.4999 6.45837M24.5416 15.5L15.4999 24.5417"
                stroke="#00A2D4"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>
        <div className="basis-full md:basis-[470px] flex-shrink-0 lg:absolute lg:top-0 lg:right-0 z-0">
          <Image
            src="/assets/Group-24.png"
            alt="Group-24"
            width={600}
            height={420}
            className="block max-w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceService;

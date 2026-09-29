import React from "react";

const services = [
  {
    title: "Contract Talent",
    description:
      "Add short- or long-term resources fast, tapping our large network of on-demand professionals.",
    link: "#",
  },
  {
    title: "Permanent Talent",
    description:
      "Our recruitment specialists will zero in on the expertise you need to expand your team from our network of permanent candidates. dd short- or long-term resources fast, tapping our large network of on-demand professionals.",
    link: "#",
  },
  {
    title: "Executive search",
    description:
      "Let our consultants quickly pinpoint high-level professionals who can help lead your company forward.",
    link: "#",
  },
];

const TalentSolutions = () => {
  return (
    <div className="index-section relative">
      <h2 className="hxl page-width  text-center text-heading font-secondary font-normal">
        Explore our talent solutions{" "}
      </h2>
    
        <div className="page-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div className="space-y-4 flex flex-col justify-between items-start text-left" key={index}>
                <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                  {service?.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service?.description}
                </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-subheading font-medium transition-colors duration-200"
                >
                  <span>Learn more</span>
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
            ))}
          </div>
        </div>
    
    </div>
  );
};

export default TalentSolutions;

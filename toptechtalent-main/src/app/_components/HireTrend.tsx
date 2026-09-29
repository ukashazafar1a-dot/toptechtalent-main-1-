import Image from "next/image";
import React from "react";

const HireTrendData = [
  {
    title: "2025 Salary Guide",
    description:
      "Explore the latest data for 450-plus positions and know what you should earn or pay in local and national markets.",
    image: "/assets/hr1.png",
  },
  {
    title: "What jobs are in demand?",
    description:
      "Check out our Demand for Skilled Talent report to learn about employers’ hiring plans and needs.",
    image: "/assets/hr2.png",
  },
  {
    title: "Navigate tech skills gaps",
    description:
      "Discover strategies for building a comprehensive tech team to support business priorities.",
    image: "/assets/hr3.png",
  },
  {
    title: "Multigenerational Workforce Report",
    description:
      "Learn how to better recruit, motivate and retain today's professionals at every age and stage of their careers.",
    image: "/assets/hr4.png",
  },
];

const HireTrend = () => {
  return (
    <div className="index-section relative">
      <h2 className="hxl page-width text-center text-heading font-secondary font-normal">
        Hiring Trends and Insights
      </h2>
      <div className="page-width pb-24 lg:pb-40 xl:pb-82 relative z-1">
        <div className="flex justify-center gap-3 items-start flex-wrap w-full">
          {HireTrendData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-6 px-0 md:p-6 w-full md:max-w-76 text-center"
            >
              <Image
                src={item?.image}
                alt={item?.title}
                width={300}
                height={260}
                className="mb-4 block max-w-full object-cover"
              />
              <h3 className="h3 font-semibold font-primary text-heading mb-4 md:min-h-18">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image 
        src="/assets/hr-bg.png"
        alt="Hiring Trends"
        width={1200}
        height={600}
        className="block max-w-full object-cover absolute bottom-0 w-full"/>
    </div>
  );
};

export default HireTrend;

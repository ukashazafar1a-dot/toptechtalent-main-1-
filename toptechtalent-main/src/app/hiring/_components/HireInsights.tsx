import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    type: "article",
    title: "May 2025 Jobs Report: Employers Add 139,000 Jobs",
    text: "The U.S. added 139,000 jobs, and the unemployment rate held steady at 4.2%.",
    image: "/assets/in1.png",
    tall: true,
  },
  {
    type: "article",
    title: "Small Business Hiring: Attract Top Talent",
    text: "Smart strategies to attract competitive talent.",
    image: "/assets/in2.png",
    tall: true,
  },
  {
    type: "article",
    title: "Remote Work Trends for 2025",
    text: "Flexible work options are on the rise.",
    image: "/assets/in4.png",
    tall: true,
  },
  {
    type: "featured",
    title: "What jobs are in demand?",
    tag: "FEATURED",
    color: "#FF3C3C",
    tall: false,
  },
  {
    type: "tag",
    title: "Management tips",
    tag: "TAG RESULTS",
    subtitle: "314 posts",
    color: "#FF5C5C",
    tall: false,
  },

  {
    type: "article",
    title: "How to Close the Skills Gap in Your Office Services Team",
    text: "Skills gaps in office services are growing fast, fueled by rapid tech change. Learn how to upskill your team and sta...",
    image: "/assets/in5.png",
    tall: false,
  },
  {
    type: "article",
    title:
      "Trending Tech and IT Skills Reflect Talent Demands for Priority Projects",
    text: "How are tech leaders’ priorities for 2025 impacting the demand for specific types of tech and IT expertise in the..",
    image: "/assets/in6.png",
    tall: true,
  },
  {
    type: "article",
    title: "Making Legal Technology Work: Skills, Specialists and Strategy",
    text: "Implementing legal tech solutions? Discover essential skills and new roles for skilled legal talent management in...",
    image: "/assets/in3.png",
    tall: true,
  },
  {
    type: "article",
    title: "Digital Transformation in Marketing Requires the Right Expertise",
    text: "Digital transformation in marketing requires talent and technology. Robert Half’s Lucy Marino shares how to build... ",
    image: "/assets/in6.png",
    tall: true,
  },
  {
    type: "tag",
    title: "2025 Salary Guide",
    tag: "TAG RESULTS",
    color: "#3758F9",
    tall: false,
  },
  {
    type: "tag",
    title: "Hiring help",
    tag: "TAG RESULTS",
    subtitle: "151 posts",
    color: "#F22C92",
    tall: false,
  },
  {
    type: "article",
    title: "How to Build a Tech Team That Can Deliver on Your Digital",
    text: "Behind every successful digital transformation project is a highly skilled and committed tech and IT team. Learn how...",
    image: "/assets/in7.png",
    tall: true,
  },
];

const HireInsights = () => {
  return (
    <div className="index-section page-width">
      <section className="max-w-screen-xl mx-auto">
        <h2 className="hxl text-center text-heading mb-12">
          Explore talent hiring insights
        </h2>

        <div className="insights-grid masonry-grid mb-8">
          {data.map((item, i) => {
            if (item.type === "article") {
              return (
                <div
                  key={i}
                  className={`bg-[#F4F4F4] break-inside-avoid rounded-[20px] overflow-hidden shadow border border-gray-200 flex flex-col mb-3`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-start gap-3 md:min-h-42">
                    <h3 className="font-semibold text-gray-900 text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={i}
                className={`text-white break-inside-avoid p-6 rounded-[30px] flex flex-col justify-center gap-4 mb-3 min-h-40 md:min-h-56`}
                style={{
                  backgroundColor: item.color,
                }}
              >
                <div className="text-sm uppercase font-bold tracking-wide">
                  {item.tag}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-sm mt-1 text-white/80">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center py-8">
          <Link href="/insights" className="btn btn-primary ">
            Subscribe to updates
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HireInsights;

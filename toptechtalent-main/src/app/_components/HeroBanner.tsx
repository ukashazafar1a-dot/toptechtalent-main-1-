import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <section className="section-hero-banner section--index relative">
      <div className="h-fit overflow-hidden bg-no-repeat relative bg-gradient-to-r from-[#13042e] via-[#3f005d] to-[#240150]">
        <Image
          src="/assets/hero-banner.png"
          alt="hero-banner"
          width={1920}
          height={780}
        />
        
        <div className="md:absolute w-full inset-0 flex items-center justify-start z-0 h-full p-8 md:py-16 md:px-16">
          <div className="basis-full lg:basis-1/2 xl:basis-2/5">
            <div className="text-white mb-6">
              <h1 className="h0 mb-4 text-3xl lg:text-5xl xl:text-7xl">TopTech Talent</h1>
              <h3 className="h2">is a Women-Owned New Jersey-based Technology Recruitment firm.</h3>
            </div>
            <div className="text-white">
              <div className="rte mb-8 max-w-96 me-auto text-base md:text-lg">
                {`We deliver engineering talent that’s not only highly skilled, but also deeply experienced and niche-specialized — perfect for scaling innovation-driven teams.`}
              </div>

            </div>
            <div className="flex items-center justify-between gap-4  max-w-96 me-auto">
              <a
                href="#"
                className="btn btn--primary btn--lg"
              >
                Find a Job
              </a>
              <a
                href="#"
                className="btn btn--secondary btn--lg"
              >
                Find Talent
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

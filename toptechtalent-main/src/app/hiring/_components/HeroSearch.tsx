import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSearch = () => {
  return (
    <div className="py-24 md:py-8 px-4 h-fit md:min-h-screen relative overflow-hidden bg-[#4d009a] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={"/assets/hiring-banner.png"}
        alt="Hiring Banner"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-fill md:object-cover"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-start w-full">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="block w-full">
            {/* Main Heading */}
            <h1 className="hxl font-normal text-white mb-6 leading-tight">
              Discover your next hire
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              Explore our talent network. Enter a job title to begin.
            </p>

            {/* Search Section */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mb-12 w-full">
              <div className="relative flex-1 w-full bg-[#D9D9D9] rounded-full flex items-center justify-start gap-2 px-4 py-2 md:py-3">
                <Search className=" text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Job title"
                  name="search"
                  className="p-0 bg-transparent text-base md:text-lg border-0 focus:ring-none focus:outline-none w-full"
                />
              </div>
              <button className="btn bg-[#D9D9D9] hover:bg-[#D9D9D9]/80 text-[#4D009A] rounded-full px-6">
                Preview candidates
              </button>
            </div>

            {/* Connect Section */}
            <div className="space-y-6">
              <p className="text-lg text-white/80">
                Connect with one of our experienced recruiters.
              </p>
              <div className="flex items-center justify-start gap-4 flex-wrap">
                <button className="px-8 py-4 text-lg bg-transparent hover:bg-white/10 text-white border-2 border-white/30 rounded-full transition-all duration-200">
                  Preview candidates
                </button>

                {/* Contact Info */}
                <div className="flex items-center gap-2 text-white/80">
                  <span>Need immediate help? Call</span>
                  <a
                    href="tel:+18552573593"
                    className="text-cyan-300 hover:text-cyan-200 underline transition-colors duration-200 flex items-center gap-1"
                  >
                    (855) 257-3593
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;

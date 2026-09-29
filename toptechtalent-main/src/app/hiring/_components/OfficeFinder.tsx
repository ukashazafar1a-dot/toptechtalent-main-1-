import Image from "next/image";
import React from "react";

const OfficeFinder = () => {
  return (
    <section className="index-section page-width">
      <div className="flex flex-col lg:flex-row items-center justify-start md:justify-between max-w-screen-xl mx-auto gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="hxl text-heading mb-4">Find an office near you</h2>
          <p className="text-gray-700 mb-6 h3">
            Work with experienced recruiters in your area to <br /> find jobs or
            hire talent.
          </p>
          <div className="flex gap-2 md:gap-4 mb-6">
            <div className="flex items-center gap-2 md:gap-4 bg-input rounded-full px-3 md:px-4 py-1 md:py-2">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  d="M18 33C17.65 33 17.35 32.9 17.1 32.7C16.85 32.5 16.6625 32.2375 16.5375 31.9125C16.0625 30.5125 15.4625 29.2 14.7375 27.975C14.0375 26.75 13.05 25.3125 11.775 23.6625C10.5 22.0125 9.4625 20.4375 8.6625 18.9375C7.8875 17.4375 7.5 15.625 7.5 13.5C7.5 10.575 8.5125 8.1 10.5375 6.075C12.5875 4.025 15.075 3 18 3C20.925 3 23.4 4.025 25.425 6.075C27.475 8.1 28.5 10.575 28.5 13.5C28.5 15.775 28.0625 17.675 27.1875 19.2C26.3375 20.7 25.35 22.1875 24.225 23.6625C22.875 25.4625 21.85 26.9625 21.15 28.1625C20.475 29.3375 19.9125 30.5875 19.4625 31.9125C19.3375 32.2625 19.1375 32.5375 18.8625 32.7375C18.6125 32.9125 18.325 33 18 33ZM18 27.6375C18.425 26.7875 18.9 25.95 19.425 25.125C19.975 24.3 20.775 23.2 21.825 21.825C22.9 20.425 23.775 19.1375 24.45 17.9625C25.15 16.7625 25.5 15.275 25.5 13.5C25.5 11.425 24.7625 9.6625 23.2875 8.2125C21.8375 6.7375 20.075 6 18 6C15.925 6 14.15 6.7375 12.675 8.2125C11.225 9.6625 10.5 11.425 10.5 13.5C10.5 15.275 10.8375 16.7625 11.5125 17.9625C12.2125 19.1375 13.1 20.425 14.175 21.825C15.225 23.2 16.0125 24.3 16.5375 25.125C17.0875 25.95 17.575 26.7875 18 27.6375ZM18 17.25C19.05 17.25 19.9375 16.8875 20.6625 16.1625C21.3875 15.4375 21.75 14.55 21.75 13.5C21.75 12.45 21.3875 11.5625 20.6625 10.8375C19.9375 10.1125 19.05 9.75 18 9.75C16.95 9.75 16.0625 10.1125 15.3375 10.8375C14.6125 11.5625 14.25 12.45 14.25 13.5C14.25 14.55 14.6125 15.4375 15.3375 16.1625C16.0625 16.8875 16.95 17.25 18 17.25Z"
                  fill="#79747E"
                />
              </svg>
              <input
                type="text"
                placeholder="City, State, or Zip Code"
                className="w-full sm:w-72 rounded-full text-gray-800 focus:outline-none mb-0 px-1 md:px-3"
              />
            </div>
            <button className="btn">Search</button>
          </div>
          <p>
            Or contact us by phone{" "}
            <a href="tel:18554320924" className="text-blue-500 underline">
              1.855.432.0924
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative flex justify-center">
          {/* Image */}
          <div className="relative z-10">
            <Image
              src="/assets/office-finder-banner.png" // replace with actual image path
              alt="Man using laptop"
              className="block max-w-full object-cover"
              width={600}
              height={460}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeFinder;

import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Scale teams with ease",
    description: "Let us help you quickly scale your teams up or down so you can complete projects on time — and on budget.",
    icon: "/assets/group-29.png",
  },
  {
    title: "Find talent matched to your needs",
    description: "Our AI-matching tech – powered by on-the-job success data – instantly identifies the best available candidates for your positions. ",
    icon: '/assets/group-30.png',
  },
  {
    title: "Get dedicated, personalized support",
    description: "With deep insight into your market, we'll get to know your goals and work with you step-by-step to help you meet them.",
    icon: '/assets/group-31.png',
  },
];

const FindTalent = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/assets/open-talent.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="index-section page-width"
      >
        <div className="flex flex-col lg:flex-row items-center justify-start md:justify-between max-w-screen-xl mx-auto gap-8">
          {/* left Section */}
          <div className="flex-1 relative flex justify-center">
            {/* Image */}
            <div className="relative z-10">
              <Image
                src="/assets/Group-27.png" // replace with actual image path
                alt="Man using laptop"
                className="block max-w-full object-cover"
                width={600}
                height={460}
              />
            </div>
          </div>
          {/* right Section */}
          <div className="flex-1">
            <h2 className="hxl text-heading mb-4">
              Get talent that gets the job done
            </h2>
            <div className="text-gray-700 mb-6 text-lg">
              <p className="mb-4">{`We back every professional we place*. But if for any reason you’d
            like to try a different candidate, we’re happy to accommodate you –
            free of charge.`}</p>

              <i>*Contact your local office for more details.</i>
            </div>
            <div className="flex items-center justify-start gap-4 mb-6 flex-wrap">
              <button className="btn">Book consultation</button>
            </div>
          </div>
        </div>
      </div>
      <section className="index-section">
        <div className="page-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                className="space-y-4 flex flex-col justify-between items-start text-left"
                key={index}
              >

                <div className="space-y-4">
                  <Image 
                    src={service?.icon}
                    alt={service?.title}
                    width={60}
                    height={60}
                    />
                  <h3 className="text-xl text-heading">
                    {service?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FindTalent;

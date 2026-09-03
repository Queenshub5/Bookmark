import React from "react";
import Image from "next/image";

const extension = [
  {
    name: "Chrome",
    version: "62",
    logo: "/images/logo-chrome.svg",
    className: "md:mt-0",
  },
  {
    name: "Firefox",
    version: "55",
    logo: "/images/logo-firefox.svg",
    className: "md:mt-10", 
  },
  {
    name: "Opera",
    version: "46",
    logo: "/images/logo-opera.svg",
    className: "md:mt-20", // Large stagger step
  },
];

function Download() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col justify-between items-center text-center max-w-lg mx-auto gap-4 mb-10 md:mb-16">
          <h1 className="font-semibold text-2xl md:text-3xl text-[#252B46]">
            Download the extension
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We&apos;ve got more browsers in the pipeline. Please do us know if
            you&apos;ve got a favourite you&apos;d like us to prioritize.
          </p>
        </div>

        {/* Layout of the cards*/}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-6 max-w-5xl mx-auto min-h-[450px]">
          {extension.map((item) => {
            return (
              <div
                className={`bg-white w-full max-w-[280px] mx-auto md:mx-0 flex flex-col shadow-md shadow-gray-200 rounded-[12px] items-center justify-center pt-10 pb-6 transition-all ${item.className}`}
                key={item.name}
              >
                <div className="mb-6">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>

                <div className="space-y-1 text-center px-4">
                  <h2 className="text-[#252B46] text-lg font-semibold">
                    Add to {item.name}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Minimum version {item.version}
                  </p>
                </div>

                <Image
                  src="/images/bg-dots.svg"
                  alt=""
                  width={240}
                  height={4}
                  className="w-full my-6"
                />

                <div className="px-6 w-full">
                  <button className="bg-[#5368DF] text-white hover:bg-opacity-90 font-medium text-sm rounded-md py-3 w-full shadow-sm shadow-[#5368DF]/30 transition-colors">
                    Add & Install Extension
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Download;

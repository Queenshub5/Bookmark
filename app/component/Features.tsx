"use client";
import Image from "next/image";
import { useState } from "react";

function Features() {
  const [active, setActive] = useState("Simple Bookmarking");

  const handleActive = (name: string) => {
    setActive(name);
  };

  return (
    <div className="relative py-12 md:py-20 overflow-x-hidden">
      {/* Background Accent Pill Shape */}
      <div className="bg-[#5368DF] h-[200px] sm:h-[280px] md:h-[320px] rounded-r-full w-[70%] md:w-[35%] absolute left-0 bottom-[35%] md:bottom-10 z-0"></div>

      <div className="w-[90%] max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center max-w-lg mx-auto mb-10">
          <h1 className="text-[#252B46] font-semibold text-2xl md:text-3xl mb-4" id="features">
            Features
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center max-w-2xl mx-auto mb-16 border-t md:border-t-0 border-b border-gray-200 text-center">
          {["Simple Bookmarking", "Speedy Searching", "Easy Sharing"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => handleActive(tab)}
                className={`py-4 md:py-6 text-sm md:text-base font-medium border-b transition-all duration-200 md:w-1/3
                ${
                  active === tab
                    ? "border-b-4 border-[#FA5757] text-[#252B46]"
                    : "border-b border-gray-200 md:border-b-0 text-gray-500 hover:text-[#FA5757]"
                } 
              `}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        {/* Dynamic Tab Panes */}
        {active === "Simple Bookmarking" && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 lg:gap-32 w-full">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/images/illustration-features-tab-1.svg"
                alt="Bookmark features"
                width={536}
                height={346}
                className="w-auto h-auto max-w-[85%] md:max-w-full"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
              <h2 className="font-semibold text-xl md:text-3xl text-[#252B46] mb-4 md:mb-6">
                Bookmark in one click
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button className="bg-[#5368DF] hover:bg-white border-2 border-[#5368DF] hover:text-[#5368DF] px-6 py-3 text-sm font-medium text-white rounded-md mt-6 md:mt-8 shadow-md shadow-[#5368DF]/20 transition-all">
                More Info
              </button>
            </div>
          </div>
        )}

        {active === "Speedy Searching" && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 lg:gap-32 w-full">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/images/illustration-features-tab-2.svg"
                alt="Intelligent search features"
                width={478}
                height={416}
                className="w-auto h-auto max-w-[85%] md:max-w-full"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
              <h2 className="font-semibold text-xl md:text-3xl text-[#252B46] mb-4 md:mb-6">
                Intelligent Search
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button className="bg-[#5368DF] hover:bg-white border-2 border-[#5368DF] hover:text-[#5368DF] px-6 py-3 text-sm font-medium text-white rounded-md mt-6 md:mt-8 shadow-md shadow-[#5368DF]/20 transition-all">
                More Info
              </button>
            </div>
          </div>
        )}

        {active === "Easy Sharing" && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 lg:gap-32 w-full">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/images/illustration-features-tab-3.svg"
                alt="Easy sharing features"
                width={440}
                height={380}
                className="w-auto h-auto max-w-[85%] md:max-w-full"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
              <h2 className="font-semibold text-xl md:text-3xl text-[#252B46] mb-4 md:mb-6">
                Share your bookmarks
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button className="bg-[#5368DF] hover:bg-white border-2 border-[#5368DF] hover:text-[#5368DF] px-6 py-3 text-sm font-medium text-white rounded-md mt-6 md:mt-8 shadow-md shadow-[#5368DF]/20 transition-all">
                More Info
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;

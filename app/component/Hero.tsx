import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative py-8 md:py-20 overflow-x-hidden">
      {/* Background Accent Pill Shape */}
      <div className="bg-[#5368DF] h-[180px] sm:h-[260px] md:h-[300px] rounded-l-full w-[75%] md:w-[35%] absolute right-0 bottom-10 md:bottom-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Responsive flex wrapping container handles desktop rows vs mobile column stacks */}
        <div className="w-full md:w-[90%] flex flex-col-reverse md:flex-row items-center justify-between mx-auto gap-12 md:gap-8">
          
          {/* Left Side Content Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-[55px] text-[#252B46] font-semibold tracking-tight">
              A Simple Bookmark <br className="hidden md:inline" /> Manager
            </h1>

            <p className="text-gray-500 text-base md:text-lg max-w-md md:max-w-[85%] leading-relaxed">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            {/* CTA Buttons Layout Container */}
            <div className="flex flex-row justify-center md:justify-start gap-4 w-full sm:w-auto">
              <button className="bg-[#5368DF] hover:bg-white border-2 border-[#5368DF] hover:text-[#5368DF] px-4 sm:px-6 py-3 rounded-md text-white font-medium text-xs sm:text-sm shadow-md shadow-[#5368DF]/20 transition-all">
                Get it on Chrome
              </button>
              <button className="bg-[#F7F7F7] hover:bg-white border-2 border-transparent hover:border-[#252B46] px-4 sm:px-6 py-3 rounded-md shadow-md text-gray-700 font-medium text-xs sm:text-sm transition-all">
                Get it on Firefox
              </button>
            </div>
          </div>

          {/* Right Side Graphics Column */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/images/illustration-hero.svg"
              alt="Bookmark Manager Dashboard Preview"
              width={578}
              height={460}
              priority
              className="w-auto h-auto max-w-[85%] sm:max-w-[75%] md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

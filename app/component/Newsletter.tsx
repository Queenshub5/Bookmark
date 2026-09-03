"use client"
import React from "react";

function Newsletter() {
  return (
    <div className="bg-[#5368DF] w-full py-16 md:py-24 px-4">
      <div className="max-w-xl mx-auto flex flex-col justify-center text-center">
        {/* Upper Micro Tracking Label */}
        <h3 className="tracking-[5px] sm:tracking-[8px] text-xs sm:text-sm uppercase font-medium text-white/90 mb-4 sm:mb-6">
          35,000+ Already Joined
        </h3>

        {/* Main Section Header */}
        <h1 className="text-2xl sm:text-3xl md:text-[32px] md:leading-[40px] text-white font-medium max-w-md mx-auto mb-8 md:mb-10">
          Stay up-to-date with what we&apos;re doing
        </h1>

        {/* Input Form Fields Wrapper Block */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 max-w-md w-full mx-auto"
        >
          <div className="w-full relative">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full rounded-md text-gray-800 bg-white px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FA5757] placeholder:text-gray-400 border border-transparent"
            />
          </div>

          <button
            type="submit"
            className="bg-[#FA5757] hover:bg-white text-white hover:text-[#FA5757] font-medium text-sm px-6 py-3 rounded-md shadow-md border-2 border-[#FA5757] transition-all tracking-wide whitespace-nowrap"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;

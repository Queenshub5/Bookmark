import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relatve py-10">
      <div className="container flex items-center px-4 justify-between mx-auto">
        <div className="w-[90%] flex mx-auto">
          <div className="w-1/2 flex py-2 flex-col gap-10 pt-10">
            <h2 className="text-[32px] leading-[35px] text-[#252B46] font-semibold">
              A Simple Bookmark <br /> Manager
            </h2>
            <p className=" text-[18px] text-gray-500 max-w-[70%]">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for fry.
            </p>
            <div className="flex justify-start gap-3">
              <button className="bg-[#5368DF] px-8 py-2 rounded-sm text-white font-semibold text-[14px]">
                Get it on Chrome
              </button>
              <button className="bg-[#F7F7F7] px-8 py-2 rounded-sm shadow-md font-semibold text-[14px]">
                Get it on Firefox
              </button>
            </div>
          </div>
           <div className="w-1/2 z-10 relative"> 
              <Image
                src="/images/illustration-hero.svg"
                alt="hero"
                width={250}
                height={300}
                className="w-full"
              />
            </div>
        </div>
      </div>
      <div className="bg-[#5368DF] h-[250px] rounded-l-full w-[40%] absolute right-0 bottom-0"></div>
    </div>
  );
}

export default Hero;

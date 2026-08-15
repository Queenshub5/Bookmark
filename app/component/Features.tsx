"use client";
import Image from "next/image";
import { useState } from "react";

function Features() {
  const [active, setActive] = useState("Simple Bookmarking");

  const handleActive = (name: string) => {
    setActive(name);
  };
  return (
    <div className="relative py-20">
      <div className="bg-[#5368DF] h-[300px] rounded-r-full w-[40%] absolute left-0 pb-20 bottom-0"></div>
          
      <div className="w-[80%] mx-auto">
        <div>
          <h1 className="flex justify-center text-[#252B46] font-semibold text-[18px]">
            Features
          </h1>
          <p className="pt-8 text-center text-gray-400 font-[20px] mx-[35%]">
            Our aim is to make it quick and easy for you to access yuor
            favourite websites. your bookmarks syn between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="flex justify-center items-center gap-20 py-10 pb-1 border-b border-gray-400">
          <button
            onClick={() => handleActive("Simple Bookmarking")}
            className={`
                    ${
                      active === "Simple Bookmarking"
                        ? "border-b-3 border-[#FA5757] pb-2 text-gray-700"
                        : "text-gray-500 pb-2"
                    } 
                `}
          >
            Simple Bookmarking
          </button>

          <button
            onClick={() => handleActive("Speedy Searching")}
            className={`
                ${
                  active === "Speedy Searching"
                    ? "border-b-3 border-[#FA5757] pb-2 text-gray-700"
                    : "text-gray-500 pb-2"
                } 
                `}
          >
            Speedy Searching
          </button>
          <button
            onClick={() => handleActive("Easy Sharing")}
            className={`
                ${
                  active === "Easy Sharing"
                    ? "border-b-3 border-[#FA5757] pb-2 text-gray-700"
                    : "text-gray-500 pd-2"
                } 
            `}
          >
            Easy Sharing
          </button>
        </div>

        {active === "Simple Bookmarking" && (
          <div className="flex justify-between flex-col md:flex-row items-center w-full gap-40">
            <div className="w-1/2 z-20 relative">
              <Image
                src="/images/illustration-features-tab-1.svg"
                alt=""
                width={500}
                height={500}
                className="w-full pt-10"
              />
            </div>
            <div className="flex flex-col justify-between w-1/2">
              <h1 className="font-semibold text-[20px] text-[#252B46] mb-10">Bookmark in one click</h1> 
              <p className="text-gray-500 max-w-[70%]">
                Organize your bookmarks however you like. Our <br/> simple
                drag-and-drop interface gives you complete <br/> control over how you
                manage your favourite sites.
              </p>
              <div className="flex justify-start items-center">
                <button className="bg-[#5368DF] px-8 py-2 text-[14px] font-semibold text-white rounded-md mt-10">More Info </button>
              </div>
            </div>
          </div>
        )}


          {active === "Speedy Searching" && (
          <div className="flex justify-between flex-col md:flex-row items-center w-full gap-40">
            <div className="w-1/2 z-20 relative">
              <Image
                src="/images/illustration-features-tab-2.svg"
                alt=""
                width={500}
                height={500}
                className="w-full pt-10"
              />
            </div>
            <div className="flex flex-col justify-between w-1/2">
              <h1 className="font-semibold text-[20px] text-[#252B46] mb-10">Intelligent Search</h1> 
              <p className="text-gray-500 max-w-[70%]">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <div className="flex justify-start items-center">
                <button className="bg-[#5368DF] px-8 py-2 text-[14px] font-semibold text-white rounded-md mt-10">More Info </button>
              </div>
            </div>
          </div>
        )}


        {active === "Easy Sharing" && (
          <div className="flex justify-between flex-col md:flex-row items-center w-full gap-40">
            <div className="w-1/2 z-20 relative">
              <Image
                src="/images/illustration-features-tab-3.svg"
                alt=""
                width={500}
                height={500}
                className="w-full pt-10"
              />
            </div>
            <div className="flex flex-col justify-between w-1/2">
              <h1 className="font-semibold text-[20px] text-[#252B46] mb-10">Share your bookmarks</h1> 
              <p className="text-gray-500 max-w-[70%]">
               Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <div className="flex justify-start items-center">
                <button className="bg-[#5368DF] px-8 py-2 text-[14px] font-semibold text-white rounded-md mt-10">More Info </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;

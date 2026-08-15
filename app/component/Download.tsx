import React from "react";
import Image from "next/image";

const extension = [
  {
    name: "Chrome",
    version: "62",
    logo: "/images/logo-chrome.svg",
    className: "mt-10",
  },

  {
    name: "Firefox",
    version: "55",
    logo: "/images/logo-firefox.svg",
    className: "mt-20",
  },

  {
    name: "Opera",
    version: "46",
    logo: "/images/logo-opera.svg",
    className: "mt-30",
  },
];

function Download() {
  return (
    <div className="">
      <div className="container mx-auto">
      <div className="flex flex-col justify-between items-center gap-8">
        <h1 className="font-semibold text-[25px] pt-8 text-[#252B46]">
          Download the extension
        </h1>
        <p className="text-gray-400 text-[15px] mx-[35%] text-center">
          We&apos;ve got more browsers in the pipeline. Please do us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.{" "}
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 pt-10 rounded-md py-20">
        {extension.map((extension) => {
          return (
            <div className={`bg-white flex flex-col shadow-md shadow-gray-300 rounded-[8px] items-center justify-center {extension.classname}`} key={extension.name}>
              <Image
                src={extension.logo}
                alt="chrome"
                width={100}
                height={100}
                className=""
              />
              <div className="space-y-1 text-center">
                <h2 className="text-[#252B46] text-[20px] font-bold mt-6"> Add to {extension.name}</h2>
                <p className="text-gray-400 text-[14px] mt-3">Minimum version {extension.version}</p>
              </div>
              <Image
                src="/images/bg-dots.svg"
                alt=""
                width={50}
                height={50}
                className="w-full pt-10"
              />
              <div className="px-4 py-4">
              <button className="bg-[#5368DF] text-white rounded-sm px-10 py-2 mt-6 md-6">Add & Install Extension</button>
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

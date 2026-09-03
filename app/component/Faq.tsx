"use client";
import Image from "next/image";
import React, { useState } from "react";

const faq = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    id: 1,
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    id: 2,
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    id: 3,
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    id: 4,
  },
];

function Faq() {
  return (
    <div className="relative py-12 md:py-20 px-4">
      <div className="container mx-auto relative z-10">
        
        {/* Header Container */}
        <div className="flex flex-col gap-4 text-center max-w-lg mx-auto mb-10 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-[#252B46] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>

        {/* Accordion Wrapper Container */}
        <div className="flex justify-center items-center w-full">
          <FaqItems />
        </div>

        {/* Action Button */}
        <div className="flex justify-center items-center mt-10 md:mt-14">
          <button className="bg-[#5368DF] hover:bg-white border-2 border-[#5368DF] text-white hover:text-[#5368DF] font-semibold px-8 py-3 rounded-[6px] shadow-md shadow-[#5368DF]/20 transition-all text-sm md:text-base">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;

const FaqItems = () => {
  const [activeId, setActiveId] = useState<null | number>(null);

  const handleClick = (id: number) => {
    // 💡 Toggle behavior: If the clicked item is already active, close it (set to null)
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto border-t border-gray-200">
      {faq.map((item) => {
        const isOpen = item.id === activeId;
        
        return (
          <div key={item.id} className="border-b border-gray-200">
            {/* Accordion Trigger Toggle Header */}
            <div
              onClick={() => handleClick(item.id)}
              className="flex justify-between items-center py-5 cursor-pointer group select-none gap-4"
            >
              <h2 className="text-sm sm:text-base md:text-[18px] font-medium text-[#252B46] group-hover:text-[#FA5757] transition-colors text-left leading-snug">
                {item.question}
              </h2>
              <div className="shrink-0">
                <Image
                  src="/images/icon-arrow.svg"
                  width={18}
                  height={12}
                  alt="Toggle arrow"
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180 invert-[43%] sepia-[74%] saturate-[5081%] hue-rotate-[336deg] brightness-[101%] contrast-[98%]" : ""
                  }`} 
                  // 💡 Optional: CSS filters automatically color-shift the default dark arrow to the active layout red (#FA5757) on open!
                />
              </div>
            </div>
            
            {/* Smoothly Expanding Content Panel Box */}
            <div 
              className={`grid transition-all duration-300 ease-in-out text-left
                ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

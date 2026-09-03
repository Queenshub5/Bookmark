"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <div className="px-4 py-12 md:py-20">
      {/* Header Container */}
      <div className="flex flex-col justify-center items-center gap-4 text-center max-w-lg mx-auto mb-10">
        <h1 className="font-semibold text-2xl md:text-3xl text-[#252B46]">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Here are some of our FAQs. If you have any other questions you&apos;d
          like answered please feel free to email us.
        </p>
      </div>

      {/* Accordion Wrapper */}
      <div className="pb-10 max-w-2xl mx-auto w-full">
        {/* Changed collapsible to a string to satisfy the React DOM rendering engine */}
        <Accordion
          type="single"
          collapsible="true"
          className="w-full border-t border-gray-200"
        >
          <AccordionItem value="item-1" className="border-b border-gray-200">
            <AccordionTrigger className="text-left text-[#252B46] hover:text-[#FA5757] text-sm md:text-base py-4 transition-colors">
              What is Bookmark?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pt-2 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-gray-200">
            <AccordionTrigger className="text-left text-[#252B46] hover:text-[#FA5757] text-sm md:text-base py-4 transition-colors">
              How can I request a new browser?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pt-2 pb-4">
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-gray-200">
            <AccordionTrigger className="text-left text-[#252B46] hover:text-[#FA5757] text-sm md:text-base py-4 transition-colors">
              Is there a mobile app?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pt-2 pb-4">
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-gray-200">
            <AccordionTrigger className="text-left text-[#252B46] hover:text-[#FA5757] text-sm md:text-base py-4 transition-colors">
              What about other Chromium browsers?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pt-2 pb-4">
              Integer condimentum ipsum id finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Action Button */}
        <div className="flex justify-center items-center font-bold mt-10">
          <button className="bg-[#5368DF] border-2 border-[#5368DF] text-white hover:bg-white hover:text-[#5368DF] shadow-md shadow-[#5368DF]/20 rounded-md px-7 py-3 text-sm font-medium transition-all duration-200">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Faq() {
  return (
    <div>
        <div className='flex flex-col justify-between items-center gap-8'>
            <h1 className='className="font-semibold text-[25px] pt-8 text-[#252B46]'>Frequently Asked Questions</h1>
            <p className='text-gray-400 text-[15px] mx-[35%] text-center'>Here are some of our FAQs. If you have any other questions you&apos;d like to answered please feel free to email us.</p>
        </div>
    <div className='py-10 bp-3'>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Bookmark?</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger> How can I request a new browser?</AccordionTrigger>
    <AccordionContent>
      Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
    </AccordionContent>
  </AccordionItem>

   <AccordionItem value="item-3">
    <AccordionTrigger> Is there a mobile app?</AccordionTrigger>
    <AccordionContent>
       Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.
    </AccordionContent>
  </AccordionItem>

   <AccordionItem value="item-4">
    <AccordionTrigger> What about other Chromium browsers?</AccordionTrigger>
    <AccordionContent>
      Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<div className='flex justify-center items-center font-bold'>
    <button className='bg-[#5368DF] text-white rounded-sm px-7 py-2'>More Info</button>
</div>
</div>
    </div>
  )
}

export default Faq
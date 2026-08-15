import React from 'react'

function Newsletter() {
  return (
    <div className='bg-[#5368DF] h-90 w-full'>
        <div className='flex flex-col justify-between text-center'>
            <h3 className='tracking-[8px] uppercase font-bold mt-10 text-white'>35,000+ ALREADY JOINED</h3>
            <h1 className='flex justify-center mx-[37%] pt-8 text-white font-semibold text-[30px]'>Stay up-to-date with what we&apos;re doing</h1>
        </div>
            <div className='flex justify-center items-center gap-4'>
            <input type="text" placeholder='Enter your email address' className='rounded-sm text-gray-400 bg-white px-10 py-2' />
            <button className='bg-red-400 text-white px-8 py-2 rounded-sm'>Contact us</button>
            </div>
        
    </div>
  )
}

export default Newsletter
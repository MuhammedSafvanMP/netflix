import React from 'react';

export default function Kids() {
  return (
    <section className='flex flex-col md:flex-row justify-evenly items-center text-white px-6 md:px-16 lg:px-24 py-12 md:py-28 border-b-[7px] border-gray-700'>

    <img className='w-full md:w-[30%] max-w-[400px] mt-8 md:mt-0' src="../feature-1.png" alt="Watch kids" />
    <div className='md:mr-8'>
      <h2 className='text-[3rem] font-bold md:text-4xl lg:text-5xl xl:text-6xl'>Create profiles for kids</h2>
      <p className='text-lg md:text-2xl'>Send children on adventures with their favourite characters <br /> in a space made just for them—free with your membership.</p>
    </div>
    
    </section>
  );
}




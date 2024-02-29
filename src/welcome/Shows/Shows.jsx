import React from 'react';

export default function Shows() {
  return (
    <section className='flex flex-col md:flex-row justify-evenly items-center text-white px-6 md:px-16 lg:px-24 py-12 md:py-28 border-b-[7px] border-gray-700'>

      <div className='md:mr-8'>
        <h2 className='text-[3rem] font-bold md:text-4xl lg:text-5xl xl:text-6xl'>Enjoy on your TV</h2>
        <p className='text-lg md:text-2xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>

      <img className='w-full md:w-[30%] max-w-[400px] mt-8 md:mt-0' src="./feature-1.png" alt="Enjoy on your TV" />
    </section>
  );
}

import React from 'react';

export default function Offline() {
  return (
    <section className='flex flex-col md:flex-row justify-evenly items-center text-white px-6 md:px-16 lg:px-24 py-12 md:py-28 border-b-[7px] border-gray-700'>

      <img className='w-full md:w-[30%] max-w-[400px]' src="./feature-2.png" alt="feature_image" />

      <div className='md:ml-8'>
        <h2 className='text-[3rem] font-bold md:text-4xl lg:text-5xl xl:text-6xl'>Download your shows to <br /> watch offline</h2>
        <p className='text-lg md:text-2xl'>Save your favorites easily and always have something to watch</p>
      </div>

    </section>
  );
}

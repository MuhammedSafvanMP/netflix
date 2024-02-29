import React from 'react';

export default function Kids() {
  return (
    <section className='text-white px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 xl:py-28 border-b-[7px] border-gray-700'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-8'>
        <img className='w-full md:w-[30%] lg:w-[25%] xl:w-[20%] max-w-[300px] mb-6 md:mb-0' src="./feature-1.png" alt="" />
        <div>
          <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4'>Create profiles for kids</h2>
          <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </section>
  );
}

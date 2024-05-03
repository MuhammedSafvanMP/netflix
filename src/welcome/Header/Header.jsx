import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bago w-full h-[91vh] text-white bg-slate-600 flex flex-col items-center justify-center gap-4'>

      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'>
        Unlimited movies, TV shows, and more
      </h2>

      <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>
        Watch anywhere. Cancel anytime.
      </p>

      <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-center'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className='flex flex-col sm:flex-row gap-2'>
        <input
          className='w-full sm:w-80 px-6 py-3 sm:py-4 rounded-md bg-black border-green-700 border-[2px] mb-2 sm:mb-0'
          type="text"
          placeholder='Email address'
        />
        <Link to={"/home"}>
        <button className='w-full sm:w-auto px-6 py-3 bg-red-700 rounded-md'>
          Get Started
        </button>
        </Link>
      </div>

    </header>
  );
}

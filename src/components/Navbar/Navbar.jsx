import React from 'react';
import logo from '/netflix_logo.png';
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className='w-full h-[8vh] flex flex-wrap justify-between items-center px-5  '>
      <ul className='flex items-center'>
        <li>
          <img src={logo} alt="netflix_logo" width={140} className='cursor-pointer' />
        </li>
      </ul>

      <ul className='flex gap-5 text-white justify-around items-center w-full md:w-auto cursor-pointer font-bold mt-2 md:mt-0'>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Recently Added</li>
        <li>My List</li>
      </ul>

      <ul className='flex items-center mt-2 md:mt-0'>
        <li className='relative'>
          <CiSearch className='text-black font-bold size-9 absolute'/>
          <input type="text" className='text-black border-rose-50 rounded-md px-10 py-2'/>
        </li>
      </ul>
    </nav>
  );
}

import React from 'react';
import logo from '/netflix_logo.png';
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
  return (
    <nav className='w[100%] h-[8vh] flex justify-between items-center px-5'>
        <ul>
            <li>
                <img src={logo} alt="netflix_logo" width={140} className='cursor-pointer' />
            </li>
        </ul>

        <ul className='flex justify-around items-center w-[30%] text-white cursor-pointer font-bold'>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently Add</li>
            <li>My List</li>
        </ul>

        <ul className=' items-center'>
            <li>
                <CiSearch className='text-white font-bold size-9 absolute'/>               
                <input type="text" className='border-teal-200  px-10 py-2 text-white'/>
            </li>
        </ul>
    </nav>
  )
}

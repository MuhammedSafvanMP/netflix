import React from "react";
import logo from "/movieflix.png";


export default function Nav() {
  return (
    <>
      <nav className="flex justify-between items-center p-3 w-full md:h-20 lg:h-24 xl:h-28 top-0 absolute z-20">
        <img src={logo} alt="netflix_logo" className="w-28 h-10 md:w-40 md:h-12" />

        <ul className="flex text-center items-center gap-3">
          <img src="./images/language.svg" className="w-5 md:w-6 ml-3 mt-1" alt="" />
          
          <select className="px-4 md:px-8 py-2 text-white bg-black border-gray-700 rounded-md border-[1px] cursor-pointer">
            <option className="cursor-pointer" value="english">English</option>
            <option className="cursor-pointer" value="hindi">हिन्दी</option>
          </select>

          <div className="hidden md:block bg-red-700 py-2 px-6 md:px-[12px] rounded-md">
            <a className="text-white">Sign In</a>
          </div>

         
          <div className="md:hidden bg-red-700 py-2 px-4 rounded-md">
            <a className="text-white">Sign In</a>
          </div>
        </ul>
      </nav>
    </>
  );
}

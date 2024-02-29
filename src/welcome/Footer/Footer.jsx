import React from "react";

export default function Footer() {
  return (
    <footer className="text-_footer_text flex flex-col sm:flex-row justify-center gap-7 w-full py-10">

      <p className="sm:pl-8">
        Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a>
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 sm:underline sm:decoration-[2px]">
        <div className="flex flex-col px-4 py-4">
          <a href="#">FAQ</a>
          <a href="#">Account</a>
          <a href="#">Investor Relations</a>
          <a href="#">Ways to watch</a>
        </div>
        <div className="flex flex-col px-4 py-4">
          <a href="#">Privacy</a>
          <a href="#">Corporate information</a>
          <a href="#">Speed Test</a>
          <a href="#">Only on Netflix</a>
        </div>
        <div className="flex flex-col px-4 py-4">
          <a href="#">Help Center</a>
          <a href="#">Media Centre</a>
          <a href="#">Jobs</a>
          <a href="#">Terms of Use</a>
        </div>
        <div className="flex flex-col px-4 py-4">
          <a href="#">Cookie Preferences</a>
          <a href="#">Contact Us</a>
          <a href="#">Legal Notices</a>
        </div>
      </div>

      <ul className="sm:px-8">
        <li>
          <img src="./images/language.svg" className="w-5 absolute ml-3 mt-3" alt="" />
          <select className="sm:px-4 sm:py-2 bg-black text-white border-white border-[1px]">
            <option value="english">English</option>
            <option value="hindi">हिन्दी</option>
          </select>
        </li>
      </ul>

      <span className="sm:pl-8">Netflix India</span>
    </footer>
  );
}

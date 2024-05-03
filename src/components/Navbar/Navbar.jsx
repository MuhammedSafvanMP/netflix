import React from "react";
import logo from "/movieflix.png";
// import { CiSearch } from "react-icons/ci";
import "./Navbar.css"
import "./Navbar.css"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
  
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-left">
          <img src={logo} alt="" />
          <ul>
            <li><Link to={'/home'}>Home</Link> </li>
            <li> <Link to={'/home/tvseries'}>TV Shows</Link> </li>
            <li><Link to={'/home/allmovies'}>Movies</Link> </li>
            <li><Link to={'/home/newtrendigs'}>New & Popular</Link> </li>
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        <Link to={"/home/movieSearch"}>
        <img src={search_icon} alt="" className="icons" />
        </Link>
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" className="profile" />
        </div>
      </div>
    </nav>
  );
}

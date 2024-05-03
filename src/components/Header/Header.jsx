import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar"; // Assuming Navbar component exists
import axios from "axios";
import { baseURL } from "../../constant/Constant";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import "./Header.css";

export default function Header({ url }) {
  const [headerMovies, setHeaderMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setHeaderMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMovieIndex(
        (prevIndex) => (prevIndex + 1) % headerMovies.length
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [headerMovies]);

  const currentMovie = headerMovies[currentMovieIndex];

  return (
    <header className="h-full flex flex-col overflow-hidden bg-no-repeat bg-cover">
      <Navbar />
      
      <div className="hero">
        <img
          src={`${baseURL}${currentMovie && currentMovie.poster_path}`}
          alt=""
          className="banner-img"
        />
        <div className="hero-caption px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 flex flex-col justify-center">
          <h4 className="font-serif text-xs sm:text-base text-white mb-2">
            {currentMovie && currentMovie.release_date}
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 lg:mb-8">
            {currentMovie && currentMovie.title}
          </h1>
          <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 lg:mb-8">
            {currentMovie && currentMovie.overview.slice(0, 180)}
          </p>
          <div className="hero-btns flex flex-col sm:flex-row gap-4">
            <button className="btn bg-white text-black flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold">
              <img src={play_icon} alt="" className="mr-2" />
              Play
            </button>
            <button className="btn dark-btn bg-gray-800 text-white flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold">
              <img src={info_icon} alt="" className="mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

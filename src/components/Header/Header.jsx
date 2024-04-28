import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { baseURL} from "../../constant/Constant";
import './Header.css'

export default function Header({url}) {
  const [headerMovies, setHeaderMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setHeaderMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMovieIndex(prevIndex =>
        (prevIndex + 1) % headerMovies.length
      );
    }, 10000);

    return () => clearInterval(intervalId); 
  }, [headerMovies]);

  const currentMovie = headerMovies[currentMovieIndex];

  return (
    <header className="text-white w-full h-[80vh] bg-no-repeat  object-cover " style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${baseURL}${currentMovie && currentMovie.poster_path})`, backgroundSize: "80% 80vh", backgroundPosition: "right top"}}>
      <Navbar />

      <div className="content flex w-[80%] h-[60vh] items-start justify-end px-[20px] flex-col text-white" >
        <h4 className="font-serif text-base">
          {currentMovie && currentMovie.release_date}
        </h4>

        <h1 className="font-mono text-3xl py-5" style={{fontSize: "3rem"}}>
          {currentMovie && currentMovie.title}
        </h1>
        <p className="text-wrap w-[50%] font-bold text-lg">
          {currentMovie && currentMovie.overview}
        </p>
        <div className="flex gap-5 pt-4">
          <button className="py-3 bg-red-500 px-10 font-extralight rounded-md">Play</button>
          <button className="py-3 bg-red-500 px-10 font-extralight rounded-md">My List</button>
        </div>
      </div>
    </header>
  );
}

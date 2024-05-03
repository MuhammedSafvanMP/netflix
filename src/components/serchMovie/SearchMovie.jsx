import React, { useEffect, useState } from "react";
import axios from "axios";
import { api_key, baseURL } from "../../constant/Constant";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function SearchMovie() {
  const [findMovie, setFindMovie] = useState([]);
  const [find, setFind] = useState("");
  const [dummy, setDummy] = useState([]);
  const navigate = useNavigate();

  const findData = (e) => {
    setFind(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&include_adult=false&language=en-US&page=1&query=${find}`
      );
      setFindMovie(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleSearchMovie = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`);
      // Assuming response.data.results is the correct property to access movie data
      setDummy(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
    handleSearchMovie();
  }, []);

  return (
    <>
    <Navbar />
      <div className="max-w-md pt-10 flex gap-3  relative mx-auto   z-40">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search your favorite movie..."
            onChange={findData}
          />
        </div>
        <button
          onClick={handleSearch}
          className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>

      <section className="w-full h-full p-8 flex flex-wrap justify-center scroll-m-2">
        {findMovie.length > 0 ? (
          findMovie.map((movie) => (
            <div key={movie.id} className="w-72  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-2 mb-4">
              <a>
                <img
                  onClick={() => navigate(`/home/${movie.id}`)}
                  src={`${baseURL}${movie && movie.poster_path}`}
                  alt="Product"
                  className="h-80 w-full object-cover rounded-t-xl"
                />
                <div className="px-4 py-3">
                  <p className="text-lg font-bold text-black truncate block capitalize">{movie.title}</p>
                </div>
              </a>
            </div>
          ))
        ) : (
          dummy.map((movie) => (
            <div key={movie.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-2 mb-4">
              <a>
                <img
                  onClick={() => navigate(`/home/${movie.id}`)}
                  src={`${baseURL}${movie && movie.poster_path}`}
                  alt="Product"
                  className="h-80 w-full object-cover rounded-t-xl"
                />
                <div className="px-4 py-3">
                  <p className="text-lg font-bold text-black truncate block capitalize">{movie.title}</p>
                </div>
              </a>
            </div>
          ))
        )}
      </section>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../constant/Constant';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

export default function Movie({ title, url, isSmall }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchMovie();
  }, [url, setMovies]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 10, // Show 4 slides on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        }
      },
      {
        breakpoint: 480, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile devices
        }
      }
    ]
  };

  return (
    <section className='pt-[7rem] px-5'>
      <h2 className='text-white font-bold pb-3' style={{ fontSize: "1.5rem" }}>{title}</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="px-2">
            <img
              onClick={() => navigate(`/home/${movie.id}`)}
              className={`w-full ${isSmall ? "h-[30vh]" : "h-[40vh]"} rounded-lg cursor-pointer bg-zinc-300 transition-all duration-500 transform hover:scale-110`}
              src={`${baseURL}${movie && movie.poster_path}`}
              alt="image description"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

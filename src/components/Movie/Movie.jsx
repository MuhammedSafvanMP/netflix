import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { baseURL } from '../../constant/Constant';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../../context/globalContext';

export default function Movie({ title, url, isSmall }) {
  const [movies, setMovies] = useContext(MovieContext);
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
    slidesToShow: 10,
    slidesToScroll: 1
  };

  return (
    <section className='pt-[7rem] px-5'>
      <h2 className='text-white font-bold pb-3' style={{ fontSize: "1.5rem" }}>{title}</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => navigate(`/home/${movie.id}`)}
            className={` ${isSmall ? "h-[30vh]" : "h-[40vh]"}   px-2 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 `}
            src={`${baseURL}${movie && movie.poster_path}`}
            alt="image description"
          />
        ))}
      </Slider>
    </section>
  );
}

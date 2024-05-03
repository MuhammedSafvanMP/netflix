
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { baseURL } from '../../constant/Constant';

export default function Newtrending ({ name , movie}) {


    const [allMovies, setallMovies] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchAllmovies = async () => {
        try {
          const response = await axios.get(movie);
          setallMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchAllmovies();
    }, [setallMovies]);
  
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
      <h2 className='text-white font-bold pb-3' style={{ fontSize: "1.5rem" }}>{name}</h2>
      <Slider {...settings}>
        {allMovies.map((movie) => (
          <div key={movie.id} className="px-2">
            <img
              onClick={() => navigate(`/home/${movie.id}`)}
              className={`w-full h-[30vh] rounded-lg cursor-pointer bg-zinc-300 transition-all duration-500 transform hover:scale-110`}
              src={`${baseURL}${movie && movie.poster_path}`}
              alt="image description"
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}

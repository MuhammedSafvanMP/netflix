import React, { useEffect, useState } from "react";
import { api_key, baseURL } from "../../constant/Constant";
import axios from "axios";
import Slider from "react-slick";

export default function Recomend({ id, title }) {
  const [recomend, setRecomend] = useState([]);
  const recomendMovies = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const recomend = await axios.get(recomendMovies);
        setRecomend(recomend.data.results);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchMovie();
  }, [id]);

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
    <>
      {recomend && (
        <section className="pt-[7rem] px-5">
          <h2 className="text-white font-bold pb-3" style={{ fontSize: "1.5rem" }}>
            {title}
          </h2>
          <Slider {...settings}>
            {recomend?.map((movie) => (
              <div key={movie.id} className="px-2">
                <img
                  className={`h-[30vh] w-full rounded-lg cursor-pointer bg-zinc-300 transition-all duration-500 transform hover:scale-110`}
                  src={`${baseURL}${movie && movie.poster_path}`}
                  alt="image description"
                />
              </div>
            ))}
          </Slider>
        </section>
      )}
    </>
  );
}

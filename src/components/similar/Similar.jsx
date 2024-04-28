import React, { useEffect, useState } from "react";
import { api_key, baseURL } from "../../constant/Constant";
import axios from "axios";
import Slider from "react-slick";

export default function Similar({ id, title }) {
  const [similar, setSimilar] = useState([]);

  const similarMovies = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const similar = await axios.get(similarMovies);
        setSimilar(similar.data.results);
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
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <>
      {similar && (
        <section className="pt-[7rem] px-5">
          <h2
            className="text-white font-bold pb-3"
            style={{ fontSize: "1.5rem" }}
          >
            {title}
          </h2>

          <Slider {...settings}>
            {similar?.map((movie) => (
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
      ) }
    </>
  );
}

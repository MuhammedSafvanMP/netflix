import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoHeartCircle } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { IoListCircle } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import YouTube from "react-youtube";
import Recomend from "../recomend/Recomend";
import Actores from "../actores/Actores";
import Similar from "../similar/Similar";
import { api_key, baseURL } from "../../constant/Constant";
import Navbar from "../Navbar/Navbar";

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function OverReview() {
  const { id } = useParams();
  const [reviewMovie, setReviewMovie] = useState({});
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
        );
        setReviewMovie(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`
        );
        setVideo(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchMovie();
    fetchVideo();
  }, [id]);

  if (Object.keys(reviewMovie).length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  const rating = Math.ceil(reviewMovie.vote_average);

  return (
    <>
    <Navbar />
      <section
        className="m-4 md:m-10 pl-4 md:pl-8 text-white flex flex-col md:flex-row items-center gap-8 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${baseURL}${reviewMovie.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-1/3">
          <img
            src={`${baseURL}${reviewMovie.poster_path}`}
            alt="movie_view"
            className="p-4 md:p-8 rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-center md:w-2/3 gap-4 text-center md:text-left">
          <h2 className="font-bold text-3xl md:text-5xl">
            {reviewMovie.title || reviewMovie.name}{" "}
            <span className="text-sm">
              ({reviewMovie.release_date || reviewMovie.first_air_date})
            </span>
          </h2>
          <h5 className="text-xs md:text-sm">
            Language -{" "}
            <span className="font-normal">
              {reviewMovie.original_language}
            </span>
          </h5>
          <div className="flex justify-center md:justify-start">
            <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                value={rating}
                maxValue={10}
                text={`${rating}%`}
                styles={buildStyles({
                  pathColor:
                    rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
              />
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <IoListCircle />
            <IoHeartCircle />
            <FaBookmark />
            <span className="flex gap-2">
              <FaPlay /> Play Trailer
            </span>
          </div>
          <Actores id={id} />
          <h4 className="font-semibold text-xl md:text-2xl">Overview</h4>
          <p className="font-serif text-sm md:text-base">
            {reviewMovie.overview}
          </p>
        </div>
      </section>
      <Slider {...settings} className="flex gap-4 md:gap-8">
        {video &&
          video.slice(0, 10).map((videos) => (
            <div key={videos.id} className="px-2 md:px-4">
              <YouTube
                videoId={videos.key}
                className="w-full h-[30vh] md:h-[30%] rounded-lg cursor-pointer"
              />
            </div>
          ))}
      </Slider>
      <Similar id={id} title={"Similar"} />
      <Recomend id={id} title={"Recommendations"} />
    </>
  );
}

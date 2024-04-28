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

const settings = {
  infinite: true,
  slidesToShow: 3, // Adjust this based on your design
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // Adjust as needed
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
      <section
        className="m-10 pl-56 text-white flex items-center  gap-8 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${baseURL}${reviewMovie.poster_path})`,
          backgroundSize: "100% 90vh",
          backgroundPosition: "right top",
        }}
      >
        <div>
          <img
            src={`${baseURL}${reviewMovie.poster_path}`}
            alt="movie_view"
            className="p-8 rounded-lg w-[100%] h-auto max-h-[850px] object-contain "
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-5xl w-[60%] text-wrap">
            {" "}
            {reviewMovie.title || reviewMovie.name}{" "}
            <span>
              ({reviewMovie.release_date || reviewMovie.first_air_date})
            </span>
          </h2>

          <h5>
            Language -
            <small className="font-normal text-xs">
              {reviewMovie.original_language}
            </small>
          </h5>

          <div className="text-white" style={{ width: 70, height: 70 }}>
            <CircularProgressbar
              value={rating}
              maxValue={10}
              text={`${rating} %`}
              styles={buildStyles({
                pathColor:
                  rating < 5 ? "red" : rating < 7 ? "orange" : "green",
              })}
            />
          </div>

          <div className="flex gap-16 text-3xl ">
            <IoListCircle />
            <IoHeartCircle />
            <FaBookmark />
            <span className="flex gap-2">
              {" "}
              <FaPlay /> Play Trailer
            </span>
          </div>

          <Actores id={id} />

          <h4 className="font-semibold text-3xl">Overview</h4>
          <p className="font-serif text-x w-[60%] text-wrap">
            {reviewMovie.overview}
          </p>
        </div>
      </section>
       

      <Slider {...settings} className="flex gap-28">
        {video &&
          video?.slice(0, 10).map((videos) => (
            <div key={videos.id} className="px-6 ">
              <YouTube
                videoId={videos.key}
                className="w-[10%] h-[30%] rounded-lg cursor-pointer"
              />
            </div>
          ))}
      </Slider>
            

      <Similar id={id} title={"Similar"} />
      <Recomend id={id} title={"Recommendations"} />

    </>
  );
}

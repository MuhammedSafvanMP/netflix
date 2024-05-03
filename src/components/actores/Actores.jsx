import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key, baseURL } from "../../constant/Constant";

export default function Actores({ id }) {
  const [actors, setActors] = useState([]);

  const fetchActors = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`
      );
      setActors(response.data.cast);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // You might want to set some state here to handle the error
    }
  };

  useEffect(() => {
    fetchActors();
  }, [id]);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white">
      {actors?.slice(0, 6).map((actor) => (
        <div key={actor.id} className="flex flex-col items-center">
          <img
            className="w-24 h-24 md:w-32 md:h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={`${baseURL}${actor.profile_path}`}
            alt={actor.original_name}
          />
          <h2 className="text-center mt-1 text-sm md:text-base">{actor.original_name}</h2>
        </div>
      ))}
    </div>
  );
}

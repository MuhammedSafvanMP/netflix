import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api_key } from '../../constant/Constant';

export default function Actores({ id }) {
  const [actores, setActores] = useState([]);

  useEffect(() => {
    const fetchActores = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/alternative_names?api_key=${api_key}include`);
        setActores(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchActores();
  }, [id]); // Include 'id' in the dependency array if its value might change and you need to re-fetch when it changes.

  console.log(actores, "actores");

  return (
    <div>Actores</div>
  );
}

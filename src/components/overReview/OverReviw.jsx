import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../constant/Constant';
import { MovieContext } from '../../context/globalContext';

export default function OverReview() {
  const { id } = useParams();
  const [movies, setMovies] = useContext(MovieContext);

  const findMovie = movies.find((movie) => movie.id === parseInt(id));

  if (!findMovie) {
    return <div>No movie found with the specified id</div>;
  }

  return (
    <section>
      <img src={`${baseURL}${findMovie.poster_path}`} alt="movie_view" />
    </section>
  );
}

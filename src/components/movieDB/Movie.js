import React, { useState, useEffect } from 'react';

import movieCSS from './movieDB.module.css';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';

const Movie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className={movieCSS.loading}></div>;
  }

  if (error.show) {
    return (
      <div className={movieCSS.pageError}>
        <h1>{error.msg}</h1>
        <Link to="/moviedb" className={movieCSS.btn}>
          back to movies
        </Link>
      </div>
    );
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <section className={movieCSS.singleMovie}>
      <img src={poster} alt={title} />
      <div className={movieCSS.singleMovieInfo}>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/moviedb" className={movieCSS.btn}>
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default Movie;

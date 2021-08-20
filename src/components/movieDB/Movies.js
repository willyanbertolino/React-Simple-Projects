import React from 'react';
import { useGlobalContext } from './context';
import movieCSS from './movieDB.module.css';
import { Link } from 'react-router-dom';

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className={movieCSS.loading}></div>;
  }
  return (
    <section className={movieCSS.movies}>
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link
            to={`/moviedb/movies/${id}`}
            key={id}
            className={movieCSS.movie}
          >
            <article>
              <img src={poster === 'N/A' ? defaultImg : poster} alt={title} />
              <div className={movieCSS.movieInfo}>
                <h4 className={movieCSS.title}>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;

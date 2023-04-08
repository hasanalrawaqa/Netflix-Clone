import React from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';

const Movie = (props) => {
  const movie = props.movie;
  return (
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.title} />
      <div className="movie-description">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <ModalMovie movie={movie} />
      </div>
    </div>
  );
};

export default Movie;
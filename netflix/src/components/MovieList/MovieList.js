import React from 'react';
import Movie from '../Movie/Movie';

const MovieList = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((movie) => (
        <Movie key={movie.id} movie={movie}  />
      ))}
    </div>
  );
};

export default MovieList;

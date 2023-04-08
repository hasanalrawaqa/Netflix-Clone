import React, { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get('/trending')
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <MovieList movieList={movieList} />
    </div>
  );
};

export default Home;
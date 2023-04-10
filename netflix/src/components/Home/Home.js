import React, { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getdata() {
    await fetch('https://movies-20iz.onrender.com/trending')
    .then((response) => response.json())
    .then((data) => {
        setData(data);
        setLoading(false);
      });
  }

  useEffect(() => { getdata()},[]);


  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <MovieList data={data} />
        </div>
      )}
    </div>
  );
};

export default Home;

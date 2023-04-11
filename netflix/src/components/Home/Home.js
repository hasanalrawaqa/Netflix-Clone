import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';

const Home = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getdata() }, []);
  const [data, setData] = useState([]);
  async function getdata() {
    const response = await fetch('https://movies-20iz.onrender.com/trending')
    console.log(1111, response);
    const moviedata = await response.json()
    console.log(2222, moviedata);
    setData(moviedata);
    console.log(3333, data);
  }
  return (
    <div>
      <MovieList data={data} />
    </div>
  );
};

export default Home;

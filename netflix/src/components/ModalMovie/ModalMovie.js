import React, { useState } from 'react';
import axios from 'axios';

const ModalMovie = (props) => {
  const [comment, setComment] = useState('');
  const addMovie = () => {
    axios
      .post('/addMovie', {
        title: props.movie.title,
        poster_path: props.movie.poster_path,
        comment: comment,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addMovie}>Add to Favorite</button>
    </div>
  );
};

export default ModalMovie;
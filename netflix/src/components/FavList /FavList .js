import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const FavList = () => {
const [data, setData] = useState([]);

useEffect(() => {
const fetchData = async () => {
const response = await fetch('https://movies-20iz.onrender.com/getMovies');
const data = await response.json();
setData(data);
};
fetchData();
}, []);

const handleDelete = async (id) => {
const response = await fetch(`https://movies-20iz.onrender.com/deleteMovie/${id}`, {
method: 'DELETE',
});
const data = await response.json();
setData(data);
};

const handleUpdate = async (id, comment) => {
const response = await fetch(`https://movies-20iz.onrender.com/updateMovie/${id}`, {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ comment }),
});
const data = await response.json();
setData(data);
};

return (
<div>
<h2>Favorite List</h2>
{data.map((movie) => (
<Card key={movie.id} style={{ width: '18rem' }}>
<Card.Img variant="top" src={movie.poster_path} alt={movie.title} />
<Card.Body>
<Card.Title>{movie.title}</Card.Title>
<Card.Text>{movie.comment}</Card.Text>
<Button variant="danger" onClick={() => handleDelete(movie.id)}>
Delete
</Button>
<form
onSubmit={(e) => {
e.preventDefault();
handleUpdate(movie.id, e.target[0].value);
e.target[0].value = '';
}}
>
<input type="text" defaultValue={movie.comment} />
<Button type="submit" variant="success">
Update
</Button>
</form>
</Card.Body>
</Card>
))}
</div>
);
};

export default FavList;
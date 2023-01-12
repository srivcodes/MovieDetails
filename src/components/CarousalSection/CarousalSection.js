import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CarousalSection = ({ name, id }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}`
    )
      .then((resp) => resp.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h3>{name}</h3>
      <ul className="movie-list">
        {movies.map(({ poster_path, original_title, id }) => (
          <li className="list-style">
            <Link to={`/details/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                alt={original_title}
                height="300"
                width="200"
              />
              <p className='title-style'>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

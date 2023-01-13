import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMovieFetch from '../../hooks/useMovieFetch';
export const CarousalSection = ({ name, id: genreId }) => {
  const { data, error, loading } = useMovieFetch(
    'discover/movie',
    `with_genres=${genreId}`
  );
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h3>{name}</h3>
      <ul className="movie-list">
        {data?.results?.map(({ poster_path, original_title, id }) => (
          <li className="list-style">
            <Link to={`/details/${id}/${genreId}`}>
              <img
                src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                alt={original_title}
                height="300"
                width="200"
              />
              <p className="title-style">{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

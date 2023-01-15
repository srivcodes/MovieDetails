import React from 'react';
import { Link } from 'react-router-dom';

export const CarouselItem = ({ movie, genreName }) => {
  return (
    <li className="item" key={movie?.id}>
      <Link to={`/details/${movie?.id}/${genreName?.toLowerCase()}`}>
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`}
          alt={movie?.original_title}
          height="300"
          width="200"
        />
      </Link>
    </li>
  );
};

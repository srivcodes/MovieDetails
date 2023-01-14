import React from 'react';
import useMovieFetch from '@hooks/useMovieFetch';
import Carousel from '../Carousel/Carousel';

export const CarousalSection = ({ name: genreName, id: genreId }) => {
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
      <h3 className="genre-heading">{genreName}</h3>
      {data ? <Carousel movies={data.results} genreName={genreName} /> : null}
    </div>
  );
};

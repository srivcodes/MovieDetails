import React from 'react';
import useMovieFetch from '@hooks/useMovieFetch';
import Carousel from '@components/Carousel/Carousel';

export const CarousalSection = ({ genreName, id: genreId }) => {
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
    <div className="genre-section">
      {data ? <Carousel movies={data.results} genreName={genreName} /> : null}
    </div>
  );
};

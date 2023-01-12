import React from 'react';
import { Header } from './components/Header/Header';
import useMovieFetch from './hooks/useMovieFetch';
import { CarousalSection } from './components/CarousalSection/CarousalSection';

export const Home = () => {
  const { data, error, loading } = useMovieFetch('genre/movie/list');
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      {data?.genres?.slice(0, 3)?.map((genre) => {
        return (
          <CarousalSection id={genre.id} name={genre.name} key={genre.id} />
        );
      })}
    </div>
  );
};

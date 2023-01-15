import React, { Suspense, useState } from 'react';
import { Header } from '@components/Header/Header';
import useMovieFetch from '@hooks/useMovieFetch';
import { CarousalSection } from '@components/CarousalSection/CarousalSection';

export const Home = ({ data }) => {
  // const { data, error, loading } = useMovieFetch('genre/movie/list');
  const [mainData, setMainData] = useState(() => {
    return _isBrowser_ ? window.__INITIAL_DATA__ : data;
  });
  // if (error) {
  //   return <div>{error}</div>;
  // }
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="home">
      <Header />
      {mainData?.genres?.slice(0, 3)?.map((genre) => (
        <CarousalSection id={genre.id} name={genre.name} key={genre.id} />
      ))}
    </div>
  );
};

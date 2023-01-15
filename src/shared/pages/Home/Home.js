import React, { useState } from 'react';
import { Header } from '@components/Header/Header';
import { CarousalSection } from '@components/CarousalSection/CarousalSection';

export const Home = ({ data }) => {
  const [mainData] = useState(() => {
    return _isBrowser_ ? window.__INITIAL_DATA__ : data;
  });
  return (
    <div className="home">
      {mainData?.genres?.slice(0, 3)?.map(({ name: genreName, id }) => (
        <div key={id}>
          <h3 className="genre-heading">{genreName}</h3>
          <CarousalSection id={id} genreName={genreName} />
        </div>
      ))}
    </div>
  );
};

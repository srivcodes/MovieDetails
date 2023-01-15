import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '@components/Header/Header';

import useLocalStorage from '@hooks/useLocalStorage';

export const MovieDetails = ({ data: serverData }) => {
  const { wishlistItems, setwishlistItems } = useLocalStorage('wishlist', []);
  const params = useParams();

  const [data] = useState(() => {
    return _isBrowser_ ? window.__INITIAL_DATA__ : serverData;
  });

  const handleSubmit = () => {
    let itemExists = wishlistItems.find((o) => o.id === data.id);
    if (itemExists) {
      return;
    }
    wishlistItems.push(data);
    setwishlistItems(wishlistItems);
    window.dispatchEvent(new Event('local-storage'));
  };
  return (
    <div>
      <Header />
      <div className={`details-${params.genreName} page-layout`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt={data?.original_title}
          height="500"
          width="500"
        />
        <div className="description-section">
          <h1>{data?.original_title}</h1>
          <p>{data?.overview}</p>
          <a className="primary-btn" onClick={handleSubmit}>
            Add to Wishlist
          </a>
        </div>
      </div>
      <div>
        <h3>Additional Details:</h3>
        <p>Status: {data?.status}</p>
        <p>Duration: {data?.runtime} minutes</p>
      </div>
    </div>
  );
};

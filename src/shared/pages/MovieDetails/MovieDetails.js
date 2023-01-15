import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '@components/Header/Header';

import useMovieFetch from '@hooks/useMovieFetch';
import useLocalStorage from '@hooks/useLocalStorage';

export const MovieDetails = () => {
  const [wishlistItems, setwishlistItems] = useLocalStorage('wishlist', []);
  const params = useParams();
  const { data, error, loading } = useMovieFetch(`movie/${params.movieId}`);

  const handleSubmit = () => {
    let itemExists = wishlistItems.find((o) => o.id === data.id);
    if (itemExists) {
      return;
    }
    wishlistItems.push(data);
    setwishlistItems(wishlistItems);
    window.dispatchEvent(new Event('local-storage'));
  };

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
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
          <a className={`primary-btn`} onClick={handleSubmit}>
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

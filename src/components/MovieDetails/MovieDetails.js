import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../Header/Header';

export const MovieDetails = () => {
  const [details, setDetails] = useState();
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.API_KEY}&language=en-US`
    )
      .then((resp) => resp.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = () => {
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    let itemExists = wishlistItems.find((o) => o.id === details.id);
    if (itemExists) {
      return;
    }
    wishlistItems.push(details);
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    window.dispatchEvent(new Event('local-storage'));
  };

  return (
    <div>
      <Header />
      <div className="details-section">
        <img
          src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`}
          alt={details?.original_title}
          height="500"
          width="500"
        />
        <div className="description-section">
          <h1>{details?.original_title}</h1>
          <p>{details?.overview}</p>
          <button className="primary-btn" onClick={handleSubmit}>
            Add to Wishlist
          </button>
        </div>
      </div>
      <div>
        <h3>Additional Details:</h3>
        <p>Status: {details?.status}</p>
        <p>Duration: {details?.runtime} minutes</p>
      </div>
    </div>
  );
};

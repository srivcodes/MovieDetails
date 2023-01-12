import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import { FaRegHeart, FaArrowRight } from 'react-icons/fa';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wishItems = JSON.parse(localStorage.getItem('wishlist')) || [];
  const [wishlistCount, setWishListCount] = useState(
    wishItems ? wishItems.length : 0
  );
  useEffect(() => {
    window.addEventListener('local-storage', function (event) {
      const items = JSON.parse(localStorage.getItem('wishlist'));
      items ? setWishListCount(items.length) : setWishListCount(0);
    });
    return () =>
      window.removeEventListener('local-storage', () =>
        console.log('removed listener')
      );
  }, []);

  function removeWishlistHandler(item) {
    const updatedWishlist = wishItems.filter((wish) => wish.id !== item.id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event('local-storage'));
  }
  return (
    <div className="header">
      <Link to="/">
        <h3>Movie Details</h3>
      </Link>
      <h3 className="heart-icon" onClick={() => setIsOpen(!isOpen)}>
        <span>{wishlistCount}</span>
        <a>
          <span>
            <FaRegHeart />
          </span>
        </a>
      </h3>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
        <div>
          <button
            className="primary-btn"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <FaArrowRight />
          </button>
          <h3 className="wishlist-heading">Your Wishlist!!</h3>
          {wishItems.map((item) => {
            return (
              <div className="wishlist-content">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${item?.poster_path}`}
                  height="100"
                  width="80"
                />
                <div className="movie-wishlist">
                  <li>{item?.title}</li>
                  <li>{item?.tagline}</li>
                </div>
                <a onClick={() => removeWishlistHandler(item)}>X</a>
              </div>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

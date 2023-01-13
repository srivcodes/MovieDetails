import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@components/Drawer/Drawer';
import { FaRegHeart, FaArrowRight } from 'react-icons/fa';
import useLocalStorage from '@hooks/useLocalStorage';

export const Header = () => {
  const [wishItems, setWishItems] = useLocalStorage('wishlist', []);
  const [isOpen, setIsOpen] = useState(false);

  function removeWishlistHandler(item) {
    const updatedWishlist = wishItems.filter((wish) => wish.id !== item.id);
    setWishItems(updatedWishlist);
  }
  return (
    <div className="header">
      <Link to="/">
        <h3>Movie Details</h3>
      </Link>
      <h3 className="heart-icon" onClick={() => setIsOpen(!isOpen)}>
        <span>{wishItems.length}</span>
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
          <h3 className="wishlist-heading">
            {wishItems.length === 0
              ? 'Wishlist is empty'
              : `Wishlist (${wishItems.length})`}
          </h3>
          {wishItems.map((item) => {
            return (
              <div className="wishlist-content" key={item.id}>
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

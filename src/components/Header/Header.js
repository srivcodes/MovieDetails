import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';

export const Header = () => {
  const wishItems = JSON.parse(localStorage.getItem('wishlist'));
  const [wishlistCount, setWishListCount] = useState(
    wishItems ? wishItems.length : 0
  );

  useEffect(() => {
    window.addEventListener('local-storage', function (event) {
      const items = JSON.parse(localStorage.getItem('wishlist'));
      items ? setWishListCount(items.length) : setWishListCount(0);
    });
  }, []);

  return (
    <div className="header">
      <h3>Movie Details</h3>
      <h3 className="heart-icon">
        <span>{wishlistCount}</span>
        <span>
          <FaRegHeart />
        </span>
      </h3>
    </div>
  );
};

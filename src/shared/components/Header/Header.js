import React, { Suspense, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Drawer from '@components/Drawer/Drawer';
import { FaRegHeart, FaArrowRight } from 'react-icons/fa';
import useLocalStorage from '@hooks/useLocalStorage';

export const Header = () => {
  const [wishItems, setWishItems] = useLocalStorage('wishlist', []);
  const [isOpen, setIsOpen] = useState();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setHasMounted(true);
  }, []);

  function removeWishlistHandler(item) {
    const updatedWishlist = wishItems.filter((wish) => wish.id !== item.id);
    setWishItems(updatedWishlist);
  }
  return (
    <div className="header">
      <a href="/">
        <h3>Movie Details</h3>
      </a>
      <h3 className="heart-icon" onClick={() => setIsOpen(!isOpen)}>
        <span>{hasMounted ? wishItems.length : 0}</span>
        <span>
          <FaRegHeart />
        </span>
      </h3>
    </div>
  );
};

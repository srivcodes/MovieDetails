import React, { Suspense, useEffect, useState } from 'react';
import { Drawer } from '@components/Drawer/Drawer';
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

  return (
    <div className="header">
      <a href="/">
        <h1>Movie Details</h1>
      </a>
      <a
        className="wishlist-button"
        aria-disabled={!hasMounted}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          <FaRegHeart />
        </span>
        <span>{`Wishlist (${hasMounted ? wishItems.length : 0})`}</span>
      </a>
      {isOpen ? <Drawer /> : null}
    </div>
  );
};

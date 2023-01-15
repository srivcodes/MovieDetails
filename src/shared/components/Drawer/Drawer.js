import React from 'react';
import useLocalStorage from '@hooks/useLocalStorage';
import { RxCross2 } from 'react-icons/rx';

export const Drawer = () => {
  const [wishItems, setWishItems] = useLocalStorage('wishlist', []);

  function removeWishItem(item) {
    const updatedWishlist = wishItems.filter((wish) => wish.id !== item.id);
    setWishItems(updatedWishlist);
  }

  return (
    <div className="drawer">
      <div className="drawer-container">
        <h3>{wishItems.length === 0 ? 'Wishlist is empty' : 'Wishist'}</h3>
        <ul>
          {wishItems.map((li) => {
            return (
              <li key={li.id} className="wish-list">
                <img
                  src={`https://image.tmdb.org/t/p/w500${li?.poster_path}`}
                  alt={li?.original_title}
                  height="100"
                  width="150"
                />
                <p>{li?.original_title}</p>
                <i onClick={() => removeWishItem(li)}>
                  <RxCross2 />
                </i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

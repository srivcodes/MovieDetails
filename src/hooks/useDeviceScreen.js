import React, { useEffect, useState } from 'react';

export const useDeviceScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const onResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const isMobile = width <= 768;
  return isMobile;
};

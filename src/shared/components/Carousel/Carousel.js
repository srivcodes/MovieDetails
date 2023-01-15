import React, { useEffect, useRef, useState } from 'react';

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useDeviceScreen } from '@hooks/useDeviceScreen';
import { CarouselItem } from '@components/Carousel/CarouselItem';

const Carousel = ({ movies, genreName }) => {
  const [boundWidth, setBoundWidth] = useState();
  const isMobile = useDeviceScreen();
  const ref = useRef();
  const scroll = (offsetWidth) => {
    ref.current.scrollLeft = ref.current.scrollLeft + offsetWidth;
  };

  useEffect(() => {
    isMobile ? setBoundWidth(270) : setBoundWidth(270 * 5);
  }, [isMobile]);

  return (
    <div className="container">
      <a className="nav-arrow" onClick={() => scroll(-boundWidth)}>
        <FaChevronLeft />
      </a>
      <ul className="list-container" ref={ref}>
        {movies.map((movie) => (
          <CarouselItem movie={movie} genreName={genreName} key={movie?.id} />
        ))}
      </ul>
      <a className="nav-arrow" onClick={() => scroll(boundWidth)}>
        <FaChevronRight />
      </a>
    </div>
  );
};

export default Carousel;

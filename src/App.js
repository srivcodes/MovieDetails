import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

import { Home } from './home';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movieId/:genreId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

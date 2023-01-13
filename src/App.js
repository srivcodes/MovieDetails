import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import { MovieDetails } from '@pages/MovieDetails/MovieDetails';
import { Home } from '@pages/Home/Home';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movieId/:genreName" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from 'react';
import { App } from './App';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

export const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/details',
    element: <MovieDetails />
  },
  {
    path: '/details/:movieId',
    element: <MovieDetails />,
    exact: true
  }
];

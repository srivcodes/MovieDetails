import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom';
import { routes } from './routes';

const container = document.getElementById('app');

const router = createBrowserRouter(routes);

createRoot(container).render(<App />);

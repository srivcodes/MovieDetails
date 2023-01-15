import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from '@components/Header/Header';

// pages
import FallbackPage from '@pages/404';

import routes from './routes';

import './app.scss';

export function App(props) {
  const serverData = props;
  return (
    <Routes>
      {routes.map(({ path, component: C, fetchInitialData }) => {
        return (
          <Route
            path={path}
            element={
              <>
                <Header />
                <C data={serverData} fetchInitialData={fetchInitialData} />
              </>
            }
            key={path}
          />
        );
      })}
      <Route path="*" element={<FallbackPage />} />
    </Routes>
  );
}

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import FallbackPage from '@pages/404';

import routes from './routes';

export function App(props) {
  const serverData = props;
  console.log(serverData);
  return (
    <Routes>
      {routes.map(({ path, component: C, fetchInitialData }) => {
        return (
          <Route
            path={path}
            element={
              <C data={serverData} fetchInitialData={fetchInitialData} />
            }
            key={path}
          />
        );
      })}
      <Route path="*" element={<FallbackPage />} />
    </Routes>
  );
}

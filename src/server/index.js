import express from 'express';
import cors from 'cors';
import { renderToPipeableStream, renderToString } from 'react-dom/server';
import * as React from 'react';
import serialize from 'serialize-javascript';
import * as dotenv from 'dotenv';
import { matchPath } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
dotenv.config();

import { fetchGenres } from '../shared/api';
import { App } from '../shared/App';
import routes from '../shared/routes';
import template from './template';

const app = express();

app.use(cors());
app.use(express.static('dist'));

app.get('*', (req, res, next) => {
  const activeRoute =
    routes.find((route) => {
      return matchPath(route.path, req.url);
    }) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then((data) => {
      const markup = renderToString(
        <StaticRouter location={req.url}>
          <App {...data} />
        </StaticRouter>
      );

      res.send(
        template({ body: markup, title: 'Movie Details', initialState: data })
      );
    })
    .catch(next);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

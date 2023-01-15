import { Home } from '@pages/Home/Home';
import { MovieDetails } from '@pages/MovieDetails/MovieDetails';
import { fetchMovieDetailsById } from './api';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/details/:movieId/:genreName',
    component: MovieDetails,
    fetchInitialData: (path = ' ') =>
      fetchMovieDetailsById(path.split('/').pop())
  }
];

export default routes;

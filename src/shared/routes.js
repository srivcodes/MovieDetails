import { Home } from '@pages/Home/Home';
import { MovieDetails } from '@pages/MovieDetails/MovieDetails';
import { fetchMovieDetailsById, fetchGenres } from './api';

const routes = [
  {
    path: '/',
    component: Home,
    fetchInitialData: () => fetchGenres()
  },
  {
    path: '/details/:movieId/:genreName',
    component: MovieDetails,
    fetchInitialData: (path) => {
      return fetchMovieDetailsById(path.split('/')[2]);
    }
  }
];

export default routes;

import fetch from 'isomorphic-fetch';

export const fetchGenres = async () => {
  try {
    const encodedUri = encodeURI(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
    );
    const response = await fetch(encodedUri);
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};

export const fetchMovieDetailsById = async (id) => {
  try {
    const movieDetailUri = encodeURI(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&${params}`
    );
    const response = await fetch(movieDetailUri);
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};

import React, { useEffect, useState } from 'react';
import { CarousalSection } from './components/CarousalSection/CarousalSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { Header } from './components/Header/Header';

export function App() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => setGenres(data.genres.slice(0, 3)))
      .catch((error) => console.error(error));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              {genres.map((genre) => {
                return <CarousalSection id={genre.id} name={genre.name} />;
              })}
            </div>
          }
        />
        <Route path="/details/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

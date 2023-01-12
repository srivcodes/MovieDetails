import React, { useEffect, useRef, useState } from 'react';

export default function useMovieFetch(type, params) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}?api_key=${process.env.API_KEY}&language=en-US&${params}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
      return;
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetchData();
    }
    return () => {
      ignore = true;
    };
  }, [type]);

  return { data, loading, error, fetchData };
}

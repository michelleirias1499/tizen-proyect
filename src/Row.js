import React, { useState, useEffect } from 'react';
import instance from './api/axios';
import './css/Row.css';

const baseURL = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log('pelis', request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="Row">
      {/* Title of Row */}
      <h2>{title}</h2>
      <div className="row-posters">
        {/* Movie's Posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="img-posters"
            src={`${baseURL}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

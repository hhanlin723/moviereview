import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMovies = (searchQuery) => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=970edcf9&s=${searchQuery}`)
      .then(response => {
        setMovies(response.data.Search || []);
      })
      .catch(error => {
        console.error('Error fetching movie data: ', error);
      });
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchMovies(searchQuery);
    } else {
      // Clear movies when search query is empty
      setMovies([]);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      fetchMovies(searchQuery);
    } else {
      // Clear movies when search query is empty
      setMovies([]);
    }
  };

  return (
    <div className="movie-list">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {movies.map(movie => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMovies = () => {
    axios.get(`http://www.omdbapi.com/?apikey=970edcf9&s=${searchQuery}`)
      .then(response => {
        setMovies(response.data.Search || []);
      })
      .catch(error => {
        console.error('Error fetching movie data: ', error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, [searchQuery]);

  const handleSearch = () => {
    fetchMovies();
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


//   const fetchData = async () => {
//     let url = 'http://www.omdbapi.com/?apikey=970edcf9&';

//     let res = await axios.get(`${url}s=${searchQuery}');
//      setMovies(res.data.Search);
//   }

  // Fetch movie data from the API
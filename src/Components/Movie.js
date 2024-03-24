import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview('');
  };

  return (
    <div className="movie">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <Stars />
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleReviewSubmit} value={newReview} onChange={(e) => setNewReview(e.target.value)} />
    </div>
  );
};

export default Movie;
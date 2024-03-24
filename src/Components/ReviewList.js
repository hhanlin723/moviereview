import React from 'react';
import Review from '../Components/Review';
//list of reviews
const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
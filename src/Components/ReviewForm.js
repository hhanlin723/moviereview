import React from 'react';
//reviewform
const ReviewForm = ({ onSubmit, value, onChange }) => {
  return (
    <form className="review-form" onSubmit={onSubmit}>
      <textarea 
        value={value} 
        onChange={onChange} 
        placeholder="Leave your review here..." 
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
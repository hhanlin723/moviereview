import React, { useState } from 'react';
// star rating
const Stars = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((value) => (
        <span 
          key={value} 
          onClick={() => handleClick(value)}
          style={{ color: value <= rating ? 'gold' : 'gray', cursor: 'pointer' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
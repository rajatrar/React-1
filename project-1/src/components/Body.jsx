import React from 'react';
import '../../index.css'; // Assuming index.css is in the parent directory

const Body = () => {

  return (
    <div>
      <p>This is the body content.</p>
      <div className="dish-card">
        <h2>Hardcoded Dish Details</h2>
        <img
          src="https://via.placeholder.com/150"
          alt="Dish Image"
          className="dish-image"
        />
        <p>Dish Name: Delicious Pasta</p>
        <p>Average Rating: 4.5</p>
      </div>
    </div>
  );
};

export default Body;
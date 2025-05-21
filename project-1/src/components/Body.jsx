import React, { useState, useEffect } from 'react';
import ApiData from '../utils/apiData';

// Modal component to display restaurant details
const Modal = ({ show, handleClose, restaurant }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{restaurant.info.name}</h2>
        <p>ID: {restaurant.info.id}</p>
        <p>Image ID: {restaurant.info.cloudinaryImageId}</p>
        <p>Average Rating: {restaurant.info.avgRating}</p>
        <p>Delivery Time: {restaurant.info.sla.deliveryTime} minutes</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

const Body = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(ApiData()); // Fetch data from ApiData
  }, []);

  const handleShowModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="body-container">
      <h2>Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div key={restaurant.info.id} className="restaurant-item" onClick={() => handleShowModal(restaurant)}>
            <h3>{restaurant.info.name}</h3>
            <p>Rating: {restaurant.info.avgRating}</p>
            {/* You can add an image here using restaurant.info.cloudinaryImageId */}
          </div>
        ))}
      </div>

      {selectedRestaurant && (
        <Modal show={showModal} handleClose={handleCloseModal} restaurant={selectedRestaurant} />
      )}
    </div>
  );
};

export default Body;
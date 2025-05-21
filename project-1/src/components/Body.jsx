import React, { useState } from 'react';

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const Modal = () => {
    return (
      <div style={{
        display: isModalOpen ? 'block' : 'none',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}>
        <h2>Hardcoded Dish Details</h2>
        <img src="https://via.placeholder.com/150" alt="Dish Image" style={{ width: '100px', height: '100px' }} />
        <p>Dish Name: Delicious Pasta</p>
        <p>Average Rating: 4.5</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    );
  };

  return (
    <div>
      <p>This is the body content.</p>
      <button onClick={openModal}>Show Hardcoded Modal</button>
      <Modal />
    </div>
  );
};

export default Body;
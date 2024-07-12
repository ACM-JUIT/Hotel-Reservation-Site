import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Hotel</h1>
      <p>Experience the best stay with us.</p>
      <img src="/images/hotel.jpg" alt="Hotel" className="home-image" />
    </div>
  );
};

export default Home;

import React from 'react';
import './Home.css';

const Home = ({ setView }) => {
  const navigateToRooms = () => {
    setView('rooms');
  };

  return (
    <div className="home-container" style={{
      backgroundImage: "url(/images/hotel.jpg)",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="content">
        <h1>Welcome to Our Hotel</h1>
        <p>Experience the best stay with us.</p>
        <div className="to-room">
          <button onClick={navigateToRooms} className="button">Rooms</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

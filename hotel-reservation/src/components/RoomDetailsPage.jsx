import React from 'react';
import './RoomDetailsPage.css';

const RoomDetailsPage = ({ room, setView }) => {
  return (
    <div className="room-details-page">
      <h1>{room.type} Room Details</h1>
      <img src={room.image} alt={`${room.type} room`} className="room-image" />
      <div className="room-info">
        <p><strong>Price:</strong> ${room.price}</p>
        <p><strong>Location:</strong> {room.location}</p>
        <p><strong>Scenery:</strong> {room.scenery}</p>
        <p><strong>Features:</strong> {room.features.join(', ')}</p>
      </div>
      <button className="back-button" onClick={() => setView('rooms')}>Back to Room List</button>
      <button className="reserve-button" onClick={() => setView('reservation')}>Reserve</button>
    </div>
  );
};

export default RoomDetailsPage;

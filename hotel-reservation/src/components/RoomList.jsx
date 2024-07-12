import React, { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';
import './RoomList.css';

const RoomList = ({ setView }) => {
  const { rooms, selectRoom } = useContext(ReservationContext);

  const handleRoomClick = (roomId) => {
    selectRoom(roomId);
    setView('roomDetail');
  };

  return (
    <div className="room-list-container">
      <h2>Available Rooms</h2>
      <div>
        {rooms.map(room => (
          <div key={room.id} className="room-item">
            <img src={room.images[0]} alt={room.title} />
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            <button onClick={() => handleRoomClick(room.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;


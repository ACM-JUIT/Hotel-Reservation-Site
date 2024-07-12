import React, { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';
import './RoomDetail.css';

const RoomDetail = ({ setView }) => {
  const { selectedRoom } = useContext(ReservationContext);

  if (!selectedRoom) return <p>Loading...</p>;

  return (
    <div className="room-detail-container">
      <h2>{selectedRoom.title}</h2>
      <div>
        {selectedRoom.images.map((img, index) => (
          <img key={index} src={`/${img}`} alt={`${selectedRoom.title} ${index}`} />
        ))}
      </div>
      <p>{selectedRoom.description}</p>
      <p>Price: ${selectedRoom.price} per night</p>
      <button onClick={() => setView('reservation')}>Reserve</button>
    </div>
  );
};

export default RoomDetail;



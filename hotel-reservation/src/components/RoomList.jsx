import React from 'react';
import './RoomList.css';

const RoomList = ({ onSelect }) => {
  const rooms = [
    { 
      type: 'Single', price: 100, image: '/images/single/single1.jpg', location: 'City Center', 
      scenery: 'Cityscape', features: ['WiFi', 'TV', 'Air Conditioning'] 
    },
    { 
      type: 'Double', price: 150, image: '/images/double/double1.jpg', location: 'Near Beach', 
      scenery: 'Sea View', features: ['WiFi', 'TV', 'Balcony'] 
    },
    { 
      type: 'Suite', price: 200, image: '/images/suite/suite1.jpg', location: 'Mountain Area', 
      scenery: 'Mountain View', features: ['WiFi', 'TV', 'Kitchenette', 'Jacuzzi'] 
    },
  ];

  return (
    <div>
      <h1>Available Rooms</h1>
      <ul className="room-list">
        {rooms.map((room) => (
          <li key={room.type} onClick={() => onSelect(room)}>
            <img src={room.image} alt={`${room.type} room`} />
            <div>
              <h2>{room.type}</h2>
              <p>${room.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;

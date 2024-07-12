import React, { createContext, useState } from 'react';
import roomsData from '../data/rooms';

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [rooms] = useState(roomsData);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [reservationDetails, setReservationDetails] = useState(null);

  const selectRoom = (roomId) => {
    const room = rooms.find(r => r.id === roomId);
    setSelectedRoom(room);
  };

  const saveReservationDetails = (details) => {
    setReservationDetails(details);
  };

  const addReservation = (reservation) => {
    // Logic to add a new reservation (could be setting state, API call, etc.)
    console.log('Reservation added:', reservation);
  };

  return (
    <ReservationContext.Provider value={{ rooms, selectedRoom, selectRoom, reservationDetails, saveReservationDetails, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationProvider;




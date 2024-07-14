import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import RoomList from './components/RoomList';
import RoomDetailsPage from './components/RoomDetailsPage';
import ReservationForm from './components/ReservationForm';
import ConfirmationPage from './components/ConfirmationPage';
import Footer from './components/Footer';
import { ReservationProvider } from './context/ReservationContext';
import './styles/App.css';

const App = () => {
  const [view, setView] = useState('home');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [reservationDetails, setReservationDetails] = useState(null);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setView('roomDetails');
  };

  const handleFormSubmit = (details) => {
    setReservationDetails(details);
    setView('confirmation');
  };

  return (
    <ReservationProvider>
      <div className="app">
        <Header setView={setView} />
        {view === 'home' && <Home setView={setView} />}
        {view === 'rooms' && <RoomList onSelect={handleRoomSelect} />}
        {view === 'roomDetails' && (
          <RoomDetailsPage room={selectedRoom} setView={setView} />
        )}
        {view === 'reservation' && (
          <ReservationForm
            roomType={selectedRoom.type}
            roomPrice={selectedRoom.price}
            onSubmit={handleFormSubmit}
          />
        )}
        {view === 'confirmation' && <ConfirmationPage reservationDetails={reservationDetails} />}
        <Footer />
      </div>
    </ReservationProvider>
  );
};

export default App;

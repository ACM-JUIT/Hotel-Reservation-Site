
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import RoomList from './components/RoomList';
import RoomDetail from './components/RoomDetail';
import ReservationForm from './components/ReservationForm';
import ConfirmationPage from './components/ConfirmationPage';
import Footer from './components/Footer';
import { ReservationProvider } from './context/ReservationContext';
import './styles/App.css';

const App = () => {
  const [view, setView] = useState('home');

  return (
    <ReservationProvider>
      <div className="app">
        <Header setView={setView} /> 
        {view === 'home' && <Home />}
        {view === 'rooms' && <RoomList setView={setView} />}
        {view === 'roomDetail' && <RoomDetail setView={setView} />}
        {view === 'reservation' && <ReservationForm setView={setView} />}
        {view === 'confirmation' && <ConfirmationPage setView={setView} />}
        <Footer />
      </div>
    </ReservationProvider>
  );
};

export default App;





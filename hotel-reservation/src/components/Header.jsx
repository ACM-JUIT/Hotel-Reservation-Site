import React from 'react';
import './Header.css';

const Header = ({ setView }) => (
  <header>
    <nav>
      <ul>
        <li><button onClick={() => setView('home')}>Home</button></li>
        <li><button onClick={() => setView('rooms')}>Rooms</button></li>
        <li><button onClick={() => setView('reservation')}>Reservation</button></li>
      </ul>
    </nav>
  </header>
);

export default Header;

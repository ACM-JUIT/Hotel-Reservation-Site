import React, { useState, useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';
import './ReservationForm.css';

const ReservationForm = ({ setView }) => {
  const { addReservation } = useContext(ReservationContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = { name, email, phone, date };
    addReservation(reservation);
    setView('confirmation');
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;


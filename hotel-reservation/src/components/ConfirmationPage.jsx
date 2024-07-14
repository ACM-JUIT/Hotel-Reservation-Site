import React from 'react';
import './ConfirmationPage.css';

const ConfirmationPage = ({ reservationDetails }) => {
  return (
    <div className="confirmation-page">
      <h1>Reservation Confirmation</h1>
      <div className="confirmation-card">
        <p>Thank you, <span>{reservationDetails.name}</span>, for your reservation!</p>
        <p>Email: <span>{reservationDetails.email}</span></p>
        <p>Room Type: <span>{reservationDetails.roomType}</span></p>
        <p>Quantity: <span>{reservationDetails.quantity}</span></p>
        <p className="total-price">Total Price: ${reservationDetails.total}</p>
      </div>
      <button className="back-button" onClick={() => window.location.href = '/'}>Back to Home</button>
    </div>
  );
};

export default ConfirmationPage;

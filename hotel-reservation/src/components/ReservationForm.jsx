import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = ({ roomType, roomPrice, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...customerDetails, quantity, roomType, total: quantity * roomPrice });
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={customerDetails.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={customerDetails.email} onChange={handleChange} required />
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} min="1" required />
      </label>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;

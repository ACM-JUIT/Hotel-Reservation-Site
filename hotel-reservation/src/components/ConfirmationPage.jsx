import React from 'react';
import './ConfirmationPage.css'; // Import a CSS file for styling

const ConfirmationPage = ({ orderDetails, paymentInfo }) => {
  return (
    <div className="confirmation-page">
      <h1>Order Confirmation</h1>

      <div className="confirmation-details">
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been successfully placed. Below are the details:</p>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>{item.quantity} x ${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="order-total">
            <span>Total:</span>
            <span>${orderDetails.total}</span>
          </div>
        </div>

        <div className="payment-info">
          <h3>Payment Information</h3>
          <p>Payment Method: {paymentInfo.method}</p>
          <p>Transaction ID: {paymentInfo.transactionId}</p>
        </div>
      </div>

      <div className="confirmation-footer">
        <p>A confirmation email has been sent to {orderDetails.customerEmail}.</p>
        <p>If you have any questions, please contact our support team.</p>
      </div>
    </div>
  );
};

// Example props for illustration purposes
const sampleOrderDetails = {
  customerEmail: "customer@example.com",
  items: [
    { name: "Hotel Room", quantity: 1, price: 200 },
    { name: "Breakfast Package", quantity: 2, price: 20 }
  ],
  total: 240
};

const samplePaymentInfo = {
  method: "Credit Card",
  transactionId: "1234567890"
};

const ConfirmationPageWrapper = () => (
  <ConfirmationPage orderDetails={sampleOrderDetails} paymentInfo={samplePaymentInfo} />
);

export default ConfirmationPageWrapper;

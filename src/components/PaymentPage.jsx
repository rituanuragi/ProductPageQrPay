import React from 'react';
import './PaymentPage.css'; // Confirm this path is correct
import qrCodeImage from './qrcode.jpeg'; // Ensure this is the correct path to your QR code image

const PaymentPage = ({ upiId, onClose }) => {
  return (
    <div className="payment-page">
      <div className="payment-container">
        <span className="close-button" onClick={onClose}>&times;</span>

        <h3>Payment Details</h3>
        <div className='pay'>Scan Here To Pay</div> {/* This will use the styles defined in PaymentPage.css */}
        <img src={qrCodeImage} alt="QR Code" className="qr-code"/>
        <p className="upi">UPI ID: {upiId}</p>
        <button className="close-payment-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

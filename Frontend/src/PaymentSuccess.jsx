import React from 'react';
import '../public/PaymentSuccess.css';  
import { useSearchParams } from 'react-router-dom';
const PaymentSuccess = () => {
      const searchQuery= useSearchParams()[0]
      const RefferenceID= searchQuery.get('refference')
  return (
    <div className="payment-success-wrapper">
      <div className="payment-success-box">
        <div className="icon">&#10004;</div>
        <h1>Payment Successful</h1>
        <p>Your payment was completed successfully.</p>
        <p>Thank you for your purchase!</p>
        <b><p>Refference ID:&nbsp; {RefferenceID}</p></b>
         
        
        <a href="/" className="home-button">Go to Homepage</a>
      </div>
    </div>
    
  );
  
};

export default PaymentSuccess;

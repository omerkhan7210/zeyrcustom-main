import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordPopup = ({email,messagePopup,handleSubmit,setNewPassword,setOtpCode,handleClose}) => {
  

  return (
    
    <div className="otp-popup-overlay">
      <div className="otp-popup-container">
        <button className="otp-popup-close-btn" onClick={handleClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} className='w100 products-form products-form-login login'>
        {messagePopup && <p>{messagePopup}</p>}
        <p className="form-row w100">
            Your Email: {email}
            <input type="hidden" required className='input-text w100'/>
          </p>
          <p className="form-row w100">
            
            <input type="number" onChange={(e) => setOtpCode(e.target.value)} required placeholder='Enter OTP Code' className='input-text w100'/>
          </p>
          <p className="form-row w100">
            
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className='input-text w100'
              placeholder='Enter your New Password'
            />
          </p>
          <p className="form-row w100 d-flex justify-center">
            <button type="submit" className='button small'>Reset Password</button>
          </p>
        </form>
      </div>
    </div>
      
  );
};

export default ResetPasswordPopup;

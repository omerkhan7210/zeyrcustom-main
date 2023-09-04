import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ hostlink }) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const history = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the loading icon
    setErrorMessage('');
    setSuccessMessage('');

    // Validate email and password inputs
 if (!validator.isEmail(email)) {
   setErrorMessage('Please enter a valid email address.');
   return;
 }

 if (validator.isEmpty(password)) {
   setErrorMessage('Please enter your password.');
   return;
 }

    try {
      const response = await axios.post(`${hostlink}/admin/login`, {
        email,
        password,
      });
      setSuccessMessage(response.data.message);
      document.cookie = `adminToken=${response.data.token}; path=/`;
      // Redirect to the home page after a short delay (e.g., 1 second)
      setTimeout(() => {
        history('/dashboard');
      }, 1000);
    } catch (error) {
      console.log(error)
      setErrorMessage(DOMPurify.sanitize(error.response.data.message));
    } finally {
      setLoading(false); // Hide the loading icon
    }
  };

  return (
    <div className='d-flex flex-c align-center justify-center g1 w25 mauto'>
      <h2 >Admin Login</h2>
      <form onSubmit={handleSubmit} className='w100' >
      {errorMessage && <p>{errorMessage}</p>}
      <p className="form-row w100">
          
          <label>Email:</label>
          <input type="email" className='input-text w100' value={email} onChange={(e) => setUsername(e.target.value)} required />
        </p>
        <p className="form-row w100">
          <label>Password:</label>
          <input type="password" className='input-text w100' value={password}  onChange={(e) => setPassword(e.target.value)} required />
        </p>
        <div className="form-row w100 d-flex justify-center flex-c g1 align-center">
        <button type="submit" className='button medium' disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        {successMessage && <p>{successMessage}</p>}
        </div>
      </form>
      
    </div>
  );
};

export default AdminLogin;

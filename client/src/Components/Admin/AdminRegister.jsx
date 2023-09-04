import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';


const AdminRegister = ({ hostlink }) => {
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
      setLoading(false);
      return;
    }
  
    if (validator.isEmpty(password)) {
      setErrorMessage('Please enter your password.');
      setLoading(false);
      return;
    }


    try {
      const response = await axios.post(`${hostlink}/admin/register`,  {
        email,
        password,
      });
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        history('/dashboard');
      }, 1000);
      // You can redirect to a success page or display a success message here.
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage(DOMPurify.sanitize(error.response.data.message));
      
    } finally {
      setLoading(false); // Hide the loading icon
    }
  };

  return (
    <div className='d-flex flex-c align-center justify-center g1 w25 mauto'>
      <h2 >Admin Registration</h2>
      <form onSubmit={handleSubmit} className='w100'>
      {errorMessage && <p>{errorMessage}</p>}
      <p className="form-row w100">
        <label htmlFor="panel_admin_username">Email</label>
        <input
          className="input-text w100"
          id="panel_admin_username"
          type="email"
          value={email} 
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
      <p className="form-row w100">
        <label htmlFor="panel_admin_password">Password</label>
        <input
          className="input-text w100"
          name="password"
          id="panel_admin_password"
          type="password"
          value={password}  
          onChange={(e) => setPassword(e.target.value)}
        />
        </p>
        
        <p className="form-row w100 d-flex justify-center flex-c g1">
        <button type="submit" className='button medium' disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </button>
        {successMessage && <p>{successMessage}</p>}
        </p>
      </form>
    </div>
  );
};

export default AdminRegister;

import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { email, password });
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up For STEM Connect</h2>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Sign Up</button>
          <p className="terms">
            I agree to abide by STEM Connect's <a href="/terms">Terms of Service</a> and its <a href="/privacy">Privacy Policy</a>
          </p>
          <p className="signin">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </form>
      </div>
      <div className="illustration">
        <img src="https://plus.unsplash.com/premium_vector-1682269165424-e8fe7b47f894?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="STEM Connect Illustration" />
      </div>
    </div>
  );
};

export default RegisterPage;

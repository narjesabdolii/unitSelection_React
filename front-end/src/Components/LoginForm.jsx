import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      console.log(response.data);
      // Assuming the response contains a success flag or token indicating successful login
      if (response.data.success) {
        alert('Login successful');
        navigate('/StudentTermsList');
      } else {
        alert('Login failed');

      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="login-form">
      <div className="left-part">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
      <div className="right-part"></div>
    </div>
  );
};

export default LoginForm;

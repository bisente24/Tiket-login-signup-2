import React, { useState } from 'react';
import './userlogin.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from './img/logo2.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setEmailError(true);
      return;
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      return;
    }

    if (email.trim() !== '' && password.trim() !== '') {
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
      }, 2000);

      console.log('Login successful!');

      setEmail('');
      setPassword('');
    } else {
      console.log('Please enter valid email and password.');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2 className="login-text"><strong>LOGIN</strong></h2>
      <hr className="line" />
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email" className="input-label"><strong>Enter Email</strong></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            className={`input-field ${emailError ? 'input-error' : ''}`}
            required
          />
          {emailError && <div className="validation-error">Please enter a valid email address.</div>}
        </div>
        <div className="input-container">
          <label htmlFor="password" className="input-label"><strong>Enter Password</strong></label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              className={`input-field ${passwordError ? 'input-error' : ''}`}
              required
            />
            {showPassword ? (
              <FaEyeSlash className="show-password-icon" onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaEye className="show-password-icon" onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
          {passwordError && <div className="validation-error">Password must be at least 6 characters.</div>}
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      {loginSuccess && <div className="login-success-message">Login successful!</div>}
      <p className="register-text">New User? <a href="/registration">Register now</a></p>
    </div>
  );
};

export default LoginForm;

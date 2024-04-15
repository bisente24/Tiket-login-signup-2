import React, { useState } from 'react';
import './Registrationform.css';
import logo from './img/logo2.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showReenterPassword, setShowReenterPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Full Name validation
    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    // Email validation
    if (!email || !email.includes('@')) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password validation
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    // Re-enter Password validation
    if (password !== reenterPassword) {
      newErrors.reenterPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate registration success
      setRegistrationSuccess(true);
      setTimeout(() => {
        setRegistrationSuccess(false);
      }, 2000);

      // Reset form fields
      setFullName('');
      setEmail('');
      setPassword('');
      setReenterPassword('');
    }
  };

  return (
    <div className="registration-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2 className="registration-header">REGISTRATION</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`form-input ${errors.fullName ? 'input-error' : ''}`}
            required
          />
          {errors.fullName && <div className="error">{errors.fullName}</div>}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-input ${errors.password ? 'input-error' : ''}`}
              required
            />
            <div className="password-icon-container">
              {showPassword ? (
                <FaEyeSlash className="show-password-icon" onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <FaEye className="show-password-icon" onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>
          </div>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="form-group">
          <div className="password-input-container">
            <input
              type={showReenterPassword ? "text" : "password"}
              id="reenterPassword"
              placeholder="Re-enter Password"
              value={reenterPassword}
              onChange={(e) => setReenterPassword(e.target.value)}
              className={`form-input ${errors.reenterPassword ? 'input-error' : ''}`}
              required
            />
            <div className="password-icon-container">
              {showReenterPassword ? (
                <FaEyeSlash className="show-password-icon" onClick={() => setShowReenterPassword(!showReenterPassword)} />
              ) : (
                <FaEye className="show-password-icon" onClick={() => setShowReenterPassword(!showReenterPassword)} />
              )}
            </div>
          </div>
          {errors.reenterPassword && <div className="error">{errors.reenterPassword}</div>}
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
      {registrationSuccess && <div className="registration-success-message">Successfully Registered</div>}
      <span className="login-text">New User? <a href="#">Login</a></span>
    </div>
  );
};

export default RegistrationForm;

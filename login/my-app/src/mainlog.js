import React from 'react';
import './App.css'; 
import logo from './img/logo2.png'; 
import './mainlog.css'; 
const App = () => {
  const handleStartClick = () => {
    
    console.log('Start button clicked');
  };

  const handleLoginClick = () => {
   
    console.log('Log In button clicked');
  };

  return (
    <div className="container">
      
      <img src={logo} alt="Logo" className="logo" />

      
      <div className="buttons-container">
        <button className="start-button" onClick={handleStartClick}>START</button>
        <button className="login-button" onClick={handleLoginClick}>LOGIN</button>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import './Splashscreen.css'; 
import CustomLogo from './img/logo2.png'; 

const Splash = () => {
  
  const [showSplash, setShowSplash] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    
    return () => clearTimeout(timer);
  }, []);

  
  const handleExitAnimation = () => {
    setShowSplash(false);
  };

  return (
    <div className={`splash ${showSplash ? 'splash--visible' : 'splash--exit'}`}>
      
      <img
        src={CustomLogo}
        alt="Splash"
        className={`splash__image ${showSplash ? 'shrink-to-pop-animation' : ''}`}
        onClick={handleExitAnimation}
      />
    </div>
  );
};

export default Splash;

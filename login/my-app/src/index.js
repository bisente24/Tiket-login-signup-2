import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginForm from './login'; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LoginForm /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes/Router';
import './index.css'; // If you have global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
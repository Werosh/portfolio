// Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Service from "../Pages/ServiceSection";
import Navbar from '../components/Navbar';
// import NotFoundPage from './components/NotFoundPage'; // You'll need to create this

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {/* Main home page with all sections */}
        <Route path="/" element={<App />} />
        
        {/* Standalone pages */}
        <Route path="/projects" element={<Service />} />
        
        {/* 404 route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
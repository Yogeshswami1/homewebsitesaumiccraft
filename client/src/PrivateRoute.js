import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated (you can check if a token exists)
  const isAuthenticated = localStorage.getItem('authToken'); // Assuming token is stored in localStorage

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

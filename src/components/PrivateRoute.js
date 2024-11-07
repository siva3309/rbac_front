import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ role, children }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  // Check if token exists and if the user role matches the required role for the route
  if (!token || userRole !== `ROLE_${role}`) {
    // Redirect to login if token or role is invalid
    return <Navigate to="/login" />;
  }

  // If the role matches, render the children (AdminDashboard or UserDashboard)
  return children;
};

export default PrivateRoute;

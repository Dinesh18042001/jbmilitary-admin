import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({ children }) => {
  // Example: Check for authentication token in localStorage
  const isAuthenticated = localStorage.getItem("authToken"); // Replace with your auth logic
  const location = useLocation();

  // If not authenticated, redirect to login and preserve the attempted URL
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default Privateroute;

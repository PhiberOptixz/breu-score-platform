import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

let currentTime;
let decoded;

if (localStorage.breuai) {
  const token = JSON.parse(localStorage.getItem("breuai"));

  // Decode token and get user info and exp
  decoded = jwt_decode(token);

  // check for expired token
  currentTime = Date.now() / 1000;
}

const ProtectedRoute = ({ children }) => {
  if ((decoded && decoded.exp < currentTime) || !localStorage.breuai) {
    localStorage.removeItem("breuai");
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;

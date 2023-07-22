import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { removeCandidateDetails } from "../features/authSlice";
import { removeCorporateDetails } from "../features/corporateAuthSlice";
import { removeRecruiterDetails } from "../features/recruiterAuthSlice";
import { removeAdminDetails } from "../features/adminAuthSlice";

let currentTime;
let decoded;

if (localStorage.breuai) {
  const token = JSON.parse(localStorage.getItem("breuai"));

  // Decode token and get user info and exp
  decoded = jwt_decode(token.token);

  // check for expired token
  currentTime = Date.now() / 1000;
}

const ProtectedRoute = ({ children }) => {
  const { auth, corporateAuth, recruiterAuth, adminAuthSlice } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  if ((decoded && decoded.exp < currentTime) || !localStorage.breuai) {
    if (auth?.isAuthenticated) {
      dispatch(removeCandidateDetails());
    } else if (corporateAuth?.isAuthenticated) {
      dispatch(removeCorporateDetails());
    } else if (recruiterAuth?.isAuthenticated) {
      dispatch(removeRecruiterDetails());
    } else if (adminAuthSlice?.isAuthenticated) {
      dispatch(removeAdminDetails());
    }
    localStorage.removeItem("breuai");
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;

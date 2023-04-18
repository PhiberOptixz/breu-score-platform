import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import SignIn from "./components/SignIn/SignIn";
import Singup from "./components/SignUp/SignUp";
import Believability from "./components/Believability/believability";
import ProtectedRoute from "./common/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Singup />} />
        <Route
          path="/believability"
          element={
            <ProtectedRoute>
              <Believability />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
    </BrowserRouter>
    // <Singup />
    // <Switch>
    //   <Route path="/" component={Landing} />
    //   <Route path="/signIn" component={SignIn} />
    // </Switch>
  );
}

export default App;

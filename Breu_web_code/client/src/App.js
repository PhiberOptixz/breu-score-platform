import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import SignIn from "./components/SignIn/SignIn";
import Singup from "./components/SignUp/SignUp";
import Believability from "./components/Believability/believability";
import ProtectedRoute from "./common/ProtectedRoute";
import Reliability from "./components/Reliability/Reliability";
import EmotionalUndesirability from "./components/EmotionalUndesirability/EmotionalUndesirability";
import Intro from "./components/BREUInfoPage/Intro";
import BreuScore from "./components/BreuScore/BreuScore";
import Prologue from "./components/Prologue/Prologue";
import Undesirability from "./components/Undesirability/Undesirability";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Singup />} />
        <Route path="/prologue" element={<Prologue />} />
        <Route path="/undesirability" element={<Undesirability />} />

        <Route
          path="/intro"
          element={
            <ProtectedRoute>
              <Intro />
            </ProtectedRoute>
          }
        />
        <Route
          path="/believability"
          element={
            <ProtectedRoute>
              <Believability />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reliability"
          element={
            <ProtectedRoute>
              <Reliability />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emotional"
          element={
            <ProtectedRoute>
              <EmotionalUndesirability />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404 Not found</div>} />
        <Route
          path="/breuscore"
          element={
            <ProtectedRoute>
              <BreuScore />
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

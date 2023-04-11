import React from "react";
// import { Switch, Route } from "react-router-dom"; 

import Landing from './components/Landing/Landing';
import SignIn from "./components/SignIn/SignIn";
import Singup from "./components/SignUp/SignUp";

function App() {
  return (
    // <SignIn />
    <Singup />
    // <Switch>
    //   <Route path="/" component={Landing} />
    //   <Route path="/signIn" component={SignIn} />
    // </Switch>
  );
}

export default App;

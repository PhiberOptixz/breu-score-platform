import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./sass/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";
import { candidateDetails } from "./features/authSlice";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./common/Snackbar";
import jwt_decode from "jwt-decode";
import setAuthToken from "./common/setAuthToken";

if (localStorage.breuai) {
  const token = JSON.parse(localStorage.getItem("breuai"));
  // Set auth token header auth
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and is Authenticated
  store.dispatch(candidateDetails());

  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    window.location.href = "/";
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        transitionDuration={600}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        style={{ width: 300, flexWrap: "wrap" }}
      >
        <SnackbarUtilsConfigurator />
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

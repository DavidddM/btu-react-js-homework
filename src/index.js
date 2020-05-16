import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AuthContextComponent from "./context/authContext";
import "bootstrap/dist/css/bootstrap.css";
import settings from "./settings"
import axios from 'axios';

axios.defaults.baseURL = settings.API_BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <AuthContextComponent>
      <App />
    </AuthContextComponent>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
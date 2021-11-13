import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import store from "./Redux/Store/store"
import { Provider } from "react-redux";
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3001"
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

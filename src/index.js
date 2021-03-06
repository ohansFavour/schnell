import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import object from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const {store, persistor} = object;
ReactDOM.render(
  <Provider store= {store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

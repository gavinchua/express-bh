import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from "./reducers/index.js";

// All CSS should be imported
import "bootstrap/dist/css/bootstrap.css";
import './css/scss/app.css';

// Import service worker
import registerServiceWorker from './registerServiceWorker';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

registerServiceWorker();

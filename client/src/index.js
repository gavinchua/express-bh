import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './reducers';

// All CSS should be imported
import 'bootstrap/dist/css/bootstrap.css';
import './css/app.css';

// Import service worker
import registerServiceWorker from './registerServiceWorker';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

registerServiceWorker();

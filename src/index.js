import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import'mdbreact/dist/css/mdb.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './components/auth/ReactContextApi/reducer';
import { StateProvider } from './components/auth/ReactContextApi/stateProvider';

ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={ initialState } reducer={ reducer }>
  <App />
  </StateProvider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

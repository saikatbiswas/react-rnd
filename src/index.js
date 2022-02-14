import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import readuxStore from './store';

import './assets/scss/style.scss';
// import reduxSetup from './reduxSetup';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={readuxStore()}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

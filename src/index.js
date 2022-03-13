import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import readuxStore from './store';

import './assets/scss/style.scss';
// import reduxSetup from './reduxSetup';

const theme = createTheme({
  palette: {
    primary: {
      main: '#17a2b8'
    },
    secondary: {
      main: '#6f42c1',
    }
    // success: {
    //   main: '#4caf50',
    // },
    // error: {
    //   main: '#f04141',
    // },
    // warning: {
    //   main: '#ff9800',
    // },
  }
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={readuxStore()}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

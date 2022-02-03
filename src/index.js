import React from 'react';
import ReactDOM from 'react-dom';
import RouteComponent from './RouteComponent';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import readuxStore from './store';
// import axios from 'axios';
// import { getAuthHeader } from './utils/cookie';

// axios.interceptors.request.use(
//   (request)=>{
    
//     if(request.url.includes('login')){
      
//       request.headers = getAuthHeader();
//       console.log(request);
//     }
//   },
//   error=>{
//     return Promise.reject(error);
//   }
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={readuxStore()}>
      <RouteComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

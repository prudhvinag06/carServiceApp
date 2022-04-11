import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignupComponent from './CarServiceComponents/SignupComponent.jsx'
import LoginComponent from './CarServiceComponents/LoginComponent';
import reportWebVitals from './reportWebVitals';
import CarServiceComponents from './CarServiceComponents/CarAppComponent.jsx';
import WelcomeComponent from './CarServiceComponents/WelcomeComponent'
import CarAppComponent from './CarServiceComponents/CarAppComponent.jsx';
import CarApiServices from './ApiServices/CarApiServices.jsx';

ReactDOM.render(
  <React.StrictMode>
    <CarAppComponent/>
    {/* <CarApiServices/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

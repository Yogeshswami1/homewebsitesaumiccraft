import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles
import { ToastContainer } from 'react-toastify'; // Import react-toastify


ReactDOM.render(
  <>
  <BrowserRouter>
    <App />
    <ToastContainer/>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

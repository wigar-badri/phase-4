import React from 'react';
import ReactDOM from 'react-dom/client';

/* React Router 
---------------------------------------------------------------------
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {},])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );
---------------------------------------------------------------------
'Note: Do not use React-Dom in React.StrictMode, please use the RouterProvider' */

// COMPONENTS // 
import './index.css';
import App from './components/App';
// 'More missing components here' //

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

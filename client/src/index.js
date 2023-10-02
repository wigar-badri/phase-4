import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'


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
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import Dashboard from './components/Dashboard';
import UsersList from './components/UsersList';
import User from './components/User';
import StocksList from './components/StocksList';
import Stock from './components/Stock';
import PostsList from './components/PostsList';
import Post from './components/Post';

// LOADERS //
import { getUsersLoader, getUsersByIdLoader, getStocksLoader, getStocksByIdLoader, getPostsLoader, getPostsByIdLoader, attemptLogin, attemptSignup, checkSession } from './loaders';

import reportWebVitals from './reportWebVitals';

// const POST_HEADERS = {
//   'Content-Type': 'application/json',
//   'Accepts': 'application/json'
// }

// ROUTER //
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />,
        loader: attemptLogin
      },
      {
        path: "signup",
        element: <SignUp />,
        loader: attemptSignup
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: checkSession
      },
      {
        path: "users",
        element: <UsersList />,
        loader: getUsersLoader
      },
      {
        path: "users/:id",
        element: <User />,
        loader: getUsersByIdLoader
      },
      {
        path: "stocks",
        element: <StocksList />,
        loader: getStocksLoader
      },
      {
        path: "stocks/:id",
        element: <Stock />,
        loader: getStocksByIdLoader
      },
      {
        path: "posts",
        element: <PostsList />,
        loader: getPostsLoader
      },
      {
        path: "posts/:id",
        element: <Post />,
        loader: getPostsByIdLoader
      }
      // {
      //   path: "check_session",
      //   element: <CheckSession />,
      //   loader: getPropertiesLoader
      // },
    ]
  }
])



// RENDER IN ROOT //
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

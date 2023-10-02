import React from 'react';
import { useState, useEffect } from 'react';
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
import { getUsersLoader, getUsersByIdLoader, getStocksLoader, getStocksByIdLoader, getPostsLoader, getPostsByIdLoader } from './loaders';

import reportWebVitals from './reportWebVitals';

const POST_HEADERS = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

// CURRENT USER STATE //
const [currentUser, setCurrentUser] = useState(null)

// CHECK SESSION //
useEffect(() => {
  async function checkSession() {
    const response = await fetch(URL + '/check_session')

    if (response.ok) {
      const userData = await response.json()
      setCurrentUser( userData )
    }
  }
  checkSession()
}, [])


// LOGIN, SIGNUP, AND LOGOUT FNS //
async function attemptLogin(userInfo) {
  const res = await fetch(URL + '/login', {
    method: 'POST',
    headers: POST_HEADERS,
    body: JSON.stringify(userInfo)
  })
  if (res.ok) {
    const userData = await res.json()
    setCurrentUser(userData)
  } else {
    alert('Invalid sign up')
  }
}

function logout() {
  setCurrentUser(null)
  fetch(URL + '/logout', { method: 'DELETE' })
}

// ROUTER //
const router = createBrowserRouter([
  {
    path: "/",
    element: <App currentUser={currentUser} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login attemptLogin={attemptLogin}/>
      },
      {
        path: "signup",
        element: <SignUp attemptSignup={attemptSignup}/>
      },
      {
        path: "dashboard",
        element: <Dashboard currentUser={currentUser} logout={logout} />
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

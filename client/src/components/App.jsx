import './App.css';
import 'react-dom'
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'

import Heading from './Heading';
import Footer from './Footer';

// const POST_HEADERS = {
//   'Content-Type': 'application/json',
//   'Accepts': 'application/json'
// }

export default function App() {

  // CURRENT USER STATE //
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    async function checkSession() {
      const response = await fetch('/check_session')
      if (response.ok) {
        const data = await response.json()
        setCurrentUser( data )
      }
    }
    checkSession()
  }, [])

  return (
    <div className="App">
      <Heading />
      <Outlet context={[currentUser, setCurrentUser]} />
      <Footer />
    </div>
  );
}
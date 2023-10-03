import './App.css';
import 'react-dom'
import { useState } from 'react';
import { Outlet } from 'react-router-dom'

import Heading from './Heading';
import Footer from './Footer';

export default function App() {

  // CURRENT USER STATE //
  const [currentUser, setCurrentUser] = useState(null)
  

  return (
    <div className="App">
      <Heading currentUser={currentUser} />
      <Outlet context={[currentUser, setCurrentUser]} />
      <Footer />
    </div>
  );
}
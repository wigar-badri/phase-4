import './App.css';
import 'react-dom'
// import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'

import Heading from './Heading';
import Footer from './Footer';

// const URL = '/p4/fine-ed'

// const POST_HEADERS = {
//   'Content-Type': 'application/json',
//   'Accepts': 'application/json'
// }

function App() {

  // CURRENT USER STATE //
  // const [currentUser, setCurrentUser] = useState(null)


  return (
    <div className="App">
      <Heading />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
// import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'

import Heading from './Heading';
import Footer from './Footer';

// const URL = '/p4/fine-ed'

const POST_HEADERS = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

export async function attemptSignup(userInfo) {
	const res = await fetch('/users', {
	  method: 'POST',
	  headers: POST_HEADERS,
	  body: JSON.stringify(userInfo)
	})
	if (res.ok) {
	  const data = await res.json()
	  setCurrentUser(data)
	}
  else {
	  alert('Invalid sign up')
	}
}

function App({currentUser}) {

  return (
    <div className="App">
      <Heading currentUser={currentUser} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

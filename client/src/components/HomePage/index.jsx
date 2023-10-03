import { useOutletContext } from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'
import Dashboard from "./Dashboard"
// import { useState } from 'react'

const POST_HEADERS = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

export default function HomePage() {

	const [currentUser, setCurrentUser] = useOutletContext()

	async function attemptLogin(userInfo) {
		const res = await fetch('/login', {
			method: 'POST',
			headers: POST_HEADERS,
			body: JSON.stringify(userInfo)
		})
		if (res.ok) {
			const data = await res.json()
			setCurrentUser(data)
		} else {
			alert('Invalid sign up')
		}
	}

	async function attemptSignup(userInfo) {
		const res = await fetch('/users', {
			method: 'POST',
		  	headers: POST_HEADERS,
		  	body: JSON.stringify(userInfo)
		})
		if (res.ok) {
		  	const data = await res.json()
		  	setCurrentUser(data)
		} else {
			alert('Invalid sign up')
		}
	}

	async function logout() {
		fetch('/logout', { method: 'DELETE' })
		return null
	}

	// RENDER //
  	if (!currentUser) {
    	// render Signup and Login if no currentUser
		return (
			<div>
				<br/><br/>
				<h1>Please log in or sign up.</h1>
				<br/><br/>
				<Login setCurrentUser={setCurrentUser} attemptLogin={attemptLogin} />
				<Signup setCurrentUser={setCurrentUser} attemptSignup={attemptSignup} />
				<br/><br/>
			</div>
		)
    }

	else {
		return (
			<div>
				<h1>Welcome, {currentUser.username}</h1>
        		<Dashboard currentUser={currentUser} logout={logout} />
			</div>
      	)

    }

}
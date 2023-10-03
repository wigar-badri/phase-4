import { useOutletContext } from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'
import Dashboard from "./Dashboard"
import { useState } from 'react'


const POST_HEADERS = {
	'Content-Type': 'application/json',
	'Accepts': 'application/json'
  }

export default function HomePage() {

	const [currentUser, setCurrentUser] = useOutletContext()

	const [signupError, setSignupError] = useState({})

	const [loginError, setLoginError] = useState({})

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
			const error = await res.json()
			setLoginError(error)
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
			const error = await res.json()
			setSignupError(error)
		}
	}

	async function logout() {
		fetch('/logout', { method: 'DELETE' })
		setCurrentUser(null)
	}

	// RENDER //
  	if (!currentUser?.id) {
    	// render Signup and Login if no currentUser
		return (
			<div>
				<br/><br/>
				<h1>Please log in or sign up.</h1>
				<br/><br/>
				<Login setCurrentUser={setCurrentUser} loginError={loginError} attemptLogin={attemptLogin} />
				<Signup setCurrentUser={setCurrentUser} signupError={signupError} attemptSignup={attemptSignup} />
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
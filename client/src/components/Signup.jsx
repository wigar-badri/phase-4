import { useState } from "react"
import { Form } from 'semantic-ui-react'

export default function SignUp ({attemptSignup}) {

	// NEW USER DETAILS STATE //
	const [newUserDetails, setNewUserDetails] = useState({
		'username': '',
		'password': '',
		'first_name': '',
		'last_name': '',
		'level': 1,
		'balance': 0.0
	})

	// EVENT HANDLERS //
    function handleInputChange(e) {
        setNewUserDetails( (newUserDetails) => ({...newUserDetails, [e.target.name]:e.target.value}) )
    }

	function handleSubmitNewUser(e) {
		e.preventDefault()
		attemptSignup(newUserDetails)
	}

	// RENDER //
    return (
		<Form onSubmit={handleSubmitNewUser}>

			<h2>Welcome, new user! Enter your details below.</h2>

			<Form.Input
				type="text"
				label='Username: '
				name="username"
				id="username"
				value={newUserDetails.username}
				onChange={handleInputChange}
			/>

			<Form.Input
				type="text"
				label='Password: '
				name="password"
				id="password"
				value={newUserDetails.password}
				onChange={handleInputChange}
			/>

			<Form.Input
				type="text"
				label='First Name: '
				name="first_name"
				id="first_name"
				value={newUserDetails.first_name}
				onChange={handleInputChange}
			/>

			<Form.Input
				type="text"
				label='Last Name: '
				name="last_name"
				id="last_name"
				value={newUserDetails.last_name}
				onChange={handleInputChange}
			/>

			<Form.Button type="submit" className="ui button centered in form">
				Log In
			</Form.Button>

		</Form>
    )
}

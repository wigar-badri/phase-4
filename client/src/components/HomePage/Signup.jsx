import { useState } from "react"

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
		<div>
			<h2>Welcome, new user! Enter your details below.</h2>
			<form onSubmit={handleSubmitNewUser}>

				<label for='username'>Username: </label>
				<input
					type="text"
					id="username"
					name="username"
					placeholder='username'
					value={newUserDetails.username}
					onChange={handleInputChange}
				/>

				<label for='password'>Username: </label>
				<input
					type="text"
					id="password"
					name="password"
					placeholder='password'
					value={newUserDetails.password}
					onChange={handleInputChange}
				/>

				<label for='password'>Username: </label>
				<input
					type="text"
					id="first_name"
					name="first_name"
					placeholder='first name'
					value={newUserDetails.first_name}
					onChange={handleInputChange}
				/><br/>

				<label for='password'>Username: </label>
				<input
					type="text"
					id="last_name"
					name="last_name"
					placeholder='last name'
					value={newUserDetails.last_name}
					onChange={handleInputChange}
				/><br/>

				<button type="submit" value="Sign Up" />

			</form>
		</div>
    )
}

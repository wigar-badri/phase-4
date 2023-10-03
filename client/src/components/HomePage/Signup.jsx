import { useState } from "react"

export default function SignUp ({signupError, attemptSignup}) {

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
			<br/>

			<h2>Welcome, new user! Enter your details below.</h2>
			<br/>

			<form onSubmit={handleSubmitNewUser}>

				<label htmlFor='username'>Username: </label>
				<input
					type="text"
					id="username"
					name="username"
					placeholder='username'
					value={newUserDetails.username}
					onChange={handleInputChange}
					required
				/>
				<br/>

				<label htmlFor='password'>Password: </label>
				<input
					type="text"
					id="password"
					name="password"
					placeholder='password'
					value={newUserDetails.password}
					onChange={handleInputChange}
					required
				/>
				<br/>

				<label htmlFor='first_name'>First Name: </label>
				<input
					type="text"
					id="first_name"
					name="first_name"
					placeholder='first name'
					value={newUserDetails.first_name}
					onChange={handleInputChange}
					required
				/>
				<br/>

				<label htmlFor='last_name'>Last Name: </label>
				<input
					type="text"
					id="last_name"
					name="last_name"
					placeholder='last name'
					value={newUserDetails.last_name}
					onChange={handleInputChange}
					required
				/>
				<br/>

				<button type="submit" value='Sign Up' >Sign Up</button>
				<br/>
			</form>
			<p>{signupError.error}</p>
		</div>
    )
}

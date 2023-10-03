import { useState } from 'react'

export default function Login({loginError, attemptLogin}) {

  // STATE //

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // NAVIGATE //

  // const navigate = useNavigate()

  // EVENTS //

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  function handleSubmit(e) {
    e.preventDefault()
    attemptLogin({username, password})
  }

  // RENDER //

  return (
    <div>
      <br/>

      <h2>Welcome, returning user! Please enter your login information below.</h2>
      <br/>

      <form className='user-form' onSubmit={handleSubmit}>

        <label htmlFor='username'>Username: </label>
        <input
          type="text"
          id='username'
          name='username'
          placeholder='username'
          value={username}
          onChange={handleChangeUsername}
          required
        />
        <br/>

        <label htmlFor='password'>Password: </label>
        <input
          type="text"
          id='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={handleChangePassword}
          required
        />
        <br/>

        <button type="submit" value='Log In' >Log In</button>
        <br/>

      </form>
      <p>{loginError.error}</p>
    </div>
  )

}
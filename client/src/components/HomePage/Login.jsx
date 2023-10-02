import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Login() {

  const {attemptLogin} = useLoaderData()

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
    <form className='user-form' onSubmit={handleSubmit}>

      <h2>Welcome, returning user! Please enter your login information below.</h2>

      <label for='username'>Username: </label>
      <input
        type="text"
        id='username'
        name='username'
        placeholder='username'
        value={username}
        onChange={handleChangeUsername}
      />

      <label for='password'>Password: </label>
      <input
        type="text"
        id='password'
        name='password'
        placeholder='password'
        value={password}
        onChange={handleChangePassword}
      />

      <button type="submit" value='Log In' />

    </form>
  )

}
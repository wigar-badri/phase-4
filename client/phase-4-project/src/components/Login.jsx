import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

export default function Login({attemptLogin}) {

  // STATE //

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // NAVIGATE //

  const navigate = useNavigate()

  // EVENTS //

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  function handleSubmit(e) {
    e.preventDefault()
    attemptLogin({username, password})
  }

  // RENDER //

  return (
    <Form className='user-form' onSubmit={handleSubmit}>

      <h2>Welcome, returning user! Please enter your login information below.</h2>

      <Form.Input
        type="text"
        label='Username: '
        onChange={handleChangeUsername}
        value={username}
        placeholder='username'
      />

      <Form.Input
        type="text"
        label="Password: "
        onChange={handleChangePassword}
        value={password}
        placeholder='password'
      />

      <Form.Button type="submit" className="ui button centered in form">
        Log In
      </Form.Button>

    </Form>
  )

}
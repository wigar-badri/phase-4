import { Link } from 'react-router-dom'


export default function Home() {

	return (
		<>
			<br/><br/>
			<h1>HOME PAGE</h1>
			<br/><br/>
			<Link to="/">Log In</Link>
			<br/><br/>
			<Link to="/">Sign Up</Link>
			<br/><br/>
		</>
	)
}
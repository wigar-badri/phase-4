import { Link } from 'react-router-dom'

export default function NavBar({ currentUser }) {
    return(
        <div>
            <Link to="/">
                Home
            </Link>
			<Link to={currentUser ? `dashboard` : "/login"}>
                Log In
            </Link>
			<Link to={currentUser ? `dashboard` : "/signup"}>
                Sign Up
            </Link>
			<Link to={currentUser ? `dashboard` : "/"}>
                Dashboard
            </Link>
            <Link to="/users">
                Users
            </Link>
            <Link to="/stocks">
                Stocks
            </Link>
            <Link to="/posts">
                Posts
            </Link>
        </div>
    )
}
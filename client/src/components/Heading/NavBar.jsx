import { Link } from 'react-router-dom'

export default function NavBar({ currentUser }) {
    return(
        <div>
            <Link to="/">
                Home
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
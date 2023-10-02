import { Menu } from "semantic-ui-react"

export default function NavBar({ currentUser }) {
    return(
        <Menu inverted widths={6}>
            <Menu.Item href="/">
                Home
            </Menu.Item>
			<Menu.Item href={currentUser ? `dashboard` : "/login"}>
                Log In
            </Menu.Item>
			<Menu.Item href={currentUser ? `dashboard` : "/signup"}>
                Sign Up
            </Menu.Item>
			<Menu.Item href={currentUser ? `dashboard` : "/"}>
                Dashboard
            </Menu.Item>
            <Menu.Item href="/users">
                Users
            </Menu.Item>
            <Menu.Item href="/stocks">
                Stocks
            </Menu.Item>
            <Menu.Item href="/posts">
                Posts
            </Menu.Item>
        </Menu>
    )
}
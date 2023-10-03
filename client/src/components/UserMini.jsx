import { Link } from "react-router-dom"

export default function UserMini({user}) {

	return (
		<div className = "mini">
			<Link as='h3' to={`/users/${user.id}`}>
				{user.username}
			</Link>
			<p>{`${user.trades.length}`} Trades</p>
			<p>{`${user.saved_posts.length}`} Posts Saved</p>
		</div>
	)
}
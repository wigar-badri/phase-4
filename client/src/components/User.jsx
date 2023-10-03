export default function User({user}) {

	return (
		<div>
			<h3>{user.username}</h3>
			<p>{`${user.trades.length}`} Trades</p>
			<p>{`${user.saved_posts.length}`} Posts Saved</p>
		</div>
	)
}
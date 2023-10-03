import React from "react"
import { useLoaderData, /*useOutletContext*/ } from "react-router-dom"

export default function User() {

	const user = useLoaderData()

	return (
		<div>
			<h3>{user.username}</h3>
			<h2>{user.first_name} {user.last_name}</h2>
			<p>{`${user.trades.length}`} Trades</p>
			<p>{`${user.saved_posts.length}`} Posts Saved</p>
		</div>
	)
}
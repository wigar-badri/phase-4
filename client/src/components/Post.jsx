import React from "react"
import { useLoaderData} from "react-router-dom"

export default function Post() {

	const post = useLoaderData()

	return (
		<div>
			<h1>{post.title}</h1>
			<h3>{post.author}</h3>
			<h3>{post.year_publised}</h3>
			<p>{post.content}</p>
		</div>
	)
}
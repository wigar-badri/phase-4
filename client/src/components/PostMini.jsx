import { Link } from "react-router-dom"


export default function PostMini({post}) {

	return (
		<div className = "mini">
			<Link as='h3' to={`/posts/${post.id}`}>{post.title}</Link>
			<p>{post.author}</p>
			<p>{post.year_published}</p>
		</div>
	)
}
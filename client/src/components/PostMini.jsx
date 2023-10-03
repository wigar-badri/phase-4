import { Link } from 'react-router-dom'

export default function PostMini({post}) {

	return (
		<div className = "miniPost">
			<Link to = {`/posts/${post.id}`}>
				<h3>{post.title}</h3>
			</Link>
			<p>{post.author}</p>
			<p>{post.year_published}</p>
		</div>
	)
}
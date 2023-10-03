

export default function PostMini({post}) {

	return (
		<div className = "miniPost">
			<h3>{post.title}</h3>
			<p>{post.author}</p>
			<p>{post.year_published}</p>
		</div>
	)
}
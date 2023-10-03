import React from "react"
import PostMini from "./PostMini"
import { useLoaderData } from "react-router-dom"

export default function PostList() {

	const [...postList] = useLoaderData()

	const mappedPostList = postList.map( post => <PostMini key={post.id} post={post} /> )

	return (
		<>
			{mappedPostList}
		</>
	)
}
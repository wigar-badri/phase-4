

export async function checkSession() {
	const response = await fetch('/check_session')

	if (response.ok) {
		const response = fetch('/check_session')
		const currentUserData = await response.json()
		return response.ok
			? currentUserData
			: alert('No current user')
	}
}

export async function getUsersLoader() {
    const response = await fetch(`/users`)
    const users = await response.json()
    return response.ok
        ? users
        : new Response("", { status: response.status, statusText: "Could not find the users" })
}

export async function getUsersByIdLoader({params}) {
    const response = await fetch(`/users/${params.id}`)
    const userObj = await response.json()
    return response.ok
        ? userObj
        : new Response("", { status: response.status, statusText: "Could not find that user" })
}

export async function getStocksLoader() {
    const response = await fetch(`/stocks`)
    const stocks = await response.json()
    return response.ok
        ? stocks
        : new Response("", { status: response.status, statusText: "Could not find the stocks" })
}

export async function getStocksByIdLoader({params}) {
    const response = await fetch(`/stocks/${params.id}`)
    const stockObj = await response.json()
    return response.ok
        ? stockObj
        : new Response("", { status: response.status, statusText: "Could not find that stock" })
}

export async function getPostsLoader() {
    const response = await fetch(`/posts`)
    const posts = await response.json()
    return response.ok
        ? posts
        : new Response("", { status: response.status, statusText: "Could not find the posts" })
}

export async function getPostsByIdLoader({params}) {
    const response = await fetch(`/posts/${params.id}`)
    const postObj = await response.json()
    return response.ok
        ? postObj
        : new Response("", { status: response.status, statusText: "Could not find that post" })
}
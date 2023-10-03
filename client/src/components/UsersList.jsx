import React from "react"
import { useLoaderData, /*useOutletContext*/ } from "react-router-dom"

import UserMini from './UserMini'

export default function UsersList() {

	// CURRENT USER STATE //
	// const [currentUser] = useOutletContext()

	// LIST OF ALL USERS EXCLUDING CURRENT USER //
	const [...userList] = useLoaderData()
	// const filteredUserList = userList.filter( (user) => user.id !== currentUser.id )
	const mappedUserList = userList.map( user => <UserMini key={user.id} user={user} /> )

	// RENDER //
	return (
		<div>
			{mappedUserList}
		</div>
	)
}
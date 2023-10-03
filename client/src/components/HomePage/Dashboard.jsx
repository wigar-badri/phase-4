import PostMini from '../PostMini';
import StockMini from '../StockMini';

export default function Dashboard({currentUser, logout}){

	const userPostsList = currentUser.posts.map(post => <PostMini key={post.id} post={post}/>)
	const userStocksList = currentUser.stocks.map(stock => <StockMini key={stock.id} stock={stock}/>)

	return (
		<div className='user-details'>
		  <h2>Welcome {currentUser.username}!</h2>
		  <h4>{currentUser.first_name} {currentUser.last_name} | Level: {currentUser.level}</h4>
		  <p>Balance: {currentUser.balance}</p>
		  {userPostsList}
		  {userStocksList}
		  <button onClick={logout}>Logout</button>
		</div>
	  )
}
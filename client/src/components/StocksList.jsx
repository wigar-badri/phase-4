import StockMini from './StockMini';
import { useLoaderData } from "react-router-dom"

export default function StocksList() {

	const [...stockList] = useLoaderData()

	const mappedStockList = stockList.map( stock => <StockMini key={stock.id} stock={stock} /> )	

	return (
		<div>
			{mappedStockList}
		</div>	)
}
import { Link } from "react-router-dom"

export default function StockMini({stock}) {

	return (
		<div>
			<Link as='h3' to={`/stocks/${stock.id}`} className="mini">{stock.company_name}</Link>
			<p>{stock.symbol}</p>
			<p>{stock.current_value}</p>
		</div>
	)
}
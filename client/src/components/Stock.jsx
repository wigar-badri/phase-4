import { useLoaderData} from "react-router-dom"

export default function Stock() {

	const stock = useLoaderData()
	
	return (
		<div>
			<h3>{stock.company_name}</h3>
			<h3>{stock.symbol}</h3>
			<h3>{stock.current_value}</h3>
		</div>
	)
}
import { Header }  from "semantic-ui-react"

export default function Title() {
	return (
		<>
			<br/>
			<Header as='h1' textAlign="center">
				App Name Goes Here
				<Header.Subheader>
					Brief Description Here
				</Header.Subheader>
			</Header>
			<br/>
		</>
	)
}
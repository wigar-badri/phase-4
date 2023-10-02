import Title from './Title';
import NavBar from './NavBar';

export default function Heading({currentUser}) {

	return (
		<>
			<Title/>
			<NavBar currentUser={currentUser} />
			<br/><br/>
		</>
	)
}
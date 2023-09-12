import "./header.css";

const Header = ({ tittle = "tittle" }) => {
	return (
		<header>
			<h1>{tittle}</h1>
		</header>
	);
};

export default Header;

import "./header.css";
import PropTypes from "prop-types";

const Header = ({ title = "title" }) => {
	return (
		<>
			<h1 className="title">{title}</h1>    
		</>
	);
};
Header.propTypes = {
	title: PropTypes.string.isRequired,
};
export default Header;

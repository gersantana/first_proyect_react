import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import PropsType from "prop-types"

const Tags = ({ color = "danger", raza = "Raza" }) => {
	return (
		<div>
			<Badge bg={color}>{raza}</Badge>
		</div>
	);
};

Tags.propTypes = {
    color: PropsType.string.isRequired,
    raza: PropsType.string.isRequired
}

export default Tags;

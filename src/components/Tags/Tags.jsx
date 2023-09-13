import './tags.css'
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

import PropsType from "prop-types"

const Tags = ({ color = "danger", raza = "Raza", btn ="Boton" }) => {
	return (
		<div className="container_badge_button">
			<Badge className='badge' bg={color}>{raza}</Badge>
			<Button className='btn' variant="primary">{btn}</Button>
		</div>
	);
};

Tags.propTypes = {
    color: PropsType.string.isRequired,
    raza: PropsType.string.isRequired
}

export default Tags;

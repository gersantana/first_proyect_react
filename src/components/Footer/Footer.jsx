import "./footer.css";
import PropTypes from "prop-types";

const Footer = ({ textFooter = "Descrption on footer", titulo1 = "Titulo1", mailContact = "Puedes Enviarnos un E-mail", titulo2 = "Titulo2", direccion = "Nuestra Direccion es" }) => {
	return (
		<>
			<p>{textFooter}</p>
			<ul className="ul_footer_flex">
				<li className="list_footer">
					<h3>{titulo1}</h3>
					<a href="">{mailContact}</a>
				</li>
				<li className="list_footer">
					<h3>{titulo2}</h3>
					<a href="">{direccion}</a>
				</li>
			</ul>
		</>
	);
};

Footer.propTypes = {
	textFooter: PropTypes.string.isRequired,
	titulo1: PropTypes.string.isRequired,
	mailContact: PropTypes.string.isRequired,
	titulo2: PropTypes.string.isRequired,
	direccion: PropTypes.string.isRequired,
};

export default Footer;

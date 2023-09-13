import "./footer.css";
import PropTypes from "prop-types";

const Footer = ({ textFooter = "Descrption on footer", titulo1 = "Titulo1", mailContact = "", titulo2 = "Titulo2", direccion = "Nuestra Direccion es" }) => {
	return (
		<>
			<p>{textFooter}</p>
			<ul className="ul_footer_flex">
				<li className="list_footer">
					<h6>{titulo1}</h6>
					<a href={mailContact} target="blank">Preciona aqui para enviarnos un E-mail</a>
				</li>
				<li className="list_footer">
					<h6>{titulo2}</h6>
					<a href={direccion} target="blank">Morandé 707, local 105, 8340252 Santiago, Región Metropolitana</a>
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

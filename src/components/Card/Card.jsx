import "./card.css"
import PropTypes from "prop-types"
import Tags from "../Tags/Tags"

const Card = ({img ="Dog Photography", nombre="Dog Name", description="Dog Description", color, raza, btn}) => {
    return(
        <div className="card_body">
            <img src={img} alt="Img" />
            <h2>{nombre}</h2>
            <p>{description}</p>
            <Tags color={color} raza={raza} btn={btn}/>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    raza: PropTypes.string.isRequired
}

export default Card
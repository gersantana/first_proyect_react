import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<header className="container_header">
				<Header title="Adopta un Perrito" />
			</header>

			<main className="container_cards">
				<Card
					img="https://content.api.news/v3/images/bin/0d7d1d4f0c41b12d97ba3ac4c4538c8b?width=1024"
					nombre="Rocky"
					description="Hola, soy un cachorrito de Labrador que busca un nuevo hogar"
					raza="Labrador"
					btn="Adoptar"
				/>

				<Card
					img="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
					nombre="Manchas"
					description="Hola, tenngo 2 años cariñoso, jugueton y como mucho."
					color="success"
					raza="Mestizo"
					btn="Adoptar"
				/>

				<Card
					img="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&"
					nombre="Luna"
					description="Soy Luna, y busco una familia que me quiera con todo su amor."
					color="dark"
					raza="Terrier"
					btn="Adoptar"
				/>

				<Card
					img="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
					nombre="Brissa"
					description="Soy Brissa tengo 4 añitos me gusta estar al aire libre y correr."
					color="info"
					raza="Trollin Retriver"
					btn="Adoptar"
				/>
			</main>

			<footer className="footer_container">
				<Footer 
					textFooter="Somos una organizacion sin fines de lucro en la cual ayudamos a perritos rescatados a conseguir un nuevo Hogar. ❤️"
					titulo1="Contacto"
					mailContact="mailto: adoptaunperrito@example.com" titulo2="Direccion"
					direccion="https://goo.gl/maps/XkXaTgCjkntjLJts5"
				/>
			</footer>
		</>
	);
}

export default App;

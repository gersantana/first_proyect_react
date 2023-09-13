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
				<Card img="https://content.api.news/v3/images/bin/0d7d1d4f0c41b12d97ba3ac4c4538c8b?width=1024"/>
				<Card img="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
				<Card img="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&"color="dark" raza="showshow" />
				<Card img="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" color="primary" />
			</main>
			<footer className="footer_container">
				<Footer textFooter="orem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa fuga dolor consectetur error veniam praesentium quidem, qui ut voluptate? Nihil obcaecati suscipit, commodi totam nisi maiores praesentium eligendi fuga?" />
			</footer>
		</>
	);
}

export default App;

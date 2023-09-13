import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header title="Adopta un Perrito" />
			<main className="container_cards">
        <Card/>
        <Card/>
        <Card color="dark" raza="showshow"/>
        <Card color="primary"/>
      </main>
			<Footer textFooter="orem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa fuga dolor consectetur error veniam praesentium quidem, qui ut voluptate? Nihil obcaecati suscipit, commodi totam nisi maiores praesentium eligendi fuga?" />
		</>
	);
}

export default App;

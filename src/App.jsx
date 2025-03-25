import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MovieCard from "./components/movieCard/MovieCard";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import LightMode from "./components/lightMode/LightMode";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";
const App = () => {
  return (
    <>
      <NavBar logo={logo} perfil={perfil} />
      <Banner />
      <LightMode />
      <MovieCard />
      <Footer />
    </>
  );
};

export default App;

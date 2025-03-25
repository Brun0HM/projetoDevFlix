import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MovieCard from "./components/movieCard/MovieCard";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import LightMode from "./components/lightMode/LightMode";
const App = () => {


  return (
    <>
    <NavBar />
    <Banner />
    <LightMode />
    <MovieCard />
    <Footer />
    </>
  );
};

export default App;

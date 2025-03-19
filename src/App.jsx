import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Banner from "./components/banner/Banner";
import MovieCard from "./components/movieCard/MovieCard";

const App = () => {
  return (
    <div className="container py-4 px-3 mx-auto">
      <Banner />
    </div>

  );
};

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MovieCard from "./components/movieCard/MovieCard";

const App = () => {
  return (
    <div className="container py-4 px-3 mx-auto">
 <MovieCard/>
     
    </div>
  );
};

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MovieCard from "./components/movieCard/MovieCard";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?language=pt-BR";
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmYxMWFkYWM2NWRmMTgyYTE2OTkwMTFjNDBjZmQxMCIsIm5iZiI6MTc0MjQxMjUxNS41NDU5OTk4LCJzdWIiOiI2N2RiMWFlMzA4NzQ5ZWZlMzRlNzdkZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Vp784RFA4xs-7fVY5iWZdz7jnrSMHh_0ZPngKa_TNNY";

  // fetch(url, {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //     Accept: "application/json",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => setMovies(data.results))
  //   .catch((error) =>
  //     console.error("Erro ao buscar os filmes populares:", error)
  //   );
  useEffect(() => {
    searchMovie("avengers");
  }, []);

  const searchMovie = async (titulo) => {
    const url2 = `https://api.themoviedb.org/3/search/movie?language=pt-BR&query=${titulo}`;
    const response = await fetch(url2, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setMovies(data.results);
  };

  const handleSearch = (e) => {
    e.key === "Enter" && searchMovie(search);
  };
  const mostPopularMovie = movies.length > 0 ? movies[0] : null;
  //   console.log(apiUrl);
  return (
    <>
      <div className="bg-black">
        <NavBar
          logo={logo}
          KeyDown={handleSearch}
          Change={(e) => setSearch(e.target.value)}
        />
        {mostPopularMovie && <Banner movie={mostPopularMovie} />}
        <div>
          <div className="d-flex overflow-x-scroll scroller">
            {movies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;

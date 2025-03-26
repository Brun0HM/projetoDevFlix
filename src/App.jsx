import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MovieCard from "./components/movieCard/MovieCard";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";
const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?language=pt-BR";
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmYxMWFkYWM2NWRmMTgyYTE2OTkwMTFjNDBjZmQxMCIsIm5iZiI6MTc0MjQxMjUxNS41NDU5OTk4LCJzdWIiOiI2N2RiMWFlMzA4NzQ5ZWZlMzRlNzdkZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Vp784RFA4xs-7fVY5iWZdz7jnrSMHh_0ZPngKa_TNNY";
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setMovies(data.results); // Exibe os populares inicialmente
      setPopular(data.results); // Salva os populares para exibir depois
    } catch (error) {
      console.error("Erro ao buscar os filmes populares:", error);
    }
  };

const url3 =`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=27`
fetch(url3, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json"
  },
})
.then((response) => response.json())
.then((data) => setHorrorMovies(data.results))
.catch((error) =>
  console.error("Erro ao buscar os filmes de terror:", error)
);



  const url2 = `https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=28`;
  fetch(url2, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setActionMovies(data.results))
    .catch((error) =>
      console.error("Erro ao buscar os filmes de ação:", error)
    );

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
  const mostPopularMovie = popular.length > 0 ? popular[0] : null;

  return (
    <>
      <div className="bg-black">
        <NavBar
          logo={logo}
          perfil={perfil}
          KeyDown={handleSearch}
          Change={(e) => setSearch(e.target.value)}
        />
        {mostPopularMovie && <Banner movie={mostPopularMovie} />}
        <div>
          <h3 className="text-light m-3">Lista</h3>
          <div className="d-flex overflow-x-scroll scroller">
            {movies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-light m-3">Ação</h3>
          <div className="d-flex overflow-x-scroll scroller">
            {actionMovies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-light m-3">Terror</h3>
          <div className="d-flex overflow-x-scroll scroller">
            {horrorMovies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </div>

        <Footer logo={logo} />
      </div>
    </>
  );
};
export default App;

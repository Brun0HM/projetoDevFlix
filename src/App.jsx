import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MovieCard from "./components/movieCard/MovieCard";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import logo from "./assets/Logo.png";
import { useState } from "react";
const App = () => {
  const [movies, setMovies] = useState([]);

  const moviesDatabase = [
    {
        id: 1,
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        Data: "2001-12-19",
        genre: "Fantasia",
        Poster: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg"
    },
    {
        id: 2,
        title: "Matrix",
        Data: "1999-03-31",
        genre: "Ficção Científica",
        Poster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"
    },
    {
        id: 3,
        title: "A Origem",
        Data: "2010-07-16",
        genre: "Ficção Científica",
        Poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"
    },
    {
        id: 4,
        title: "Interestelar",
        Data: "2014-11-07",
        genre: "Ficção Científica",
        Poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
    },
    {
        id: 5,
        title: "Parasita",
        Data: "2019-05-30",
        genre: "Drama",
        Poster: "https://m.media-amazon.com/images/I/71c8xN1u6PL._AC_SL1500_.jpg"
    },
    {
        id: 6,
        title: "Coringa",
        Data: "2019-10-03",
        genre: "Drama",
        Poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1500_.jpg"
    },
    {
        id: 7,
        title: "O Lobo de Wall Street",
        Data: "2013-12-25",
        genre: "Biografia",
        Poster: "https://m.media-amazon.com/images/I/81xTX+48FzL._AC_SL1500_.jpg"
    },
    {
        id: 8,
        title: "Clube da Luta",
        Data: "1999-10-15",
        genre: "Drama",
        Poster: "https://m.media-amazon.com/images/I/81wFumy4GqL._AC_SL1500_.jpg"
    },
    {
        id: 9,
        title: "Pulp Fiction",
        Data: "1994-10-14",
        genre: "Crime",
        Poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1500_.jpg"
    },
    {
        id: 10,
        title: "Forrest Gump",
        Data: "1994-07-06",
        genre: "Drama",
        Poster: "https://m.media-amazon.com/images/I/61Nayq0fMGL._AC_SL1000_.jpg"
    }
];

console.log(moviesDatabase);

  return (
    <>
    <div className="d-flex overflow-x-scroll scroller bg-black">
      {moviesDatabase.map((movie) => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          Date={movie.Date}
          genre={movie.genre}
          Poster={movie.Poster}
        />
      ))}

    </div>
    </>
  );
};

export default App;

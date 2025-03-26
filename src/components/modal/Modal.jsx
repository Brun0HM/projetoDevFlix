import styles from "./Modal.module.css";
import devflix from "../../../public/favicon.svg";
import { useState, useEffect } from "react";

const Modal = (props) => {
  const [runtime, setRuntime] = useState(null); // Estado para armazenar a duração do filme
  const [gen, setGen] = useState(null);
  const [cast, setCast] = useState([]);
  const backpath = `https://image.tmdb.org/t/p/original/${props.backdrop_path}`;
  const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Substitua pela sua chave de API

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${props.id}?api_key=${apiKey}&language=pt-BR`
        );
        const data = await response.json();
        setRuntime(data.runtime);
        setGen(data.genres.map((genre) => genre.name));
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
      }
    };
    const fetchMovieCredits = async () => {
      try {
        // Requisição para o elenco do filme
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=${apiKey}&language=pt-BR`
        );
        const data = await response.json();
        setCast(data.cast.slice(0, 5).map((member) => member.name)); // Pega os 5 primeiros nomes do elenco
      } catch (error) {
        console.error("Erro ao buscar o elenco do filme:", error);
      }
    };

    fetchMovieDetails();
    fetchMovieCredits();
  }, [props.id]);

  return (
    <div className="overflow-y-auto">
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={backpath} alt={`Imagem da capa do filme ${props.title}`} />
          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>
          <div className={styles.movieType}>
            <div>
              <img src={devflix} alt="" />
              <h1>{props.title}</h1>
              <a
                className="btn btn-danger btn-sm fw-bold px-4 py-2 me-3 mb-3"
                href={`https://google.com/search?q=${encodeURIComponent(
                  props.title
                )}`}
                target="_blank"
              >
                Assistir Agora
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {props.vote_average} | Duração: {runtime + `minutos`} |{" "}
            {props.release_date}
          </div>
          <div className={styles.containerFlex}>
            {/* <p>Elenco: {props.Actors}</p> */}
            <p>Gênero: {gen && gen.join(", ")}</p>
            <p>Elenco: {cast && cast.join(", ")}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {props.overview}</p>
        </div>
      </div>
    </div>
    </div>  
  );
};

export default Modal;

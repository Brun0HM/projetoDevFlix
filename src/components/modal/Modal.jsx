import styles from "./Modal.module.css";
import devflix from "../../../public/favicon.svg";

const Modal = (props) => {
  const backpath = `https://image.tmdb.org/t/p/original/${props.backdrop_path}`
  return (
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
                href={`https://google.com/search?q=${encodeURIComponent(
                  props.title
                )}`}
                target="_blank"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {props.imdbRating} | Duração: {props.Runtime} |{" "}
            {props.Released}
          </div>
          <div className={styles.containerFlex}>
            {/* <p>Elenco: {props.Actors}</p> */}
            <p>Gênero: {props.genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {props.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

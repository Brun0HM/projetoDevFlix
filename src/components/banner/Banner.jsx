import styles from "./Banner.module.css";

const Banner = ({ movie }) => {
  const backgroundImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  const title = movie.title || movie.original_title;
  const description = movie.overview;

  return (
    <div
      className={`${styles.bannerdiv} d-flex flex-column justify-content-center align-items-start text-start`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex flex-column align-items-start">
        <h1 className="text-light fw-bold mb-3 display-4">{title}</h1>
        <p className={`${styles.maximo} text-light mb-4`}>
          {description}
        </p>
        <button className="btn btn-danger btn-sm fw-bold px-4 py-2">
          Assistir Agora
        </button>
      </div>
      <a
        className="btn btn-danger btn-sm fw-bold px-4 py-2 me-3 mb-3"
        href={`https://google.com/search?q=${encodeURIComponent(movie.title)}`}
        target="_blank"
      >
        Assistir Agora
      </a>

      <button className="btn btn-light btn-sm fw-bold px-4 py-2 text-danger me-3 mb-3">
        + Lista
      </button>
    </div>
  );
};

export default Banner;

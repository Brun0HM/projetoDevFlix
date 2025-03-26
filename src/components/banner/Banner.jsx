import styles from "./Banner.module.css";

const Banner = ({ movie }) => {
  const backgroundImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  const title = movie.title || movie.original_title;
  const description = movie.overview;

  return (
    <div
      className={styles.bannerdiv}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-light">{title}</h1>
        <p className="text-light">{description}</p>
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

import styles from "./Banner.module.css";

const Banner = ({movie}) => {
  const backgroundImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  const title = movie.title || movie.original_title;
  const description = movie.overview;

  return (
    <div
      className={styles.bannerdiv}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className={}>{title}</h1>
        <p className={styles.bannerDescription}>{description}</p>
      </div>
      <button className="btn btn-danger btn-sm fw-bold px-4 py-2 me-3 mb-3">
        Assistir Agora
      </button>
      <button className="btn btn-light btn-sm fw-bold px-4 py-2 text-danger me-3 mb-3">
        + Lista
      </button>
    </div>
  );
};

export default Banner;
